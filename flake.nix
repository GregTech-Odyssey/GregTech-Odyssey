{
  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };
  outputs = { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        pack = builtins.fromTOML (builtins.readFile ./pack.toml);
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

          server = pkgs.stdenvNoCC.mkDerivation {
            inherit (pack) version;
            pname = "gregtech-odyssey-server";
            src = ./.;
            nativeBuildInputs = with pkgs; [ packwiz ];

            dontFixup = true;
            phases = [ "unpackPhase" "buildPhase" "installPhase" ];

            buildPhase = ''
              echo '0ebcf198609f925e0018842a79473ef74fda78534f86d82f2c0fdb26449c1fa4  .github/server/forge-1.20.1-47.4.20-installer.jar' | sha256sum -c -
              echo 'c9f646908d340d84773948a9a7d98bc1dae250d35e1016dc6e2b8459760b5598  .github/server/packwiz-installer-v0.5.14.jar' | sha256sum -c -

              mkdir -p server-pack/mods
              cp pack.toml server-pack/pack.toml
              printf 'hash-format = "sha256"\n' > server-pack/index.toml

              while IFS= read -r -d "" metafile; do
                if ! grep -Eq '^[[:space:]]*side[[:space:]]*=[[:space:]]*"client"[[:space:]]*$' "$metafile"; then
                  cp --parents "$metafile" server-pack
                fi
              done < <(find mods -type f -name '*.pw.toml' -print0)

              (cd server-pack && packwiz refresh)
            '';

            installPhase = ''
              mkdir -p "$out/mods" "$out/gto-installer/tools" \
                "$out/gto-installer/licenses" "$out/gto-installer/pack"

              cp -r config defaultconfigs "$out"
              rm -rf "$out/config/ftbquests/quests"
              cp -r .github/localization/quests "$out/config/ftbquests/quests"

              cp mods/gtocore-*.jar mods/gtonativelib-*.jar "$out/mods"
              cp LICENSE.txt .github/server/README-SERVER.md \
                .github/server/install-mods.bat "$out"
              cp .github/server/install-mods.sh "$out/install-mods.sh"
              chmod +x "$out/install-mods.sh"

              cp .github/server/forge-1.20.1-47.4.20-installer.jar \
                .github/server/packwiz-installer-v0.5.14.jar \
                "$out/gto-installer/tools"
              cp .github/server/licenses/* "$out/gto-installer/licenses"
              cp -r server-pack/. "$out/gto-installer/pack"
            '';
          };
        };
      });
}
