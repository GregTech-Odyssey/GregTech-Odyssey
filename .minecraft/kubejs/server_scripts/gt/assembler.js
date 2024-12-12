ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu

    gtr.component_assembly("gtocore:max_electric_motor")
        .circuit(1)
        .itemInputs("48x gtceu:long_magmatter_rod", "48x gtceu:cosmic_neutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 768000", "gtceu:soldering_alloy 1536000", "gtceu:lubricant 3072000", "gtceu:black_dwarf_mtter 110592", "gtceu:white_dwarf_mtter 110592", "gtceu:infinity 27648", "gtceu:transcendent_metal 95232")
        .itemOutputs("64x gtocore:max_electric_motor")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(12000)
        .addData("component_assembly_casing_tier", 14)

    gtr.component_assembly("gtocore:max_electric_pump")
        .circuit(3)
        .itemInputs("96x gtceu:double_transcendent_metal_plate", "48x gtocore:max_electric_motor", "48x gtceu:cosmic_neutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 884736", "gtceu:soldering_alloy 1769472", "gtceu:lubricant 3072000", "gtceu:styrene_butadiene_rubber 110592", "gtceu:transcendent_metal 33792", "gtceu:black_dwarf_mtter 110592", "gtceu:white_dwarf_mtter 110592", "gtceu:infinity 41472", "gtceu:neutronium 442368")
        .itemOutputs("64x gtocore:max_electric_pump")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(12000)
        .addData("component_assembly_casing_tier", 14)

    gtr.component_assembly("gtocore:max_conveyor_module")
        .circuit(5)
        .itemInputs("96x gtocore:max_electric_motor", "96x gtceu:double_transcendent_metal_plate", "48x gtceu:cosmic_neutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 884736", "gtceu:lubricant 3072000", "gtceu:styrene_butadiene_rubber 1050624", "gtceu:transcendent_metal 44544", "gtceu:black_dwarf_mtter 110592", "gtceu:white_dwarf_mtter 110592", "gtceu:infinity 27648")
        .itemOutputs("64x gtocore:max_conveyor_module")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(12000)
        .addData("component_assembly_casing_tier", 14)

    gtr.component_assembly("gtocore:max_electric_piston")
        .circuit(2)
        .itemInputs("48x gtocore:max_electric_motor", "192x gtceu:double_transcendent_metal_plate", "48x gtceu:cosmic_neutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 884736", "gtceu:soldering_alloy 1769472", "gtceu:lubricant 3072000", "gtceu:transcendent_metal 148992", "gtceu:infinity 27648")
        .itemOutputs("64x gtocore:max_electric_piston")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(12000)
        .addData("component_assembly_casing_tier", 14)

    gtr.component_assembly("gtocore:max_robot_arm")
        .circuit(4)
        .itemInputs("192x #gtceu:circuits/uxv", "96x #gtceu:circuits/opv", "192x gtocore:max_electric_motor", "48x gtocore:max_electric_piston", "48x #gtceu:circuits/amx", "96x gtceu:cosmic_neutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 884736", "gtceu:soldering_alloy 1769472", "gtceu:lubricant 3072000", "gtceu:transcendent_metal 152064", "gtceu:infinity 27648")
        .itemOutputs("64x gtocore:max_robot_arm")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(12000)
        .addData("component_assembly_casing_tier", 14)

    gtr.component_assembly("gtocore:max_field_generator")
        .itemInputs("288x gtceu:double_chaos_plate", "96x #gtceu:circuits/max", "96x gtocore:max_emitter", "192x gtocore:nuclear_star", "48x gtceu:infinity_frame", "3072x gtceu:fine_cosmic_wire", "96x gtceu:cosmic_neutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 1769472", "gtceu:soldering_alloy 3538944", "gtceu:black_dwarf_mtter 110592", "gtceu:white_dwarf_mtter 110592", "gtceu:shirabon 110592", "gtceu:infinity 27648")
        .itemOutputs("64x gtocore:max_field_generator")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(12000)
        .addData("component_assembly_casing_tier", 14)

    gtr.component_assembly("gtocore:max_emitter")
        .circuit(6)
        .itemInputs("96x #gtceu:circuits/max", "48x gtocore:max_electric_motor", "192x gtocore:nuclear_star", "48x gtceu:infinity_frame", "3072x gtceu:cosmic_foil", "96x gtceu:cosmic_neutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 1769472", "gtceu:soldering_alloy 3538944", "gtceu:transcendent_metal 55296", "gtceu:black_dwarf_mtter 110592", "gtceu:white_dwarf_mtter 110592", "gtceu:shirabon 110592", "gtceu:infinity 27648")
        .itemOutputs("64x gtocore:max_emitter")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(12000)
        .addData("component_assembly_casing_tier", 14)

    gtr.component_assembly("gtocore:max_sensor")
        .circuit(7)
        .itemInputs("96x #gtceu:circuits/max", "192x gtceu:transcendent_metal_plate", "48x gtocore:max_electric_motor", "192x gtocore:nuclear_star", "48x gtceu:infinity_frame", "96x gtceu:cosmic_neutronium_hex_cable")
        .inputFluids("gtceu:super_mutated_living_solder 1769472", "gtceu:soldering_alloy 3538944", "gtceu:black_dwarf_mtter 110592", "gtceu:white_dwarf_mtter 110592", "gtceu:shirabon 110592", "gtceu:infinity 27648")
        .itemOutputs("64x gtocore:max_sensor")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(12000)
        .addData("component_assembly_casing_tier", 14)

    gtr.assembler_module("gtocore:scintillator")
        .itemInputs("12x gtceu:high_durability_compound_steel_screw", "12x gtceu:fine_cinobite_wire", "6x gtceu:zylon_foil", "4x gtceu:cinobite_plate", "4x gtceu:echoite_plate", "gtocore:scintillator_crystal", "gtocore:separation_electromagnet", "gtceu:double_astral_titanium_plate")
        .itemOutputs("gtocore:scintillator")
        .inputFluids("gtceu:trinium_titanium 432", "gtceu:soldering_alloy 288", "gtceu:mutated_living_solder 144")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .addData("power_module_tier", 2)

    gtr.assembler_module("gtocore:relativistic_spinorial_memory_system")
        .itemInputs("2x gtceu:neutron_reflector", "gtocore:rydberg_spinorial_assembly", "4x gtocore:charged_lepton_trap_crystal", "2x gtceu:legendarium_single_wire", "gtceu:uhv_field_generator", "gtceu:uiv_sensor", "gtceu:fusion_coil")
        .inputFluids("gtceu:uu_matter 10000", "gtceu:noble_gas 2000", "gtceu:cosmic_computing_mixture 1000", "gtceu:neutronium 1296")
        .itemOutputs("gtocore:relativistic_spinorial_memory_system")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .addData("power_module_tier", 4)

    gtr.assembler_module("gtocore:microwormhole_generator")
        .itemInputs("2x gtceu:zpm_emitter", "2x gtceu:enriched_naquadah_trinium_europium_duranide_single_wire", "2x gtceu:neutronium_plate", "gtceu:zpm_field_generator", "gtocore:contained_kerr_singularity", "gtocore:void_matter", "gtceu:enderium_nanites", "2x gtceu:celestial_tungsten_plate")
        .inputFluids("gtceu:tritanium 576")
        .itemOutputs("gtocore:microwormhole_generator")
        .EUt(100000)
        .duration(200)
        .addData("power_module_tier", 4)

    gtr.assembler_module("gtocore:nuclear_clock")
        .itemInputs("2x gtceu:uiv_sensor", "2x gtocore:ultrashort_pulse_laser", "2x gtceu:neutronium_plate", "gtocore:scintillator", "gtocore:bose_einstein_cooling_container", "gtceu:iron_nanites", "gtceu:uv_naquadria_battery", "2x gtceu:double_rhodium_plate")
        .inputFluids("gtceu:thorium 144", "gtceu:black_titanium 1296")
        .itemOutputs("gtocore:nuclear_clock")
        .EUt(33550000)
        .duration(1600)
        .addData("power_module_tier", 3)

    gtr.assembler_module("gtocore:macrowormhole_generator")
        .itemInputs("4x gtceu:uv_emitter", "4x gtceu:uv_sensor", "2x gtceu:uv_field_generator", "gtocore:contained_high_density_protonic_matter", "gtocore:microwormhole_generator", "gtocore:contained_kerr_singularity", "gtceu:zpm_naquadria_battery", "gtocore:kinetic_matter")
        .inputFluids("gtceu:naquadah_alloy 576")
        .itemOutputs("gtocore:macrowormhole_generator")
        .EUt(1000000)
        .duration(400)
        .addData("power_module_tier", 4)

    gtr.assembler_module("gtocore:stabilized_wormhole_generator")
        .itemInputs("4x gtceu:uev_emitter", "4x gtceu:uev_sensor", "2x gtceu:uev_field_generator", "gtocore:contained_exotic_matter", "gtocore:macrowormhole_generator", "gtocore:contained_kerr_singularity", "gtceu:energy_cluster", "gtocore:omni_matter")
        .inputFluids("gtceu:naquadah_alloy 576")
        .itemOutputs("gtocore:stabilized_wormhole_generator")
        .EUt(10000000)
        .duration(800)
        .addData("power_module_tier", 4)

    gtr.assembler_module("gtocore:ctc_computational_unit_container")
        .itemInputs("36x gtceu:enriched_naquadah_plate", "36x gtceu:fullerene_polymer_matrix_pulp_plate", "6x gtceu:heavy_quark_degenerate_matter_plate", "3x gtceu:uhv_field_generator", "2x gtceu:taranium_plate", "gtocore:ctc_guidance_unit", "gtocore:manifold_oscillatory_power_cell", "4x gtceu:double_uranium_plate", "gtceu:dense_darmstadtium_plate", "gtceu:neutronium_frame", "gtocore:time_dilation_containment_unit", "gtocore:stabilized_wormhole_generator", "2x gtocore:dark_matter", "gtceu:starmetal_nanites", "8x gtceu:double_black_dwarf_mtter_plate", "8x gtceu:double_trinium_plate")
        .inputFluids("gtceu:superheavy_l_alloy 1296", "gtceu:superheavy_h_alloy 1296", "gtceu:trinium_titanium 1296", "gtceu:adamantine 1296")
        .itemOutputs("gtocore:ctc_computational_unit_container")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .addData("power_module_tier", 5)

    gtr.assembler_module("gtocore:space_probe_mk1")
        .itemInputs("gtceu:energy_module",
            "4x gtceu:data_module",
            "2x gtceu:uiv_emitter",
            "2x gtceu:uiv_sensor",
            "gtceu:uiv_field_generator",
            "4x gtceu:adamantium_plate")
        .inputFluids("gtceu:mutated_living_solder 1296", "gtceu:soldering_alloy 2880", "gtceu:lubricant 5760", "gtceu:neutronium 1296")
        .itemOutputs("gtocore:space_probe_mk1")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .addData("power_module_tier", 3)

    gtr.assembler_module("gtocore:space_probe_mk2")
        .itemInputs("gtceu:energy_cluster",
            "16x gtceu:data_module",
            "2x gtceu:uxv_emitter",
            "2x gtceu:uxv_sensor",
            "gtceu:uxv_field_generator",
            "4x gtceu:vibranium_plate",
            "8x gtceu:celestial_tungsten_plate")
        .inputFluids("gtceu:mutated_living_solder 1296", "gtceu:soldering_alloy 2880", "gtceu:lubricant 5760", "gtceu:neutronium 1296")
        .itemOutputs("gtocore:space_probe_mk2")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .addData("power_module_tier", 4)

    gtr.assembler_module("gtocore:space_probe_mk3")
        .itemInputs("gtceu:max_battery",
            "64x gtceu:data_module",
            "2x gtceu:opv_emitter",
            "2x gtceu:opv_sensor",
            "gtceu:opv_field_generator",
            "gtceu:cosmic_neutronium_nanites",
            "4x gtceu:draconium_plate")
        .inputFluids("gtceu:super_mutated_living_solder 1296", "gtceu:mutated_living_solder 2880", "gtceu:lubricant 5760", "gtceu:cosmic_neutronium 1296")
        .itemOutputs("gtocore:space_probe_mk3")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(400)
        .addData("power_module_tier", 5)

    gtr.assembler_module("gtocore:space_drone_mk1")
        .itemInputs("gtceu:titanium_drill_head",
            "4x gtceu:ev_vanadium_battery",
            "4x #gtceu:circuits/uv",
            "ae2:wireless_receiver",
            "gtceu:uv_electric_pump",
            "gtceu:uv_electric_piston",
            "2x gtceu:uv_electric_motor",
            "2x gtceu:uv_conveyor_module",
            "2x gtceu:uv_robot_arm",
            "gtceu:uv_sensor",
            "gtceu:uv_emitter",
            "4x gtceu:tritanium_quadruple_wire",
            "4x gtceu:power_thruster",
            "2x gtceu:steel_minecart_wheels",
            "4x gtceu:steel_spring",
            "8x gtceu:darmstadtium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:manganese 2880", "gtceu:potin 2880", "gtceu:ultimet 2880")
        .itemOutputs("gtocore:space_drone_mk1")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(600)
        .addData("power_module_tier", 1)

    gtr.assembler_module("gtocore:space_drone_mk2")
        .itemInputs("gtceu:ultimet_drill_head",
            "16x gtceu:ev_vanadium_battery",
            "4x #gtceu:circuits/uhv",
            "ae2:wireless_receiver",
            "gtceu:uhv_electric_pump",
            "gtceu:uhv_electric_piston",
            "2x gtceu:uhv_electric_motor",
            "2x gtceu:uhv_conveyor_module",
            "2x gtceu:uhv_robot_arm",
            "gtceu:uhv_sensor",
            "gtceu:uhv_emitter",
            "4x gtceu:abyssalalloy_quadruple_wire",
            "4x gtceu:power_thruster",
            "2x gtceu:steel_minecart_wheels",
            "4x gtceu:steel_spring",
            "8x gtceu:neutronium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:steel 2880", "gtceu:electrum 2880", "gtceu:vanadium_steel 2880")
        .itemOutputs("gtocore:space_drone_mk2")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)
        .addData("power_module_tier", 1)

    gtr.assembler_module("gtocore:space_drone_mk3")
        .itemInputs("gtceu:hsse_drill_head",
            "4x gtceu:iv_vanadium_battery",
            "4x #gtceu:circuits/uev",
            "ae2:wireless_receiver",
            "gtceu:uev_electric_pump",
            "gtceu:uev_electric_piston",
            "2x gtceu:uev_electric_motor",
            "2x gtceu:uev_conveyor_module",
            "2x gtceu:uev_robot_arm",
            "gtceu:uev_sensor",
            "gtceu:uev_emitter",
            "4x gtceu:titansteel_quadruple_wire",
            "4x gtceu:power_thruster",
            "2x gtceu:steel_minecart_wheels",
            "4x gtceu:steel_spring",
            "8x gtceu:quantanium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:yttrium 2880", "gtceu:blue_alloy 2880", "gtceu:rtm_alloy 2880")
        .itemOutputs("gtocore:space_drone_mk3")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(600)
        .addData("power_module_tier", 2)

    gtr.assembler_module("gtocore:space_drone_mk4")
        .itemInputs("gtceu:naquadah_alloy_drill_head",
            "16x gtceu:iv_vanadium_battery",
            "4x #gtceu:circuits/uiv",
            "ae2:wireless_receiver",
            "gtceu:uiv_electric_pump",
            "gtceu:uiv_electric_piston",
            "2x gtceu:uiv_electric_motor",
            "2x gtceu:uiv_conveyor_module",
            "2x gtceu:uiv_robot_arm",
            "gtceu:uiv_sensor",
            "gtceu:uiv_emitter",
            "4x gtceu:adamantine_quadruple_wire",
            "4x gtceu:power_thruster",
            "2x gtceu:steel_minecart_wheels",
            "4x gtceu:steel_spring",
            "8x gtceu:adamantium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:bohrium 2880", "gtceu:tungsten_carbide 2880", "gtceu:rhodium_plated_palladium 2880e")
        .itemOutputs("gtocore:space_drone_mk4")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)
        .addData("power_module_tier", 3)

    gtr.assembler_module("gtocore:space_drone_mk5")
        .itemInputs("gtceu:duranium_drill_head",
            "4x gtceu:luv_vanadium_battery",
            "4x #gtceu:circuits/uxv",
            "ae2:wireless_receiver",
            "gtceu:uxv_electric_pump",
            "gtceu:uxv_electric_piston",
            "2x gtceu:uxv_electric_motor",
            "2x gtceu:uxv_conveyor_module",
            "2x gtceu:uxv_robot_arm",
            "gtceu:uxv_sensor",
            "gtceu:uxv_emitter",
            "4x gtceu:naquadriatictaranium_quadruple_wire",
            "4x gtceu:power_thruster",
            "2x gtceu:steel_minecart_wheels",
            "4x gtceu:steel_spring",
            "8x gtceu:vibranium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:meitnerium 2880", "gtceu:black_bronze 2880", "gtceu:hssg 2880")
        .itemOutputs("gtocore:space_drone_mk5")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(600)
        .addData("power_module_tier", 4)

    gtr.assembler_module("gtocore:space_drone_mk6")
        .itemInputs("gtceu:neutronium_drill_head",
            "16x gtceu:luv_vanadium_battery",
            "4x #gtceu:circuits/opv",
            "ae2:wireless_receiver",
            "gtceu:opv_electric_pump",
            "gtceu:opv_electric_piston",
            "2x gtceu:opv_electric_motor",
            "2x gtceu:opv_conveyor_module",
            "2x gtceu:opv_robot_arm",
            "gtceu:opv_sensor",
            "gtceu:opv_emitter",
            "4x gtceu:starmetal_quadruple_wire",
            "4x gtceu:power_thruster",
            "2x gtceu:steel_minecart_wheels",
            "4x gtceu:steel_spring",
            "8x gtceu:draconium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:livermorium 2880", "gtceu:sterling_silver 2880", "gtceu:titanium_tungsten_carbide 2880")
        .itemOutputs("gtocore:space_drone_mk6")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(600)
        .addData("power_module_tier", 5)

    gtr.circuit_assembler("gtocore:magneto_resonatic_circuit_ulv")
        .itemInputs("4x gtceu:tantalum_capacitor", "4x gtceu:resistor", "4x gtceu:inductor", "gtocore:imprinted_resonatic_circuit_board", "gtceu:magneto_resonatic_gem", "gtceu:vacuum_tube")
        .itemOutputs("4x gtocore:magneto_resonatic_circuit_ulv")
        .EUt(30)
        .duration(50)

    gtr.circuit_assembler("gtocore:magneto_resonatic_circuit_lv")
        .itemInputs("4x gtceu:diode", "4x gtceu:capacitor", "4x gtceu:transistor", "gtocore:imprinted_resonatic_circuit_board", "gtceu:magneto_resonatic_gem", "gtocore:magneto_resonatic_circuit_ulv")
        .itemOutputs("4x gtocore:magneto_resonatic_circuit_lv")
        .EUt(120)
        .duration(90)

    gtr.circuit_assembler("gtocore:magneto_resonatic_circuit_mv")
        .itemInputs("8x gtceu:diode", "8x gtceu:capacitor", "8x gtceu:transistor", "gtocore:imprinted_resonatic_circuit_board", "gtceu:magneto_resonatic_gem", "gtocore:magneto_resonatic_circuit_lv")
        .itemOutputs("4x gtocore:magneto_resonatic_circuit_mv")
        .EUt(480)
        .duration(150)

    gtr.circuit_assembler("gtocore:magneto_resonatic_circuit_hv")
        .itemInputs("4x gtceu:smd_diode", "4x gtceu:smd_capacitor", "4x gtceu:smd_transistor", "2x gtocore:imprinted_resonatic_circuit_board", "gtceu:flawless_magneto_resonatic_gem", "gtocore:magneto_resonatic_circuit_mv")
        .itemOutputs("4x gtocore:magneto_resonatic_circuit_hv")
        .EUt(1920)
        .duration(230)

    gtr.circuit_assembler("gtocore:magneto_resonatic_circuit_ev")
        .itemInputs("8x gtceu:smd_diode", "8x gtceu:smd_capacitor", "8x gtceu:smd_transistor", "4x gtocore:imprinted_resonatic_circuit_board", "gtceu:flawless_magneto_resonatic_gem", "gtocore:magneto_resonatic_circuit_hv")
        .itemOutputs("4x gtocore:magneto_resonatic_circuit_ev")
        .EUt(7680)
        .duration(330)

    gtr.circuit_assembler("gtocore:magneto_resonatic_circuit_iv")
        .itemInputs("4x gtceu:advanced_smd_diode", "4x gtceu:advanced_smd_capacitor", "4x gtceu:advanced_smd_transistor", "4x gtocore:imprinted_resonatic_circuit_board", "gtceu:flawless_magneto_resonatic_gem", "gtocore:magneto_resonatic_circuit_ev")
        .itemOutputs("4x gtocore:magneto_resonatic_circuit_iv")
        .EUt(30720)
        .duration(450)

    gtr.circuit_assembler("gtocore:magneto_resonatic_circuit_luv")
        .itemInputs("8x gtceu:advanced_smd_diode", "8x gtceu:advanced_smd_capacitor", "8x gtceu:advanced_smd_transistor", "4x gtocore:imprinted_resonatic_circuit_board", "gtceu:flawless_magneto_resonatic_gem", "gtocore:magneto_resonatic_circuit_iv")
        .itemOutputs("4x gtocore:magneto_resonatic_circuit_luv")
        .EUt(122880)
        .duration(570)

    const circuits = [
        ["bioware", "zpm", "luv", 1],
        ["optical", "uv", "zpm", 2],
        ["exotic", "uhv", "uv", 3],
        ["cosmic", "uev", "uhv", 4],
        ["supracausal", "uiv", "uev", 5]
    ]

    circuits.forEach((circuit) => {
        gtr.circuit_assembler("gtocore:magneto_resonatic_circuit_" + circuit[1])
            .itemInputs("16x gtocore:smd_diode_" + circuit[0], "16x gtocore:smd_capacitor_" + circuit[0], "16x gtocore:smd_transistor_" + circuit[0], "8x gtocore:imprinted_resonatic_circuit_board", "gtceu:exquisite_magneto_resonatic_gem", "gtocore:magneto_resonatic_circuit_" + circuit[2])
            .itemOutputs("4x gtocore:magneto_resonatic_circuit_" + circuit[1])
            .EUt(122880 * (4 ** circuit[3]))
            .duration(570 + (120 + (20 * circuit[3])))
    })

    gtr.circuit_assembler("gtocore:bioware_circuit_board")
        .itemInputs("32x gtceu:wetware_circuit_board", "8x gtocore:electricaly_wired_petri_dish", "gtceu:uv_electric_pump", "2x gtceu:luv_sensor", "#gtceu:circuits/luv", "32x gtceu:vanadium_gallium_foil")
        .itemOutputs("32x gtocore:bioware_circuit_board")
        .inputFluids("gtceu:biohmediumsterilized 1000")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(2400)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.circuit_assembler("gtocore:bioware_processor")
        .itemInputs("gtocore:bioware_processing_core",
            "4x gtceu:qbit_cpu_chip",
            "gtceu:highly_advanced_soc",
            "8x gtocore:smd_capacitor_bioware",
            "8x gtocore:smd_transistor_bioware",
            "8x gtceu:fine_naquadah_wire")
        .itemOutputs("4x gtocore:bioware_processor")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.circuit_assembler("gtocore:optical_processor")
        .itemInputs("gtocore:optical_processing_core",
            "4x gtocore:optical_ram_chip",
            "gtceu:highly_advanced_soc",
            "8x gtocore:smd_capacitor_optical",
            "8x gtocore:smd_transistor_optical",
            "8x gtceu:fine_dubnium_wire")
        .itemOutputs("4x gtocore:optical_processor")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.circuit_assembler("gtocore:exotic_processor")
        .itemInputs("gtocore:exotic_processing_core",
            "4x gtocore:exotic_ram_chip",
            "gtceu:highly_advanced_soc",
            "8x gtocore:smd_capacitor_exotic",
            "8x gtocore:smd_transistor_exotic",
            "8x gtceu:fine_cinobite_wire")
        .itemOutputs("4x gtocore:exotic_processor")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.circuit_assembler("gtocore:cosmic_processor")
        .itemInputs("gtocore:cosmic_processing_core",
            "4x gtocore:cosmic_ram_chip",
            "gtceu:highly_advanced_soc",
            "16x gtocore:smd_capacitor_cosmic",
            "16x gtocore:smd_transistor_cosmic",
            "8x gtceu:fine_cinobite_wire")
        .itemOutputs("4x gtocore:cosmic_processor")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.circuit_assembler("gtocore:supracausal_processor")
        .itemInputs("gtocore:supracausal_processing_core", "4x gtocore:supracausal_ram_chip", "16x gtocore:cosmic_processing_unit_core", "gtocore:microwormhole_generator", "gtocore:manifold_oscillatory_power_cell", "gtceu:crystal_matrix_plate")
        .itemOutputs("2x gtocore:supracausal_processor")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.circuit_assembler("gtocore:hui_circuit_1")
        .itemInputs("gtceu:fiber_reinforced_printed_circuit_board", "16x gtceu:yellow_garnet_plate", "8x gtceu:soc", "32x gtceu:nor_memory_chip", "8x gtceu:aluminium_single_wire", "enderio:guardian_diode")
        .itemOutputs("gtocore:hui_circuit_1")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(320)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtocore:hui_circuit_2")
        .itemInputs("gtocore:hui_circuit_1", "8x gtceu:blue_topaz_plate", "16x gtceu:nand_memory_chip", "8x gtceu:platinum_single_wire")
        .inputFluids("gtceu:polyethylene 288", "gtceu:vanadium 288", "gtceu:bronze 144", "gtceu:annealed_copper 144")
        .itemOutputs("gtocore:hui_circuit_2")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtocore:hui_circuit_3")
        .itemInputs("gtocore:hui_circuit_2", "8x gtceu:sodalite_plate", "gtceu:raw_crystal_chip", "8x gtceu:niobium_titanium_single_wire")
        .inputFluids("gtceu:polyvinyl_chloride 288", "gtceu:yttrium 288", "gtceu:black_steel 144", "gtceu:eglin_steel 144")
        .itemOutputs("gtocore:hui_circuit_3")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtocore:hui_circuit_4")
        .itemInputs("gtocore:hui_circuit_3", "8x gtceu:red_garnet_plate", "16x gtceu:qbit_cpu_chip", "8x gtceu:vanadium_gallium_single_wire")
        .inputFluids("gtceu:polytetrafluoroethylene 288", "gtceu:lutetium 288", "gtceu:tantalloy_61 144", "gtceu:hastelloy_n 144")
        .itemOutputs("gtocore:hui_circuit_4")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtocore:hui_circuit_5")
        .itemInputs("gtocore:hui_circuit_4", "8x gtceu:opal_plate", "gtceu:neuro_processing_unit", "8x gtceu:yttrium_barium_cuprate_single_wire")
        .inputFluids("gtceu:polybenzimidazole 288", "gtceu:cerium 288", "gtceu:indalloy_140 144", "gtceu:lafium 144")
        .itemOutputs("gtocore:hui_circuit_5")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtocore:improved_superconductor_coil")
        .itemInputs("gtceu:superconducting_coil", "2x gtocore:special_ceramics", "gtocore:hui_circuit_1")
        .inputFluids("gtceu:mar_m_200_steel 1152", "gtceu:europium 144")
        .itemOutputs("gtocore:improved_superconductor_coil")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtocore:compressed_fusion_coil")
        .itemInputs("gtceu:fusion_coil", "gtocore:inverter", "gtocore:hui_circuit_2")
        .inputFluids("gtceu:tanmolyium 1152", "gtceu:americium 144")
        .itemOutputs("gtocore:compressed_fusion_coil")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtocore:advanced_compressed_fusion_coil")
        .itemInputs("gtocore:compressed_fusion_coil", "gtceu:quantum_star", "gtocore:hui_circuit_3")
        .inputFluids("gtceu:artherium_tin 1152", "gtceu:mithril 144")
        .itemOutputs("gtocore:advanced_compressed_fusion_coil")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtocore:compressed_fusion_coil_mk2_prototype")
        .itemInputs("gtocore:advanced_fusion_coil", "gtceu:gravi_star", "gtocore:hui_circuit_4")
        .inputFluids("gtceu:dalisenite 1152", "gtceu:bohrium 144")
        .itemOutputs("gtocore:compressed_fusion_coil_mk2_prototype")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtocore:compressed_fusion_coil_mk2")
        .itemInputs("gtocore:fusion_coil_mk2", "gtocore:unstable_star", "gtocore:hui_circuit_5")
        .inputFluids("gtceu:cinobite 1152", "gtceu:vibranium 144")
        .itemOutputs("gtocore:compressed_fusion_coil_mk2")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtocore:luv_kuangbiao_one_giant_nuclear_fusion_reactor")
        .itemInputs("gtceu:luv_fusion_reactor", "gtocore:improved_superconductor_coil", "16x gtocore:hui_circuit_1", "16x gtceu:double_osmiridium_plate")
        .inputFluids("gtceu:niobium_titanium 864", "gtceu:indalloy_140 1152", "gtceu:soldering_alloy 2304", "gtceu:polybenzimidazole 2304")
        .itemOutputs("gtocore:luv_kuangbiao_one_giant_nuclear_fusion_reactor")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtocore:zpm_kuangbiao_one_giant_nuclear_fusion_reactor")
        .itemInputs("gtceu:zpm_fusion_reactor", "gtocore:compressed_fusion_coil", "16x gtocore:hui_circuit_2", "16x gtceu:double_europium_plate")
        .inputFluids("gtceu:vanadium_gallium 864", "gtceu:indalloy_140 1152", "gtceu:soldering_alloy 2304", "gtceu:polybenzimidazole 2304")
        .itemOutputs("gtocore:zpm_kuangbiao_one_giant_nuclear_fusion_reactor")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtocore:uv_kuangbiao_one_giant_nuclear_fusion_reactor")
        .itemInputs("gtceu:uv_fusion_reactor", "gtocore:advanced_compressed_fusion_coil", "16x gtocore:hui_circuit_3", "16x gtceu:double_americium_plate")
        .inputFluids("gtceu:yttrium_barium_cuprate 864", "gtceu:indalloy_140 1152", "gtceu:soldering_alloy 2304", "gtceu:polybenzimidazole 2304")
        .itemOutputs("gtocore:uv_kuangbiao_one_giant_nuclear_fusion_reactor")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtocore:uhv_kuangbiao_one_giant_nuclear_fusion_reactor")
        .itemInputs("gtocore:uhv_fusion_reactor", "gtocore:compressed_fusion_coil_mk2_prototype", "16x gtocore:hui_circuit_4", "16x gtceu:double_orichalcum_plate")
        .inputFluids("gtceu:europium 864", "gtceu:indalloy_140 1152", "gtceu:soldering_alloy 2304", "gtceu:polybenzimidazole 2304")
        .itemOutputs("gtocore:uhv_kuangbiao_one_giant_nuclear_fusion_reactor")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtocore:uev_kuangbiao_one_giant_nuclear_fusion_reactor")
        .itemInputs("gtocore:uev_fusion_reactor", "gtocore:compressed_fusion_coil_mk2", "16x gtocore:hui_circuit_5", "16x gtceu:double_seaborgium_plate")
        .inputFluids("gtceu:mithril 864", "gtceu:indalloy_140 1152", "gtceu:soldering_alloy 2304", "gtceu:polybenzimidazole 2304")
        .itemOutputs("gtocore:uev_kuangbiao_one_giant_nuclear_fusion_reactor")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtocore:annihilation_constrainer")
        .itemInputs("gtocore:hypercube", "8x gtocore:contained_reissner_nordstrom_singularity", "4x #gtceu:circuits/uxv", "16x gtceu:cosmic_neutronium_foil")
        .inputFluids("gtceu:cinobite 1152", "gtceu:neutronium_doped_nanotubes 2000")
        .itemOutputs("gtocore:annihilation_constrainer")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtocore:neutronium_antimatter_fuel_rod")
        .itemInputs("64x gtocore:pellet_antimatter", "gtocore:annihilation_constrainer")
        .inputFluids("gtceu:liquid_hydrogen 200000", "gtceu:zylon 100", "gtceu:neutronium 100")
        .itemOutputs("gtocore:neutronium_antimatter_fuel_rod")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(2000)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtocore:draconium_antimatter_fuel_rod")
        .itemInputs("64x gtocore:pellet_antimatter", "64x gtocore:pellet_antimatter", "gtocore:annihilation_constrainer")
        .inputFluids("gtceu:liquid_hydrogen 200000", "gtceu:fullerene_polymer_matrix_pulp 100", "gtceu:draconium 100")
        .itemOutputs("gtocore:draconium_antimatter_fuel_rod")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(2000)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtocore:cosmic_neutronium_antimatter_fuel_rod")
        .itemInputs("64x gtocore:pellet_antimatter", "64x gtocore:pellet_antimatter", "64x gtocore:pellet_antimatter", "gtocore:annihilation_constrainer")
        .inputFluids("gtceu:liquid_hydrogen 200000", "gtceu:radox 100", "gtceu:cosmic_neutronium 100")
        .itemOutputs("gtocore:cosmic_neutronium_antimatter_fuel_rod")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(2000)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtocore:infinity_antimatter_fuel_rod")
        .itemInputs("64x gtocore:pellet_antimatter", "64x gtocore:pellet_antimatter", "64x gtocore:pellet_antimatter", "gtocore:annihilation_constrainer")
        .inputFluids("gtceu:liquid_hydrogen 200000", "gtceu:heavy_quark_degenerate_matter_plasma 1000", "gtceu:liquid_cosmic_mesh 100", "gtceu:infinity 100")
        .itemOutputs("gtocore:infinity_antimatter_fuel_rod")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(2000)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtocore:reinforced_echo_shard")
        .itemInputs("4x gtceu:echo_shard_plate", "4x gtocore:echobone", "2x minecraft:netherite_scrap", "gtceu:double_echoite_plate")
        .inputFluids("gtceu:liquid_hydrogen 8000", "gtceu:echoite_plasma 1000")
        .itemOutputs("gtocore:reinforced_echo_shard")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtocore:optical_soc")
        .itemInputs("gtocore:optical_soc_containment_housing", "gtocore:optical_slice", "8x gtceu:gold_bolt", "8x gtceu:fine_zinc_wire")
        .inputFluids("gtceu:lumiium 144", "gtceu:mutated_living_solder 144", "gtceu:soldering_alloy 288", "gtceu:helium 100")
        .itemOutputs("gtocore:optical_soc")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtocore:x_ray_laser")
        .itemInputs("gtocore:x_ray_waveguide", "gtocore:microfocus_x_ray_tube", "gtceu:exquisite_jasper_gem", "gtocore:x_ray_mirror_plate")
        .itemOutputs("gtocore:x_ray_laser")
        .inputFluids("gtceu:mutated_living_solder 144", "gtceu:soldering_alloy 288", "gtceu:iridium 144", "gtceu:californium_cyclopentadienide 10")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(320)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtocore:rydberg_spinorial_assembly")
        .itemInputs("gtocore:cryogenic_interface",
            "gtocore:rotating_transparent_surface",
            "gtocore:exotic_chip",
            "gtocore:x_ray_waveguide")
        .notConsumableFluid("gtceu:xenon 10")
        .inputFluids("gtceu:quantum_dots 10", "gtceu:zylon 144", "gtceu:liquid_hydrogen 10")
        .itemOutputs("gtocore:rydberg_spinorial_assembly")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(560)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtocore:lithography_mask")
        .itemInputs("64x gtceu:fine_borosilicate_glass_wire", "16x gtceu:polytetrafluoroethylene_foil")
        .inputFluids("gtceu:polyethylene 288", "gtceu:polytetrafluoroethylene 288", "gtceu:polycaprolactam 288", "gtceu:polyvinyl_butyral 288")
        .itemOutputs("gtocore:lithography_mask")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.precision_assembler("gtocore:cosmic_processing_unit_core")
        .itemInputs("6x gtceu:fine_heavy_quark_degenerate_matter_wire", "4x gtocore:cosmic_soc", "3x gtceu:degenerate_rhenium_plate", "gtocore:empty_laser_cooling_container")
        .inputFluids("gtceu:cosmic_computing_mixture 1000", "gtceu:cosmic_superconductor 1000", "gtceu:fullerene_polymer_matrix_pulp 288", "gtceu:quantum_dots 100")
        .itemOutputs("gtocore:cosmic_processing_unit_core")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(3500)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtocore:topological_manipulator_unit")
        .itemInputs("2x gtocore:quantumchromodynamic_protective_plating", "gtocore:contained_kerr_newmann_singularity", "gtocore:microwormhole_generator", "gtceu:uhv_field_generator")
        .inputFluids("gtceu:antineutron 10", "gtceu:neutronium 144", "gtceu:arceusalloy2b 144", "gtceu:nitrogen 10000")
        .itemOutputs("gtocore:topological_manipulator_unit")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1800)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtocore:ctc_guidance_unit")
        .itemInputs("64x gtocore:cosmic_ram_chip", "gtocore:supracausal_processing_core", "gtceu:data_module", "gtocore:nuclear_clock")
        .inputFluids("gtceu:arceusalloy2b 1296", "gtceu:super_mutated_living_solder 1296", "gtceu:trinium_titanium 1296", "gtceu:vibranium 1296")
        .itemOutputs("gtocore:ctc_guidance_unit")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(1600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtocore:bioware_boule")
        .itemInputs("gtceu:neutronium_wafer", "16x gtocore:biological_cells", "gtceu:small_actinium_dust", "gtceu:small_strontium_dust")
        .inputFluids("gtceu:biohmediumsterilized 1000", "gtceu:lubricant 1000", "gtceu:nitrogen 10000")
        .itemOutputs("gtocore:bioware_boule")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(600)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.precision_assembler("gtocore:machine_casing_grinding_head")
        .itemInputs("gtceu:europium_frame", "8x gtocore:reinforced_echo_shard", "6x gtceu:tungsten_grinding_head", "36x gtceu:double_hsse_plate")
        .inputFluids("gtceu:annealed_copper 1440", "gtceu:invar 1440", "gtceu:nickel_zinc_ferrite 1440", "gtceu:osmiridium 1440")
        .itemOutputs("gtocore:machine_casing_grinding_head")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1600)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtocore:bedrock_drill")
        .itemInputs("gtocore:reinforced_echo_shard", "minecraft:bedrock", "gtceu:neutronium_buzz_saw_blade", "4x gtceu:double_neutronium_plate")
        .inputFluids("gtceu:rhodium 576", "gtceu:hastelloy_x 576", "gtceu:hsss 576", "gtceu:hsse 576")
        .itemOutputs("gtocore:bedrock_drill")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1600)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtocore:power_core")
        .itemInputs("4x gtocore:power_module", "8x gtceu:uv_field_generator", "64x gtceu:gravitation_engine_unit", "16x gtceu:double_naquadria_plate")
        .inputFluids("gtceu:rhodium 2880", "gtceu:americium 2880", "gtceu:enriched_naquadah 2880", "gtceu:trinium 2880")
        .itemOutputs("gtocore:power_core")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtocore:dyson_swarm_module")
        .itemInputs("16x gtceu:enriched_naquadah_frame", "64x gtceu:solar_panel", "gtceu:uev_sensor", "gtceu:uev_emitter")
        .inputFluids("gtceu:mutated_living_solder 20000", "gtocore:gelid_cryotheum 20000", "gtceu:neutronium 18432", "gtceu:orichalcum 18432")
        .itemOutputs("64x gtocore:dyson_swarm_module")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(800)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.precision_assembler("gtocore:dyson_control_casing")
        .itemInputs("gtceu:uiv_machine_hull", "gtocore:exotic_processing_core", "#gtceu:circuits/uiv", "gtceu:high_performance_computation_array")
        .inputFluids("gtceu:mutated_living_solder 576", "gtceu:pcb_coolant 2000", "gtceu:ruthenium 2304", "gtceu:naquadah 1296")
        .itemOutputs("gtocore:dyson_control_casing")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.precision_assembler("gtocore:dyson_receiver_casing")
        .itemInputs("gtceu:uiv_charger_4x", "2x gtocore:pm_chip", "4x gtocore:uiv_voltage_coil", "gtceu:echoite_quadruple_wire")
        .inputFluids("gtceu:mutated_living_solder 1296", "gtocore:gelid_cryotheum 576", "gtceu:echo_shard 2304", "gtceu:infuscolium 1296")
        .itemOutputs("gtocore:dyson_receiver_casing")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    const lasers = [["iv", "4x gtceu:platinum_single_cable", 7680],
    ["luv", "4x gtceu:niobium_titanium_single_cable", 30720],
    ["zpm", "4x gtceu:vanadium_gallium_single_cable", 122880],
    ["uv", "4x gtceu:yttrium_barium_cuprate_single_cable", 491520],
    ["uhv", "4x gtceu:europium_single_cable", 1966080],
    ["uev", "4x gtceu:mithril_single_cable", 7864320],
    ["uiv", "4x gtceu:neutronium_single_cable", 34257280],
    ["uxv", "4x gtceu:taranium_single_cable", 125829120],
    ["opv", "4x gtceu:crystal_matrix_single_cable", 503316480]]

    lasers.forEach(laser => {
        for (let index = 0; index < 5; index++) {
            gtr.assembler("gtocore:" + laser[0] + "_" + 16384 * (4 ** index) + "a_laser_target_hatch")
                .itemInputs("gtceu:" + laser[0] + "_machine_hull",
                    8 * (2 ** index) + "x gtceu:diamond_lens",
                    8 * (2 ** index) + "x gtceu:" + laser[0] + "_sensor",
                    8 * (2 ** index) + "x gtceu:" + laser[0] + "_electric_pump",
                    laser[1])
                .itemOutputs("gtocore:" + laser[0] + "_" + 16384 * (4 ** index) + "a_laser_target_hatch")
                .circuit(4 + index)
                .EUt(laser[2])
                .duration(2400 * (2 ** index))

            gtr.assembler("gtocore:" + laser[0] + "_" + 16384 * (4 ** index) + "a_laser_source_hatch")
                .itemInputs("gtceu:" + laser[0] + "_machine_hull",
                    8 * (2 ** index) + "x gtceu:diamond_lens",
                    8 * (2 ** index) + "x gtceu:" + laser[0] + "_emitter",
                    8 * (2 ** index) + "x gtceu:" + laser[0] + "_electric_pump",
                    laser[1])
                .itemOutputs("gtocore:" + laser[0] + "_" + 16384 * (4 ** index) + "a_laser_source_hatch")
                .circuit(4 + index)
                .EUt(laser[2])
                .duration(2400 * (2 ** index))
        }
    })
    for (let index = 0; index < 8; index++) {
        gtr.assembler("gtocore:max_" + 256 * (4 ** index) + "a_laser_target_hatch")
            .itemInputs("gtceu:max_machine_hull",
                (2 ** index) + "x gtceu:diamond_lens",
                (2 ** index) + "x gtocore:max_sensor",
                (2 ** index) + "x gtocore:max_electric_pump",
                "4x gtceu:cosmic_neutronium_single_cable")
            .itemOutputs("gtocore:max_" + 256 * (4 ** index) + "a_laser_target_hatch")
            .circuit(1 + index)
            .EUt(GTValues.VA[GTValues.MAX])
            .duration(300 * (2 ** index))

        gtr.assembler("gtocore:max_" + 256 * (4 ** index) + "a_laser_source_hatch")
            .itemInputs("gtceu:max_machine_hull",
                (2 ** index) + "x gtceu:diamond_lens",
                (2 ** index) + "x gtocore:max_emitter",
                (2 ** index) + "x gtocore:max_electric_pump",
                "4x gtceu:cosmic_neutronium_single_cable")
            .itemOutputs("gtocore:max_" + 256 * (4 ** index) + "a_laser_source_hatch")
            .circuit(1 + index)
            .EUt(GTValues.VA[GTValues.MAX])
            .duration(300 * (2 ** index))
    }

    const coils = [
        ["uhv", "1966080", "abyssalalloy", "europium", "tritanium"],
        ["uev", "7864320", "titansteel", "mithril", "abyssalalloy"]
    ]
    coils.forEach((coil) => {
        gtr.assembler("gtocore:" + coil[0] + "_voltage_coil")
            .itemInputs("gtocore:magnetic_netherite_rod", "16x gtceu:fine_" + coil[2] + "_wire")
            .itemOutputs("gtocore:" + coil[0] + "_voltage_coil")
            .EUt(coil[1])
            .duration(200)
            .circuit(1)
        gtr.assembler("gtocore:" + coil[2] + "_coil_block")
            .itemInputs("8x gtceu:" + coil[2] + "_double_wire", "8x gtceu:" + coil[3] + "_foil")
            .inputFluids("gtceu:" + coil[4] + " 144")
            .itemOutputs("gtocore:" + coil[2] + "_coil_block")
            .EUt(coil[1])
            .duration(800)
    })
    const coilas = [
        ["uiv", "31457280", "adamantine", "neutronium", "titansteel"],
        ["uxv", "125829120", "naquadriatictaranium", "taranium", "adamantine"],
        ["opv", "503316480", "starmetal", "crystal_matrix", "naquadriatictaranium"]
    ]
    coilas.forEach((coil) => {
        gtr.assembler("gtocore:" + coil[0] + "_voltage_coil")
            .itemInputs("gtceu:attuned_tengam_rod", "16x gtceu:fine_" + coil[2] + "_wire")
            .itemOutputs("gtocore:" + coil[0] + "_voltage_coil")
            .EUt(coil[1])
            .duration(200)
            .circuit(1)
        gtr.assembler("gtocore:" + coil[2] + "_coil_block")
            .itemInputs("8x gtceu:" + coil[2] + "_double_wire", "8x gtceu:" + coil[3] + "_foil")
            .inputFluids("gtceu:" + coil[4] + " 144")
            .itemOutputs("gtocore:" + coil[2] + "_coil_block")
            .EUt(coil[1])
            .duration(800)
    })
    gtr.assembler("gtocore:max_voltage_coil")
        .itemInputs("gtceu:attuned_tengam_rod", "16x gtceu:fine_cosmic_neutronium_wire")
        .itemOutputs("gtocore:max_voltage_coil")
        .EUt(2013265920)
        .duration(200)
        .circuit(1)

    const robots = [["uv", "1", "uhv", "1966080"], ["uhv", "2", "uev", "7864320"], ["uev", "3", "uiv", "31457280"], ["uiv", "4", "uxv", "125829120"], ["uxv", "5", "opv", "503316480"]]

    robots.forEach((robot) => {
        gtr.assembler("gtocore:precision_circuit_assembly_robot_mk" + robot[1])
            .itemInputs("2x gtceu:" + robot[0] + "_robot_arm", "gtceu:" + robot[0] + "_sensor", "4x #gtceu:circuits/" + robot[2], "gtceu:silver_nanites", "2x gtceu:pikyonium_plate")
            .inputFluids("gtceu:soldering_alloy 1440")
            .itemOutputs("gtocore:precision_circuit_assembly_robot_mk" + robot[1])
            .EUt(robot[3])
            .duration(400)
    })

    gtr.assembler("gtocore:inverter")
        .itemInputs("4x gtceu:polyethylene_plate", "4x gtceu:ilc_chip", "2x gtceu:exquisite_quartzite_gem", "gtceu:computer_monitor_cover", "#gtceu:circuits/ev", "4x gtceu:diode", "8x gtceu:aluminium_single_wire")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs("gtocore:inverter")
        .EUt(120)
        .duration(200)

    tiers.forEach(i => {
        gtr.assembler("gtocore:" + i[0] + "_neutron_accelerator")
            .itemInputs("gtceu:" + i[0] + "_machine_hull", "gtocore:inverter", i[1] === 0 || i[1] === 14 ? "2x gtocore:" + i[0] + "_electric_motor" : "2x gtceu:" + i[0] + "_electric_motor", "gtceu:double_beryllium_plate", "2x gtceu:polyvinyl_chloride_plate")
            .itemOutputs("gtocore:" + i[0] + "_neutron_accelerator")
            .inputFluids("gtceu:polonium 288")
            .EUt(30)
            .duration(400)
    })

    gtr.assembler("gtocore:ulv_huge_item_import_bus")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemInputs("gtceu:ulv_input_bus", "gtocore:ulv_robot_arm", "gtceu:bronze_crate", "4x #gtceu:circuits/ulv", "4x gtceu:wrought_iron_plate")
        .itemOutputs("gtmthings:ulv_huge_item_import_bus")
        .EUt(7)
        .duration(200)

    gtr.assembler("gtocore:ulv_huge_item_export_bus")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemInputs("gtceu:ulv_output_bus", "gtocore:ulv_robot_arm", "gtceu:bronze_crate", "4x #gtceu:circuits/ulv", "4x gtceu:wrought_iron_plate")
        .itemOutputs("gtmthings:ulv_huge_item_export_bus")
        .EUt(7)
        .duration(200)

    gtr.assembler("gtocore:magneto_hydro_dynamically_con_strained_star_matter_helmet")
        .notConsumable("gtceu:spacetime_nanites")
        .notConsumable("gtceu:cosmic_neutronium_nanites")
        .itemInputs("50x gtceu:magneto_hydro_dynamically_con_strained_star_matter_ingot", "gtocore:command_block_core")
        .itemOutputs("kubejs:magneto_hydro_dynamically_con_strained_star_matter_helmet")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .circuit(1)
        .duration(200)

    gtr.assembler("gtocore:magneto_hydro_dynamically_con_strained_star_matter_chestplate")
        .notConsumable("gtceu:spacetime_nanites")
        .notConsumable("gtceu:cosmic_neutronium_nanites")
        .itemInputs("80x gtceu:magneto_hydro_dynamically_con_strained_star_matter_ingot", "gtocore:command_block_core")
        .itemOutputs("kubejs:magneto_hydro_dynamically_con_strained_star_matter_chestplate")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .circuit(2)
        .duration(200)

    gtr.assembler("gtocore:magneto_hydro_dynamically_con_strained_star_matter_leggings")
        .notConsumable("gtceu:spacetime_nanites")
        .notConsumable("gtceu:cosmic_neutronium_nanites")
        .itemInputs("70x gtceu:magneto_hydro_dynamically_con_strained_star_matter_ingot", "gtocore:command_block_core")
        .itemOutputs("kubejs:magneto_hydro_dynamically_con_strained_star_matter_leggings")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .circuit(3)
        .duration(200)

    gtr.assembler("gtocore:magneto_hydro_dynamically_con_strained_star_matter_boots")
        .notConsumable("gtceu:spacetime_nanites")
        .notConsumable("gtceu:cosmic_neutronium_nanites")
        .itemInputs("40x gtceu:magneto_hydro_dynamically_con_strained_star_matter_ingot", "gtocore:command_block_core")
        .itemOutputs("kubejs:magneto_hydro_dynamically_con_strained_star_matter_boots")
        .EUt(65536 * GTValues.VA[GTValues.MAX])
        .circuit(4)
        .duration(200)

    gtr.assembler("gtocore:neutronium_gearbox")
        .itemInputs("4x gtceu:neutronium_plate", "2x gtceu:neutronium_gear", "gtceu:neutronium_frame")
        .itemOutputs("2x gtocore:neutronium_gearbox")
        .EUt(16)
        .duration(50)
        .circuit(4)

    gtr.assembler("gtocore:space_elevator_mechanical_casing")
        .itemInputs("gtceu:hssg_frame", "6x gtceu:inconel_792_plate", "6x gtceu:double_pikyonium_plate")
        .itemOutputs("2x gtocore:space_elevator_mechanical_casing")
        .EUt(16)
        .duration(50)
        .circuit(6)

    gtr.assembler("gtocore:extreme_strength_tritanium_casing")
        .itemInputs("gtceu:tritanium_frame", "6x gtceu:tritanium_plate")
        .itemOutputs("2x gtocore:extreme_strength_tritanium_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtocore:aluminium_bronze_casing")
        .itemInputs("gtceu:aluminium_bronze_frame", "6x gtceu:aluminium_bronze_plate")
        .itemOutputs("2x gtocore:aluminium_bronze_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtocore:hyper_mechanical_casing")
        .itemInputs("gtceu:naquadah_alloy_frame", "6x gtceu:naquadria_plate")
        .itemOutputs("2x gtocore:hyper_mechanical_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtocore:enhance_hyper_mechanical_casing")
        .itemInputs("gtceu:naquadria_frame", "2x gtceu:double_naquadah_alloy_plate", "2x gtceu:double_naquadah_plate", "2x gtceu:double_enriched_naquadah_plate")
        .itemOutputs("2x gtocore:enhance_hyper_mechanical_casing")
        .inputFluids("gtceu:naquadria 576")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtocore:antifreeze_heatproof_machine_casing")
        .itemInputs("gtceu:inconel_792_frame", "2x gtceu:double_hsse_plate", "4x gtceu:double_rhodium_plated_palladium_plate")
        .itemOutputs("2x gtocore:antifreeze_heatproof_machine_casing")
        .EUt(16)
        .duration(50)
        .circuit(6)

    gtr.assembler("gtocore:pikyonium_machine_casing")
        .itemInputs("gtceu:hastelloy_x_frame", "6x gtceu:pikyonium_plate")
        .itemOutputs("2x gtocore:pikyonium_machine_casing")
        .EUt(16)
        .duration(50)
        .circuit(6)

    gtr.assembler("gtocore:oxidation_resistant_hastelloy_n_mechanical_casing")
        .itemInputs("gtceu:hastelloy_n_frame", "6x gtceu:hastelloy_n_plate")
        .itemOutputs("2x gtocore:oxidation_resistant_hastelloy_n_mechanical_casing")
        .EUt(16)
        .duration(50)
        .circuit(6)

    gtr.assembler("gtocore:atomic_casing")
        .itemInputs("gtceu:naquadah_alloy_frame", "2x gtceu:abyssalalloy_plate", "4x gtceu:enriched_naquadah_plate")
        .itemOutputs("2x gtceu:atomic_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtocore:lafium_mechanical_casing")
        .itemInputs("gtceu:enriched_naquadah_frame", "6x gtceu:lafium_plate")
        .itemOutputs("2x gtocore:lafium_mechanical_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtocore:echo_casing")
        .itemInputs("gtceu:europium_frame", "gtocore:reinforced_echo_shard", "6x gtceu:double_hsse_plate")
        .itemOutputs("2x gtocore:echo_casing")
        .circuit(6)
        .EUt(30)
        .duration(200)

    gtr.assembler("gtocore:naquadah_alloy_casing")
        .itemInputs("gtceu:naquadah_alloy_frame", "6x gtceu:naquadah_alloy_plate")
        .circuit(6)
        .itemOutputs("gtocore:naquadah_alloy_casing")
        .EUt(16)
        .duration(50)

    gtr.assembler("gtocore:supercritical_turbine_casing")
        .itemInputs("gtceu:tungstensteel_turbine_casing", "2x gtceu:mar_m_200_steel_rod", "gtceu:mar_m_200_steel_gear", "6x gtceu:mar_m_200_steel_plate")
        .itemOutputs("gtocore:supercritical_turbine_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtocore:fission_reactor_casing")
        .itemInputs("gtceu:vanadium_steel_frame", "6x gtceu:lead_plate", "6x gtceu:reactor_steel_plate")
        .itemOutputs("2x gtocore:fission_reactor_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtocore:strengthen_the_base_block")
        .itemInputs("gtceu:titanium_frame")
        .itemInputs("6x gtceu:tungsten_plate")
        .itemOutputs("2x gtocore:strengthen_the_base_block")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtocore:pbi_radiation_resistant_mechanical_enclosure")
        .itemInputs("gtceu:tungsten_frame")
        .itemInputs("6x gtceu:polybenzimidazole_plate")
        .itemOutputs("2x gtocore:pbi_radiation_resistant_mechanical_enclosure")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtocore:reinforced_epoxy_resin_mechanical_housing")
        .itemInputs("gtceu:invar_frame")
        .itemInputs("6x gtceu:reinforced_epoxy_resin_plate")
        .itemOutputs("2x gtocore:reinforced_epoxy_resin_mechanical_housing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtocore:peek_wear_resistant_mechanical_housing")
        .itemInputs("gtceu:steel_frame")
        .itemInputs("6x gtceu:polyetheretherketone_plate")
        .itemOutputs("2x gtocore:peek_wear_resistant_mechanical_housing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtocore:pps_corrosion_resistant_mechanical_housing")
        .itemInputs("gtceu:polytetrafluoroethylene_frame")
        .itemInputs("6x gtceu:polyphenylene_sulfide_plate")
        .itemOutputs("2x gtocore:pps_corrosion_resistant_mechanical_housing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtocore:pvc_plastic_mechanical_housing")
        .itemInputs("gtceu:stainless_steel_frame")
        .itemInputs("6x gtceu:polyvinyl_chloride_plate")
        .itemOutputs("2x gtocore:pvc_plastic_mechanical_housing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtocore:mc_nylon_tensile_mechanical_shell")
        .itemInputs("gtceu:blue_steel_frame")
        .itemInputs("6x gtceu:polycaprolactam_plate")
        .itemOutputs("2x gtocore:mc_nylon_tensile_mechanical_shell")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtocore:compressor_controller_casing")
        .itemInputs("gtceu:aluminium_bronze_frame")
        .itemInputs("4x gtceu:titanium_plate")
        .itemInputs("2x gtceu:double_steel_plate")
        .itemOutputs("2x gtocore:compressor_controller_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtocore:sterile_casing")
        .itemInputs("gtceu:wood_frame")
        .itemInputs("4x gtceu:treated_wood_planks")
        .itemInputs("8x gtceu:brass_screw")
        .itemInputs("2x gtceu:brass_plate")
        .itemOutputs("2x gtocore:sterile_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtocore:reinforced_wood_casing")
        .itemInputs("gtceu:treated_wood_frame")
        .itemInputs("8x gtceu:tin_alloy_screw")
        .itemInputs("2x gtceu:tin_alloy_plate")
        .itemInputs("4x gtceu:treated_wood_plate")
        .itemOutputs("2x gtocore:reinforced_wood_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtocore:compressor_pipe_casing")
        .itemInputs("gtceu:titanium_pipe_casing")
        .itemInputs("4x gtceu:potin_plate")
        .itemInputs("6x ad_astra:steel_plate")
        .itemOutputs("2x gtocore:compressor_pipe_casing")
        .EUt(30)
        .duration(100)

    gtr.assembler("gtocore:laser_casing")
        .itemInputs("gtceu:iridium_frame")
        .itemInputs("2x gtceu:double_osmiridium_plate")
        .itemInputs("4x gtceu:double_osmium_plate")
        .itemOutputs("2x gtocore:laser_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtocore:magtech_casing")
        .itemInputs("gtceu:tungsten_frame")
        .itemInputs("2x gtceu:nichrome_plate")
        .itemInputs("4x gtceu:indium_tin_barium_titanium_cuprate_plate")
        .itemInputs("2x gtceu:hsss_plate")
        .itemOutputs("2x gtocore:magtech_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtocore:industrial_steam_casing")
        .itemInputs("gtceu:bronze_frame")
        .itemInputs("6x gtceu:brass_plate")
        .itemOutputs("2x gtceu:industrial_steam_casing")
        .circuit(6)
        .EUt(16)
        .duration(50)

    gtr.assembler("gtocore:cooler")
        .itemInputs("gtocore:fission_reactor_casing", "2x gtceu:annealed_copper_hex_wire", "8x gtceu:vanadium_steel_tiny_fluid_pipe", "4x gtceu:stainless_steel_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("gtocore:cooler")
        .EUt(120)
        .duration(200)

    gtr.assembler("gtocore:fission_fuel_assembly")
        .itemInputs("gtceu:graphite_block", "4x gtceu:long_stainless_steel_rod", "4x gtceu:double_reactor_steel_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("gtocore:fission_fuel_assembly")
        .EUt(120)
        .duration(200)

    gtr.assembler("gtocore:manipulator")
        .itemInputs("2x gtceu:neutron_reflector", "4x #gtceu:circuits/uhv", "gtceu:uev_robot_arm", "32x gtceu:inconel_792_bolt", "16x gtceu:diamond_screw", "4x gtceu:double_iridium_plate", "8x gtceu:double_zeron_100_plate")
        .inputFluids("gtceu:mutated_living_solder 576")
        .itemOutputs("gtocore:manipulator")
        .EUt(30720)
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:stellar_containment_casing")
        .itemInputs("gtceu:trinium_frame", "16x gtceu:trinium_screw", "gtceu:uv_field_generator", "gtceu:yttrium_barium_cuprate_quadruple_wire", "4x gtceu:naquadah_alloy_rod", "4x gtceu:double_high_durability_compound_steel_plate")
        .inputFluids("gtceu:neutronium 144")
        .itemOutputs("gtocore:stellar_containment_casing")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(140)

    gtr.assembler("gtocore:naquadria_charge")
        .itemInputs("gtceu:black_steel_frame", "gtceu:dynamite", "4x gtceu:titanium_bolt", "gtceu:hmxexplosive_dust", "gtceu:naquadria_dust", "gtceu:uranium_plate", "gtceu:osmium_bolt", "gtceu:hexanitrohexaaxaisowurtzitane_dust", "gtceu:thorium_plate")
        .inputFluids("gtceu:glyceryl_trinitrate 500")
        .itemOutputs("gtocore:naquadria_charge")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)

    gtr.assembler("gtocore:dimensionally_transcendent_casing")
        .itemInputs("gtceu:mithril_frame", "2x gtocore:dimension_injection_casing", "2x gtocore:molecular_casing", "gtceu:iv_quantum_chest", "gtceu:iv_quantum_tank", "12x gtceu:adamantium_bolt", "gtceu:enderite_single_wire", "6x gtceu:palladium_plate", "6x gtceu:osmiridium_plate")
        .itemOutputs("2x gtocore:dimensionally_transcendent_casing")
        .inputFluids("gtceu:liquid_degenerate_rhenium 200")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

    gtr.assembler("gtocore:dimension_connection_casing")
        .itemInputs("gtceu:draconium_frame", "gtocore:dimensional_bridge_casing", "gtceu:periodicium_block", "8x gtceu:double_mithril_plate", "4x gtceu:cosmic_plate", "2x gtceu:double_shirabon_plate")
        .itemOutputs("gtocore:dimension_connection_casing")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.assembler("gtocore:uruium_coil_block")
        .itemInputs("64x gtceu:uruium_double_wire", "64x gtceu:uruium_double_wire", "16x gtceu:neutronium_ring", "32x gtceu:vibramantium_bolt", "64x gtceu:black_steel_foil", "64x gtceu:cupronickel_foil", "64x gtceu:ruthenium_trinium_americium_neutronate_foil", "64x gtceu:hssg_foil", "64x gtceu:styrene_butadiene_rubber_foil")
        .itemOutputs("gtocore:uruium_coil_block")
        .inputFluids("gtceu:molybdenum 576")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)

    gtr.assembler("gtocore:graviton_field_constraint_casing")
        .itemInputs("gtceu:draconium_frame", "gtocore:annihilation_constrainer", "gtceu:neutronium_nanites", "gtceu:celestial_tungsten_gear", "4x gtceu:double_adamantium_plate")
        .inputFluids("gtceu:neutronium 288")
        .itemOutputs("2x gtocore:graviton_field_constraint_casing")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    gtr.assembler("gtocore:accelerated_pipeline")
        .itemInputs("gtceu:europium_quadruple_fluid_pipe", "2x gtceu:luv_voltage_coil", "#gtceu:circuits/luv", "gtceu:niobium_nitride_single_cable", "gtceu:copper76_dust", "gtceu:double_neodymium_plate")
        .itemOutputs("gtocore:accelerated_pipeline")
        .inputFluids("gtceu:soldering_alloy 288")
        .duration(400)
        .EUt(GTValues.VA[GTValues.IV])
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:force_field_glass")
        .itemInputs("gtceu:laminated_glass", "gtceu:uhv_field_generator", "4x gtceu:long_naquadah_alloy_rod", "2x gtceu:long_mithril_rod", "4x gtceu:double_uranium_rhodium_dinaquadide_plate", "2x gtceu:double_naquadah_alloy_plate")
        .inputFluids("gtceu:mutated_living_solder 1296")
        .itemOutputs("gtocore:force_field_glass")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:molecular_casing")
        .itemInputs("gtceu:high_power_casing", "4x gtceu:double_battery_alloy_plate", "gtceu:iv_emitter", "24x gtceu:darmstadtium_ring", "12x gtceu:tungsten_foil", "12x gtceu:ruridit_foil", "24x gtceu:tungsten_steel_foil", "6x gtceu:rhodium_plate", "4x gtceu:double_ruthenium_plate")
        .inputFluids("gtceu:niobium_nitride 864")
        .itemOutputs("gtocore:molecular_casing")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:spacetime_assembly_line_casing")
        .itemInputs("gtceu:assembly_line_casing", "gtceu:uhv_emitter", "4x gtceu:uev_electric_motor", "2x gtceu:uev_conveyor_module", "2x gtceu:uev_electric_piston", "2x #gtceu:circuits/uev", "8x gtceu:double_zinc_plate")
        .inputFluids("gtceu:liquid_degenerate_rhenium 200")
        .itemOutputs("gtocore:spacetime_assembly_line_casing")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:module_connector")
        .itemInputs("64x gtceu:hv_item_passthrough_hatch", "64x gtceu:hv_fluid_passthrough_hatch", "2x #gtceu:circuits/zpm", "4x gtceu:trinium_single_cable", "16x gtceu:double_manganese_plate", "64x gtceu:double_technetium_plate")
        .itemOutputs("gtocore:module_connector")
        .inputFluids("gtceu:soldering_alloy 2880")
        .EUt(122880)
        .duration(400)

    gtr.assembler("gtocore:module_base")
        .itemInputs("gtocore:high_strength_concrete", "4x gtceu:technetium_plate", "4x gtceu:osmium_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("gtocore:module_base")
        .EUt(480)
        .duration(400)

    gtr.assembler("gtocore:laser_cooling_casing")
        .itemInputs("gtceu:hsse_frame", "gtocore:laser_cooling_unit", "2x gtocore:uhv_voltage_coil", "6x gtceu:zirconium_carbide_plate", "2x gtceu:double_fluxed_electrum_plate", "4x gtceu:double_zeron_100_plate")
        .inputFluids("gtceu:soldering_alloy 576")
        .itemOutputs("gtocore:laser_cooling_casing")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    gtr.assembler("gtocore:space_elevator_support")
        .itemInputs("gtceu:naquadah_frame", "4x gtceu:red_steel_rod", "6x gtceu:black_steel_plate")
        .inputFluids("gtceu:concrete 1152")
        .itemOutputs("2x gtocore:space_elevator_support")
        .EUt(480)
        .duration(400)

    gtr.assembler("gtocore:space_elevator_internal_support")
        .itemInputs("gtceu:naquadah_frame", "2x gtceu:niobium_titanium_single_wire", "16x gtceu:fine_annealed_copper_wire", "#gtceu:circuits/luv", "6x gtceu:double_iridium_plate")
        .inputFluids("gtceu:concrete 1152")
        .itemOutputs("2x gtocore:space_elevator_internal_support")
        .EUt(480)
        .duration(400)

    gtr.assembler("gtocore:magic_core")
        .itemInputs("8x gtceu:double_stellite_100_plate", "gtocore:bose_einstein_cooling_container", "minecraft:conduit", "8x gtceu:double_enderium_plate")
        .itemOutputs("gtocore:magic_core")
        .inputFluids("gtceu:mutated_living_solder 576")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)

    gtr.assembler("gtocore:hyper_core")
        .itemInputs("16x gtceu:high_durability_compound_steel_screw", "4x gtceu:naquadria_frame", "4x gtceu:naquadria_plate", "2x gtceu:uev_field_generator", "gtceu:naquadah_nanites", "gtceu:uev_sensor", "gtceu:uev_emitter", "#gtceu:circuits/uev")
        .inputFluids("gtceu:mutated_living_solder 288")
        .itemOutputs("gtocore:hyper_core")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:annihilate_core")
        .itemInputs("gtceu:quantum_chromo_dynamically_confined_matter_frame", "gtocore:graviton_transducer", "gtocore:topological_manipulator_unit", "gtceu:uxv_field_generator", "2x #gtceu:circuits/uxv", "4x gtceu:double_cinobite_plate")
        .inputFluids("gtceu:super_mutated_living_solder 1296")
        .itemOutputs("gtocore:annihilate_core")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:degenerate_rhenium_constrained_casing")
        .circuit(6)
        .itemInputs("gtceu:quantanium_frame", "6x gtceu:degenerate_rhenium_plate")
        .itemOutputs("2x gtocore:degenerate_rhenium_constrained_casing")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)

    gtr.assembler("gtocore:rhenium_reinforced_energy_glass")
        .itemInputs("4x gtceu:fusion_glass", "6x gtceu:degenerate_rhenium_plate")
        .itemOutputs("2x gtocore:rhenium_reinforced_energy_glass")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)

    gtr.assembler("gtocore:dyson_deployment_magnet")
        .itemInputs("gtceu:uiv_energy_output_hatch", "4x gtceu:superconducting_coil", "8x gtocore:pm_chip", "4x #gtceu:circuits/uiv", "6x gtceu:neutronium_plate")
        .itemOutputs("gtocore:dyson_deployment_magnet")
        .inputFluids("gtceu:mutated_living_solder 1296")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)

    gtr.assembler("gtocore:sps_casing")
        .itemInputs("gtceu:zylon_block", "gtocore:restraint_device", "4x #gtceu:circuits/uev", "4x gtceu:small_quantanium_gear", "gtceu:neutronium_hex_cable", "32x gtceu:polyetheretherketone_foil")
        .inputFluids("gtceu:mutated_living_solder 576")
        .itemOutputs("gtocore:sps_casing")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)

    gtr.assembler("gtocore:neutron_sensor")
        .itemInputs("gtceu:iv_machine_hull", "gtceu:advanced_activity_detector_cover", "gtceu:computer_monitor_cover", "gtceu:vibrant_alloy_hex_wire", "#gtceu:circuits/ev", "2x gtceu:hv_sensor")
        .inputFluids("gtceu:helium 1000")
        .itemOutputs("gtocore:neutron_sensor")
        .EUt(1920)
        .duration(200)

    gtr.assembler("gtocore:neutron_activator")
        .itemInputs("gtceu:iv_machine_hull", "4x gtocore:hui_circuit_1", "#gtceu:circuits/iv", "2x gtceu:data_stick", "gtceu:ev_sensor", "2x gtceu:ev_emitter", "gtceu:uranium_235_block", "gtceu:polonium_block", "2x gtceu:neutron_reflector")
        .inputFluids("gtceu:stainless_steel 1296")
        .itemOutputs("gtocore:neutron_activator")
        .EUt(7680)
        .duration(200)

    gtr.assembler("gtocore:speeding_pipe")
        .itemInputs("ad_astra:fluid_pipe_duct", "gtceu:stainless_steel_huge_fluid_pipe", "16x gtceu:blue_alloy_rod", "#gtceu:circuits/ev", "32x gtceu:mercury_barium_calcium_cuprate_single_wire", "32x gtceu:beryllium_plate")
        .itemOutputs("gtocore:speeding_pipe")
        .inputFluids("gtceu:mar_m_200_steel 576")
        .EUt(1920)
        .duration(200)

    gtr.assembler("gtocore:process_machine_casing")
        .itemInputs("gtceu:solid_machine_casing", "2x #gtceu:circuits/iv", "gtceu:end_steel_quadruple_wire", "2x gtceu:double_stainless_steel_plate", "4x gtceu:double_mar_m_200_steel_plate")
        .inputFluids("gtceu:fall_king 576")
        .itemOutputs("gtocore:process_machine_casing")
        .EUt(7680)
        .duration(200)


    gtr.assembler("gtocore:advanced_stellar_containment_casing")
        .itemInputs("gtocore:stellar_containment_casing", "gtceu:uhv_field_generator", "8x gtceu:vibranium_screw", "gtceu:enderite_octal_wire", "4x gtceu:taranium_plate")
        .itemOutputs("gtocore:advanced_stellar_containment_casing")
        .inputFluids("gtceu:astral_titanium 144")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(280)

    gtr.assembler("gtocore:ultimate_stellar_containment_casing")
        .itemInputs("gtocore:advanced_stellar_containment_casing", "gtceu:uev_field_generator", "8x gtceu:vibramantium_screw", "gtceu:legendarium_quadruple_wire", "8x gtceu:heavy_quark_degenerate_matter_plate")
        .itemOutputs("gtocore:ultimate_stellar_containment_casing")
        .inputFluids("gtceu:celestial_tungsten 144")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(460)

    gtr.assembler("gtocore:component_assembly_line_casing_lv")
        .itemInputs("gtceu:steel_frame", "4x gtceu:dense_steel_plate", "2x gtceu:lv_field_generator", "6x gtceu:lv_electric_pump", "8x gtceu:lv_robot_arm", "10x gtceu:lv_sensor", "12x gtceu:lv_conveyor_module", "4x gtceu:steel_gear")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("gtocore:component_assembly_line_casing_lv")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(320)

    gtr.assembler("gtocore:component_assembly_line_casing_mv")
        .itemInputs("gtceu:aluminium_frame", "16x gtceu:double_aluminium_plate", "2x gtceu:mv_field_generator", "4x gtceu:mv_electric_pump", "4x gtceu:mv_robot_arm", "4x gtceu:mv_sensor", "6x gtceu:mv_conveyor_module")
        .inputFluids("gtceu:soldering_alloy 432")
        .itemOutputs("gtocore:component_assembly_line_casing_mv")
        .EUt(GTValues.VA[GTValues.MV])
        .duration(320)

    gtr.assembler("gtocore:component_assembly_line_casing_hv")
        .itemInputs("gtceu:stainless_steel_frame", "16x gtceu:double_stainless_steel_plate", "2x gtceu:hv_field_generator", "4x gtceu:hv_electric_pump", "4x gtceu:hv_robot_arm", "4x gtceu:hv_sensor", "6x gtceu:hv_conveyor_module", "4x gtceu:stainless_steel_gear")
        .inputFluids("gtceu:soldering_alloy 576")
        .itemOutputs("gtocore:component_assembly_line_casing_hv")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(320)

    gtr.assembler("gtocore:component_assembly_line_casing_ev")
        .itemInputs("gtceu:titanium_frame", "16x gtceu:double_titanium_plate", "2x gtceu:ev_field_generator", "4x gtceu:ev_electric_pump", "4x gtceu:ev_robot_arm", "4x gtceu:ev_sensor", "6x gtceu:ev_conveyor_module", "4x gtceu:titanium_gear")
        .inputFluids("gtceu:soldering_alloy 720")
        .itemOutputs("gtocore:component_assembly_line_casing_ev")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(320)

    gtr.assembler("gtocore:component_assembly_line_casing_iv")
        .itemInputs("gtceu:tungsten_steel_frame", "16x gtceu:double_tungsten_steel_plate", "2x gtceu:iv_field_generator", "4x gtceu:iv_electric_pump", "4x gtceu:iv_robot_arm", "4x gtceu:iv_sensor", "6x gtceu:iv_conveyor_module", "4x gtceu:tungsten_steel_gear")
        .inputFluids("gtceu:soldering_alloy 864")
        .itemOutputs("gtocore:component_assembly_line_casing_iv")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(320)

    gtr.assembler("gtocore:inconel_625_casing")
        .itemInputs("2x gtceu:ev_machine_hull", "4x gtceu:double_inconel_625_plate", "8x gtceu:double_hsse_plate", "16x gtceu:inconel_625_bolt")
        .inputFluids("gtceu:titanium 1152")
        .itemOutputs("2x gtocore:inconel_625_casing")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(480)

    gtr.assembler("gtocore:inconel_625_pipe")
        .itemInputs("2x gtceu:hsss_frame", "4x gtceu:double_inconel_625_plate", "8x gtceu:double_hsse_plate", "16x gtceu:inconel_625_bolt")
        .inputFluids("gtceu:soldering_alloy 1152")
        .itemOutputs("2x gtocore:inconel_625_pipe")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(480)

    gtr.assembler("gtocore:inconel_625_gearbox")
        .itemInputs("gtceu:hsse_frame", "3x gtceu:inconel_625_gear", "6x gtceu:small_hsss_gear", "16x gtceu:hssg_bolt", "2x gtceu:tungsten_grinding_head")
        .inputFluids("gtceu:zeron_100 576")
        .itemOutputs("2x gtocore:inconel_625_gearbox")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)

    gtr.assembler("gtocore:hastelloy_n_75_casing")
        .itemInputs("2x gtceu:ev_machine_hull", "4x gtceu:double_nichrome_plate", "4x gtceu:double_watertight_steel_plate", "2x gtceu:long_hssg_rod", "16x gtceu:hastelloy_n_75_bolt")
        .inputFluids("gtceu:stainless_steel 1152")
        .itemOutputs("2x gtocore:hastelloy_n_75_casing")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(500)

    gtr.assembler("gtocore:hastelloy_n_75_gearbox")
        .itemInputs("gtceu:hssg_frame", "4x gtceu:double_hssg_plate", "3x gtceu:hastelloy_n_75_gear", "6x gtceu:hastelloy_n_75_gear", "16x gtceu:tungsten_carbide_bolt")
        .inputFluids("gtceu:hastelloy_x 576")
        .itemOutputs("2x gtocore:hastelloy_n_75_gearbox")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(280)

    gtr.assembler("gtocore:hastelloy_n_75_pipe")
        .itemInputs("gtceu:watertight_steel_frame", "6x gtceu:double_hastelloy_n_75_plate", "4x gtceu:tungsten_steel_small_fluid_pipe")
        .inputFluids("gtceu:soldering_alloy 1152")
        .itemOutputs("2x gtocore:hastelloy_n_75_pipe")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(480)

    gtr.assembler("gtocore:red_steel_casing")
        .circuit(6)
        .itemInputs("gtceu:hsla_steel_frame", "2x gtceu:titanium_carbide_plate", "4x gtceu:double_red_steel_plate")
        .itemOutputs("2x gtocore:red_steel_casing")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(600)

    gtr.assembler("gtocore:advanced_fusion_coil")
        .itemInputs("gtocore:improved_superconductor_coil", "2x gtceu:luv_field_generator", "gtceu:iv_electric_pump", "4x gtceu:neutron_reflector", "gtocore:hui_circuit_2", "4x #gtceu:circuits/luv", "gtceu:naquadah_normal_fluid_pipe", "4x gtceu:duranium_plate")
        .inputFluids("gtceu:yttrium_barium_cuprate 576")
        .itemOutputs("gtocore:advanced_fusion_coil")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:fusion_coil_mk2")
        .itemInputs("gtocore:compressed_fusion_coil_mk2_prototype", "2x gtceu:zpm_field_generator", "gtceu:luv_electric_pump", "4x gtceu:neutron_reflector", "gtocore:hui_circuit_3", "4x #gtceu:circuits/zpm", "gtceu:naquadah_large_fluid_pipe", "4x gtceu:dubnium_plate")
        .inputFluids("gtceu:yttrium_barium_cuprate 576")
        .itemOutputs("gtocore:fusion_coil_mk2")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:fusion_casing_mk4")
        .itemInputs("gtceu:uhv_machine_casing", "gtocore:advanced_fusion_coil", "2x gtocore:uhv_voltage_coil", "2x gtocore:hui_circuit_4", "gtceu:uv_field_generator", "6x gtceu:orichalcum_plate")
        .inputFluids("gtceu:polybenzimidazole 1152")
        .itemOutputs("2x gtocore:fusion_casing_mk4")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:fusion_casing_mk5")
        .itemInputs("gtceu:uev_machine_casing", "gtocore:fusion_coil_mk2", "2x gtocore:uev_voltage_coil", "2x gtocore:hui_circuit_5", "gtceu:uhv_field_generator", "6x gtceu:seaborgium_plate")
        .inputFluids("gtceu:polybenzimidazole 2304")
        .itemOutputs("2x gtocore:fusion_casing_mk5")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:nuke_bomb")
        .itemInputs("gtceu:industrial_tnt", "#gtceu:circuits/ev", "4x gtceu:uranium_235_nugget", "gtocore:reactor_uranium_simple", "gtceu:reactor_steel_plate")
        .itemOutputs("gtocore:nuke_bomb")
        .duration(200)
        .EUt(480)

    gtr.assembler("gtocore:naquadria_charge_a")
        .itemInputs("gtceu:quantum_star", "gtocore:nuke_bomb", "gtceu:naquadria_dust", "4x gtceu:tiny_hexanitrohexaaxaisowurtzitane_dust", "gtceu:double_thorium_plate")
        .inputFluids("gtceu:antimatter 1")
        .itemOutputs("64x gtocore:naquadria_charge")
        .duration(200)
        .EUt(GTValues.VA[GTValues.OpV])

    gtr.assembler("gtocore:leptonic_charge")
        .itemInputs("gtceu:gravi_star", "gtocore:nuke_bomb", "gtceu:degenerate_rhenium_dust", "2x gtceu:small_hexanitrohexaaxaisowurtzitane_dust", "gtceu:double_enderium_plate")
        .inputFluids("gtceu:antimatter 10")
        .itemOutputs("64x gtocore:leptonic_charge")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MAX])

    gtr.assembler("gtocore:quantum_chromodynamic_charge")
        .notConsumable("gtceu:eternity_nanites")
        .itemInputs("gtocore:unstable_star", "gtocore:leptonic_charge", "gtocore:quantumchromodynamic_protective_plating")
        .inputFluids("gtceu:antimatter 100")
        .itemOutputs("64x gtocore:quantum_chromodynamic_charge")
        .duration(200)
        .EUt(4 * GTValues.VA[GTValues.MAX])

    gtr.assembler("gtocore:conversion_simulate_card")
        .itemInputs("enderio:skeletal_contractor", "gtocore:draconium_block_charged", "4x enderio:vibrant_gear", "8x #gtceu:circuits/uv", "4x gtceu:double_technetium_plate")
        .inputFluids("gtceu:indium 288")
        .itemOutputs("gtocore:conversion_simulate_card")
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV])

    gtr.assembler("gtocore:protonated_fullerene_sieving_matrix")
        .itemInputs("50x gtceu:fluorocarborane_dust", "6x gtceu:fine_carbon_nanotubes_wire", "gtceu:fullerene_dust")
        .inputFluids("gtceu:perfluorobenzene 2000")
        .itemOutputs("gtocore:protonated_fullerene_sieving_matrix")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(350)

    gtr.assembler("gtocore:highly_dense_polymer_plate")
        .itemInputs("gtceu:carbon_nanotubes_plate", "gtceu:double_cosmic_neutronium_plate", "gtceu:fullerene_polymer_matrix_pulp_plate")
        .inputFluids("gtceu:neutronium_doped_nanotubes 2000")
        .itemOutputs("gtocore:highly_dense_polymer_plate")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(350)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:low_frequency_laser")
        .itemInputs("gtceu:red_garnet_rod", "gtocore:red_halide_lamp", "gtocore:highly_reflective_mirror", "kubejs:non_linear_optical_lens", "gtocore:smd_diode_optical")
        .itemOutputs("gtocore:low_frequency_laser")
        .inputFluids("gtceu:soldering_alloy 576")
        .EUt(491520)
        .duration(320)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:electron_source")
        .itemInputs("gtceu:mendelevium_plate", "gtceu:radium_dust", "6x gtceu:polyetheretherketone_plate", "4x gtceu:polybenzimidazole_plate", "4x ad_astra:steel_plate")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs("gtocore:electron_source")
        .EUt(750000)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:rotating_transparent_surface")
        .itemInputs("4x gtceu:graphene_plate", "gtceu:uhv_electric_motor")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs("gtocore:rotating_transparent_surface")
        .EUt(1250000)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:microfocus_x_ray_tube")
        .itemInputs("4x gtceu:fine_enderium_wire", "gtceu:echoite_rod", "gtceu:glass_tube", "gtceu:double_palladium_plate")
        .itemOutputs("gtocore:microfocus_x_ray_tube")
        .EUt(8000)
        .duration(160)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:grating_lithography_mask")
        .itemInputs("gtocore:lithography_mask", "gtceu:glass_lens")
        .itemOutputs("gtocore:grating_lithography_mask")
        .EUt(1920)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:ultrashort_pulse_laser")
        .itemInputs("4x gtocore:diffractor_grating_mirror", "8x gtceu:fine_borosilicate_glass_wire", "gtocore:high_frequency_laser", "2x gtocore:insulation_wire_assembly", "gtceu:yellow_garnet_rod", "gtceu:lapis_rod", "gtceu:exquisite_olivine_gem", "gtceu:ev_emitter", "gtceu:double_platinum_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("gtocore:ultrashort_pulse_laser")
        .EUt(45000000)
        .duration(270)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:insulation_wire_assembly")
        .itemInputs("gtceu:reinforced_epoxy_resin_rod", "gtocore:aerographene", "gtocore:highly_insulating_foil", "gtocore:memory_foam_block", "gtceu:fullerene_polymer_matrix_pulp_foil")
        .inputFluids("gtceu:polyimide 144")
        .itemOutputs("gtocore:insulation_wire_assembly")
        .EUt(480)
        .duration(200)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.assembler("gtocore:graviton_transducer")
        .itemInputs("2x gtocore:quantumchromodynamic_protective_plating", "gtocore:contained_reissner_nordstrom_singularity", "gtocore:microwormhole_generator", "gtocore:dark_matter", "gtceu:uiv_sensor")
        .inputFluids("gtceu:neutronium 144")
        .itemOutputs("gtocore:graviton_transducer")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:cryogenic_interface")
        .itemInputs("gtceu:double_graphene_plate", "8x gtceu:graphene_foil", "gtceu:fine_trinium_titanium_wire", "8x gtceu:mendelevium_foil", "2x gtceu:zirconium_carbide_plate")
        .inputFluids("gtceu:zylon 72")
        .itemOutputs("gtocore:cryogenic_interface")
        .EUt(8000)
        .duration(160)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:medium_frequency_laser")
        .itemInputs("gtceu:lazurite_rod", "gtocore:green_halide_lamp", "gtocore:highly_reflective_mirror", "kubejs:non_linear_optical_lens", "gtocore:smd_diode_optical")
        .itemOutputs("gtocore:medium_frequency_laser")
        .inputFluids("gtceu:soldering_alloy 576")
        .EUt(491520)
        .duration(320)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:high_frequency_laser")
        .itemInputs("gtceu:amethyst_rod", "gtocore:blue_halide_lamp", "gtocore:highly_reflective_mirror", "kubejs:non_linear_optical_lens", "gtocore:smd_diode_optical")
        .itemOutputs("gtocore:high_frequency_laser")
        .inputFluids("gtceu:soldering_alloy 576")
        .EUt(491520)
        .duration(320)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:ballast")
        .itemInputs("2x gtceu:fine_annealed_copper_wire", "gtceu:resistor", "gtceu:inductor", "gtceu:double_annealed_copper_plate")
        .itemOutputs("gtocore:ballast")
        .inputFluids("gtceu:soldering_alloy 144")
        .EUt(1920)
        .duration(290)

    gtr.assembler("gtocore:laser_diode")
        .itemInputs("2x gtceu:fine_gold_wire", "gtocore:smd_diode_bioware", "gtceu:amethyst_lens", "gtceu:double_nichrome_plate")
        .itemOutputs("gtocore:laser_diode")
        .inputFluids("gtceu:soldering_alloy 288")
        .EUt(980000)
        .duration(260)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:laser_cooling_unit")
        .itemInputs("4x gtceu:fine_gold_wire", "gtceu:frostproof_machine_casing", "gtocore:laser_diode", "#gtceu:circuits/hv")
        .itemOutputs("gtocore:laser_cooling_unit")
        .inputFluids("gtceu:soldering_alloy 288")
        .EUt(1200000)
        .duration(300)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:empty_laser_cooling_container")
        .itemInputs("8x ad_astra:steel_plate", "gtocore:laser_cooling_unit", "gtocore:magnetic_trap", "2x gtceu:double_magnalium_plate")
        .itemOutputs("gtocore:empty_laser_cooling_container")
        .inputFluids("gtceu:soldering_alloy 144")
        .EUt(1150000)
        .duration(380)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:magnetic_trap")
        .itemInputs("2x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire", "gtceu:frostproof_machine_casing", "gtceu:double_kanthal_plate")
        .itemOutputs("gtocore:magnetic_trap")
        .inputFluids("gtceu:soldering_alloy 432")
        .EUt(1000000)
        .duration(480)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:red_halide_lamp")
        .itemInputs("2x gtceu:electrum_foil", "gtceu:potassium_bromide_dust", "4x gtceu:strontium_europium_aluminate_dust", "2x gtceu:cubic_zirconia_plate", "4x gtceu:maraging_steel_300_rod", "2x gtceu:borosilicate_glass_ingot", "gtocore:ballast", "gtceu:glass_tube", "2x gtceu:molybdenum_foil")
        .itemOutputs("gtocore:red_halide_lamp")
        .inputFluids("gtceu:nitrogen 1000")
        .EUt(7680)
        .duration(110)

    gtr.assembler("gtocore:green_halide_lamp")
        .itemInputs("2x gtceu:electrum_foil", "gtceu:iridium_chloride_dust", "4x gtceu:strontium_europium_aluminate_dust", "2x gtceu:cubic_zirconia_plate", "4x gtceu:maraging_steel_300_rod", "2x gtceu:borosilicate_glass_ingot", "gtocore:ballast", "gtceu:glass_tube", "2x gtceu:molybdenum_foil")
        .itemOutputs("gtocore:green_halide_lamp")
        .inputFluids("gtceu:nitrogen 1000")
        .EUt(7680)
        .duration(110)

    gtr.assembler("gtocore:blue_halide_lamp")
        .itemInputs("2x gtceu:electrum_foil", "gtceu:titanium_trifluoride_dust", "4x gtceu:strontium_europium_aluminate_dust", "2x gtceu:cubic_zirconia_plate", "4x gtceu:maraging_steel_300_rod", "2x gtceu:borosilicate_glass_ingot", "gtocore:ballast", "gtceu:glass_tube", "2x gtceu:molybdenum_foil")
        .itemOutputs("gtocore:blue_halide_lamp")
        .inputFluids("gtceu:nitrogen 1000")
        .EUt(7680)
        .duration(110)

    gtr.assembler("gtocore:separation_electromagnet")
        .itemInputs("64x gtceu:fine_yttrium_barium_cuprate_wire", "64x gtceu:fine_niobium_titanium_wire", "16x gtceu:polybenzimidazole_foil", "8x gtceu:niobium_nitride_plate", "gtceu:long_vanadium_gallium_rod")
        .itemOutputs("gtocore:separation_electromagnet")
        .inputFluids("gtceu:soldering_alloy 288")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(600)

    gtr.assembler("gtocore:two_way_foil")
        .itemInputs("gtceu:chaos_foil", "gtocore:hyper_stable_self_healing_adhesive", "gtocore:cosmic_fabric")
        .itemOutputs("gtocore:two_way_foil")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.assembler("gtocore:solar_light_splitter")
        .itemInputs("gtceu:laminated_glass", "gtceu:ruby_lens", "gtceu:emerald_lens", "gtceu:sapphire_lens")
        .inputFluids("gtceu:glowstone 576")
        .itemOutputs("gtocore:solar_light_splitter")
        .EUt(480)
        .duration(200)

    gtr.assembler("gtocore:woven_kevlar")
        .itemInputs("8x gtocore:kevlar_fiber")
        .itemOutputs("gtocore:woven_kevlar")
        .circuit(8)
        .EUt(120)
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:ingot_field_shape")
        .itemInputs("2x gtceu:polyphenylene_sulfide_plate", "2x gtceu:polybenzimidazole_plate", "gtceu:uv_field_generator", "gtceu:ingot_casting_mold")
        .itemOutputs("kubejs:ingot_field_shape")
        .inputFluids("gtceu:redstone_alloy 2304")
        .EUt(30720)
        .duration(200)

    gtr.assembler("gtocore:ball_field_shape")
        .itemInputs("2x gtceu:polyphenylene_sulfide_plate", "2x gtceu:polybenzimidazole_plate", "gtceu:uv_field_generator", "gtceu:ball_casting_mold")
        .itemOutputs("kubejs:ball_field_shape")
        .inputFluids("gtceu:redstone_alloy 2304")
        .EUt(30720)
        .duration(200)

    gtr.assembler("gtocore:plasma_containment_cell")
        .itemInputs("4x gtceu:osmiridium_plate", "gtceu:uv_field_generator", "gtceu:long_naquadah_alloy_rod", "2x gtceu:fusion_glass", "8x gtceu:fluxed_electrum_foil")
        .itemOutputs("gtocore:plasma_containment_cell")
        .inputFluids("gtceu:mutated_living_solder 576")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:wyvern_energy_core")
        .itemInputs("16x gtocore:wyvern_core", "64x gtocore:draconium_block_charged", "64x gtceu:iv_lapotronic_battery", "64x gtceu:luv_lapotronic_battery", "64x gtceu:double_draconium_plate")
        .inputFluids("gtceu:mutated_living_solder 5760")
        .itemOutputs("gtocore:wyvern_energy_core")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(2400)

    gtr.assembler("gtocore:luv_solar_panel")
        .itemInputs("4x gtocore:pm_wafer", "16x gtceu:solar_panel", "16x gtceu:ulv_solar_panel", "16x gtceu:lv_solar_panel", "2x gtceu:cosmic_neutronium_quadruple_wire", "4x gtceu:fusion_glass", "4x gtceu:double_hastelloyk_243_plate")
        .itemOutputs("gtceu:luv_solar_panel")
        .inputFluids("gtceu:mutated_living_solder 576")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(1200)

    gtr.assembler("gtocore:zpm_solar_panel")
        .itemInputs("4x gtocore:fm_wafer", "16x gtceu:mv_solar_panel", "16x gtceu:hv_solar_panel", "16x gtceu:ev_solar_panel", "2x gtceu:cosmic_neutronium_hex_wire", "16x gtceu:fusion_glass", "16x gtceu:double_vibranium_plate")
        .itemOutputs("gtceu:zpm_solar_panel")
        .inputFluids("gtceu:mutated_living_solder 1296")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(1200)

    gtr.assembler("gtocore:uv_solar_panel")
        .itemInputs("16x gtocore:fm_wafer", "16x gtceu:iv_solar_panel", "16x gtceu:luv_solar_panel", "16x gtceu:zpm_solar_panel", "2x gtceu:infinity_hex_wire", "64x gtceu:fusion_glass", "64x gtceu:double_neutronium_plate")
        .itemOutputs("gtceu:uv_solar_panel")
        .inputFluids("gtceu:super_mutated_living_solder 576")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)

    gtr.assembler("gtocore:smd_transistor_bioware")
        .itemInputs("8x gtceu:fine_naquadah_alloy_wire", "2x gtceu:germanium_tungsten_nitride_plate", "2x gtceu:silicon_carbide_plate")
        .inputFluids("gtceu:polyimide 288")
        .itemOutputs("16x gtocore:smd_transistor_bioware")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.assembler("gtocore:smd_capacitor_bioware")
        .itemInputs("8x gtceu:fine_naquadah_alloy_wire", "8x gtceu:silicon_foil", "4x gtceu:naquadah_foil")
        .inputFluids("gtceu:polyimide 288")
        .itemOutputs("16x gtocore:smd_capacitor_bioware")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.assembler("gtocore:smd_resistor_bioware")
        .itemInputs("8x gtceu:fine_naquadah_alloy_wire", "gtceu:naquadria_plate", "gtceu:tritanium_plate")
        .inputFluids("gtceu:polyimide 288")
        .itemOutputs("16x gtocore:smd_resistor_bioware")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.assembler("gtocore:smd_diode_bioware")
        .itemInputs("8x gtceu:fine_naquadah_alloy_wire", "gtceu:lutetium_dust", "gtceu:tritanium_dust")
        .inputFluids("gtceu:polyimide 288")
        .itemOutputs("16x gtocore:smd_diode_bioware")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.assembler("gtocore:smd_inductor_bioware")
        .itemInputs("8x gtceu:fine_naquadah_alloy_wire", "gtceu:naquadah_alloy_ring")
        .inputFluids("gtceu:polyimide 288")
        .itemOutputs("16x gtocore:smd_inductor_bioware")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gtr.assembler("gtocore:smd_transistor_optical")
        .itemInputs("8x gtceu:fine_dubnium_wire", "4x gtceu:polyetheretherketone_foil", "2x gtceu:nether_star_plate", "2x gtceu:molybdenum_disilicide_plate")
        .inputFluids("gtceu:polyimide 576")
        .itemOutputs("16x gtocore:smd_transistor_optical")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:smd_capacitor_optical")
        .itemInputs("8x gtceu:fine_dubnium_wire", "4x gtceu:polyetheretherketone_foil", "2x gtceu:tritanium_foil")
        .inputFluids("gtceu:polyimide 576")
        .itemOutputs("16x gtocore:smd_capacitor_optical")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:smd_resistor_optical")
        .itemInputs("8x gtceu:fine_dubnium_wire", "4x gtceu:polyetheretherketone_foil", "3x gtceu:sodium_seaborgate_dust", "2x gtceu:ender_eye_plate")
        .inputFluids("gtceu:polyimide 576")
        .itemOutputs("16x gtocore:smd_resistor_optical")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:smd_diode_optical")
        .itemInputs("8x gtceu:fine_dubnium_wire", "4x gtceu:polyetheretherketone_foil", "2x gtceu:vanadium_gallium_plate", "2x gtceu:beryllium_plate")
        .inputFluids("gtceu:polyimide 576")
        .itemOutputs("16x gtocore:smd_diode_optical")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:smd_inductor_optical")
        .itemInputs("8x gtceu:fine_dubnium_wire", "gtceu:quantanium_ring")
        .inputFluids("gtceu:polyimide 576")
        .itemOutputs("16x gtocore:smd_inductor_optical")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:smd_transistor_exotic")
        .itemInputs("gtceu:degenerate_rhenium_plate", "gtceu:dubnium_plate", "2x gtceu:duranium_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 72")
        .itemOutputs("16x gtocore:smd_transistor_exotic")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:smd_capacitor_exotic")
        .itemInputs("gtceu:glowstone_plate", "gtceu:quantum_plate", "2x gtceu:cinobite_foil", "2x gtceu:carbon_nanotubes_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 72")
        .itemOutputs("16x gtocore:smd_capacitor_exotic")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:smd_resistor_exotic")
        .itemInputs("4x gtceu:fine_cinobite_wire", "gtceu:quantum_dust", "2x gtceu:indium_tin_barium_titanium_cuprate_foil", "2x gtceu:enderite_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 72")
        .itemOutputs("16x gtocore:smd_resistor_exotic")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:smd_diode_exotic")
        .itemInputs("gtceu:enderite_plate", "gtceu:trinium_titanium_plate", "2x gtceu:dubnium_foil", "2x gtceu:quantum_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 72")
        .itemOutputs("16x gtocore:smd_diode_exotic")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:smd_inductor_exotic")
        .itemInputs("8x gtceu:fine_cinobite_wire", "gtceu:adamantium_ring")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 72")
        .itemOutputs("16x gtocore:smd_inductor_exotic")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:smd_transistor_cosmic")
        .itemInputs("8x gtceu:fine_hastelloyx_78_wire", "4x gtceu:degenerate_rhenium_plate", "gtceu:hassium_plate", "2x gtceu:polytetrafluoroethylene_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 144")
        .itemOutputs("16x gtocore:smd_transistor_cosmic")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:smd_capacitor_cosmic")
        .itemInputs("8x gtceu:fine_hastelloyx_78_wire", "4x gtceu:graphene_plate", "4x gtceu:taranium_foil", "2x gtceu:polycaprolactam_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 144")
        .itemOutputs("16x gtocore:smd_capacitor_cosmic")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:smd_resistor_cosmic")
        .itemInputs("8x gtceu:fine_hastelloyx_78_wire", "4x gtceu:black_titanium_plate", "2x gtceu:superheavy_l_alloy_plate", "2x gtceu:naquadah_alloy_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 144")
        .itemOutputs("16x gtocore:smd_resistor_cosmic")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:smd_diode_cosmic")
        .itemInputs("8x gtceu:fine_hastelloyx_78_wire", "4x gtceu:abyssalalloy_plate", "2x gtceu:superheavy_h_alloy_plate", "2x gtceu:niobium_nitride_foil")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 144")
        .itemOutputs("16x gtocore:smd_diode_cosmic")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:smd_inductor_cosmic")
        .itemInputs("8x gtceu:fine_hastelloyx_78_wire", "gtceu:vibranium_ring")
        .inputFluids("gtceu:fullerene_polymer_matrix_pulp 144")
        .itemOutputs("16x gtocore:smd_inductor_cosmic")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:smd_capacitor_supracausal")
        .notConsumable("gtocore:microwormhole_generator")
        .itemInputs("gtceu:adamantine_plate")
        .itemOutputs("32x gtocore:smd_capacitor_supracausal")
        .inputFluids("gtceu:radox 144")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:smd_diode_supracausal")
        .notConsumable("gtocore:microwormhole_generator")
        .itemInputs("gtceu:vibramantium_plate")
        .itemOutputs("32x gtocore:smd_diode_supracausal")
        .inputFluids("gtceu:radox 144")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:smd_transistor_supracausal")
        .notConsumable("gtocore:microwormhole_generator")
        .itemInputs("gtceu:neutronium_plate")
        .itemOutputs("32x gtocore:smd_transistor_supracausal")
        .inputFluids("gtceu:radox 144")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:smd_resistor_supracausal")
        .notConsumable("gtocore:microwormhole_generator")
        .itemInputs("gtceu:fullerene_polymer_matrix_pulp_foil")
        .itemOutputs("32x gtocore:smd_resistor_supracausal")
        .inputFluids("gtceu:radox 144")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:smd_inductor_supracausal")
        .notConsumable("gtocore:microwormhole_generator")
        .itemInputs("gtceu:draconium_ring")
        .itemOutputs("32x gtocore:smd_inductor_supracausal")
        .inputFluids("gtceu:radox 144")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:fishing_ground")
        .itemInputs("gtceu:lv_fisher",
            "gtceu:mv_fisher",
            "gtceu:hv_fisher",
            "gtceu:lv_sensor",
            "gtceu:mv_sensor",
            "gtceu:hv_sensor",
            "2x #gtceu:circuits/ev",
            "4x gtceu:eglin_steel_plate",
            "4x gtceu:double_aluminium_bronze_plate")
        .inputFluids("gtceu:soldering_alloy 576")
        .itemOutputs("gtocore:fishing_ground")
        .EUt(480)
        .duration(400)

    gtr.assembler("gtocore:large_recycler")
        .itemInputs("4x gtceu:double_vanadium_steel_plate",
            "4x gtceu:black_bronze_gear",
            "8x gtceu:eglin_steel_rod",
            "4x gtceu:hv_electric_motor",
            "4x gtceu:hv_emitter",
            "4x #gtceu:circuits/ev",
            "4x gtceu:double_eglin_steel_plate",
            "8x gtceu:double_brass_plate",
            "8x gtceu:double_tin_plate")
        .inputFluids("gtceu:soldering_alloy 864")
        .itemOutputs("gtocore:large_recycler")
        .EUt(1920)
        .duration(400)

    gtr.assembler("gtocore:void_miner")
        .itemInputs("gtceu:hv_bedrock_ore_miner",
            "4x gtceu:ev_field_generator",
            "4x #gtceu:circuits/iv",
            "2x gtceu:titanium_gear",
            "2x gtceu:long_titanium_rod",
            "8x gtceu:titanium_plate")
        .inputFluids("gtceu:soldering_alloy 1440")
        .itemOutputs("gtocore:void_miner")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(800)

    gtr.assembler("gtocore:rare_earth_centrifugal")
        .itemInputs("8x gtceu:europium_plate", "16x gtceu:uhv_electric_motor", "16x gtceu:hsss_gear", "8x gtceu:long_mithril_rod", "16x gtceu:hsse_plate", "64x gtceu:fine_naquadria_wire", "4x #gtceu:circuits/uhv", "32x gtceu:stellite_plate")
        .itemOutputs("gtocore:rare_earth_centrifugal")
        .inputFluids("gtceu:soldering_alloy 1296")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1000)

    gtr.assembler("gtocore:large_gas_collector")
        .itemInputs("gtceu:mv_gas_collector", "gtceu:hv_gas_collector", "gtceu:ev_gas_collector", "2x gtceu:mv_field_generator", "2x gtceu:hv_field_generator", "2x gtceu:ev_field_generator", "2x #gtceu:circuits/luv", "gtceu:iridium_huge_fluid_pipe", "4x gtceu:double_sterling_silver_plate")
        .itemOutputs("gtocore:large_gas_collector")
        .inputFluids("gtceu:soldering_alloy 1296")
        .EUt(1920)
        .duration(400)

    gtr.assembler("gtocore:large_incubator")
        .itemInputs("gtocore:incubator", "4x gtceu:luv_field_generator", "4x gtceu:luv_sensor", "4x gtceu:luv_fluid_regulator", "4x gtceu:indium_tin_barium_titanium_cuprate_octal_wire", "16x gtceu:laminated_glass")
        .itemOutputs("gtocore:large_incubator")
        .inputFluids("gtceu:polytetrafluoroethylene 1440")
        .EUt(122880)
        .duration(800)

    gtr.assembler("gtocore:integrated_ore_processor")
        .itemInputs("gtceu:large_maceration_tower",
            "gtceu:large_centrifuge",
            "gtceu:large_sifting_funnel",
            "gtceu:large_chemical_bath",
            "8x gtceu:zpm_robot_arm",
            "8x gtceu:zpm_electric_pump",
            "8x gtceu:zpm_conveyor_module",
            "4x #gtceu:circuits/uhv",
            "16x gtceu:double_hsss_plate")
        .inputFluids("gtceu:duranium 2880")
        .itemOutputs("gtocore:integrated_ore_processor")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(1000)

    gtr.assembler("gtocore:electric_implosion_compressor")
        .itemInputs("4x gtceu:implosion_compressor", "4x gtceu:luv_transformer_16a", "4x gtceu:luv_diode", "8x gtceu:luv_field_generator", "16x gtceu:tritanium_hex_cable", "4x gtceu:dense_obsidian_plate", "4x gtceu:dense_tungsten_steel_plate")
        .inputFluids("gtceu:soldering_alloy 1296")
        .itemOutputs("gtocore:electric_implosion_compressor")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)

    gtr.assembler("gtocore:steam_mega_turbine")
        .itemInputs("8x gtceu:steam_large_turbine", "16x #gtceu:circuits/iv", "4x gtceu:ev_electric_pump", "8x gtceu:ev_electric_piston", "8x gtceu:black_bronze_turbine_blade", "8x gtceu:double_molybdenum_plate", "32x gtceu:double_steel_plate")
        .itemOutputs("gtocore:steam_mega_turbine")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(1200)

    gtr.assembler("gtocore:gas_mega_turbine")
        .itemInputs("8x gtceu:gas_large_turbine", "16x #gtceu:circuits/luv", "8x gtceu:ev_electric_pump", "32x gtceu:ev_electric_piston", "8x gtceu:neodymium_turbine_blade", "8x gtceu:double_sterling_silver_plate", "32x gtceu:double_stainless_steel_plate")
        .itemOutputs("gtocore:gas_mega_turbine")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(1200)

    gtr.assembler("gtocore:rocket_mega_turbine")
        .itemInputs("8x gtocore:rocket_large_turbine", "16x #gtceu:circuits/zpm", "4x gtceu:iv_electric_motor", "8x gtceu:iv_electric_piston", "8x gtceu:tungsten_turbine_blade", "8x gtceu:double_vanadium_steel_plate", "32x gtceu:double_titanium_plate")
        .itemOutputs("gtocore:rocket_mega_turbine")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(1200)

    gtr.assembler("gtocore:chemical_energy_devourer")
        .itemInputs("4x gtceu:extreme_combustion_engine", "4x gtceu:iv_field_generator", "8x gtceu:iv_emitter", "8x gtceu:iv_electric_pump", "16x gtceu:ev_fluid_regulator", "8x gtceu:small_tungsten_spring", "8x gtceu:small_vanadium_gallium_spring", "8x gtceu:luv_transformer_4a", "4x gtceu:dense_tungsten_steel_plate")
        .inputFluids("gtceu:lubricant 10000")
        .itemOutputs("gtocore:chemical_energy_devourer")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(1200)

    gtr.assembler("gtocore:petrochemical_plant")
        .itemInputs("16x gtceu:watertight_steel_frame", "8x gtceu:large_distillery", "4x gtocore:large_cracker", "gtocore:chemical_plant", "4x #gtceu:circuits/uhv", "4x gtceu:zpm_emitter", "16x gtceu:zpm_fluid_regulator", "16x gtceu:stainless_steel_nonuple_fluid_pipe", "32x gtceu:double_stainless_steel_plate")
        .itemOutputs("gtocore:petrochemical_plant")
        .inputFluids("gtceu:soldering_alloy 1296")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(1000)

    gtr.assembler("gtocore:slaughterhouse")
        .itemInputs("gtceu:steel_frame", "gtceu:lv_world_accelerator", "4x #gtceu:circuits/lv", "2x gtceu:pulsating_alloy_hex_wire", "8x gtceu:lv_electric_motor", "4x gtceu:lv_robot_arm", "8x gtceu:invar_gear", "2x gtceu:diamond_grinding_head", "4x gtceu:double_steel_plate")
        .itemOutputs("gtocore:slaughterhouse")
        .EUt(30)
        .duration(400)

    gtr.assembler("gtocore:disassembly")
        .itemInputs("gtceu:assembly_line", "4x gtceu:naquadah_alloy_gear", "16x gtceu:luv_robot_arm", "8x gtceu:luv_conveyor_module", "8x gtceu:luv_emitter", "4x gtceu:double_naquadah_alloy_plate")
        .inputFluids("gtceu:naquadah 1440")
        .itemOutputs("gtocore:disassembly")
        .EUt(7680)
        .duration(800)

    gtr.assembler("gtocore:heat_exchanger")
        .itemInputs("gtceu:iv_machine_hull", "8x gtceu:tungsten_carbide_huge_fluid_pipe", "16x gtceu:mar_m_200_steel_gear", "16x gtceu:lapis_plate", "16x gtceu:diamond_plate", "16x gtceu:obsidian_plate", "8x gtceu:double_mar_m_200_steel_plate", "16x gtceu:double_tungsten_steel_plate", "16x gtceu:double_tungsten_steel_plate")
        .inputFluids("gtceu:redstone 5760")
        .itemOutputs("gtocore:heat_exchanger")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(400)

    gtr.assembler("gtocore:supercritical_steam_turbine")
        .itemInputs("gtceu:luv_machine_hull", "4x #gtceu:circuits/luv", "2x gtceu:luv_electric_motor", "2x gtceu:mar_m_200_steel_gear", "2x gtceu:tungsten_carbide_large_fluid_pipe", "8x gtceu:mar_m_200_steel_plate")
        .itemOutputs("gtocore:supercritical_steam_turbine")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)

    gtr.assembler("gtocore:supercritical_mega_steam_turbine")
        .itemInputs("8x gtocore:supercritical_steam_turbine", "8x #gtceu:circuits/uv", "8x gtceu:luv_electric_piston", "16x gtceu:luv_electric_pump", "8x gtceu:naquadah_turbine_blade", "8x gtceu:double_hsss_plate", "32x gtceu:double_mar_m_200_steel_plate")
        .itemOutputs("gtocore:supercritical_mega_steam_turbine")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(1200)

    gtr.assembler("gtocore:fission_reactor")
        .itemInputs("gtceu:iv_machine_hull", "4x #gtceu:circuits/iv", "gtceu:computer_monitor_cover", "4x gtceu:neutron_reflector", "8x gtceu:dense_reactor_steel_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("gtocore:fission_reactor")
        .EUt(480)
        .duration(200)

    gtr.assembler("gtocore:advanced_integrated_ore_processor")
        .itemInputs("16x gtocore:integrated_ore_processor", "64x gtceu:crushing_wheels", "32x #gtceu:circuits/uiv", "16x gtceu:uiv_robot_arm", "32x gtceu:uiv_conveyor_module", "8x gtceu:uiv_electric_pump", "8x gtceu:uiv_emitter", "64x gtceu:double_dalisenite_plate", "64x gtceu:double_dalisenite_plate")
        .inputFluids("gtceu:inconel_792 82944")
        .itemOutputs("gtocore:advanced_integrated_ore_processor")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)

    gtr.assembler("gtocore:vacuum_drying_furnace")
        .itemInputs("gtceu:hsse_frame", "4x gtocore:iv_dehydrator", "2x gtceu:double_titanium_tungsten_carbide_plate", "4x #gtceu:circuits/iv", "2x gtceu:iv_electric_piston", "3x gtceu:iridium_gear", "6x gtceu:small_titanium_gear", "24x gtceu:tantalloy_61_screw")
        .inputFluids("gtceu:platinum 1152")
        .itemOutputs("gtocore:vacuum_drying_furnace")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(600)

    gtr.assembler("gtocore:flotation_cell")
        .itemInputs("7x gtceu:hastelloy_n_75_plate", "gtceu:assembly_line_grating", "gtceu:iv_electric_pump")
        .itemOutputs("gtocore:flotation_cell")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(400)

    gtr.assembler("gtocore:digestion_tank")
        .itemInputs("gtceu:tungsten_steel_frame", "4x #gtceu:circuits/iv", "2x gtceu:iv_electric_pump", "4x gtceu:chromium_normal_fluid_pipe", "4x gtceu:double_electrum_plate", "4x gtceu:double_cupronickel_plate", "4x gtceu:double_tungsten_steel_plate")
        .itemOutputs("gtocore:digestion_tank")
        .EUt(120)
        .duration(400)

    gtr.assembler("gtocore:dissolving_tank")
        .itemInputs("gtceu:ev_machine_hull", "4x #gtceu:circuits/ev", "4x gtceu:ev_electric_pump", "4x gtceu:gold_normal_fluid_pipe", "8x gtceu:double_stainless_steel_plate")
        .itemOutputs("gtocore:dissolving_tank")
        .EUt(120)
        .duration(400)

    gtr.assembler("gtocore:grind_ball_hatch")
        .itemInputs("gtceu:vanadium_steel_frame", "gtceu:iv_input_bus", "8x gtceu:titanium_gear", "gtceu:double_tungsten_steel_plate", "32x gtceu:tungsten_steel_foil", "16x gtceu:fine_tin_wire")
        .inputFluids("gtceu:tungsten 1152")
        .itemOutputs("gtocore:grind_ball_hatch")
        .duration(400)
        .EUt(480)

    gtr.assembler("gtocore:radiation_hatch")
        .itemInputs("gtceu:zpm_input_bus", "8x gtceu:graphite_block", "16x gtceu:double_lead_plate", "gtceu:computer_monitor_cover")
        .inputFluids("gtceu:tin 2304")
        .itemOutputs("gtocore:radiation_hatch")
        .duration(400)
        .EUt(1920)

    gtr.assembler("gtocore:rotor_hatch")
        .itemInputs("gtceu:ev_input_bus", "gtceu:advanced_item_detector_cover", "4x gtceu:sterling_silver_large_restrictive_item_pipe", "16x gtceu:ev_conveyor_module")
        .inputFluids("gtceu:tin 2304")
        .itemOutputs("gtocore:rotor_hatch")
        .duration(400)
        .EUt(480)

    gtr.assembler("gtocore:energetic_photovoltaic_block")
        .itemInputs("enderio:energetic_photovoltaic_module", "4x enderio:energy_conduit", "4x gtceu:vacuum_tube", "4x gtceu:red_alloy_double_cable", "2x ad_astra:steel_plate")
        .itemOutputs("gtocore:energetic_photovoltaic_block")
        .duration(200)
        .EUt(30)

    gtr.assembler("gtocore:pulsating_photovoltaic_block")
        .itemInputs("enderio:pulsating_photovoltaic_module", "8x enderio:energy_conduit", "8x gtceu:vacuum_tube", "4x gtceu:pulsating_alloy_double_wire", "2x gtceu:titanium_plate")
        .itemOutputs("gtocore:pulsating_photovoltaic_block")
        .duration(200)
        .EUt(120)

    gtr.assembler("gtocore:vibrant_photovoltaic_block")
        .itemInputs("enderio:vibrant_photovoltaic_module", "16x enderio:energy_conduit", "16x gtceu:vacuum_tube", "4x gtceu:vibrant_alloy_double_wire", "2x gtceu:tungsten_steel_plate")
        .itemOutputs("gtocore:vibrant_photovoltaic_block")
        .duration(200)
        .EUt(480)

    gtr.assembler("gtocore:awakened_draconium_casing")
        .itemInputs("gtceu:hexaphasecopper_frame")
        .itemInputs("6x gtceu:awakened_draconium_plate")
        .itemOutputs("gtocore:awakened_draconium_casing")
        .inputFluids("gtceu:draconium 576")
        .EUt(1920)
        .duration(800)

    gtr.assembler("gtocore:pressure_containment_casing")
        .itemInputs("gtceu:polytetrafluoroethylene_frame")
        .itemInputs("2x gtceu:damascus_steel_plate")
        .itemOutputs("gtocore:pressure_containment_casing")
        .inputFluids("gtceu:stainless_steel 1152")
        .EUt(120)
        .duration(100)

    gtr.assembler("gtocore:activated_carbon_filter_mesh")
        .itemInputs("16x gtceu:activated_carbon_dust")
        .itemInputs("8x gtceu:zinc_foil")
        .itemOutputs("gtocore:activated_carbon_filter_mesh")
        .EUt(120)
        .duration(200)

    gtr.assembler("gtocore:chemical_grade_glass")
        .itemInputs("gtceu:steel_frame")
        .itemInputs("2x gtceu:tempered_glass")
        .itemOutputs("gtocore:chemical_grade_glass")
        .inputFluids("gtceu:white_dye 144")
        .EUt(30)
        .duration(200)

    gtr.assembler("gtocore:water_purification_plant")
        .itemInputs("gtceu:tungsten_frame")
        .itemInputs("4x gtocore:sterile_water_plant_casing")
        .itemInputs("2x gtceu:ev_electric_motor")
        .itemInputs("gtceu:ev_robot_arm")
        .itemInputs("4x gtceu:ev_electric_pump")
        .itemInputs("4x #gtceu:circuits/iv")
        .itemInputs("2x gtceu:rtm_alloy_quadruple_cable")
        .itemInputs("4x gtceu:double_titanium_plate")
        .itemOutputs("gtocore:water_purification_plant")
        .EUt(480)
        .duration(200)

    gtr.assembler("gtocore:sterile_water_plant_casing")
        .itemInputs("gtceu:tungsten_steel_frame")
        .itemInputs("gtceu:mv_electric_motor")
        .itemInputs("8x gtceu:polyvinyl_chloride_foil")
        .itemInputs("2x gtceu:double_desh_plate")
        .itemOutputs("gtocore:sterile_water_plant_casing")
        .EUt(120)
        .duration(200)

    gtr.assembler("gtocore:reinforced_sterile_water_plant_casing")
        .itemInputs("gtocore:sterile_water_plant_casing")
        .itemInputs("16x gtceu:potin_bolt")
        .itemOutputs("gtocore:reinforced_sterile_water_plant_casing")
        .inputFluids("gtceu:concrete 1152")
        .EUt(30)
        .duration(200)

    gtr.assembler("gtocore:clarifier_purification_unit")
        .itemInputs("8x gtocore:activated_carbon_filter_mesh")
        .itemInputs("2x gtceu:filter_casing")
        .itemInputs("4x gtceu:hv_electric_pump")
        .itemInputs("4x #gtceu:circuits/ev")
        .itemInputs("8x gtceu:gold_large_fluid_pipe")
        .itemInputs("4x gtceu:double_tungsten_steel_plate")
        .itemOutputs("gtocore:clarifier_purification_unit")
        .EUt(480)
        .duration(400)

    gtr.assembler("gtocore:virtual_item_provider")
        .itemInputs("gtceu:programmed_circuit")
        .itemInputs("ae2:quartz_vibrant_glass")
        .itemInputs("8x gtceu:polyvinyl_chloride_foil")
        .itemOutputs("gtocore:virtual_item_provider")
        .EUt(30)
        .duration(200)

    gtr.assembler("gtocore:virtual_item_provider_cell")
        .itemInputs("ae2:item_storage_cell_1k")
        .itemInputs("gtocore:virtual_item_provider")
        .itemInputs("2x gtceu:mv_conveyor_module")
        .itemOutputs("gtocore:virtual_item_provider_cell")
        .inputFluids("gtceu:polyethylene 288")
        .EUt(30)
        .duration(200)

    gtr.assembler("gtocore:ozone_casing")
        .itemInputs("gtceu:hastelloy_c_276_frame")
        .itemInputs("gtceu:iv_electric_pump")
        .itemInputs("6x gtceu:hastelloy_x_plate")
        .itemOutputs("gtocore:ozone_casing")
        .inputFluids("gtceu:polytetrafluoroethylene 576")
        .EUt(120)
        .duration(200)

    gtr.assembler("gtocore:high_pressure_resistant_casing")
        .itemInputs("gtceu:hastelloy_n_frame")
        .itemInputs("gtceu:hastelloy_c_276_rotor")
        .itemInputs("6x gtceu:double_hastelloy_x_plate")
        .itemOutputs("gtocore:high_pressure_resistant_casing")
        .inputFluids("gtceu:polytetrafluoroethylene 288")
        .EUt(480)
        .duration(200)

    gtr.assembler("gtocore:ozonation_purification_unit")
        .itemInputs("gtceu:tungsten_steel_frame")
        .itemInputs("4x gtocore:ozone_casing")
        .itemInputs("8x gtceu:iv_electric_motor")
        .itemInputs("4x gtceu:graphene_quadruple_cable")
        .itemInputs("4x #gtceu:circuits/iv")
        .itemInputs("16x gtceu:tungsten_steel_tiny_fluid_pipe")
        .itemInputs("16x gtceu:hastelloy_n_75_rod")
        .itemInputs("16x gtceu:hastelloy_n_75_screw")
        .itemInputs("8x gtceu:hastelloy_x_plate")
        .itemOutputs("gtocore:ozonation_purification_unit")
        .inputFluids("gtceu:soldering_alloy 576")
        .EUt(480)
        .duration(400)

    gtr.assembler("gtocore:flocculation_casing")
        .itemInputs("gtceu:stainless_steel_frame")
        .itemInputs("4x gtceu:tungsten_tiny_fluid_pipe")
        .itemInputs("6x gtceu:double_stainless_steel_plate")
        .itemOutputs("gtocore:flocculation_casing")
        .inputFluids("gtceu:polytetrafluoroethylene 288")
        .EUt(120)
        .duration(200)

    gtr.assembler("gtocore:flocculation_purification_unit")
        .itemInputs("gtceu:ultimet_frame")
        .itemInputs("4x gtocore:high_pressure_resistant_casing")
        .itemInputs("8x gtceu:luv_electric_pump")
        .itemInputs("32x gtceu:hastelloy_c_276_ring")
        .itemInputs("8x #gtceu:circuits/luv")
        .itemInputs("4x gtceu:hastelloy_c_276_rotor")
        .itemInputs("16x gtceu:niobium_nitride_octal_cable")
        .itemInputs("16x gtceu:iridium_small_fluid_pipe")
        .itemInputs("16x gtceu:naquadah_plate")
        .itemOutputs("gtocore:flocculation_purification_unit")
        .inputFluids("gtceu:indalloy_140 576")
        .EUt(1920)
        .duration(400)

    gtr.assembler("gtocore:inert_neutralization_water_plant_casing")
        .itemInputs("gtceu:hastelloy_x_frame")
        .itemInputs("16x gtceu:hastelloy_c_276_screw")
        .itemInputs("6x gtceu:hastelloy_c_276_plate")
        .itemOutputs("gtocore:inert_neutralization_water_plant_casing")
        .inputFluids("gtceu:polytetrafluoroethylene 288")
        .EUt(120)
        .duration(200)

    gtr.assembler("gtocore:stabilized_naquadah_water_plant_casing")
        .itemInputs("gtceu:naquadah_frame")
        .itemInputs("4x gtceu:niobium_titanium_tiny_fluid_pipe")
        .itemInputs("6x gtceu:enriched_naquadah_plate")
        .itemOutputs("gtocore:stabilized_naquadah_water_plant_casing")
        .inputFluids("gtceu:naquadah_alloy 288")
        .EUt(120)
        .duration(200)

    gtr.assembler("gtocore:ph_neutralization_purification_unit")
        .itemInputs("gtceu:naquadah_alloy_frame")
        .itemInputs("4x gtocore:stabilized_naquadah_water_plant_casing")
        .itemInputs("4x gtocore:inert_neutralization_water_plant_casing")
        .itemInputs("8x gtceu:zpm_fluid_regulator")
        .itemInputs("8x gtceu:trinium_quadruple_cable")
        .itemInputs("8x #gtceu:circuits/zpm")
        .itemInputs("4x gtceu:naquadah_alloy_rotor")
        .itemInputs("16x gtceu:long_rose_gold_rod")
        .itemInputs("16x gtceu:double_naquadah_alloy_plate")
        .itemOutputs("gtocore:ph_neutralization_purification_unit")
        .inputFluids("gtceu:indalloy_140 576")
        .EUt(7680)
        .duration(400)

    gtr.assembler("gtocore:plasma_heater_casing")
        .itemInputs("gtceu:trinium_frame")
        .itemInputs("2x gtceu:luv_voltage_coil")
        .itemInputs("2x gtceu:rhenium_plate")
        .itemInputs("8x gtceu:tungsten_screw")
        .itemInputs("4x gtceu:trinium_plate")
        .itemOutputs("gtocore:plasma_heater_casing")
        .inputFluids("gtceu:osmiridium 288")
        .EUt(120)
        .duration(200)

    gtr.assembler("gtocore:high_energy_ultraviolet_emitter_casing")
        .itemInputs("gtceu:tritanium_frame")
        .itemInputs("gtceu:uv_emitter")
        .itemInputs("4x gtceu:naquadria_plate")
        .itemOutputs("gtocore:high_energy_ultraviolet_emitter_casing")
        .inputFluids("gtceu:titanium_plasma 576")
        .EUt(7680)
        .duration(200)

    gtr.assembler("gtocore:naquadah_reinforced_plant_casing")
        .itemInputs("gtocore:stabilized_naquadah_water_plant_casing")
        .itemInputs("16x gtceu:tantalloy_61_bolt")
        .itemInputs("8x gtceu:naquadria_foil")
        .itemOutputs("gtocore:naquadah_reinforced_plant_casing")
        .inputFluids("gtceu:pcb_coolant 1000")
        .EUt(480)
        .duration(400)

    gtr.assembler("gtocore:quark_exclusion_casing")
        .itemInputs("gtceu:mithril_frame")
        .itemInputs("gtceu:uhv_field_generator")
        .itemInputs("4x gtceu:enderium_small_fluid_pipe")
        .itemInputs("8x gtceu:enderite_plate")
        .itemInputs("4x gtceu:uruium_plate")
        .itemInputs("4x gtceu:hastelloy_x_plate")
        .itemOutputs("gtocore:quark_exclusion_casing")
        .inputFluids("gtceu:light_quarks 200")
        .EUt(7680)
        .duration(200)

    gtr.assembler("gtocore:extreme_density_casing")
        .itemInputs("gtceu:trinaquadalloy_frame")
        .itemInputs("gtceu:dense_naquadah_alloy_plate")
        .itemInputs("6x gtceu:trinaquadalloy_plate")
        .itemOutputs("gtocore:extreme_density_casing")
        .inputFluids("gtceu:naquadria 576")
        .EUt(120)
        .duration(200)

    gtr.assembler("gtocore:radiation_absorbent_casing")
        .itemInputs("gtceu:depleted_uranium_alloy_frame")
        .itemInputs("2x gtceu:double_babbitt_alloy_plate")
        .itemInputs("4x gtceu:double_rhodium_plated_palladium_plate")
        .itemOutputs("gtocore:radiation_absorbent_casing")
        .inputFluids("gtceu:ultimet 288")
        .EUt(120)
        .duration(200)

    gtr.assembler("gtocore:shielded_accelerator")
        .itemInputs("gtceu:babbitt_alloy_frame")
        .itemInputs("4x gtceu:double_ruridit_plate")
        .itemInputs("8x gtceu:neutronium_foil")
        .itemOutputs("gtocore:shielded_accelerator")
        .inputFluids("gtceu:reactor_steel 1296")
        .EUt(120)
        .duration(200)

    gtr.assembler("gtocore:gravity_stabilization_casing")
        .itemInputs("gtceu:neutronium_frame")
        .itemInputs("gtceu:gravi_star")
        .itemInputs("2x gtceu:neutron_reflector")
        .itemInputs("5x gtceu:double_trinaquadalloy_plate")
        .itemOutputs("gtocore:gravity_stabilization_casing")
        .inputFluids("gtceu:neutronium 576")
        .EUt(480)
        .duration(400)

    gtr.assembler("gtocore:neutronium_casing")
        .itemInputs("gtceu:neutronium_frame")
        .itemInputs("4x gtceu:ruthenium_trinium_americium_neutronate_plate")
        .itemInputs("12x gtceu:curved_neutronium_plate")
        .itemOutputs("gtocore:neutronium_casing")
        .inputFluids("gtceu:enderium 576")
        .EUt(480)
        .duration(200)

    gtr.assembler("gtocore:neutronium_active_casing")
        .itemInputs("gtceu:neutronium_frame")
        .itemInputs("4x gtceu:europium_normal_fluid_pipe")
        .itemInputs("4x gtceu:double_lafium_plate")
        .itemInputs("8x gtceu:neutronium_plate")
        .itemOutputs("gtocore:neutronium_active_casing")
        .inputFluids("gtceu:seaborgium 576")
        .EUt(480)
        .duration(200)

    gtr.assembler("gtocore:neutronium_stable_casing")
        .itemInputs("gtceu:trinaquadalloy_frame")
        .itemInputs("4x gtceu:long_neutronium_rod")
        .itemInputs("4x gtceu:enriched_naquadah_trinium_europium_duranide_plate")
        .itemInputs("4x gtceu:double_naquadria_plate")
        .itemOutputs("gtocore:neutronium_stable_casing")
        .inputFluids("gtceu:depleted_uranium_alloy 576")
        .EUt(480)
        .duration(200)

    gtr.assembler("gtocore:molecular_transformer")
        .itemInputs("gtceu:steel_frame")
        .itemInputs("16x gtceu:hv_field_generator")
        .itemInputs("4x gtceu:ev_emitter")
        .itemInputs("4x gtceu:mpic_chip")
        .itemInputs("8x gtceu:black_steel_quadruple_cable")
        .itemInputs("8x gtceu:nickel_zinc_ferrite_plate")
        .itemInputs("4x gtceu:neutron_reflector")
        .itemInputs("8x #gtceu:circuits/iv")
        .itemInputs("16x gtceu:ruthenium_plate")
        .itemOutputs("gtocore:molecular_transformer")
        .inputFluids("gtceu:hastelloy_n_75 1296")
        .EUt(1920)
        .duration(800)
})