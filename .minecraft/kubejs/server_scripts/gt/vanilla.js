ServerEvents.recipes(event => {
    event.replaceInput({ id: "gtceu:shaped/steam_alloy_smelter_bronze" }, "minecraft:furnace", "enderio:primitive_alloy_smelter")

    event.shapeless(Registries.getItemStack("gtceu:small_flint_dust", 3), "gtceu:flint_dust")
    event.shapeless(Registries.getItemStack("gtceu:tiny_flint_dust", 2), "gtceu:small_flint_dust")
    event.shapeless("gtocore:cfg_copy", "minecraft:writable_book")
    event.shapeless("gtocore:suprachronal_assembly_line_module", "gtocore:suprachronal_assembly_line")
    event.shapeless("gtocore:suprachronal_assembly_line", "gtocore:suprachronal_assembly_line_module")
    event.shapeless("gtceu:spacetime_small_fluid_pipe", ["gtceu:spacetime_tiny_fluid_pipe", "gtceu:spacetime_tiny_fluid_pipe"])
    event.shapeless("gtceu:spacetime_normal_fluid_pipe", ["gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe"])
    event.shapeless("gtceu:spacetime_quadruple_fluid_pipe", ["gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe"])
    event.shapeless("gtceu:spacetime_nonuple_fluid_pipe", ["gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe", "gtceu:spacetime_small_fluid_pipe"])
    event.shapeless("gtceu:spacetime_large_fluid_pipe", ["gtceu:spacetime_normal_fluid_pipe", "gtceu:spacetime_normal_fluid_pipe"])
    event.shapeless("gtceu:spacetime_huge_fluid_pipe", ["gtceu:spacetime_large_fluid_pipe", "gtceu:spacetime_large_fluid_pipe"])

    event.smithing("gtocore:create_hpca_component", "gtocore:command_block_core", "gtocore:super_computation_component", "gtocore:suprachronal_mainframe_complex")
    event.smithing("gtocore:create_computation", "gtocore:command_block_core", "gtceu:high_performance_computation_array", "gtocore:suprachronal_mainframe_complex")
    event.smithing("kubejs:space_fermium_helmet", "ad_astra:netherite_space_helmet", "kubejs:fermium_helmet", "ad_astra:oxygen_distributor")
    event.smithing("kubejs:space_fermium_chestplate", "ad_astra:netherite_space_suit", "kubejs:fermium_chestplate", "ad_astra:oxygen_distributor")
    event.smithing("kubejs:space_fermium_leggings", "ad_astra:netherite_space_pants", "kubejs:fermium_leggings", "ad_astra:oxygen_distributor")
    event.smithing("kubejs:space_fermium_boots", "ad_astra:netherite_space_boots", "kubejs:fermium_boots", "ad_astra:oxygen_distributor")

    const machine_materials = [
        ["uhv", "neutronium", "europium", "abyssalalloy", "uev", "1966080", "uv", "128", "gtocore:smd_diode_bioware"],
        ["uev", "quantanium", "mithril", "titansteel", "uiv", "7864320", "uhv", "256", "gtocore:smd_diode_optical"],
        ["uiv", "adamantium", "neutronium", "adamantine", "uxv", "31457280", "uev", "512", "gtocore:smd_diode_exotic"],
        ["uxv", "vibranium", "taranium", "naquadriatictaranium", "opv", "125829120", "uiv", "1024", "gtocore:smd_diode_cosmic"],
        ["opv", "draconium", "crystal_matrix", "starmetal", "max", "503316480", "uxv", "2048", "gtocore:smd_diode_supracausal"]
    ]
    machine_materials.forEach((machine_material) => {
        event.shaped("gtceu:" + machine_material[0] + "_circuit_assembler", [
            "ECF",
            "DAD",
            "BCB"
        ], {
            A: "gtceu:" + machine_material[0] + "_machine_hull",
            B: "gtceu:" + machine_material[2] + "_single_cable",
            C: "#gtceu:circuits/" + machine_material[4],
            D: "gtceu:" + machine_material[0] + "_conveyor_module",
            E: "gtceu:" + machine_material[0] + "_robot_arm",
            F: "gtceu:" + machine_material[0] + "_emitter"
        })

        event.shaped("gtceu:" + machine_material[0] + "_scanner", [
            "CEC",
            "BAB",
            "CDC"
        ], {
            A: "gtceu:" + machine_material[0] + "_machine_hull",
            B: "gtceu:" + machine_material[2] + "_single_cable",
            D: "gtceu:" + machine_material[0] + "_sensor",
            C: "#gtceu:circuits/" + machine_material[0],
            E: "gtceu:" + machine_material[0] + "_emitter"
        })
    })

    event.shaped(Item.of("gtceu:flint_axe", "{DisallowContainerItem:0b,GT.Behaviours:{DisableShields:1b},GT.Tool:{AttackDamage:6.0f,AttackSpeed:-3.2f,Damage:0,HarvestLevel:2,MaxDamage:16,ToolSpeed:3.5f},HideFlags:2}"), [
        "AA ",
        "BC ",
        "   "
    ], {
        A: "minecraft:flint",
        B: "gtocore:plant_fiber",
        C: "minecraft:stick"
    })

    event.shaped("gtocore:warped_ender_pearl", [
        "ABA",
        "BDB",
        "ABA"
    ], {
        A: "minecraft:bone_meal",
        B: "minecraft:blaze_powder",
        D: "minecraft:ender_pearl"
    })

    event.shaped("gtocore:command_wand", [
        "  A",
        " B ",
        "B  "
    ], {
        A: "gtocore:command_block_core",
        B: "gtceu:eternity_rod"
    })

    event.shaped("avaritia:extreme_crafting_table", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:exquisite_lapis_gem",
        B: "avaritia:crystal_matrix",
        C: "avaritia:double_compressed_crafting_table"
    })


    event.shaped("gtmthings:creative_laser_hatch", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "minecraft:chain_command_block",
        B: "gtocore:chaotic_energy_core",
        C: "gtmthings:max_4194304a_wireless_laser_target_hatch"
    })

    event.shaped("gtocore:large_steam_input_hatch", [
        "ACA",
        "BDB",
        "ACA"
    ], {
        A: "gtocore:precision_steam_mechanism",
        B: "gtceu:titanium_tiny_fluid_pipe",
        C: "enderio:vibrant_crystal",
        D: "gtceu:steam_input_hatch"
    })

    event.shaped("gtocore:reactor_core", [
        "ACA",
        "CDC",
        "ACA"
    ], {
        A: "ad_astra:steel_plate",
        C: "gtceu:gold_plate",
        D: "enderio:pulsating_alloy_block"
    })

    event.shaped("minecraft:heart_of_the_sea", [
        "ACA",
        "CDC",
        "ACA"
    ], {
        A: "gtceu:quantum_star",
        C: "gtocore:glacio_spirit",
        D: "gtocore:pellet_antimatter"
    })

    event.shaped("gtocore:large_rock_crusher", [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: "gtceu:iv_electric_piston",
        B: "#gtceu:circuits/iv",
        C: "gtceu:platinum_double_cable",
        D: "gtceu:iv_rock_crusher"
    })

    event.shaped("gtocore:incubator", [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: "gtceu:plascrete",
        B: "gtceu:hv_field_generator",
        C: "gtceu:filter_casing",
        D: "gtocore:greenhouse"
    })

    event.shaped("gtocore:block_conversion_room", [
        "ABA",
        "BDB",
        "ABA"
    ], {
        A: "gtceu:quantum_eye",
        B: "gtceu:lv_field_generator",
        D: "enderio:vibrant_alloy_block"
    })

    event.shaped("gtocore:lava_furnace", [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: "gtceu:double_copper_plate",
        B: "gtceu:double_wrought_iron_plate",
        C: "gtceu:tin_hex_cable",
        D: "gtceu:steam_oven"
    })

    event.shaped("gtocore:mega_alloy_blast_smelter", [
        "AFA",
        "CDC",
        "EBE"
    ], {
        A: "gtceu:naquadah_alloy_spring",
        B: "gtceu:enriched_naquadah_trinium_europium_duranide_hex_wire",
        C: "gtceu:zpm_field_generator",
        D: "gtceu:alloy_blast_smelter",
        E: "gtceu:dense_darmstadtium_plate",
        F: "#gtceu:circuits/zpm"
    })

    event.shaped("gtceu:mv_solar_panel", [
        "ABA",
        "CDC",
        "E E"
    ], {
        A: "gtceu:neutronium_wafer",
        B: "gtceu:laminated_glass",
        C: "#gtceu:circuits/uv",
        D: "gtceu:mithril_quadruple_wire",
        E: "gtceu:double_indium_gallium_phosphide_plate"
    })

    event.shaped("gtceu:hv_solar_panel", [
        "ABA",
        "CDC",
        "E E"
    ], {
        A: "gtocore:rutherfordium_neutronium_wafer",
        B: "gtceu:laminated_glass",
        C: "#gtceu:circuits/uev",
        D: "gtceu:mithril_hex_wire",
        E: "gtceu:double_germanium_tungsten_nitride_plate"
    })

    event.shaped("gtceu:ev_solar_panel", [
        "ABA",
        "CDC",
        "E E"
    ], {
        A: "gtocore:taranium_wafer",
        B: "gtceu:laminated_glass",
        C: "#gtceu:circuits/uxv",
        D: "gtceu:taranium_quadruple_wire",
        E: "gtceu:double_uruium_plate"
    })

    event.shaped("gtceu:iv_solar_panel", [
        "ABA",
        "CDC",
        "E E"
    ], {
        A: "gtocore:pm_wafer",
        B: "gtceu:fusion_glass",
        C: "#gtceu:circuits/max",
        D: "gtceu:taranium_hex_wire",
        E: "gtceu:double_oganesson_plate"
    })

    event.shaped("gtocore:max_neutron_compressor", [
        "ECE",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:max_machine_hull",
        B: "gtceu:cosmic_neutronium_single_cable",
        C: "#gtceu:circuits/max",
        D: "gtocore:max_electric_piston",
        E: "gtocore:max_electric_pump"
    })

    event.shaped("gtocore:sterile_cleaning_maintenance_hatch", [
        "DED",
        "CAC",
        "DED"
    ], {
        A: "gtceu:zpm_machine_hull",
        C: "gtceu:zpm_field_generator",
        D: "gtceu:sterilizing_filter_casing",
        E: "gtceu:cleaning_maintenance_hatch"
    })

    event.shaped("gtceu:cleaning_maintenance_hatch", [
        "DED",
        "CAC",
        "DED"
    ], {
        A: "gtceu:hv_machine_hull",
        C: "gtceu:hv_field_generator",
        D: "gtceu:filter_casing",
        E: "gtceu:auto_maintenance_hatch"
    })

    event.shaped("gtocore:law_cleaning_maintenance_hatch", [
        "DED",
        "CAC",
        "DED"
    ], {
        A: "gtceu:uev_machine_hull",
        C: "gtceu:uev_field_generator",
        D: "gtocore:law_filter_casing",
        E: "gtocore:sterile_cleaning_maintenance_hatch"
    })

    event.shaped("gtocore:cleaning_configuration_maintenance_hatch", [
        "DCD",
        "CAC",
        "DCD"
    ], {
        A: "gtocore:auto_configuration_maintenance_hatch",
        C: "#gtceu:circuits/luv",
        D: "gtceu:cleaning_maintenance_hatch"
    })

    event.shaped("gtocore:sterile_configuration_cleaning_maintenance_hatch", [
        "DCD",
        "BAB",
        "DCD"
    ], {
        A: "gtceu:uhv_machine_hull",
        B: "gtceu:uhv_field_generator",
        C: "gtocore:cleaning_configuration_maintenance_hatch",
        D: "gtocore:sterile_cleaning_maintenance_hatch"
    })

    event.shaped("gtocore:law_configuration_cleaning_maintenance_hatch", [
        "DCD",
        "BAB",
        "DCD"
    ], {
        A: "gtceu:uxv_machine_hull",
        B: "gtceu:uxv_field_generator",
        C: "gtocore:sterile_configuration_cleaning_maintenance_hatch",
        D: "gtocore:law_cleaning_maintenance_hatch"
    })

    event.shaped("gtocore:dragon_egg_copier", [
        "DED",
        "CAC",
        "DED"
    ], {
        A: "minecraft:dragon_egg",
        C: "gtceu:uxv_robot_arm",
        D: "gtocore:dragon_strength_tritanium_casing",
        E: "gtceu:uxv_field_generator"
    })

    event.shaped("gtocore:blaze_blast_furnace", [
        "DCD",
        "CAC",
        "DCD"
    ], {
        A: "gtceu:electric_blast_furnace",
        C: "gtceu:iv_field_generator",
        D: "gtocore:blaze_blast_furnace_casing"
    })

    event.shaped("gtocore:large_cracker", [
        "DCD",
        "BAB",
        "DCD"
    ], {
        A: "gtceu:cracker",
        B: "gtceu:naquadah_spring",
        C: "#gtceu:circuits/uv",
        D: "gtceu:luv_field_generator"
    })

    event.shaped("gtocore:large_greenhouse", [
        "DCD",
        "BAB",
        "DCD"
    ], {
        A: "gtocore:greenhouse",
        B: "gtceu:ev_sensor",
        C: "#gtceu:circuits/luv",
        D: "gtceu:ev_field_generator"
    })

    event.shaped("gtocore:law_filter_casing", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:mithril_frame",
        B: "gtceu:uev_emitter",
        C: "gtceu:sterilizing_filter_casing",
        D: "gtceu:uev_muffler_hatch"
    })

    event.shaped("gtocore:cold_ice_freezer", [
        "BCB",
        "CAC",
        "BCB"
    ], {
        A: "gtceu:vacuum_freezer",
        B: "gtocore:cold_ice_casing",
        C: "gtceu:iv_emitter"
    })

    event.shaped("gtocore:gravitation_shockburst", [
        "BCB",
        "CAC",
        "BCB"
    ], {
        A: "gtocore:create_ultimate_battery",
        B: "gtocore:create_casing",
        C: "gtocore:suprachronal_mainframe_complex"
    })

    event.shaped("gtceu:creative_data_access_hatch", [
        "BCB",
        "CAC",
        "BCB"
    ], {
        A: "gtceu:advanced_data_access_hatch",
        B: "gtceu:double_chaos_plate",
        C: "minecraft:repeating_command_block"
    })

    event.shaped("gtocore:multi_functional_casing", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:solid_machine_casing",
        B: "gtceu:double_aluminium_plate",
        C: "gtceu:mv_robot_arm",
        D: "gtceu:mv_electric_piston"
    })

    event.shaped("gtocore:steam_piston_hammer", [
        "BCB",
        "DAD",
        "BEB"
    ], {
        A: "gtceu:lp_steam_forge_hammer",
        B: "gtceu:bronze_plate",
        C: "gtceu:wrought_iron_ring",
        D: "gtceu:iron_spring",
        E: "gtceu:double_wrought_iron_plate"
    })

    event.shaped("gtocore:steam_pressor", [
        "BCB",
        "DAD",
        "BEB"
    ], {
        A: "gtceu:lp_steam_compressor",
        B: "gtceu:bronze_plate",
        C: "gtceu:small_bronze_gear",
        D: "gtceu:small_iron_spring",
        E: "gtceu:wrought_iron_gear"
    })

    event.shaped("gtocore:steam_foundry", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:lp_steam_alloy_smelter",
        B: "gtceu:bronze_plate",
        C: "gtceu:potin_plate",
        D: "gtceu:long_tin_alloy_rod"
    })

    event.shaped("gtocore:processing_plant", [
        "BCB",
        "DAF",
        "BEB"
    ], {
        A: "gtocore:multi_functional_casing",
        B: "gtceu:aluminium_foil",
        C: "gtceu:mv_conveyor_module",
        D: "gtceu:mv_sensor",
        E: "gtceu:mv_fluid_regulator",
        F: "gtceu:mv_emitter"
    })

    event.shaped("gtocore:ev_rocket_engine", [
        "BCB",
        "DAD",
        "WEW"
    ], {
        A: "gtceu:ev_machine_hull",
        B: "gtceu:lead_rotor",
        C: "#gtceu:circuits/ev",
        D: "gtceu:ev_electric_motor",
        E: "gtceu:ev_electric_pump",
        W: "gtceu:steel_double_cable"
    })

    event.shaped("gtocore:iv_rocket_engine", [
        "BCB",
        "DAD",
        "WEW"
    ], {
        A: "gtceu:iv_machine_hull",
        B: "gtceu:chromium_rotor",
        C: "#gtceu:circuits/iv",
        D: "gtceu:iv_electric_motor",
        E: "gtceu:iv_electric_pump",
        W: "gtceu:tungsten_steel_double_cable"
    })

    event.shaped("gtocore:luv_rocket_engine", [
        "BCB",
        "DAD",
        "WEW"
    ], {
        A: "gtceu:luv_machine_hull",
        B: "gtceu:rhodium_plated_palladium_rotor",
        C: "#gtceu:circuits/luv",
        D: "gtceu:luv_electric_motor",
        E: "gtceu:luv_electric_pump",
        W: "gtceu:osmium_double_cable"
    })

    event.shaped("gtocore:rocket_large_turbine", [
        "BCB",
        "DAD",
        "WPW"
    ], {
        A: "gtocore:ev_rocket_engine",
        W: "gtceu:black_steel_double_cable",
        C: "#gtceu:circuits/iv",
        D: "gtceu:ev_electric_motor",
        B: "gtceu:ev_electric_piston",
        P: "gtceu:dense_obsidian_plate"
    })

    event.shaped("gtocore:iv_naquadah_reactor", [
        "BCB",
        "DAD",
        "WCW"
    ], {
        A: "gtceu:iv_machine_hull",
        B: "gtceu:naquadah_rod",
        C: "#gtceu:circuits/iv",
        D: "gtceu:iv_field_generator",
        W: "gtceu:tungsten_quadruple_cable"
    })

    event.shaped("gtocore:luv_naquadah_reactor", [
        "BCB",
        "DAD",
        "WCW"
    ], {
        A: "gtceu:luv_machine_hull",
        B: "gtceu:enriched_naquadah_rod",
        C: "#gtceu:circuits/luv",
        D: "gtceu:luv_field_generator",
        W: "gtceu:niobium_nitride_quadruple_cable"
    })

    event.shaped("gtocore:zpm_naquadah_reactor", [
        "BCB",
        "DAD",
        "WCW"
    ], {
        A: "gtceu:zpm_machine_hull",
        B: "gtceu:naquadria_rod",
        C: "#gtceu:circuits/zpm",
        D: "gtceu:zpm_field_generator",
        W: "gtceu:naquadah_quadruple_cable"
    })

    event.shaped("gtocore:large_steam_macerator", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:steam_grinder",
        B: "gtceu:bronze_block",
        C: "enderio:energetic_alloy_grinding_ball",
        D: "gtocore:precision_steam_mechanism"
    })

    event.shaped("gtocore:large_steam_centrifuge", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtocore:steam_separator",
        B: "gtceu:bronze_block",
        C: "gtocore:precision_steam_mechanism",
        D: "gtceu:small_iron_gear"
    })

    event.shaped("gtocore:large_steam_bath", [
        "ECE",
        "DAD",
        "BCB"
    ], {
        A: "gtocore:steam_bath",
        B: "gtceu:bronze_block",
        C: "gtocore:precision_steam_mechanism",
        D: "gtceu:aluminium_rotor",
        E: "gtceu:steel_foil"
    })

    event.shaped("gtocore:large_steam_circuit_assembler", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "ae2:molecular_assembler",
        B: "gtceu:bronze_plate",
        C: "minecraft:comparator",
        D: "gtocore:precision_steam_mechanism"
    })

    event.shaped("gtocore:large_steam_mixer", [
        "ECE",
        "DAD",
        "BCB"
    ], {
        A: "gtocore:steam_mixer",
        B: "gtceu:bronze_plate",
        C: "gtocore:precision_steam_mechanism",
        D: "gtceu:copper_huge_fluid_pipe",
        E: "enderio:infinity_rod"
    })

    event.shaped("gtocore:large_steam_thermal_centrifuge", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtocore:steam_separator",
        B: "gtceu:bronze_plate",
        C: "gtocore:precision_steam_mechanism",
        D: "gtceu:long_copper_rod"
    })

    event.shaped("gtocore:large_steam_ore_washer", [
        "ECE",
        "DAD",
        "BCB"
    ], {
        A: "gtocore:steam_ore_washer",
        B: "gtceu:bronze_plate",
        C: "gtceu:double_bronze_plate",
        D: "gtocore:precision_steam_mechanism",
        E: "enderio:infinity_rod"
    })

    event.shaped("gtocore:large_steam_crusher", [
        "ECE",
        "DAD",
        "BCB"
    ], {
        A: "gtocore:steam_crusher",
        B: "gtceu:cobalt_brass_gear",
        C: "gtceu:diamond_gear",
        D: "gtocore:precision_steam_mechanism",
        E: "gtceu:curved_brass_plate"
    })

    event.shaped("gtocore:steam_separator", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:bronze_gearbox",
        B: "gtceu:bronze_block",
        C: "gtceu:curved_bronze_plate",
        D: "gtceu:rubber_gear"
    })

    event.shaped("gtocore:steam_mixer", [
        "AEA",
        "BCB",
        "DED"
    ], {
        A: "gtceu:bronze_normal_fluid_pipe",
        B: "gtceu:bronze_plate",
        C: "gtceu:bronze_pipe_casing",
        D: "gtceu:bronze_gear",
        E: "ad_astra:steel_rod"
    })

    event.shaped("gtocore:steam_bath", [
        "ABA",
        "BCB",
        "DBD"
    ], {
        A: "gtceu:rubber_screw",
        B: "gtceu:bronze_plate",
        C: "gtceu:bronze_pipe_casing",
        D: "gtceu:bronze_gear"
    })

    event.shaped("gtocore:steam_ore_washer", [
        "ABA",
        "BCB",
        "DBD"
    ], {
        A: "gtceu:rubber_screw",
        B: "ad_astra:steel_plate",
        C: "gtceu:bronze_pipe_casing",
        D: "gtceu:potin_gear"
    })

    event.shaped("gtocore:steam_crusher", [
        "ABA",
        "BCB",
        "DBD"
    ], {
        A: "minecraft:diamond",
        B: "gtceu:small_bronze_gear",
        C: "gtceu:hp_steam_macerator",
        D: "gtceu:double_wrought_iron_plate"
    })

    event.shaped("gtocore:steam_cracker", [
        "ABA",
        "BCB",
        "DBD"
    ], {
        A: "gtceu:tin_alloy_normal_fluid_pipe",
        B: "gtceu:potin_quadruple_fluid_pipe",
        C: "gtceu:hp_steam_alloy_smelter",
        D: "gtocore:ulv_fluid_regulator"
    })

    event.shaped("gtocore:weather_control", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "minecraft:amethyst_block",
        B: "minecraft:lightning_rod",
        C: "gtceu:double_steel_plate",
        D: "minecraft:daylight_detector"
    })

    event.shaped("gtocore:coking_tower", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:pyrolyse_oven",
        B: "gtceu:double_stainless_steel_plate",
        C: "gtceu:iv_field_generator",
        D: "gtceu:vanadium_steel_huge_fluid_pipe"
    })

    event.shaped("gtocore:precision_steam_mechanism", [
        "ABA",
        "DCD",
        "EBE"
    ], {
        A: "gtceu:bronze_rod",
        B: "gtceu:small_bronze_gear",
        C: "enderio:dark_bimetal_gear",
        D: "gtceu:small_copper_spring",
        E: "gtocore:ulv_fluid_regulator"
    })

    event.shaped("gtocore:steam_assembly_block", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:bronze_normal_fluid_pipe",
        B: "gtocore:precision_steam_mechanism",
        C: "gtceu:bronze_frame"
    })

    event.shaped("gtocore:ev_lightning_rod", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:lapotron_crystal",
        B: "gtceu:ev_transformer_16a",
        C: "gtceu:ev_machine_hull"
    })

    event.shaped("gtocore:iv_lightning_rod", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:lapotronic_energy_orb",
        B: "gtceu:iv_transformer_16a",
        C: "gtceu:iv_machine_hull"
    })

    event.shaped("gtocore:luv_lightning_rod", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:lapotronic_energy_orb_cluster",
        B: "gtceu:luv_transformer_16a",
        C: "gtceu:luv_machine_hull"
    })

    event.shaped("gtocore:ulv_semi_fluid", [
        "ADA",
        "BEB",
        "CFC"
    ], {
        A: "gtocore:ulv_electric_piston",
        B: "gtocore:ulv_electric_motor",
        C: "gtceu:stone_gear",
        D: "#gtceu:circuits/ulv",
        E: "gtceu:ulv_machine_hull",
        F: "gtceu:lead_double_cable"
    })

    event.shaped("gtocore:lv_semi_fluid", [
        "ADA",
        "BEB",
        "CFC"
    ], {
        A: "gtceu:lv_electric_piston",
        B: "gtceu:lv_electric_motor",
        C: "gtceu:potin_gear",
        D: "#gtceu:circuits/lv",
        E: "gtceu:lv_machine_hull",
        F: "gtceu:cobalt_double_cable"
    })

    event.shaped("gtocore:mv_semi_fluid", [
        "ADA",
        "BEB",
        "CFC"
    ], {
        A: "gtceu:mv_electric_piston",
        B: "gtceu:mv_electric_motor",
        C: "gtceu:eglin_steel_gear",
        D: "#gtceu:circuits/mv",
        E: "gtceu:mv_machine_hull",
        F: "gtceu:annealed_copper_double_cable"
    })

    event.shaped("gtocore:hv_semi_fluid", [
        "ADA",
        "BEB",
        "CFC"
    ], {
        A: "gtceu:hv_electric_piston",
        B: "gtceu:hv_electric_motor",
        C: "gtceu:chromium_gear",
        D: "#gtceu:circuits/hv",
        E: "gtceu:hv_machine_hull",
        F: "gtceu:electrum_double_cable"
    })

    event.shaped("gtocore:large_semi_fluid_generator", [
        "ADA",
        "BEB",
        "CFC"
    ], {
        A: "gtceu:ev_electric_piston",
        B: "gtceu:ev_electric_motor",
        C: "gtceu:inconel_792_gear",
        D: "#gtceu:circuits/ev",
        E: "gtceu:ev_machine_hull",
        F: "gtceu:nichrome_double_cable"
    })

    event.shaped("gtocore:desulfurizer", [
        "AEA",
        "CDC",
        "AEA",
    ], {
        E: "gtceu:hv_electric_motor",
        C: "#gtceu:circuits/ev",
        D: "gtceu:hv_machine_hull",
        A: "gtceu:hv_electric_pump",
    })

    event.shaped("2x gtocore:neutronium_pipe_casing", [
        "CBC",
        "BAB",
        "CBC"
    ], {
        A: "gtceu:neutronium_frame",
        B: "gtceu:neutronium_normal_fluid_pipe",
        C: "gtceu:neutronium_plate"
    })

    event.shaped("2x gtocore:neutronium_gearbox", [
        "CEC",
        "BAB",
        "CFC"
    ], {
        A: "gtceu:neutronium_frame",
        B: "gtceu:neutronium_gear",
        C: "gtceu:neutronium_plate",
        E: "#forge:tools/hammers",
        F: "#forge:tools/wrench"
    })

    event.shaped("gtocore:advanced_assembly_line_unit", [
        "CEC",
        "BAB",
        "CEC"
    ], {
        A: "gtceu:assembly_line_unit",
        B: "#gtceu:circuits/uv",
        C: "gtceu:hssg_plate",
        E: "gtceu:rhodium_gear"
    })

    event.shaped("minecraft:netherite_upgrade_smithing_template", [
        "ABA",
        "ACA",
        "AAA"
    ], {
        A: "minecraft:diamond",
        B: "minecraft:netherite_block",
        C: "minecraft:netherrack"
    })

    event.shaped("gtocore:wood_rotor", [
        "CBC",
        "BAB",
        "CBC"
    ], {
        A: "gtceu:wood_frame",
        B: "gtceu:wood_plate",
        C: "gtceu:treated_wood_plate"
    })

    event.shaped("gtocore:iron_rotor", [
        "CBC",
        "BAB",
        "CBC"
    ], {
        A: "gtceu:long_invar_rod",
        B: "gtceu:iron_turbine_blade",
        C: "minecraft:chain"
    })

    event.shaped("gtocore:steel_rotor", [
        "CBC",
        "BAB",
        "CBC"
    ], {
        A: "gtceu:long_invar_rod",
        B: "gtceu:steel_turbine_blade",
        C: "minecraft:chain"
    })

    event.shaped("gtocore:machine_casing_circuit_assembly_line", [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: "gtceu:pikyonium_plate",
        B: "gtceu:hssg_gear",
        C: "gtceu:luv_robot_arm",
        D: "gtceu:ruridit_frame"
    })

    event.shaped("gtocore:aggregatione_core", [
        "ABA",
        "BDB",
        "ABA"
    ], {
        A: "gtceu:attuned_tengam_ingot",
        B: "gtocore:infused_obsidian",
        D: "gtocore:magic_core"
    })

    event.shaped("gtocore:stabilizer_core", [
        "ABA",
        "BDB",
        "ABA"
    ], {
        A: "gtceu:double_infuscolium_plate",
        B: "gtceu:long_neutronium_rod",
        D: "gtocore:time_dilation_containment_unit"
    })

    event.shaped("gtocore:dragon_stabilizer_core", [
        "ABA",
        "BDB",
        "ABA"
    ], {
        A: "gtceu:double_draconium_plate",
        B: "gtceu:long_cosmic_neutronium_rod",
        D: "gtocore:stabilizer_core"
    })


    event.shaped("gtocore:greenhouse", [
        "GGG",
        "CHC",
        "PUP"
    ], {
        G: "gtceu:tempered_glass",
        C: "#gtceu:circuits/mv",
        H: "gtceu:mv_machine_hull",
        P: "gtceu:mv_electric_piston",
        U: "gtceu:mv_electric_pump",
    })

    event.shaped("gtocore:vacuum_hatch", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:ev_robot_arm",
        B: "gtceu:vanadium_steel_large_fluid_pipe",
        C: "gtceu:ev_pump"
    })

    event.shaped("gtocore:gravity_hatch", [
        "CBC",
        "BAB",
        "DBD"
    ], {
        A: "gtceu:uv_machine_hull",
        B: "gtceu:gravi_star",
        C: "gtceu:uv_robot_arm",
        D: "gtceu:gravitation_engine_unit"
    })

    event.shaped("gtocore:vacuum_configuration_hatch", [
        "DCD",
        "BAB",
        "DCD"
    ], {
        A: "gtocore:auto_configuration_maintenance_hatch",
        B: "gtceu:gravi_star",
        C: "#gtceu:circuits/uhv",
        D: "gtocore:vacuum_hatch"
    })

    event.shaped("gtocore:gravity_configuration_hatch", [
        "DCD",
        "BAB",
        "DCD"
    ], {
        A: "gtocore:auto_configuration_maintenance_hatch",
        B: "gtceu:uev_field_generator",
        C: "#gtceu:circuits/uev",
        D: "gtocore:gravity_hatch"
    })

    event.shaped("gtocore:block_bus", [
        "DCD",
        "BAB",
        "DCD"
    ], {
        A: "gtceu:luv_input_bus",
        B: "enderio:vacuum_chest",
        C: "enderio:conductive_alloy_block",
        D: "enderio:energetic_alloy_block"
    })

    event.shaped("gtocore:liquefaction_furnace", [
        "DCD",
        "BAB",
        "DCD"
    ], {
        A: "gtceu:lv_extractor",
        B: "minecraft:blast_furnace",
        C: "gtceu:nickel_double_cable",
        D: "gtceu:invar_plate"
    })

    event.shaped("gtocore:reaction_furnace", [
        "CDC",
        "BAB",
        "DCD"
    ], {
        A: "gtceu:lv_chemical_reactor",
        B: "gtceu:iron_octal_cable",
        C: "gtceu:mv_electric_furnace",
        D: "gtceu:gold_drum"
    })

    event.shaped("gtocore:energetic_photovoltaic_power_station", [
        "DBD",
        "BAB",
        "DCD"
    ], {
        A: "gtocore:energetic_photovoltaic_block",
        B: "enderio:copper_alloy_block",
        C: "#gtceu:circuits/mv",
        D: "ad_astra:steel_plate"
    })

    event.shaped("gtocore:pulsating_photovoltaic_power_station", [
        "DBD",
        "BAB",
        "DCD"
    ], {
        A: "gtocore:pulsating_photovoltaic_block",
        B: "enderio:redstone_alloy_block",
        C: "#gtceu:circuits/hv",
        D: "gtceu:titanium_plate"
    })

    event.shaped("gtocore:vibrant_photovoltaic_power_station", [
        "DBD",
        "BAB",
        "DCD"
    ], {
        A: "gtocore:vibrant_photovoltaic_block",
        B: "enderio:dark_steel_block",
        C: "#gtceu:circuits/ev",
        D: "gtceu:tungsten_steel_plate"
    })

    event.shaped("gtocore:heat_sensor", [
        "CAC",
        "ABA",
        "CAC"
    ], {
        A: "minecraft:repeater",
        C: "gtceu:steel_tiny_fluid_pipe",
        B: "gtceu:lv_machine_casing"
    })

    event.shaped("gtocore:primitive_distillation_tower", [
        "DCD",
        "CAC",
        "DBD"
    ], {
        A: "gtceu:hp_steam_solid_boiler",
        B: "gtceu:potin_large_fluid_pipe",
        C: "gtceu:lead_normal_fluid_pipe",
        D: "gtceu:double_steel_plate"
    })

    event.shaped("gtocore:uev_thread_hatch", [
        "ABA",
        "CDC",
        "EFE"
    ], {
        A: "#gtceu:circuits/uiv",
        B: "gtceu:uev_robot_arm",
        C: "gtceu:uev_conveyor_module",
        D: "gtceu:uev_parallel_hatch",
        E: "gtceu:enderite_hex_wire",
        F: "gtceu:uev_field_generator"
    })

    event.shaped("gtocore:uiv_thread_hatch", [
        "ABA",
        "CDC",
        "EFE"
    ], {
        A: "#gtceu:circuits/uxv",
        B: "gtceu:uiv_robot_arm",
        C: "gtceu:uiv_conveyor_module",
        D: "gtceu:uiv_parallel_hatch",
        E: "gtceu:echoite_hex_wire",
        F: "gtceu:uiv_field_generator"
    })

    event.shaped("gtocore:uxv_thread_hatch", [
        "ABA",
        "CDC",
        "EFE"
    ], {
        A: "#gtceu:circuits/opv",
        B: "gtceu:uxv_robot_arm",
        C: "gtceu:uxv_conveyor_module",
        D: "gtceu:uxv_parallel_hatch",
        E: "gtceu:legendarium_hex_wire",
        F: "gtceu:uxv_field_generator"
    })

    event.shaped("gtocore:opv_thread_hatch", [
        "ABA",
        "CDC",
        "EFE"
    ], {
        A: "#gtceu:circuits/max",
        B: "gtceu:opv_robot_arm",
        C: "gtceu:opv_conveyor_module",
        D: "gtceu:opv_parallel_hatch",
        E: "gtceu:awakened_draconium_hex_wire",
        F: "gtceu:opv_field_generator"
    })

    event.shaped("gtocore:max_thread_hatch", [
        "ABA",
        "CDC",
        "EFE"
    ], {
        A: "gtocore:suprachronal_circuit_max",
        B: "gtocore:max_robot_arm",
        C: "gtocore:max_conveyor_module",
        D: "gtceu:max_parallel_hatch",
        E: "gtceu:hypogen_hex_wire",
        F: "gtocore:max_field_generator"
    })

    event.shaped("gtocore:large_steam_furnace", [
        "ABA",
        "CDC",
        "EBE"
    ], {
        A: "gtceu:long_potin_rod",
        B: "gtocore:precision_steam_mechanism",
        C: "enderio:reinforced_obsidian_block",
        D: "gtceu:steam_oven",
        E: "gtceu:potin_huge_fluid_pipe"
    })

    event.shaped("gtocore:leap_forward_one_blast_furnace", [
        "ABA",
        "BCB",
        "DDD"
    ], {
        A: "gtceu:wrought_iron_foil",
        B: "ad_astra:airlock",
        C: "gtceu:primitive_blast_furnace",
        D: "gtceu:firebrick"
    })

    event.shaped("gtocore:thermal_power_pump", [
        "ABA",
        "GDC",
        "EFE"
    ], {
        A: "gtceu:copper_small_fluid_pipe",
        B: "gtceu:hp_steam_compressor",
        C: "gtceu:pump_hatch",
        D: "gtceu:primitive_pump",
        E: "gtceu:brass_plate",
        F: "gtceu:hp_steam_extractor",
        G: "gtocore:reinforced_wood_casing"
    })
})