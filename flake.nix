{
  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    packwiz2nix = {
      url = "github:snylonue/packwiz2nix";
      inputs = {
        nixpkgs.follows = "nixpkgs";
        flake-utils.follows = "flake-utils";
      };
    };
  };
  outputs = { self, nixpkgs, flake-utils, packwiz2nix, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        pack = builtins.fromTOML (builtins.readFile ./pack.toml);
        inherit (packwiz2nix.packages.${system}) buildPackwizModpack;
        patchFilesCommon = ''
          rm -rf config/ftbquests/quests
          cp -r .github/localization/quests config/ftbquests/quests
        '';
      in {
        devShells.default =
          pkgs.mkShell { packages = with pkgs; [ packwiz yq ]; };

        packages = {
          curseforge = pkgs.stdenvNoCC.mkDerivation {
            inherit (pack) version;
            name = "GregTech-Odyssey";
            src = ./.;
            buildInputs = with pkgs; [ packwiz ];
            phases = [ "unpackPhase" "buildPhase" "installPhase" ];
            buildPhase = ''
              ${patchFilesCommon}
              packwiz cf export
            '';
            installPhase = ''
              mkdir $out
              mv "${pack.name}-${pack.version}.zip" $out
            '';
          };

          forge = let
            minecraftVersion = "1.20.1";
            forgeVersion = pack.versions.forge;
            version = "${minecraftVersion}-${forgeVersion}";
          in pkgs.runCommandNoCC "forge-${version}" {
            inherit version;
            nativeBuildInputs = with pkgs; [ cacert curl jre_headless ];

            outputHashMode = "recursive";
            outputHash = "sha256-9pcTx9BIqBhDidts94V8SPmlAvTfq1DR0lxRWCEWB4Y=";
          } ''
            mkdir -p "$out"

            curl https://maven.minecraftforge.net/net/minecraftforge/forge/${version}/forge-${version}-installer.jar -o ./installer.jar
            java -jar ./installer.jar --installServer "$out"
          '';

          modpack = buildPackwizModpack {
            src = ./.;
            name = "gregtech-odyssey";
            # packwiz may record file metadata that not gets managed by git
            allowMissingFile = true;

            buildPhase = ''
              ${patchFilesCommon}
            '';
          };

          modpack-client = buildPackwizModpack {
            src = ./.;
            name = "gregtech-odyssey";
            # packwiz may record file metadata that not gets managed by git
            allowMissingFile = true;
            side = "client";

            buildPhase = ''
              ${patchFilesCommon}
            '';
          };

          server = let inherit (self.packages.${system}) forge modpack;
          in pkgs.stdenvNoCC.mkDerivation {
            inherit (pack) version;
            pname = "gregtech-odyssey-server";

            dontUnpack = true;
            dontConfigure = true;
            dontFixup = true;

            installPhase = ''
              mkdir -p $out

              ln -s ${forge}/* $out
              cp -r ${modpack}/* $out

              unlink $out/run.sh
              unlink $out/run.bat
              cp ${forge}/run.sh ${forge}/run.bat $out
              chmod +w $out/run.sh $out/run.bat
              sed -i 's/\(unix_args.txt\) \("\$@"\)/\1 nogui \2/' $out/run.sh
              sed -i 's/\(win_args.txt\) \(%\*\)/\1 nogui \2/' $out/run.bat
            '';
          };

          server-packwiz = let inherit (pack);
          in pkgs.stdenvNoCC.mkDerivation {
            inherit (pack) version;
            pname = "gregtech-odyssey-server";
            src = ./.;

            dontUnpack = true;
            dontConfigure = true;
            dontFixup = true;

            installPhase = ''
              mkdir -p $out

              cp -r ${./config} $out/config 2>/dev/null || true
              cp -r ${./defaultconfigs} $out/defaultconfigs 2>/dev/null || true

              mkdir -p $out/mods
              cp ${./pack.toml} $out/pack.toml
              cp ${./index.toml} $out/index.toml

              # Local core JARs are not on CurseForge and must ship in the pack.
              # Glob by prefix so version bumps (e.g. 0.5.6-beta -> 0.5.7) do not break the flake.
              if ! cp --no-preserve=mode ${./mods}/gtocore-forge-*.jar $out/mods/; then
                echo "error: expected at least one mods/gtocore-forge-*.jar" >&2
                exit 1
              fi
              if ! cp --no-preserve=mode ${./mods}/gtonativelib-*.jar $out/mods/; then
                echo "error: expected at least one mods/gtonativelib-*.jar" >&2
                exit 1
              fi

              for f in ${./mods}/*.pw.toml; do
                if ! grep -q 'side = "client"' "$f" 2>/dev/null; then
                  cp --no-preserve=mode "$f" $out/mods/ 2>/dev/null || true
                fi
              done

              cp ${./start-server.sh} $out/start-server.sh
              cp ${./start-server.bat} $out/start-server.bat
              cp ${./start-server.ps1} $out/start-server.ps1
              cp ${./user_jvm_args.txt} $out/user_jvm_args.txt
              cp ${./README-server.md} $out/README.md
              chmod +x $out/start-server.sh
            '';
          };
        };
      });
}
