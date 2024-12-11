ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu

    for (let circuit_robot = 1; circuit_robot < 6; circuit_robot++) {
        gtr.circuit_assembly_line("gtocore:bioware_assembly" + circuit_robot)
            .notConsumable("gtocore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("gtocore:bioware_printed_circuit_board",
                "2x gtocore:bioware_processor",
                "16x gtocore:smd_capacitor_bioware",
                "16x gtocore:smd_diode_bioware",
                "16x gtocore:smd_resistor_bioware",
                "16x gtocore:smd_transistor_bioware",
                "16x gtocore:smd_inductor_bioware",
                "16x gtceu:fine_naquadah_wire",
                "48x gtceu:ram_chip",
                "16x gtceu:polybenzimidazole_foil",
                "2x gtceu:duranium_plate")
            .inputFluids("gtceu:biohmediumsterilized 1000", "gtceu:americium 576", "gtceu:polyethylene 2592", "gtceu:enriched_naquadah 1296")
            .itemOutputs("2x gtocore:bioware_assembly")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 4 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("gtocore:bioware_computer" + circuit_robot)
            .notConsumable("gtocore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("gtocore:bioware_printed_circuit_board",
                "2x gtocore:bioware_assembly",
                "32x gtocore:smd_capacitor_bioware",
                "32x gtocore:smd_diode_bioware",
                "32x gtocore:smd_resistor_bioware",
                "32x gtocore:smd_transistor_bioware",
                "32x gtocore:smd_inductor_bioware",
                "32x gtceu:fine_naquadah_wire",
                "64x gtceu:ram_chip",
                "32x gtceu:nor_memory_chip",
                "2x gtceu:uhpic_chip",
                "32x gtceu:polybenzimidazole_foil",
                "2x gtceu:neutronium_plate")
            .inputFluids("gtceu:biohmediumsterilized 1000", "gtceu:darmstadtium 576", "gtceu:polybenzimidazole 1296", "gtceu:enriched_naquadah 1296")
            .itemOutputs("gtocore:bioware_computer")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 4 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("gtocore:bioware_mainframe" + circuit_robot)
            .notConsumable("gtocore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("2x gtceu:neutronium_frame",
                "2x gtocore:bioware_computer",
                "64x gtocore:smd_capacitor_bioware",
                "64x gtocore:smd_diode_bioware",
                "64x gtocore:smd_resistor_bioware",
                "64x gtocore:smd_transistor_bioware",
                "64x gtocore:smd_inductor_bioware",
                "64x gtceu:ram_chip",
                "4x gtceu:uhpic_chip",
                "16x gtceu:ruthenium_trinium_americium_neutronate_double_wire",
                "64x gtceu:polybenzimidazole_foil",
                "gtceu:gravi_star",
                "2x gtceu:mithril_plate")
            .inputFluids("gtceu:biohmediumsterilized 1000", "gtceu:darmstadtium 1296", "gtceu:polybenzimidazole 2592", "gtceu:naquadria 1296")
            .itemOutputs("gtocore:bioware_mainframe")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(800 * 4 / (4 ** circuit_robot))
    }

    for (let circuit_robot = 2; circuit_robot < 6; circuit_robot++) {
        gtr.circuit_assembly_line("gtocore:optical_assembly" + circuit_robot)
            .notConsumable("gtocore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("gtocore:optical_printed_circuit_board",
                "2x gtocore:optical_processor",
                "16x gtocore:smd_capacitor_optical",
                "16x gtocore:smd_diode_optical",
                "16x gtocore:smd_resistor_optical",
                "16x gtocore:smd_transistor_optical",
                "16x gtocore:smd_inductor_optical",
                "16x gtceu:fine_dubnium_wire",
                "24x gtocore:optical_ram_chip",
                "8x gtceu:polyetheretherketone_foil",
                "2x gtceu:high_durability_compound_steel_plate")
            .inputFluids("gtceu:duranium 576", "gtceu:polyvinyl_chloride 1296", "gtceu:enriched_naquadah 1296")
            .itemOutputs("2x gtocore:optical_assembly")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 16 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("gtocore:optical_computer" + circuit_robot)
            .notConsumable("gtocore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("gtocore:optical_printed_circuit_board",
                "2x gtocore:optical_assembly",
                "32x gtocore:smd_capacitor_optical",
                "32x gtocore:smd_diode_optical",
                "32x gtocore:smd_resistor_optical",
                "32x gtocore:smd_transistor_optical",
                "32x gtocore:smd_inductor_optical",
                "32x gtceu:fine_dubnium_wire",
                "32x gtocore:optical_ram_chip",
                "64x gtceu:nor_memory_chip",
                "64x gtceu:nand_memory_chip",
                "2x gtocore:nm_chip",
                "16x gtceu:polyetheretherketone_foil",
                "gtceu:gravi_star",
                "2x gtceu:seaborgium_plate")
            .inputFluids("gtceu:tritanium 576", "gtceu:polyetheretherketone 576", "gtceu:naquadria 1296")
            .itemOutputs("gtocore:optical_computer")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 16 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("gtocore:optical_mainframe" + circuit_robot)
            .notConsumable("gtocore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("2x gtceu:quantanium_frame",
                "2x gtocore:optical_computer",
                "64x gtocore:smd_capacitor_optical",
                "64x gtocore:smd_diode_optical",
                "64x gtocore:smd_resistor_optical",
                "64x gtocore:smd_transistor_optical",
                "64x gtocore:smd_inductor_optical",
                "64x gtocore:optical_ram_chip",
                "4x gtocore:nm_chip",
                "16x gtceu:enderite_double_wire",
                "32x gtceu:polyetheretherketone_foil",
                "2x gtceu:gravi_star",
                "2x gtceu:titansteel_plate")
            .inputFluids("gtceu:tritanium 1296", "gtceu:polyetheretherketone 1296", "gtceu:neutronium 576")
            .itemOutputs("gtocore:optical_mainframe")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(800 * 16 / (4 ** circuit_robot))
    }

    for (let circuit_robot = 3; circuit_robot < 6; circuit_robot++) {
        gtr.circuit_assembly_line("gtocore:exotic_assembly" + circuit_robot)
            .notConsumable("gtocore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("gtocore:exotic_printed_circuit_board",
                "2x gtocore:exotic_processor",
                "16x gtocore:smd_capacitor_exotic",
                "16x gtocore:smd_diode_exotic",
                "16x gtocore:smd_resistor_exotic",
                "16x gtocore:smd_transistor_exotic",
                "16x gtocore:smd_inductor_exotic",
                "gtocore:draconic_core",
                "16x gtceu:fine_cinobite_wire",
                "24x gtocore:exotic_ram_chip",
                "16x gtceu:polyetheretherketone_foil",
                "2x gtceu:infuscolium_plate")
            .inputFluids("gtceu:tritanium 576", "gtceu:zylon 288", "gtceu:quantanium 288", "gtceu:naquadria 1296")
            .itemOutputs("2x gtocore:exotic_assembly")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 64 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("gtocore:exotic_computer" + circuit_robot)
            .notConsumable("gtocore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("gtocore:exotic_printed_circuit_board",
                "2x gtocore:exotic_assembly",
                "32x gtocore:smd_capacitor_exotic",
                "32x gtocore:smd_diode_exotic",
                "32x gtocore:smd_resistor_exotic",
                "32x gtocore:smd_transistor_exotic",
                "32x gtocore:smd_inductor_exotic",
                "32x gtceu:fine_cinobite_wire",
                "32x gtocore:exotic_ram_chip",
                "64x gtceu:nor_memory_chip",
                "64x gtceu:nor_memory_chip",
                "2x gtocore:pm_chip",
                "32x gtceu:polyetheretherketone_foil",
                "gtocore:unstable_star",
                "2x gtceu:adamantine_plate")
            .inputFluids("gtceu:enderium 576", "gtceu:zylon 576", "gtceu:quantanium 576", "gtceu:orichalcum 1296")
            .itemOutputs("gtocore:exotic_computer")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 64 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("gtocore:exotic_mainframe" + circuit_robot)
            .notConsumable("gtocore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("2x gtceu:adamantium_frame",
                "2x gtocore:exotic_computer",
                "64x gtocore:smd_capacitor_exotic",
                "64x gtocore:smd_diode_exotic",
                "64x gtocore:smd_resistor_exotic",
                "64x gtocore:smd_transistor_exotic",
                "64x gtocore:smd_inductor_exotic",
                "64x gtocore:exotic_ram_chip",
                "16x gtceu:data_stick",
                "4x gtocore:pm_chip",
                "16x gtceu:echoite_double_wire",
                "64x gtceu:polyetheretherketone_foil",
                "2x gtocore:unstable_star",
                "2x gtceu:black_titanium_plate",
                "4x gtceu:double_technetium_plate")
            .inputFluids("gtceu:enderium 1296", "gtceu:zylon 1296", "gtceu:quantanium 1296", "gtceu:seaborgium 1296")
            .itemOutputs("gtocore:exotic_mainframe")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(800 * 64 / (4 ** circuit_robot))
    }

    for (let circuit_robot = 4; circuit_robot < 6; circuit_robot++) {
        gtr.circuit_assembly_line("gtocore:cosmic_assembly" + circuit_robot)
            .notConsumable("gtocore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("gtocore:cosmic_printed_circuit_board",
                "2x gtocore:cosmic_processor",
                "32x gtocore:smd_capacitor_cosmic",
                "32x gtocore:smd_diode_cosmic",
                "32x gtocore:smd_resistor_cosmic",
                "32x gtocore:smd_transistor_cosmic",
                "32x gtocore:smd_inductor_cosmic",
                "gtocore:wyvern_core",
                "4x gtceu:enderite_single_wire",
                "24x gtocore:cosmic_ram_chip",
                "16x gtceu:zylon_foil",
                "2x gtceu:cinobite_plate")
            .inputFluids("gtceu:mithril 576", "gtceu:fullerene_polymer_matrix_pulp 288", "gtceu:enriched_naquadah 576", "gtceu:adamantine 288")
            .itemOutputs("2x gtocore:cosmic_assembly")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 256 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("gtocore:cosmic_computer" + circuit_robot)
            .notConsumable("gtocore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("gtocore:cosmic_printed_circuit_board",
                "2x gtocore:cosmic_assembly",
                "64x gtocore:smd_capacitor_cosmic",
                "64x gtocore:smd_diode_cosmic",
                "64x gtocore:smd_resistor_cosmic",
                "64x gtocore:smd_transistor_cosmic",
                "64x gtocore:smd_inductor_cosmic",
                "8x gtceu:echoite_single_wire",
                "32x gtocore:cosmic_ram_chip",
                "32x gtocore:exotic_ram_chip",
                "64x gtceu:nor_memory_chip",
                "2x gtocore:fm_chip",
                "12x gtceu:fullerene_polymer_matrix_pulp_foil",
                "2x gtocore:unstable_star",
                "4x gtceu:double_trinium_titanium_plate")
            .inputFluids("gtceu:mithril 1296", "gtceu:fullerene_polymer_matrix_pulp 576", "gtceu:infuscolium 1296")
            .itemOutputs("gtocore:cosmic_computer")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(400 * 256 / (4 ** circuit_robot))

        gtr.circuit_assembly_line("gtocore:cosmic_mainframe" + circuit_robot)
            .notConsumable("gtocore:precision_circuit_assembly_robot_mk" + circuit_robot)
            .itemInputs("2x gtceu:vibranium_frame",
                "2x gtocore:cosmic_computer",
                "64x gtocore:smd_capacitor_cosmic",
                "64x gtocore:smd_diode_cosmic",
                "64x gtocore:smd_resistor_cosmic",
                "64x gtocore:smd_transistor_cosmic",
                "64x gtocore:smd_inductor_cosmic",
                "64x gtocore:cosmic_ram_chip",
                "16x gtceu:data_orb",
                "4x gtocore:fm_chip",
                "16x gtceu:legendarium_double_wire",
                "64x gtceu:fullerene_polymer_matrix_pulp_foil",
                "4x gtocore:unstable_star",
                "16x gtocore:proto_matter",
                "8x gtceu:double_naquadriatictaranium_plate")
            .inputFluids("gtceu:taranium 576", "gtceu:trinium_titanium 1296", "gtceu:fullerene_polymer_matrix_pulp 1296", "gtceu:rareearth 1296")
            .itemOutputs("gtocore:cosmic_mainframe")
            .EUt(GTValues.VA[GTValues.ZPM] * (4 ** circuit_robot))
            .duration(800 * 256 / (4 ** circuit_robot))
    }

    gtr.circuit_assembly_line("gtocore:supracausal_assembly")
        .notConsumable("gtocore:precision_circuit_assembly_robot_mk5")
        .itemInputs("gtocore:supracausal_printed_circuit_board",
            "2x gtocore:supracausal_processor",
            "16x gtocore:smd_capacitor_supracausal",
            "16x gtocore:smd_diode_supracausal",
            "16x gtocore:smd_resistor_supracausal",
            "16x gtocore:smd_transistor_supracausal",
            "16x gtocore:smd_inductor_supracausal",
            "gtocore:awakened_core",
            "64x gtceu:fine_heavy_quark_degenerate_matter_wire",
            "16x gtceu:radox_foil",
            "8x gtceu:legendarium_single_wire",
            "8x gtocore:optical_soc",
            "gtocore:recursively_folded_negative_space",
            "gtocore:contained_exotic_matter",
            "16x gtceu:trinium_titanium_plate")
        .inputFluids("gtceu:taranium 432", "gtceu:trinium_titanium 1296", "gtceu:adamantine 576", "gtceu:fullerene_polymer_matrix_pulp 2304")
        .EUt(GTValues.VA[GTValues.UXV])
        .itemOutputs("gtocore:supracausal_assembly")
        .duration(200)

    gtr.circuit_assembly_line("gtocore:supracausal_computer")
        .notConsumable("gtocore:precision_circuit_assembly_robot_mk5")
        .itemInputs("gtocore:supracausal_printed_circuit_board",
            "2x gtocore:supracausal_assembly",
            "32x gtocore:smd_capacitor_supracausal",
            "32x gtocore:smd_diode_supracausal",
            "32x gtocore:smd_resistor_supracausal",
            "32x gtocore:smd_transistor_supracausal",
            "32x gtocore:smd_inductor_supracausal",
            "32x gtocore:supracausal_ram_chip",
            "16x gtceu:data_module",
            "32x gtceu:trinium_titanium_plate",
            "64x gtceu:legendarium_single_wire",
            "16x gtceu:starmetal_plate",
            "gtocore:nuclear_star",
            "gtocore:eigenfolded_kerr_manifold",
            "4x gtceu:cosmic_neutronium_plate")
        .inputFluids("gtceu:taranium 288", "gtceu:trinium_titanium 1296", "gtceu:adamantine 432", "gtceu:fullerene_polymer_matrix_pulp 864")
        .EUt(GTValues.VA[GTValues.UXV])
        .itemOutputs("gtocore:supracausal_computer")
        .duration(200)

    gtr.circuit_assembly_line("gtocore:supracausal_mainframe")
        .notConsumable("gtocore:precision_circuit_assembly_robot_mk5")
        .itemInputs("2x gtceu:infinity_frame",
            "2x gtocore:supracausal_computer",
            "64x gtocore:smd_capacitor_supracausal",
            "64x gtocore:smd_diode_supracausal",
            "64x gtocore:smd_resistor_supracausal",
            "64x gtocore:smd_transistor_supracausal",
            "64x gtocore:smd_inductor_supracausal",
            "64x gtceu:radox_plate",
            "64x gtceu:awakened_draconium_double_wire",
            "64x gtocore:cosmic_fabric",
            "32x gtocore:cosmic_processing_unit_core",
            "8x gtocore:ultrashort_pulse_laser",
            "2x gtocore:nuclear_star",
            "gtocore:ctc_computational_unit",
            "64x gtceu:quantum_chromo_dynamically_confined_matter_plate")
        .inputFluids("gtceu:taranium 9216", "gtceu:adamantine 9216", "gtceu:fullerene_polymer_matrix_pulp 9216", "gtceu:periodicium 9216")
        .EUt(GTValues.VA[GTValues.UXV])
        .itemOutputs("gtocore:supracausal_mainframe")
        .duration(400)

    tiers.forEach((c) => {
        gtr.packer("gtocore:universal_circuit_" + c[0])
            .itemInputs("#gtceu:circuits/" + c[0])
            .itemOutputs("gtocore:universal_circuit_" + c[0])
            .EUt(7)
            .duration(2 ** (c[1] + 1))
    })

    tiers.forEach((c) => {
        gtr.suprachronal_assembly_line("gtocore:suprachronal_circuit_" + c[0])
            .notConsumable("gtocore:hyperdimensional_drone")
            .itemInputs("gtocore:timepiece")
            .inputFluids("gtceu:spacetime " + (c[1] + 1), "gtceu:raw_star_matter_plasma " + (c[1] + 1) * 10, "gtceu:uu_matter " + (c[1] + 1) * 100, "gtceu:periodicium " + (c[1] + 1) * 100)
            .itemOutputs("gtocore:suprachronal_circuit_" + c[0])
            .duration(2 * (c[1] + 1))
            .circuit((c[1] + 1))
            .EUt(GTValues.VA[GTValues.MAX])
            .stationResearch(b => b.researchStack(Registries.getItemStack((c[1] + 1) === 1 ? "gtocore:supracausal_mainframe" : "gtocore:suprachronal_circuit_" + tiers[(c[1] + 1) - 2][0]))
                .dataStack(Registries.getItemStack("gtceu:data_module"))
                .EUt(GTValues.VA[GTValues.MAX])
                .CWUt(8192))
    })

    gtr.suprachronal_assembly_line("gtocore:max_electric_motor")
        .itemInputs("gtceu:long_magmatter_rod",
            "8x gtceu:long_transcendent_metal_rod",
            "8x gtceu:transcendent_metal_ring",
            "16x gtceu:transcendent_metal_round",
            "64x gtceu:fine_black_dwarf_mtter_wire",
            "64x gtceu:fine_black_dwarf_mtter_wire",
            "64x gtceu:fine_white_dwarf_mtter_wire",
            "64x gtceu:fine_white_dwarf_mtter_wire",
            "16x gtceu:cosmic_neutronium_single_cable",
            "4x gtceu:curved_transcendent_metal_plate")
        .inputFluids("gtceu:super_mutated_living_solder " + 500 * 32, "gtceu:soldering_alloy " + 1000 * 32, "gtceu:lubricant " + 2000 * 32, "gtceu:infinity 576")
        .itemOutputs("gtocore:max_electric_motor")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:opv_electric_motor"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(4096))

    gtr.suprachronal_assembly_line("gtocore:max_electric_pump")
        .itemInputs("gtocore:max_electric_motor",
            "64x gtceu:neutronium_small_fluid_pipe",
            "4x gtceu:transcendent_metal_plate",
            "16x gtceu:transcendent_metal_screw",
            "4x gtceu:double_black_dwarf_mtter_plate",
            "4x gtceu:double_white_dwarf_mtter_plate",
            "gtceu:transcendent_metal_rotor",
            "16x gtceu:cosmic_neutronium_single_cable")
        .inputFluids("gtceu:super_mutated_living_solder " + 576 * 32, "gtceu:soldering_alloy " + 1152 * 32, "gtceu:lubricant " + 2000 * 32, "gtceu:infinity 576")
        .itemOutputs("gtocore:max_electric_pump")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:opv_electric_pump"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(4096))

    gtr.suprachronal_assembly_line("gtocore:max_conveyor_module")
        .itemInputs("2x gtocore:max_electric_motor",
            "4x gtceu:transcendent_metal_plate",
            "8x gtceu:transcendent_metal_ring",
            "32x gtceu:transcendent_metal_round",
            "8x gtceu:transcendent_metal_screw",
            "8x gtceu:white_dwarf_mtter_plate",
            "8x gtceu:black_dwarf_mtter_plate",
            "16x gtceu:cosmic_neutronium_single_cable")
        .inputFluids("gtceu:super_mutated_living_solder " + 576 * 32, "gtceu:lubricant " + 2000 * 32, "gtceu:styrene_butadiene_rubber " + 1152 * (3 + 32), "gtceu:infinity 576")
        .itemOutputs("gtocore:max_conveyor_module")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:opv_conveyor_module"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(4096))

    gtr.suprachronal_assembly_line("gtocore:max_electric_piston")
        .itemInputs("gtocore:max_electric_motor",
            "8x gtceu:transcendent_metal_plate",
            "8x gtceu:transcendent_metal_ring",
            "32x gtceu:transcendent_metal_round",
            "8x gtceu:transcendent_metal_rod",
            "2x gtceu:transcendent_metal_gear",
            "4x gtceu:small_transcendent_metal_gear",
            "16x gtceu:cosmic_neutronium_single_cable")
        .inputFluids("gtceu:super_mutated_living_solder " + 576 * 32, "gtceu:soldering_alloy " + 1152 * 32, "gtceu:lubricant " + 2000 * 32, "gtceu:infinity 576")
        .itemOutputs("gtocore:max_electric_piston")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:opv_electric_piston"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(4096))

    gtr.suprachronal_assembly_line("gtocore:max_robot_arm")
        .itemInputs("8x gtceu:long_transcendent_metal_rod",
            "2x gtceu:transcendent_metal_gear",
            "6x gtceu:small_transcendent_metal_gear",
            "4x gtocore:max_electric_motor",
            "gtocore:max_electric_piston",
            "#gtceu:circuits/max",
            "2x #gtceu:circuits/opv",
            "4x #gtceu:circuits/uxv",
            "16x gtceu:cosmic_neutronium_single_cable")
        .inputFluids("gtceu:super_mutated_living_solder " + 576 * 32, "gtceu:soldering_alloy " + 1152 * 32, "gtceu:lubricant " + 2000 * 32, "gtceu:infinity 576")
        .itemOutputs("gtocore:max_robot_arm")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:opv_robot_arm"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(4096))

    gtr.suprachronal_assembly_line("gtocore:max_emitter")
        .itemInputs("gtceu:infinity_frame",
            "gtocore:max_electric_motor",
            "8x gtceu:long_transcendent_metal_rod",
            "4x gtocore:nuclear_star",
            "2x #gtceu:circuits/max",
            "64x gtceu:white_dwarf_mtter_foil",
            "64x gtceu:black_dwarf_mtter_foil",
            "64x gtceu:shirabon_foil",
            "64x gtceu:cosmic_foil",
            "32x gtceu:cosmic_neutronium_single_cable")
        .inputFluids("gtceu:super_mutated_living_solder " + 1152 * 32, "gtceu:soldering_alloy " + 2304 * 32, "gtceu:infinity 576")
        .itemOutputs("gtocore:max_emitter")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:opv_emitter"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(6114))

    gtr.suprachronal_assembly_line("gtocore:max_sensor")
        .itemInputs("gtceu:infinity_frame",
            "gtocore:max_electric_motor",
            "8x gtceu:transcendent_metal_plate",
            "4x gtocore:nuclear_star",
            "2x #gtceu:circuits/max",
            "64x gtceu:white_dwarf_mtter_foil",
            "64x gtceu:black_dwarf_mtter_foil",
            "64x gtceu:shirabon_foil",
            "64x gtceu:cosmic_foil",
            "32x gtceu:cosmic_neutronium_single_cable")
        .inputFluids("gtceu:super_mutated_living_solder " + 1152 * 32, "gtceu:soldering_alloy " + 2304 * 32, "gtceu:infinity 576")
        .itemOutputs("gtocore:max_sensor")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:opv_sensor"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(6114))

    gtr.suprachronal_assembly_line("gtocore:max_field_generator")
        .itemInputs("gtceu:infinity_frame",
            "12x gtceu:chaos_plate",
            "4x gtocore:nuclear_star",
            "2x gtocore:max_emitter",
            "2x #gtceu:circuits/max",
            "64x gtceu:fine_white_dwarf_mtter_wire",
            "64x gtceu:fine_black_dwarf_mtter_wire",
            "64x gtceu:fine_shirabon_wire",
            "64x gtceu:fine_cosmic_wire",
            "32x gtceu:cosmic_neutronium_single_cable")
        .inputFluids("gtceu:super_mutated_living_solder " + 1152 * 32, "gtceu:soldering_alloy " + 2304 * 32, "gtceu:infinity 576")
        .itemOutputs("gtocore:max_field_generator")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:opv_field_generator"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(6114))

    gtr.suprachronal_assembly_line("gtocore:create_ultimate_battery")
        .itemInputs("gtceu:magneto_hydro_dynamically_con_strained_star_matter_frame",
            "4x gtocore:suprachronal_mainframe_complex",
            "16x gtocore:mega_max_battery",
            "16x gtocore:max_field_generator",
            "64x gtocore:fm_wafer",
            "64x gtocore:fm_wafer",
            "64x gtocore:fm_wafer",
            "64x gtocore:fm_wafer",
            "64x gtocore:fm_wafer",
            "64x gtocore:fm_wafer",
            "64x gtocore:fm_wafer",
            "64x gtocore:fm_wafer",
            "16x gtceu:infinity_hex_wire",
            "64x gtceu:magneto_hydro_dynamically_con_strained_star_matter_foil",
            "32x gtceu:magneto_hydro_dynamically_con_strained_star_matter_plate",
            "32x gtceu:double_cosmic_plate")
        .itemOutputs("gtocore:create_ultimate_battery")
        .inputFluids("gtceu:infinity 1000", "gtceu:spacetime 1000", "gtceu:eternity 1000", "gtceu:magneto_hydro_dynamically_con_strained_star_matter 1000")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(8000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:mega_max_battery"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(16384))

    gtr.assembly_line("gtocore:auto_configuration_maintenance_hatch")
        .itemInputs("gtceu:iv_machine_hull", "4x gtceu:configurable_maintenance_hatch", "8x gtceu:iv_conveyor_module", "8x gtceu:iv_robot_arm", "16x #gtceu:circuits/iv", "4x gtceu:iv_emitter", "4x gtceu:iv_sensor", "gtceu:rad_away_pill", "gtceu:paracetamol_pill", "16x gtceu:stainless_steel_foil")
        .inputFluids("gtceu:lubricant 1000", "gtceu:soldering_alloy 576", "gtceu:cupronickel 576", "gtceu:brass 576")
        .itemOutputs("gtocore:auto_configuration_maintenance_hatch")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(800)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Registries.getItemStack("gtceu:auto_maintenance_hatch")).dataStack(Registries.getItemStack("gtceu:data_orb")).EUt(GTValues.VA[GTValues.IV]).duration(8000))

    gtr.assembly_line("gtocore:infinity_coil_block")
        .itemInputs("gtocore:quantum_force_transformer_coil", "8x gtceu:infinity_double_wire", "16x gtceu:draconium_screw", "64x gtceu:kevlar_foil", "32x gtceu:radox_foil")
        .inputFluids("gtceu:starmetal 576", "gtceu:crystal_matrix 576")
        .itemOutputs("gtocore:infinity_coil_block")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:starmetal_coil_block"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(2048))

    gtr.assembly_line("gtocore:hypogen_coil_block")
        .itemInputs("gtocore:quantum_force_transformer_coil", "8x gtceu:hypogen_double_wire", "16x gtceu:transcendent_metal_screw", "64x gtceu:radox_foil", "32x gtceu:chaos_foil")
        .inputFluids("gtceu:infinity 576", "gtceu:cosmic_neutronium 576")
        .itemOutputs("gtocore:hypogen_coil_block")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:infinity_coil_block"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(4096))

    gtr.assembly_line("gtocore:eternity_coil_block")
        .itemInputs("gtocore:quantum_force_transformer_coil", "8x gtceu:spacetime_double_wire", "4x gtceu:eternity_rod", "avaritia:eternal_singularity", "64x gtocore:cosmic_fabric", "64x gtceu:radox_foil", "64x gtceu:radox_foil", "64x gtceu:chaos_foil")
        .inputFluids("gtceu:hypogen 576", "gtceu:spacetime 576")
        .itemOutputs("gtocore:eternity_coil_block")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:hypogen_coil_block"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(8192))

    const machine_materialas = [
        ["uhv", "europium", "1966080", "uv", "128", "gtocore:nm_chip"],
        ["uev", "mithril", "7864320", "uhv", "256", "gtocore:nm_chip"],
        ["uiv", "neutronium", "31457280", "uev", "512", "gtocore:pm_chip"],
        ["uxv", "taranium", "125829120", "uiv", "1024", "gtocore:pm_chip"],
        ["opv", "crystal_matrix", "503316480", "uxv", "2048", "gtocore:fm_chip"],
        ["max", "cosmic_neutronium", "503316480", "opv", "4096", "gtocore:fm_chip"]
    ]
    machine_materialas.forEach((machine_material) => {
        gtr.assembly_line("gtocore:" + machine_material[0] + "_energy_input_hatch")
            .itemInputs("gtceu:" + machine_material[0] + "_machine_hull",
                "4x gtceu:" + machine_material[1] + "_single_cable",
                "2x " + machine_material[5],
                "#gtceu:circuits/" + machine_material[0],
                "2x gtocore:" + machine_material[0] + "_voltage_coil")
            .inputFluids("gtceu:sodium_potassium 10000", "gtceu:soldering_alloy 2880", "gtceu:mutated_living_solder 1296")
            .itemOutputs("gtceu:" + machine_material[0] + "_energy_input_hatch")
            .EUt(machine_material[2])
            .duration(800)
            .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:" + machine_material[3] + "_energy_input_hatch"))
                .dataStack(Registries.getItemStack("gtceu:data_module"))
                .EUt(machine_material[2])
                .CWUt(machine_material[4]))

        gtr.assembly_line("gtocore:" + machine_material[0] + "_energy_output_hatch")
            .itemInputs("gtceu:" + machine_material[0] + "_machine_hull",
                "4x gtceu:" + machine_material[1] + "_spring",
                "2x " + machine_material[5],
                "#gtceu:circuits/" + machine_material[0],
                "2x gtocore:" + machine_material[0] + "_voltage_coil")
            .inputFluids("gtceu:sodium_potassium 10000", "gtceu:soldering_alloy 2880", "gtceu:mutated_living_solder 1296")
            .itemOutputs("gtceu:" + machine_material[0] + "_energy_output_hatch")
            .EUt(machine_material[2])
            .duration(800)
            .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:" + machine_material[3] + "_energy_output_hatch"))
                .dataStack(Registries.getItemStack("gtceu:data_module"))
                .EUt(machine_material[2])
                .CWUt(machine_material[4]))
    })

    gtr.assembly_line("gtocore:magic_manufacturer")
        .itemInputs("8x gtceu:adamantium_plate",
            "16x gtceu:kanthal_rod",
            "16x gtceu:ultimet_screw",
            "16x minecraft:end_crystal",
            "16x gtocore:ballast",
            "gtceu:uev_electric_pump",
            "2x gtceu:uev_field_generator",
            "minecraft:dragon_egg",
            "4x #gtceu:circuits/uiv",
            "gtocore:really_max_battery",
            "8x gtceu:dense_obsidian_plate",
            "16x gtceu:double_stellite_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:indalloy_140 2592", "gtceu:mutated_living_solder 1296", "gtceu:tairitsu 1296")
        .itemOutputs("gtocore:magic_manufacturer")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:magic_core"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(128))

    gtr.assembly_line("gtocore:draconic_energy_core")
        .itemInputs("gtocore:wyvern_energy_core",
            "64x gtceu:uv_lapotronic_battery",
            "16x gtocore:awakened_core",
            "16x gtocore:dragon_stabilizer_core",
            "8x #gtceu:circuits/opv",
            "gtceu:uv_solar_panel",
            "64x gtocore:smd_capacitor_cosmic",
            "64x gtocore:smd_diode_cosmic",
            "64x gtocore:smd_resistor_cosmic",
            "64x gtocore:smd_transistor_cosmic",
            "64x gtocore:smd_inductor_cosmic",
            "64x gtceu:awakened_draconium_block")
        .inputFluids("gtceu:super_mutated_living_solder 28800", "gtceu:awakened_draconium 28800", "gtceu:cosmic_neutronium 14400", "gtceu:crystal_matrix 14400")
        .itemOutputs("gtocore:draconic_energy_core")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(2400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:wyvern_energy_core"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.OpV])
            .CWUt(1024))

    gtr.assembly_line("gtocore:super_computation")
        .itemInputs("16x gtceu:data_bank",
            "64x #gtceu:circuits/uev",
            "64x gtceu:uv_field_generator",
            "64x gtceu:uv_field_generator",
            "16x gtceu:data_module",
            "8x gtceu:gold_nanites",
            "4x gtceu:hpca_bridge_component",
            "16x gtceu:computer_monitor_cover",
            "64x gtocore:optical_processing_core",
            "64x gtocore:high_precision_crystal_soc",
            "64x gtceu:enderite_quadruple_wire",
            "64x gtceu:normal_optical_pipe")
        .inputFluids("gtceu:mutated_living_solder 2880", "gtceu:vanadium_gallium 2880", "gtceu:pcb_coolant 16000", "gtocore:gelid_cryotheum 16000")
        .itemOutputs("gtocore:super_computation")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:high_performance_computation_array"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtocore:super_computation_component")
        .itemInputs("gtceu:hpca_advanced_computation_component",
            "gtceu:hpca_heat_sink_component",
            "4x #gtceu:circuits/uhv",
            "#gtceu:circuits/uev",
            "2x gtceu:zpm_field_generator",
            "gtceu:data_orb",
            "gtocore:high_precision_crystal_soc",
            "4x gtceu:normal_optical_pipe")
        .inputFluids("gtceu:soldering_alloy 576", "gtceu:vanadium_gallium 576", "gtceu:pcb_coolant 1000", "gtocore:gelid_cryotheum 1000")
        .itemOutputs("gtocore:super_computation_component")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:advanced_computer_casing"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(128))

    gtr.assembly_line("gtocore:large_chemical_plant")
        .itemInputs("16x gtceu:large_chemical_reactor",
            "4x gtceu:neutronium_spring",
            "4x gtceu:uv_field_generator",
            "4x #gtceu:circuits/uev",
            "4x gtceu:polytetrafluoroethylene_nonuple_fluid_pipe",
            "8x gtceu:uhv_electric_motor",
            "16x gtceu:polytetrafluoroethylene_rod",
            "64x gtceu:polytetrafluoroethylene_foil",
            "16x gtceu:double_watertight_steel_plate")
        .inputFluids("gtceu:indalloy_140 2880", "gtceu:soldering_alloy 2880", "gtceu:polytetrafluoroethylene 2880")
        .itemOutputs("gtocore:large_chemical_plant")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:chemical_plant"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(64))

    gtr.assembly_line("gtocore:super_blast_smelter")
        .itemInputs("64x gtceu:tungsten_carbide_frame",
            "64x gtceu:mega_blast_furnace",
            "64x gtocore:mega_alloy_blast_smelter",
            "64x gtceu:uv_field_generator",
            "64x gtceu:iv_fluid_regulator",
            "64x #gtceu:circuits/uev",
            "64x gtceu:copper_nanites",
            "64x gtceu:ruthenium_trinium_americium_neutronate_hex_wire",
            "14x gtceu:dense_tungsten_steel_plate",
            "14x gtceu:dense_rhodium_plated_palladium_plate",
            "14x gtceu:dense_naquadah_alloy_plate",
            "14x gtceu:dense_darmstadtium_plate",
            "64x gtceu:double_gallium_plate",
            "64x gtceu:double_chromium_plate",
            "64x gtceu:double_cobalt_plate",
            "64x gtceu:double_ruthenium_trinium_americium_neutronate_plate")
        .inputFluids("gtceu:cobalt 5760", "gtceu:niobium 5760", "gtceu:astatine 5760", "gtceu:actinium 5760")
        .itemOutputs("gtocore:super_blast_smelter")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:multi_smelter"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(256))

    gtr.assembly_line("gtocore:super_cooler_component")
        .itemInputs("gtceu:hpca_active_cooler_component",
            "gtceu:hpca_heat_sink_component",
            "4x gtceu:tungsten_large_fluid_pipe",
            "16x gtceu:naquadah_screw",
            "gtceu:zpm_fluid_regulator",
            "32x gtceu:fine_rhodium_wire")
        .inputFluids("gtceu:soldering_alloy 576", "gtceu:vanadium_gallium 576", "gtceu:pcb_coolant 1000", "gtocore:gelid_cryotheum 1000")
        .itemOutputs("gtocore:super_cooler_component")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:hpca_active_cooler_component"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(128))

    gtr.assembly_line("gtocore:sps_crafting")
        .itemInputs("8x gtceu:double_americium_plate",
            "32x gtceu:uev_robot_arm",
            "8x gtceu:uev_fluid_regulator",
            "4x gtceu:long_rhodium_rod",
            "4x #gtceu:circuits/uiv",
            "4x gtceu:naquadah_nanites",
            "gtocore:pellet_antimatter",
            "gtocore:rydberg_spinorial_assembly",
            "8x gtceu:degenerate_rhenium_plate",
            "16x gtceu:double_grisium_plate")
        .inputFluids("gtceu:mutated_living_solder 1296", "gtceu:artherium_tin 2880", "gtceu:soldering_alloy 2880", "gtceu:mana 10000")
        .itemOutputs("gtocore:sps_crafting")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:pellet_antimatter"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(256))

    gtr.assembly_line("gtocore:advanced_sps_crafting")
        .itemInputs("4x gtceu:uiv_emitter",
            "4x gtceu:uiv_sensor",
            "4x gtocore:rydberg_spinorial_assembly",
            "16x gtocore:pellet_antimatter",
            "16x minecraft:reinforced_deepslate",
            "64x minecraft:crying_obsidian",
            "64x minecraft:crying_obsidian",
            "4x #gtceu:circuits/uxv",
            "4x gtceu:uiv_field_generator",
            "gtocore:really_max_battery",
            "16x gtceu:neutronium_nanites",
            "16x gtceu:double_gold_plate")
        .inputFluids("gtceu:super_mutated_living_solder 864", "gtceu:mutated_living_solder 1296", "gtceu:soldering_alloy 2880", "gtceu:echoite 2880")
        .itemOutputs("gtocore:advanced_sps_crafting")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:sps_crafting"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(256))

    gtr.assembly_line("gtocore:mass_fabricator")
        .itemInputs("8x gtceu:double_black_titanium_plate",
            "4x gtceu:long_hsse_rod",
            "16x gtceu:adamantium_screw",
            "4x gtceu:uiv_field_generator",
            "gtceu:uiv_electric_pump",
            "4x gtceu:long_rhodium_rod",
            "4x #gtceu:circuits/uxv",
            "8x gtceu:enderium_nanites",
            "8x gtceu:double_blue_alloy_plate",
            "32x gtceu:double_grisium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:tairitsu 2880", "gtceu:indalloy_140 2592", "gtceu:mutated_living_solder 1296")
        .itemOutputs("gtocore:mass_fabricator")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:matter_fabricator"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(512))

    gtr.assembly_line("gtocore:matter_fabricator")
        .itemInputs("8x gtceu:double_tritanium_plate",
            "16x gtceu:long_bismuth_bronze_rod",
            "32x gtceu:sterling_silver_screw",
            "4x gtceu:ruthenium_trinium_americium_neutronate_octal_wire",
            "2x gtceu:uhv_field_generator",
            "4x #gtceu:circuits/uev",
            "16x gtceu:fluxed_electrum_plate",
            "16x gtceu:technetium_plate",
            "8x gtceu:double_abyssalalloy_plate",
            "16x gtceu:double_rose_gold_plate")
        .inputFluids("gtceu:soldering_alloy 1296", "gtceu:gold 1296", "gtceu:silicon_carbide 1296", "gtceu:aluminium_bronze 1296")
        .itemOutputs("gtocore:matter_fabricator")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:large_recycler"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(128))

    gtr.assembly_line("gtocore:assembler_module")
        .itemInputs("4x gtocore:advanced_assembly_line_unit",
            "4x gtceu:uv_emitter",
            "4x gtceu:uv_sensor",
            "4x gtceu:uv_robot_arm",
            "4x gtceu:uv_conveyor_module",
            "4x #gtceu:circuits/uhv",
            "4x gtceu:enriched_naquadah_trinium_europium_duranide_hex_wire",
            "8x gtceu:double_pikyonium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:artherium_tin 2880")
        .itemOutputs("gtocore:assembler_module")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:advanced_assembly_line"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(256))

    gtr.assembly_line("gtocore:resource_collection_module")
        .itemInputs("gtocore:large_void_miner",
            "gtocore:void_fluid_drilling_rig",
            "4x gtceu:uv_robot_arm",
            "16x gtceu:stellite_gear",
            "4x gtceu:uv_conveyor_module",
            "4x #gtceu:circuits/uhv",
            "4x gtceu:enriched_naquadah_trinium_europium_duranide_hex_wire",
            "8x gtceu:double_pikyonium_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:artherium_tin 2880")
        .itemOutputs("gtocore:resource_collection_module")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:luv_large_miner"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(256))

    gtr.assembly_line("gtocore:power_module")
        .itemInputs("gtceu:hssg_frame", "2x gtceu:iv_field_generator", "4x gtceu:luv_conveyor_module", "gtceu:uv_electric_motor", "4x gtceu:battery_alloy_rod", "2x gtceu:small_darmstadtium_gear", "4x gtceu:advanced_power_thruster", "6x gtceu:double_blue_steel_plate")
        .inputFluids("gtceu:indalloy_140 864", "gtceu:soldering_alloy 1152", "gtceu:curium 1152", "gtceu:lubricant 2304")
        .itemOutputs("gtocore:power_module")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:gravitation_engine_unit"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.LuV])
            .CWUt(64))

    gtr.assembly_line("gtocore:power_module_2")
        .itemInputs("gtocore:power_module", "2x gtceu:luv_field_generator", "4x gtceu:zpm_conveyor_module", "gtceu:uhv_electric_motor", "2x gtceu:small_neutronium_gear", "6x gtceu:double_fluxed_electrum_plate")
        .inputFluids("gtceu:indalloy_140 864", "gtceu:soldering_alloy 1152", "gtceu:berkelium 1152", "gtceu:lubricant 2304")
        .itemOutputs("gtocore:power_module_2")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:power_module"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.ZPM])
            .CWUt(128))

    gtr.assembly_line("gtocore:power_module_3")
        .itemInputs("gtocore:power_module_2", "2x gtceu:zpm_field_generator", "4x gtceu:uv_conveyor_module", "gtceu:uev_electric_motor", "2x gtceu:small_quantanium_gear", "6x gtceu:double_titansteel_plate")
        .inputFluids("gtceu:indalloy_140 864", "gtceu:soldering_alloy 1152", "gtceu:californium 1152", "gtceu:lubricant 2304")
        .itemOutputs("gtocore:power_module_3")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:power_module_2"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(256))

    gtr.assembly_line("gtocore:power_module_4")
        .itemInputs("gtocore:power_module_3", "2x gtceu:uv_field_generator", "4x gtceu:uhv_conveyor_module", "gtceu:uiv_electric_motor", "2x gtceu:small_infuscolium_gear", "6x gtceu:double_uruium_plate")
        .inputFluids("gtceu:indalloy_140 864", "gtceu:soldering_alloy 1152", "gtceu:fermium 1152", "gtceu:lubricant 2304")
        .itemOutputs("gtocore:power_module_4")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:power_module_3"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(512))

    gtr.assembly_line("gtocore:power_module_5")
        .itemInputs("gtocore:power_module_4", "2x gtceu:uhv_field_generator", "4x gtceu:uev_conveyor_module", "gtceu:uxv_electric_motor", "gtceu:small_vibramantium_gear", "6x gtceu:double_celestial_tungsten_plate")
        .inputFluids("gtceu:indalloy_140 864", "gtceu:soldering_alloy 1152", "gtceu:mendelevium 1152", "gtceu:lubricant 2304")
        .itemOutputs("gtocore:power_module_5")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:power_module_4"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(1024))

    gtr.assembly_line("gtocore:stellar_forge")
        .itemInputs("4x gtocore:stellar_containment_casing",
            "64x gtceu:naquadah_alloy_bolt",
            "32x gtceu:trinium_plate",
            "64x gtceu:darmstadtium_screw",
            "64x gtceu:high_durability_compound_steel_rod",
            "32x gtceu:titanium_tungsten_carbide_gear",
            "32x gtocore:nm_chip",
            "8x #gtceu:circuits/uev",
            "8x gtceu:uhv_sensor",
            "8x gtceu:uhv_emitter",
            "4x gtceu:uhv_field_generator",
            "gtceu:max_battery")
        .inputFluids("gtceu:soldering_alloy 20736", "gtceu:neutronium 2880", "gtceu:protactinium 2880", "gtceu:fermium 2880")
        .itemOutputs("gtocore:stellar_forge")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:stellar_containment_casing"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(256))

    gtr.assembly_line("gtocore:plasma_condenser")
        .itemInputs("64x gtceu:inconel_792_screw",
            "16x gtceu:rhodium_plated_palladium_plate",
            "16x gtceu:small_neutronium_gear",
            "8x gtceu:tungsten_carbide_gear",
            "4x gtceu:uhv_electric_motor",
            "4x gtceu:uhv_electric_pump",
            "2x #gtceu:circuits/uev",
            "4x gtocore:magnetic_trap",
            "2x gtceu:copper_nanites",
            "4x gtceu:uhv_sensor",
            "8x gtceu:double_tungsten_plate",
            "16x gtceu:double_zirconium_carbide_plate")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:zirconium_carbide 5760", "gtceu:tungsten_carbide 5760", "gtceu:tantalum_carbide 5760")
        .itemOutputs("gtocore:plasma_condenser")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(300)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:mega_vacuum_freezer"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(64))

    gtr.assembly_line("gtocore:void_fluid_drilling_rig")
        .itemInputs("gtceu:mv_fluid_drilling_rig",
            "gtceu:hv_fluid_drilling_rig",
            "gtceu:ev_fluid_drilling_rig",
            "4x gtceu:mv_field_generator",
            "4x gtceu:hv_field_generator",
            "4x gtceu:ev_field_generator",
            "4x #gtceu:circuits/luv",
            "16x gtceu:hsse_screw",
            "4x gtceu:long_hssg_rod",
            "8x gtceu:hsse_plate")
        .inputFluids("gtceu:soldering_alloy 1440")
        .itemOutputs("gtocore:void_fluid_drilling_rig")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:ev_fluid_drilling_rig"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.LuV])
            .CWUt(64))

    gtr.assembly_line("gtocore:large_void_miner")
        .itemInputs("4x gtceu:ev_large_miner",
            "4x gtceu:iv_large_miner",
            "4x gtceu:luv_large_miner",
            "64x gtceu:uranium_triplatinum_single_wire",
            "64x gtceu:samarium_iron_arsenic_oxide_single_wire",
            "64x gtceu:indium_tin_barium_titanium_cuprate_single_wire",
            "8x gtceu:ev_field_generator",
            "8x gtceu:iv_field_generator",
            "8x gtceu:luv_field_generator",
            "8x gtceu:ev_sensor",
            "8x gtceu:iv_sensor",
            "8x gtceu:luv_sensor",
            "16x #gtceu:circuits/uv",
            "16x gtceu:double_osmium_plate",
            "16x gtceu:double_black_steel_plate",
            "16x gtceu:double_niobium_nitride_plate")
        .itemOutputs("gtocore:large_void_miner")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:fall_king 5760", "gtceu:conductive_alloy 5760", "gtceu:tanmolyium 5760")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:void_miner"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.ZPM])
            .CWUt(64))

    gtr.assembly_line("gtocore:annihilate_generator")
        .itemInputs("gtocore:graviton_field_constraint_casing",
            "4x gtceu:uxv_emitter",
            "4x gtceu:uxv_sensor",
            "4x #gtceu:circuits/opv",
            "16x gtceu:uxv_field_generator",
            "4x gtocore:rydberg_spinorial_assembly",
            "16x gtocore:uxv_voltage_coil",
            "gtocore:insanely_max_battery",
            "8x gtceu:double_draconium_plate",
            "8x gtceu:double_legendarium_plate")
        .itemOutputs("gtocore:annihilate_generator")
        .inputFluids("gtceu:super_mutated_living_solder 4000", "gtceu:neutronium_doped_nanotubes 4000", "gtceu:europium 8192", "gtceu:tairitsu 8192")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(1800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:annihilation_constrainer"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(4096))

    gtr.assembly_line("gtocore:suprachronal_mainframe_complex")
        .itemInputs("2x gtceu:eternity_frame",
            "gtocore:chaotic_core",
            "gtceu:micro_processor_mainframe",
            "gtceu:nano_processor_mainframe",
            "gtceu:quantum_processor_mainframe",
            "gtceu:crystal_processor_mainframe",
            "gtceu:wetware_processor_mainframe",
            "gtocore:bioware_mainframe",
            "gtocore:optical_mainframe",
            "gtocore:exotic_mainframe",
            "gtocore:cosmic_mainframe",
            "gtocore:supracausal_mainframe",
            "gtocore:eternity_catalyst",
            "16x gtocore:nuclear_star",
            "16x gtceu:eternity_foil",
            "4x gtceu:eternity_plate")
        .itemOutputs("gtocore:suprachronal_mainframe_complex")
        .inputFluids("gtceu:infinity 1000", "gtceu:spacetime 1000", "gtceu:eternity 1000", "gtceu:magneto_hydro_dynamically_con_strained_star_matter 1000")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(8000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:suprachronal_circuit_max"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(8192))

    gtr.assembly_line("gtocore:chemical_plant")
        .itemInputs("32x gtceu:polybenzimidazole_foil",
            "32x gtceu:watertight_steel_plate",
            "32x gtceu:long_cupronickel_rod",
            "8x gtceu:polytetrafluoroethylene_large_fluid_pipe",
            "4x gtceu:ptfe_pipe_casing",
            "4x gtceu:inert_machine_casing",
            "4x #gtceu:circuits/luv",
            "4x gtceu:luv_electric_motor",
            "4x gtceu:double_watertight_steel_plate")
        .inputFluids("gtceu:soldering_alloy 2304", "gtceu:polytetrafluoroethylene 2304")
        .itemOutputs("gtocore:chemical_plant")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Registries.getItemStack("gtceu:large_chemical_reactor"))
        .dataStack(Registries.getItemStack("gtceu:data_stick"))
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2400))

    gtr.assembly_line("gtocore:iridium_casing")
        .itemInputs("2x gtceu:iridium_frame",
            "gtceu:titanium_turbine_casing",
            "gtceu:stainless_steel_turbine_casing",
            "4x gtceu:osmiridium_foil",
            "4x gtceu:iridium_foil",
            "gtceu:tanmolyium_plate",
            "gtceu:double_iridium_plate",
            "gtceu:double_osmiridium_plate")
        .inputFluids("gtceu:soldering_alloy 1440", "gtceu:iridium 576")
        .itemOutputs("2x gtocore:iridium_casing")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Registries.getItemStack("gtceu:large_scale_assembler_casing"))
        .dataStack(Registries.getItemStack("gtceu:data_stick"))
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(1200))

    gtr.assembly_line("gtocore:hyper_reactor")
        .itemInputs("64x gtceu:uhpic_chip",
            "64x gtocore:nm_chip",
            "4x #gtceu:circuits/uev",
            "2x gtceu:uev_electric_pump",
            "2x gtceu:uev_field_generator",
            "4x gtceu:double_orichalcum_plate",
            "4x gtceu:double_enderite_plate",
            "8x gtceu:naquadria_gear",
            "16x gtceu:naquadah_nanites",
            "32x gtceu:naquadria_screw",
            "gtceu:max_battery")
        .inputFluids("gtceu:indalloy_140 1296", "gtceu:soldering_alloy 1296", "gtceu:mutated_living_solder 864", "gtceu:artherium_tin 864")
        .itemOutputs("gtocore:hyper_reactor")
        .EUt(2000000)
        .duration(500)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:large_naquadah_reactor"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(128))

    gtr.assembly_line("gtocore:advanced_hyper_reactor")
        .itemInputs("64x gtocore:nm_chip",
            "64x gtocore:pm_chip",
            "4x #gtceu:circuits/uxv",
            "2x gtceu:uiv_electric_pump",
            "2x gtceu:uiv_field_generator",
            "8x gtceu:double_seaborgium_plate",
            "8x gtceu:double_taranium_plate",
            "16x gtceu:naquadria_gear",
            "64x gtceu:naquadria_screw",
            "64x gtceu:infuscolium_nanites",
            "gtocore:transcendent_max_battery")
        .inputFluids("gtceu:tairitsu 2304", "gtceu:soldering_alloy 1296", "gtceu:indalloy_140 1296", "gtceu:super_mutated_living_solder 864")
        .itemOutputs("gtocore:advanced_hyper_reactor")
        .EUt(32000000)
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:hyper_reactor"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(1024))

    gtr.assembly_line("gtocore:really_max_battery")
        .itemInputs("16x gtceu:double_neutronium_plate",
            "16x #gtceu:circuits/uev",
            "gtceu:max_battery",
            "8x gtocore:bioware_processing_core",
            "64x gtocore:nm_wafer",
            "64x gtocore:nm_wafer",
            "64x gtocore:smd_diode_bioware",
            "64x gtocore:smd_capacitor_bioware",
            "64x gtocore:smd_resistor_bioware",
            "64x gtocore:smd_transistor_bioware",
            "64x gtocore:smd_inductor_bioware",
            "64x gtceu:enderite_double_wire",
            "64x gtceu:quantanium_bolt")
        .inputFluids("gtceu:mutated_living_solder 17280", "gtceu:polyetheretherketone 5760", "gtceu:neutronium 1296", "gtceu:duranium 2592")
        .itemOutputs("gtocore:really_max_battery")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(2400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:max_battery"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(288))

    gtr.assembly_line("gtocore:transcendent_max_battery")
        .itemInputs("16x gtceu:double_quantanium_plate",
            "16x #gtceu:circuits/uiv",
            "gtocore:really_max_battery",
            "8x gtocore:optical_processing_core",
            "64x gtocore:nm_wafer",
            "64x gtocore:nm_wafer",
            "64x gtocore:smd_diode_optical",
            "64x gtocore:smd_capacitor_optical",
            "64x gtocore:smd_resistor_optical",
            "64x gtocore:smd_transistor_optical",
            "64x gtocore:smd_inductor_optical",
            "64x gtceu:echoite_double_wire",
            "64x gtceu:adamantium_bolt")
        .inputFluids("gtceu:mutated_living_solder 17280", "gtceu:zylon 5760", "gtceu:adamantine 2592", "gtceu:adamantium 2592")
        .itemOutputs("gtocore:transcendent_max_battery")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(2800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:really_max_battery"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(576))

    gtr.assembly_line("gtocore:extremely_max_battery")
        .itemInputs("16x gtceu:double_adamantium_plate",
            "16x #gtceu:circuits/uxv",
            "gtocore:transcendent_max_battery",
            "8x gtocore:exotic_processing_core",
            "64x gtocore:pm_wafer",
            "64x gtocore:pm_wafer",
            "64x gtocore:smd_diode_exotic",
            "64x gtocore:smd_capacitor_exotic",
            "64x gtocore:smd_resistor_exotic",
            "64x gtocore:smd_transistor_exotic",
            "64x gtocore:smd_inductor_exotic",
            "64x gtceu:legendarium_double_wire",
            "64x gtceu:vibranium_bolt")
        .inputFluids("gtceu:mutated_living_solder 17280", "gtceu:kevlar 5760", "gtceu:vibranium 2592", "gtceu:heavy_quark_degenerate_matter 2592")
        .itemOutputs("gtocore:extremely_max_battery")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(3200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:transcendent_max_battery"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(1152))

    gtr.assembly_line("gtocore:insanely_max_battery")
        .itemInputs("16x gtceu:double_vibranium_plate",
            "16x #gtceu:circuits/opv",
            "gtocore:extremely_max_battery",
            "8x gtocore:cosmic_processing_core",
            "64x gtocore:pm_wafer",
            "64x gtocore:pm_wafer",
            "64x gtocore:smd_diode_cosmic",
            "64x gtocore:smd_capacitor_cosmic",
            "64x gtocore:smd_resistor_cosmic",
            "64x gtocore:smd_transistor_cosmic",
            "64x gtocore:smd_inductor_cosmic",
            "64x gtceu:awakened_draconium_double_wire",
            "64x gtceu:draconium_bolt")
        .inputFluids("gtceu:super_mutated_living_solder 17280", "gtceu:fullerene_polymer_matrix_pulp 5760", "gtceu:legendarium 2592", "gtceu:awakened_draconium 2592")
        .itemOutputs("gtocore:insanely_max_battery")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(3600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:extremely_max_battery"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(2304))

    gtr.assembly_line("gtocore:mega_max_battery")
        .itemInputs("16x gtceu:double_draconium_plate",
            "16x #gtceu:circuits/max",
            "gtocore:insanely_max_battery",
            "8x gtocore:supracausal_processing_core",
            "64x gtocore:fm_wafer",
            "64x gtocore:fm_wafer",
            "64x gtocore:smd_diode_supracausal",
            "64x gtocore:smd_capacitor_supracausal",
            "64x gtocore:smd_resistor_supracausal",
            "64x gtocore:smd_transistor_supracausal",
            "64x gtocore:smd_inductor_supracausal",
            "64x gtceu:infinity_quadruple_wire",
            "64x gtceu:transcendent_metal_bolt")
        .inputFluids("gtceu:super_mutated_living_solder 24560", "gtceu:radox 5760", "gtceu:infinity 2592", "gtceu:spacetime 2592")
        .itemOutputs("gtocore:mega_max_battery")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(4000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:insanely_max_battery"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.OpV])
            .CWUt(4608))

    gtr.assembly_line("gtocore:advanced_assembly_line")
        .itemInputs("4x gtceu:assembly_line_casing",
            "2x gtceu:uv_robot_arm",
            "2x gtceu:uv_emitter",
            "2x gtceu:uv_sensor",
            "4x #gtceu:circuits/uhv",
            "8x gtceu:stellite_gear",
            "8x gtceu:double_hssg_plate",
            "8x gtceu:double_tanmolyium_plate")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:rose_gold 5760", "gtceu:osmiridium 5760", "gtceu:vanadium_gallium 5760")
        .itemOutputs("gtocore:advanced_assembly_line")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:assembly_line"))
            .dataStack(Registries.getItemStack("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(32))

    gtr.assembly_line("gtocore:space_probe_surface_reception")
        .itemInputs("12x gtceu:double_adamantine_plate",
            "12x gtceu:neutronium_gear",
            "16x gtceu:double_titansteel_plate",
            "6x gtceu:fullerene_polymer_matrix_pulp_foil",
            "4x #gtceu:circuits/uxv",
            "4x gtceu:uxv_emitter",
            "4x gtceu:uxv_sensor",
            "16x gtceu:astral_titanium_rod",
            "8x gtocore:lepton_trap_crystal",
            "4x gtocore:scintillator",
            "2x gtceu:fusion_coil",
            "16x gtceu:double_arceusalloy2b_plate")
        .inputFluids("gtceu:mutated_living_solder 864", "gtceu:tairitsu 1296", "gtceu:soldering_alloy 1296", "gtceu:cinobite 864")
        .itemOutputs("gtocore:space_probe_surface_reception")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:resource_collection_module"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(512))

    gtr.assembly_line("gtocore:eye_of_harmony")
        .itemInputs("16x gtocore:dimension_injection_casing",
            "16x gtocore:spacetime_compression_field_generator",
            "16x gtocore:dimensional_stability_casing",
            "64x gtceu:uv_world_accelerator",
            "64x gtocore:resource_collection_module",
            "64x gtceu:high_performance_computation_array",
            "32x gtocore:ctc_computational_unit",
            "32x gtocore:stabilized_wormhole_generator",
            "16x #gtceu:circuits/max",
            "16x gtceu:cosmic_neutronium_nanites",
            "64x gtceu:opv_emitter",
            "64x gtceu:opv_sensor",
            "64x gtceu:opv_robot_arm",
            "64x gtocore:time_dilation_containment_unit",
            "4x gtocore:insanely_max_battery",
            "32x gtceu:double_chaos_plate")
        .inputFluids("gtceu:super_mutated_living_solder 480000", "gtceu:liquid_degenerate_rhenium 100000", "gtceu:neutronium 57600", "gtceu:infinity 16000")
        .itemOutputs("gtocore:eye_of_harmony")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(2400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:recursively_folded_negative_space"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(8192))

    gtr.assembly_line("gtocore:dimensionally_transcendent_plasma_forge")
        .itemInputs("16x gtceu:black_titanium_frame",
            "8x gtocore:dimensional_bridge_casing",
            "16x gtocore:super_blast_smelter",
            "4x gtceu:uiv_energy_input_hatch",
            "8x gtceu:echoite_hex_wire",
            "32x #gtceu:circuits/uiv",
            "16x gtceu:zpm_quantum_chest",
            "16x gtceu:zpm_quantum_tank",
            "16x gtceu:uiv_field_generator",
            "8x gtceu:uiv_electric_pump",
            "gtocore:extremely_max_battery",
            "16x gtceu:uruium_nanites",
            "64x gtceu:astral_titanium_plate",
            "64x gtceu:arceusalloy2b_plate",
            "32x gtceu:double_hassium_plate",
            "32x gtceu:double_hastelloyx_78_plate")
        .inputFluids("gtceu:mutated_living_solder 12960", "gtceu:transition 5760", "gtceu:hastelloyx_78 5760", "gtceu:hastelloyk_243 5760")
        .itemOutputs("gtocore:dimensionally_transcendent_plasma_forge")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(4000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:stellar_forge"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(4096))

    gtr.assembly_line("gtocore:magnetic_confinement_dimensionality_shock_device")
        .itemInputs("16x gtceu:black_titanium_frame",
            "64x gtceu:luv_mixer",
            "48x gtceu:zpm_mixer",
            "32x gtceu:uv_mixer",
            "16x gtceu:uhv_mixer",
            "8x gtceu:uev_mixer",
            "4x gtceu:uiv_mixer",
            "16x gtceu:luv_quantum_chest",
            "16x gtceu:luv_quantum_tank",
            "4x gtceu:uiv_field_generator",
            "4x gtceu:uiv_electric_motor",
            "4x gtceu:long_taranium_rod",
            "16x gtceu:astral_titanium_gear",
            "gtocore:transcendent_max_battery",
            "4x gtceu:vibranium_nanites",
            "16x gtceu:double_hastelloyx_78_plate")
        .inputFluids("gtceu:mutated_living_solder 12960", "gtceu:niobium_titanium 5760", "gtceu:grisium 5760", "gtceu:black_titanium 5760")
        .itemOutputs("gtocore:magnetic_confinement_dimensionality_shock_device")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(2000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:large_mixer"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(512))

    gtr.assembly_line("gtocore:precision_assembler")
        .itemInputs("4x gtceu:zpm_robot_arm",
            "4x gtceu:zpm_electric_piston",
            "4x gtceu:zpm_conveyor_module",
            "4x #gtceu:circuits/uv",
            "8x gtceu:platinum_screw",
            "8x gtceu:osmium_screw",
            "8x gtceu:niobium_titanium_screw",
            "8x gtceu:ruridit_screw",
            "8x gtceu:mar_m_200_steel_rod",
            "4x gtceu:trinium_gear",
            "8x gtceu:double_inconel_792_plate",
            "8x gtceu:double_hastelloy_n_plate")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:tantalum 5760", "gtceu:manganese_phosphide 5760", "gtceu:magnesium_diboride 5760")
        .itemOutputs("gtocore:precision_assembler")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(1000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:large_assembler"))
            .dataStack(Registries.getItemStack("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.ZPM])
            .CWUt(48))

    gtr.assembly_line("gtocore:decay_hastener")
        .itemInputs("8x gtceu:neutron_reflector", "4x gtceu:luv_field_generator", "4x #gtceu:circuits/zpm", "16x gtceu:fine_naquadria_wire", "8x gtceu:long_darmstadtium_rod", "4x gtceu:double_incoloy_ma_956_plate", "16x gtceu:double_thorium_plate")
        .itemOutputs("gtocore:decay_hastener")
        .inputFluids("gtceu:soldering_alloy 1296", "gtceu:indalloy_140 1296")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:zpm_world_accelerator"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(32))

    gtr.assembly_line("gtocore:compressed_stone_dust")
        .itemInputs("64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust", "64x gtceu:stone_dust")
        .itemOutputs("gtceu:compressed_stone_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(20)
        .stationResearch(b => b.researchStack(Registries.getItemStack("minecraft:reinforced_deepslate"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(128))

    gtr.assembly_line("gtocore:time_dilation_containment_unit")
        .itemInputs("4x gtceu:naquadah_alloy_rod", "4x gtceu:degenerate_rhenium_plate", "2x gtceu:gravi_star", "2x gtceu:ruthenium_trinium_americium_neutronate_single_wire", "gtceu:uhv_emitter")
        .inputFluids("gtceu:fluxed_electrum 288", "gtceu:mutated_living_solder 288", "gtceu:neutronium 288", "gtceu:tritanium 576")
        .itemOutputs("gtocore:time_dilation_containment_unit")
        .EUt(8000000)
        .duration(100)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:empty_laser_cooling_container"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(64))

    gtr.assembly_line("gtocore:extremely_durable_plasma_cell")
        .itemInputs("48x gtceu:neutronium_plate", "4x gtceu:heavy_quark_degenerate_matter_large_fluid_pipe", "2x gtceu:uxv_electric_pump", "2x gtceu:uxv_field_generator", "gtceu:infuscolium_nanites", "2x gtceu:quantum_chromo_dynamically_confined_matter_frame", "4x gtocore:force_field_glass", "8x gtceu:fusion_coil", "2x #gtceu:circuits/uiv", "4x gtceu:double_adamantine_plate", "4x gtceu:double_celestial_tungsten_plate")
        .inputFluids("gtceu:super_mutated_living_solder 2304", "gtceu:dalisenite 2304", "gtceu:echoite 2592", "gtceu:taranium 1584")
        .itemOutputs("gtocore:extremely_durable_plasma_cell")
        .EUt(15000000)
        .duration(150)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:plasma_containment_cell"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(128))

    gtr.assembly_line("gtocore:dimension_injection_casing")
        .itemInputs("6x gtceu:osmiridium_plate", "4x gtceu:lead_plate", "12x gtceu:adamantium_bolt", "2x #gtceu:circuits/iv", "2x gtceu:enderite_single_wire", "gtceu:ev_super_tank", "gtceu:ev_super_chest")
        .inputFluids("gtceu:liquid_degenerate_rhenium 200", "gtceu:vibrant_alloy 288", "gtceu:astral_silver 288", "gtceu:enriched_naquadah 288")
        .itemOutputs("2x gtocore:dimension_injection_casing")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:spacetime_assembly_line_casing"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(512))

    gtr.assembly_line("gtocore:spacetime_compression_field_generator")
        .itemInputs("gtocore:dimensionally_transcendent_casing", "gtocore:containment_field_generator", "4x gtocore:dyson_deployment_casing", "gtceu:opv_field_generator", "gtocore:microwormhole_generator", "4x gtceu:orichalcum_nanites", "2x gtceu:infinity_rod", "gtceu:double_starmetal_plate", "gtceu:double_quantum_chromo_dynamically_confined_matter_plate", "4x gtceu:double_titan_precision_steel_plate")
        .inputFluids("gtceu:super_mutated_living_solder 576", "gtceu:cosmic_neutronium 288", "gtceu:crystal_matrix 576", "gtceu:heavy_quark_degenerate_matter 576")
        .itemOutputs("gtocore:spacetime_compression_field_generator")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:time_dilation_containment_unit"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.OpV])
            .CWUt(1024))

    gtr.assembly_line("gtocore:dimensional_bridge_casing")
        .itemInputs("gtocore:dimensionally_transcendent_casing", "gtceu:uv_quantum_chest", "gtceu:uv_quantum_tank", "2x gtceu:enderite_single_wire", "2x #gtceu:circuits/uv", "gtceu:uhv_field_generator")
        .itemOutputs("gtocore:dimensional_bridge_casing")
        .inputFluids("gtceu:mutated_living_solder 576", "gtceu:liquid_degenerate_rhenium 200", "gtceu:duranium 288", "gtceu:enriched_naquadah 288")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:dimension_injection_casing"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(1024))

    gtr.assembly_line("gtocore:manifold_oscillatory_power_cell")
        .itemInputs("32x gtceu:titansteel_single_wire", "32x gtceu:magnetic_neodymium_rod", "16x gtceu:vibranium_plate", "8x gtceu:fine_legendarium_wire", "4x gtocore:amorphous_matter", "16x gtceu:double_red_alloy_plate", "2x gtceu:degenerate_rhenium_plate", "4x gtceu:double_quantum_plate")
        .inputFluids("gtceu:super_mutated_living_solder 144", "gtceu:taranium 72", "gtceu:naquadria 144", "gtceu:tritanium 288")
        .itemOutputs("gtocore:manifold_oscillatory_power_cell")
        .EUt(33550000)
        .duration(1800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:luv_vanadium_battery"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(128))

    gtr.assembly_line("gtocore:hyperdimensional_drone")
        .itemInputs("2x gtocore:max_robot_arm", "2x gtocore:max_conveyor_module", "2x gtocore:max_emitter", "2x gtocore:max_sensor", "gtocore:max_field_generator", "gtocore:chaotic_core", "gtocore:draconic_energy_core", "gtocore:spacetime_catalyst", "gtocore:ctc_guidance_unit", "gtceu:black_dwarf_mtter_nanites", "64x gtocore:dyson_swarm_module", "64x gtocore:dyson_swarm_module", "64x gtocore:dyson_swarm_module", "64x gtocore:dyson_swarm_module", "16x gtceu:double_transcendent_metal_plate", "16x gtceu:double_hypogen_plate")
        .inputFluids("gtceu:super_mutated_living_solder 28800", "gtceu:transcendent_metal 20000", "gtceu:rhugnor 20000", "gtceu:spacetime 10000")
        .itemOutputs("gtocore:hyperdimensional_drone")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(4800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:space_drone_mk6"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(8192))

    gtr.assembly_line("gtocore:leptonic_charge")
        .itemInputs("gtceu:enriched_naquadah_frame", "gtceu:industrial_tnt", "gtceu:naquadriatictaranium_rod", "gtceu:double_uranium_235_plate", "gtceu:hexanitrohexaaxaisowurtzitane_dust", "gtceu:degenerate_rhenium_dust", "gtceu:protactinium_dust", "gtceu:mendelevium_dust", "2x gtceu:mithril_foil", "6x gtceu:orichalcum_bolt", "gtceu:enderium_plate", "gtceu:vibranium_plate")
        .inputFluids("gtceu:mutated_living_solder 1000", "gtceu:glyceryl_trinitrate 1000", "gtceu:stellar_energy_rocket_fuel 1000", "gtceu:free_electron_gas 1000")
        .itemOutputs("gtocore:leptonic_charge")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:naquadria_charge"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(64))

    gtr.assembly_line("gtocore:quantum_chromodynamic_charge")
        .itemInputs("2x gtceu:double_infuscolium_plate", "2x gtceu:heavy_quark_degenerate_matter_plate", "gtocore:time_dilation_containment_unit", "gtocore:leptonic_charge", "gtceu:double_superheavy_l_alloy_plate", "gtceu:double_superheavy_h_alloy_plate")
        .inputFluids("gtceu:draconium 72", "gtceu:gluons 1296", "gtceu:legendarium 144", "gtceu:starmetal 144")
        .itemOutputs("gtocore:quantum_chromodynamic_charge")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:leptonic_charge"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(128))

    gtr.assembly_line("gtocore:circuit_assembly_line")
        .itemInputs("4x gtocore:machine_casing_circuit_assembly_line",
            "4x #gtceu:circuits/uv",
            "8x gtceu:zpm_electric_pump",
            "8x gtceu:zpm_robot_arm",
            "8x gtceu:zpm_conveyor_module",
            "8x gtceu:zpm_sensor",
            "8x gtceu:zpm_emitter",
            "4x gtceu:long_mithril_rod",
            "4x gtceu:double_niobium_titanium_plate",
            "4x gtceu:double_vanadium_gallium_plate",
            "4x gtceu:double_mithril_plate",
            "4x gtceu:double_fluxed_electrum_plate")
        .inputFluids("gtceu:soldering_alloy 2880", "gtceu:rose_gold 2880", "gtceu:osmium 2880", "gtceu:stellite 2880")
        .itemOutputs("gtocore:circuit_assembly_line")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:large_circuit_assembler"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(64))

    gtr.assembly_line("gtocore:bioware_processing_core")
        .itemInputs("gtocore:bioware_printed_circuit_board",
            "8x gtocore:smd_capacitor_bioware",
            "8x gtocore:smd_diode_bioware",
            "8x gtocore:smd_resistor_bioware",
            "8x gtocore:smd_transistor_bioware",
            "8x gtocore:smd_inductor_bioware",
            "2x gtceu:polyetheretherketone_foil",
            "8x gtocore:biological_cells",
            "8x gtocore:bioware_chip",
            "16x gtceu:fine_naquadah_wire",
            "4x gtceu:niobium_titanium_plate")
        .inputFluids("gtceu:biohmediumsterilized 1000", "gtceu:polyethylene 1296", "gtceu:polyvinyl_chloride 864", "gtceu:soldering_alloy 1296")
        .itemOutputs("8x gtocore:bioware_processing_core")
        .EUt(368640)
        .duration(320)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:bioware_chip"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(64))

    gtr.assembly_line("gtocore:optical_processing_core")
        .itemInputs("gtocore:optical_printed_circuit_board",
            "8x gtocore:smd_capacitor_optical",
            "8x gtocore:smd_diode_optical",
            "8x gtocore:smd_resistor_optical",
            "8x gtocore:smd_transistor_optical",
            "8x gtocore:smd_inductor_optical",
            "2x gtceu:polyetheretherketone_foil",
            "2x kubejs:non_linear_optical_lens",
            "16x gtceu:normal_optical_pipe",
            "8x gtocore:optical_soc",
            "4x gtocore:solar_light_splitter",
            "gtocore:low_frequency_laser",
            "gtocore:medium_frequency_laser",
            "gtocore:high_frequency_laser",
            "gtocore:bose_einstein_cooling_container",
            "4x gtceu:graphene_plate")
        .inputFluids("gtceu:polytetrafluoroethylene 864", "gtceu:naquadah_alloy 432", "gtceu:soldering_alloy 1296", "gtceu:fullerene_doped_nanotubes 144")
        .itemOutputs("8x gtocore:optical_processing_core")
        .EUt(1474560)
        .duration(320)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:optical_soc"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(128))

    gtr.assembly_line("gtocore:exotic_processing_core")
        .itemInputs("gtocore:exotic_printed_circuit_board",
            "16x gtocore:smd_capacitor_exotic",
            "16x gtocore:smd_diode_exotic",
            "16x gtocore:smd_resistor_exotic",
            "16x gtocore:smd_transistor_exotic",
            "16x gtocore:smd_inductor_exotic",
            "8x gtceu:trinium_titanium_foil",
            "4x gtocore:high_precision_crystal_soc",
            "gtocore:rydberg_spinorial_assembly",
            "gtocore:x_ray_laser",
            "4x kubejs:non_linear_optical_lens",
            "8x gtceu:kevlar_foil",
            "4x gtceu:degenerate_rhenium_plate")
        .inputFluids("gtceu:mutated_living_solder 576", "gtceu:quantum_dots 80")
        .itemOutputs("8x gtocore:exotic_processing_core")
        .EUt(4000000)
        .duration(160)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:exotic_chip"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtocore:cosmic_processing_core")
        .itemInputs("gtocore:cosmic_printed_circuit_board",
            "24x gtocore:smd_capacitor_cosmic",
            "24x gtocore:smd_diode_cosmic",
            "24x gtocore:smd_resistor_cosmic",
            "24x gtocore:smd_transistor_cosmic",
            "24x gtocore:smd_inductor_cosmic",
            "gtocore:cosmic_processing_unit_core",
            "gtocore:ultrashort_pulse_laser",
            "16x gtceu:fine_cinobite_wire",
            "32x gtceu:fine_borosilicate_glass_wire",
            "4x gtocore:bose_einstein_cooling_container",
            "2x gtceu:fullerene_polymer_matrix_pulp_foil",
            "4x gtceu:black_titanium_plate")
        .inputFluids("gtceu:zylon 864", "gtceu:adamantium 432", "gtceu:mutated_living_solder 1296", "gtceu:echoite 432")
        .itemOutputs("8x gtocore:cosmic_processing_core")
        .EUt(11796480)
        .duration(320)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:cosmic_processing_unit_core"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(512))

    gtr.assembly_line("gtocore:supracausal_processing_core")
        .itemInputs("gtocore:supracausal_printed_circuit_board",
            "64x gtocore:smd_capacitor_supracausal",
            "64x gtocore:smd_diode_supracausal",
            "64x gtocore:smd_resistor_supracausal",
            "64x gtocore:smd_transistor_supracausal",
            "64x gtocore:smd_inductor_supracausal",
            "3x gtocore:quantumchromodynamic_protective_plating",
            "2x gtceu:legendarium_single_wire",
            "gtocore:nuclear_clock",
            "gtocore:topological_manipulator_unit",
            "gtocore:relativistic_spinorial_memory_system",
            "gtocore:graviton_transducer",
            "4x gtceu:neutronium_plate")
        .inputFluids("gtceu:polyimide 1296", "gtceu:zylon 1296", "gtceu:fullerene_polymer_matrix_pulp 1296", "gtceu:radox 1296")
        .itemOutputs("8x gtocore:supracausal_processing_core")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:relativistic_spinorial_memory_system"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(1024))

    gtr.assembly_line("gtocore:quantum_force_transformer_coil")
        .itemInputs("gtceu:quantum_chromo_dynamically_confined_matter_frame",
            "gtocore:uruium_coil_block",
            "gtceu:uev_field_generator",
            "gtocore:quantumchromodynamic_protective_plating",
            "gtceu:uv_fluid_regulator",
            "gtceu:uhv_fluid_regulator",
            "gtceu:uev_fluid_regulator",
            "gtceu:uiv_fluid_regulator",
            "gtceu:naquadah_huge_fluid_pipe",
            "gtceu:neutronium_huge_fluid_pipe",
            "gtceu:enderium_huge_fluid_pipe",
            "gtceu:heavy_quark_degenerate_matter_huge_fluid_pipe",
            "2x gtceu:ender_pearl_plate",
            "2x gtceu:nether_star_plate",
            "4x gtceu:legendarium_plate",
            "4x gtceu:crystal_matrix_plate")
        .inputFluids("gtceu:vanadium_gallium 1296", "gtceu:gallium_arsenide 1296", "gtceu:quantum 1296", "gtceu:hikarium 1296")
        .itemOutputs("gtocore:quantum_force_transformer_coil")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:fusion_coil"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(512))

    gtr.assembly_line("gtocore:spacetimecontinuumripper")
        .itemInputs("gtocore:manipulator",
            "4x gtceu:uiv_emitter",
            "gtceu:uiv_field_generator",
            "gtceu:uxv_emitter",
            "4x gtceu:echoite_octal_wire",
            "8x gtceu:neutron_reflector",
            "4x gtceu:double_dubnium_plate",
            "4x gtceu:double_superheavy_l_alloy_plate")
        .inputFluids("gtceu:dimensionallytranscendentprosaiccatalyst 1000", "gtceu:thulium 2880", "gtceu:neptunium 2880", "gtceu:fermium 2880")
        .itemOutputs("gtocore:spacetimecontinuumripper")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:manipulator"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(512))

    gtr.assembly_line("gtocore:spacetimebendingcore")
        .itemInputs("gtocore:manipulator",
            "4x gtceu:uiv_field_generator",
            "4x gtceu:uxv_robot_arm",
            "gtceu:uxv_fluid_regulator",
            "4x gtceu:echoite_octal_wire",
            "8x gtceu:neutron_reflector",
            "4x gtceu:double_hassium_plate",
            "4x gtceu:double_superheavy_h_alloy_plate")
        .inputFluids("gtceu:dimensionallytranscendentresplendentcatalyst 1000", "gtceu:thulium 2880", "gtceu:nobelium 2880", "gtceu:lawrencium 2880")
        .itemOutputs("gtocore:spacetimebendingcore")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:spacetimecontinuumripper"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(1024))

    gtr.assembly_line("gtocore:advanced_mass_fabricator")
        .itemInputs("16x gtceu:active_transformer",
            "4x gtocore:mass_fabricator",
            "4x gtocore:cosmic_processing_core",
            "16x gtocore:magnetic_trap",
            "32x gtocore:scintillator_crystal",
            "16x gtocore:electron_source",
            "8x gtocore:unstable_star",
            "4x gtceu:vibranium_nanites",
            "16x gtocore:charged_lepton_trap_crystal",
            "4x #gtceu:circuits/opv",
            "gtocore:extremely_max_battery",
            "16x gtceu:superheavy_h_alloy_plate",
            "32x gtceu:double_vibranium_plate",
            "32x gtceu:double_arceusalloy2b_plate")
        .inputFluids("gtceu:uruium 5760", "gtceu:zeron_100 2880", "gtceu:maraging_steel_300 2880", "gtceu:hastelloy_c_276 2880")
        .itemOutputs("gtocore:advanced_mass_fabricator")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:mass_fabricator"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(1024))

    gtr.assembly_line("gtocore:mage_assembler")
        .itemInputs("16x gtceu:large_assembler",
            "16x gtceu:large_circuit_assembler",
            "16x gtocore:precision_circuit_assembly_robot_mk1",
            "32x gtceu:uv_fluid_regulator",
            "64x gtceu:uv_robot_arm",
            "32x #gtceu:circuits/uhv",
            "64x gtceu:tungsten_carbide_screw",
            "64x gtceu:yttrium_barium_cuprate_screw",
            "64x gtceu:rhodium_plated_palladium_screw",
            "64x gtceu:naquadah_alloy_screw",
            "32x gtceu:long_rtm_alloy_rod",
            "32x gtceu:long_tungsten_carbide_rod",
            "32x gtceu:long_hsla_steel_rod",
            "32x gtceu:long_ultimet_rod",
            "16x gtceu:lafium_plate",
            "8x gtceu:double_iridium_plate")
        .inputFluids("gtceu:mutated_living_solder 5760", "gtceu:kanthal 5760", "gtceu:nobelium 2880", "gtceu:lawrencium 2880")
        .itemOutputs("gtocore:mage_assembler")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:precision_assembler"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(128))

    gtr.assembly_line("gtocore:compound_extreme_cooling_unit")
        .itemInputs("64x gtceu:hsse_frame",
            "16x gtocore:plasma_condenser",
            "16x gtceu:mega_vacuum_freezer",
            "64x gtocore:empty_laser_cooling_container",
            "64x gtocore:high_frequency_laser",
            "64x gtocore:medium_frequency_laser",
            "64x gtocore:low_frequency_laser",
            "64x gtceu:uhv_fluid_regulator",
            "16x gtceu:uev_emitter",
            "16x #gtceu:circuits/uiv",
            "64x gtceu:double_invar_plate",
            "64x gtceu:double_germanium_plate",
            "64x gtceu:double_gallium_arsenide_plate",
            "64x gtceu:double_tin_alloy_plate",
            "64x gtceu:double_nickel_zinc_ferrite_plate",
            "64x gtceu:double_ruridit_plate")
        .inputFluids("gtceu:hafnium 5760", "gtceu:indium 5760", "gtceu:nobelium 5760", "gtceu:lawrencium 5760")
        .itemOutputs("gtocore:compound_extreme_cooling_unit")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:vacuum_freezer"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(256))

    gtr.assembly_line("gtocore:bedrock_drilling_rig")
        .itemInputs("16x gtceu:uev_rock_crusher",
            "16x gtceu:uev_cutter",
            "16x gtceu:uev_macerator",
            "4x gtocore:machine_casing_grinding_head",
            "4x gtocore:bedrock_drill",
            "8x gtceu:uev_sensor",
            "16x gtceu:uev_robot_arm",
            "16x gtceu:uev_conveyor_module",
            "64x gtceu:uhv_fluid_regulator",
            "16x gtceu:uev_emitter",
            "8x #gtceu:circuits/uiv",
            "4x gtceu:orichalcum_nanites",
            "16x gtceu:double_red_steel_plate",
            "16x gtceu:double_hastelloy_x_plate",
            "16x gtceu:double_maraging_steel_300_plate",
            "16x gtceu:double_hastelloy_c_276_plate")
        .inputFluids("gtceu:nickel 5760", "gtceu:tantalum 5760", "gtceu:palladium 5760", "gtceu:samarium 5760")
        .itemOutputs("gtocore:bedrock_drilling_rig")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:bedrock_drill"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtocore:superconducting_electromagnetism")
        .itemInputs("4x gtceu:large_electrolyzer",
            "4x gtceu:large_electromagnet",
            "16x gtceu:uv_emitter",
            "8x #gtceu:circuits/uev",
            "64x gtceu:fine_uranium_rhodium_dinaquadide_wire",
            "64x gtceu:fine_uranium_rhodium_dinaquadide_wire",
            "64x gtceu:fine_uranium_rhodium_dinaquadide_wire",
            "64x gtceu:fine_uranium_rhodium_dinaquadide_wire",
            "8x gtceu:double_tantalum_plate",
            "8x gtceu:double_silver_plate",
            "8x gtceu:double_silicon_plate",
            "8x gtceu:double_ruthenium_plate")
        .inputFluids("gtceu:indalloy_140 2880", "gtceu:mutated_living_solder 2880", "gtceu:soldering_alloy 5760", "gtceu:enriched_naquadah_trinium_europium_duranide 5760")
        .itemOutputs("gtocore:superconducting_electromagnetism")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:superconducting_coil"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtocore:create_aggregation")
        .itemInputs("32x gtceu:magneto_hydro_dynamically_con_strained_star_matter_frame",
            "16x gtocore:chain_command_block_core",
            "16x gtocore:spacetimecontinuumripper",
            "8x gtocore:create_aggregatione_core",
            "32x gtocore:max_robot_arm",
            "32x gtocore:max_emitter",
            "16x gtocore:max_field_generator",
            "64x gtceu:infinity_octal_wire",
            "2x gtocore:mega_max_battery",
            "64x gtceu:cosmic_plate",
            "64x gtceu:double_shirabon_plate",
            "64x gtceu:double_magneto_hydro_dynamically_con_strained_star_matter_plate")
        .inputFluids("gtceu:magneto_hydro_dynamically_con_strained_star_matter 10000", "gtceu:primordialmatter 16000", "gtceu:temporalfluid 32000", "gtceu:spatialfluid 32000")
        .itemOutputs("gtocore:create_aggregation")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(12000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:create_aggregatione_core"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(16384))

    gtr.assembly_line("gtocore:create_aggregatione_core")
        .itemInputs("gtceu:magneto_hydro_dynamically_con_strained_star_matter_frame",
            "16x gtocore:dimension_creation_casing",
            "16x gtocore:two_way_foil",
            "16x gtceu:cosmic_foil",
            "64x gtocore:black_body_naquadria_supersolid",
            "16x gtocore:max_field_generator",
            "32x gtceu:magmatter_rod",
            "8x gtocore:eigenfolded_kerr_manifold",
            "16x gtocore:max_robot_arm",
            "gtocore:insanely_max_battery",
            "16x gtceu:magneto_hydro_dynamically_con_strained_star_matter_foil",
            "64x gtceu:eternity_foil")
        .inputFluids("gtceu:magneto_hydro_dynamically_con_strained_star_matter 10000", "gtceu:chaos 10000", "gtceu:temporalfluid 10000", "gtceu:magmatter 10000")
        .itemOutputs("gtocore:create_aggregatione_core")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(120000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:dragon_stabilizer_core"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(16384))

    gtr.assembly_line("gtocore:dimensional_stability_casing")
        .itemInputs("gtocore:containment_field_generator",
            "4x gtocore:dyson_control_casing",
            "4x gtocore:dyson_control_toroid",
            "gtceu:uxv_field_generator",
            "4x gtceu:uiv_field_generator",
            "2x gtceu:opv_electric_pump",
            "2x gtceu:rtm_alloy_spring",
            "#gtceu:circuits/uev",
            "2x gtceu:crystal_matrix_rod",
            "gtceu:double_crystal_matrix_plate")
        .inputFluids("gtceu:super_mutated_living_solder 288", "gtceu:liquid_degenerate_rhenium 200", "gtceu:pikyonium 288", "gtceu:periodicium 288")
        .itemOutputs("gtocore:dimensional_stability_casing")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:dimensional_bridge_casing"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(1024))

    gtr.assembly_line("gtocore:pcb_factory")
        .itemInputs("4x gtceu:neutronium_frame",
            "4x gtceu:uv_circuit_assembler",
            "4x gtocore:chemical_plant",
            "4x #gtceu:circuits/uev",
            "4x gtceu:uhv_robot_arm",
            "4x gtceu:uhv_electric_pump",
            "2x gtceu:uhv_sensor",
            "2x gtceu:uhv_emitter",
            "gtceu:uhv_field_generator",
            "2x gtceu:iridium_nanites",
            "2x gtceu:silver_nanites",
            "16x gtceu:double_grisium_plate")
        .inputFluids("gtceu:soldering_alloy 2592", "gtceu:bismuth_bronze 2582", "gtceu:indalloy_140 1440", "gtceu:enriched_naquadah 1296")
        .itemOutputs("gtocore:pcb_factory")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:bioware_circuit_board"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(128))

    gtr.assembly_line("gtocore:large_naquadah_reactor")
        .itemInputs("64x gtceu:hpic_chip",
            "64x gtceu:uhpic_chip",
            "32x gtceu:uranium_rhodium_dinaquadide_single_wire",
            "24x gtceu:enriched_naquadah_foil",
            "16x gtceu:duranium_gear",
            "8x gtceu:double_duranium_plate",
            "8x gtceu:double_naquadria_plate",
            "2x gtceu:uv_electric_piston",
            "gtceu:uv_field_generator",
            "gtceu:uv_electric_pump",
            "4x #gtceu:circuits/uhv")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:indalloy_140 2304", "gtceu:trinium 2304")
        .itemOutputs("gtocore:large_naquadah_reactor")
        .EUt(90000)
        .duration(1000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:zpm_naquadah_reactor"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(64))

    gtr.assembly_line("gtocore:aggregation_device")
        .itemInputs("4x gtocore:draconium_block_charged", "64x gtocore:pm_chip", "64x gtocore:pm_chip", "8x gtocore:reinforced_echo_shard", "4x gtceu:enderite_hex_wire", "4x gtceu:uev_field_generator", "gtocore:really_max_battery", "64x gtceu:quantanium_screw", "8x gtceu:double_dalisenite_plate", "8x gtceu:double_seaborgium_plate")
        .itemOutputs("gtocore:aggregation_device")
        .inputFluids("gtceu:mutated_living_solder 1296", "gtceu:neutronium 576", "gtceu:mana 1000", "gtceu:enriched_dragon_breath 100")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:aggregatione_core"))
            .EUt(GTValues.VA[GTValues.UEV])
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .CWUt(128))

    gtr.assembly_line("gtocore:super_particle_collider")
        .itemInputs("16x gtceu:zpm_field_generator", "16x gtceu:zpm_electric_pump", "64x gtceu:uhpic_chip", "64x gtceu:uhpic_chip", "64x gtceu:uhpic_chip", "64x gtceu:uhpic_chip", "16x gtceu:uranium_rhodium_dinaquadide_hex_wire", "32x #gtceu:circuits/uv", "16x gtceu:neutron_reflector", "8x gtceu:double_lafium_plate")
        .itemOutputs("gtocore:super_particle_collider")
        .inputFluids("gtceu:soldering_alloy 1152", "gtceu:protactinium 1152", "gtceu:uranium 1152", "gtceu:neptunium 1152")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:accelerated_pipeline"))
            .EUt(GTValues.VA[GTValues.ZPM])
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .CWUt(32))

    gtr.assembly_line("gtocore:space_elevator")
        .itemInputs("16x gtceu:gravitation_engine_unit", "8x gtceu:uv_field_generator", "8x #gtceu:circuits/uhv", "16x #gtceu:circuits/uv", "32x #gtceu:circuits/zpm", "64x #gtceu:circuits/luv", "4x gtocore:module_connector", "32x gtceu:indium_tin_barium_titanium_cuprate_hex_wire", "16x gtceu:uranium_rhodium_dinaquadide_hex_wire", "8x gtceu:enriched_naquadah_trinium_europium_duranide_hex_wire", "48x gtceu:americium_huge_restrictive_item_pipe", "48x gtceu:duranium_huge_fluid_pipe", "64x gtceu:carbon_nanites", "64x gtceu:carbon_nanites", "32x gtceu:double_pikyonium_plate", "16x gtceu:double_orichalcum_plate")
        .itemOutputs("gtocore:space_elevator")
        .inputFluids("gtceu:soldering_alloy 4096", "gtceu:mendelevium 4096", "gtceu:nobelium 4096", "gtceu:lawrencium 4096")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("ad_astra_rocketed:tier_7_rocket"))
            .EUt(GTValues.VA[GTValues.UV])
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .CWUt(64))

    gtr.assembly_line("gtocore:engraving_laser_plant")
        .itemInputs("8x gtceu:uv_laser_engraver", "8x gtceu:uhv_emitter", "8x gtceu:uhv_electric_piston", "8x gtceu:uhv_sensor", "8x gtceu:uhv_robot_arm", "8x gtceu:uhv_electric_pump", "32x gtceu:stellite_rod", "8x #gtceu:circuits/uev", "32x gtceu:fluxed_electrum_plate", "32x gtceu:grisium_plate", "16x gtceu:double_titanium_carbide_plate", "16x gtceu:double_titanium_tungsten_carbide_plate")
        .itemOutputs("gtocore:engraving_laser_plant")
        .inputFluids("gtceu:indalloy_140 2592", "gtceu:artherium_tin 1296", "gtceu:mutated_living_solder 1296", "gtceu:soldering_alloy 2880")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:large_engraving_laser"))
            .EUt(GTValues.VA[GTValues.UV])
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .CWUt(64))

    gtr.assembly_line("gtocore:quantum_force_transformer")
        .itemInputs("8x gtceu:vibranium_frame", "4x gtocore:spacetimecontinuumripper", "4x gtocore:spacetimebendingcore", "8x gtocore:precision_circuit_assembly_robot_mk4", "8x gtceu:uxv_sensor", "8x gtceu:uxv_robot_arm", "8x gtceu:uxv_electric_pump", "8x gtceu:uxv_field_generator", "8x #gtceu:circuits/opv", "gtocore:extremely_max_battery", "64x gtceu:double_lafium_plate", "64x gtceu:double_titan_precision_steel_plate")
        .itemOutputs("gtocore:quantum_force_transformer")
        .inputFluids("gtceu:super_mutated_living_solder 1296", "gtceu:tairitsu 2880", "gtceu:soldering_alloy 2880", "gtceu:periodicium 2880")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(2400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:spacetimebendingcore"))
            .EUt(GTValues.VA[GTValues.UXV])
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .CWUt(2048))

    gtr.assembly_line("gtocore:dimension_creation_casing")
        .itemInputs("gtceu:infinity_frame",
            "64x gtceu:lv_world_accelerator",
            "64x gtceu:mv_world_accelerator",
            "64x gtceu:hv_world_accelerator",
            "64x gtceu:ev_world_accelerator",
            "64x gtceu:iv_world_accelerator",
            "64x gtceu:luv_world_accelerator",
            "64x gtceu:zpm_world_accelerator",
            "64x gtceu:uv_world_accelerator",
            "16x gtocore:hyper_core",
            "4x gtocore:spacetimebendingcore",
            "4x gtocore:dimensional_stability_casing",
            "4x gtocore:spacetime_compression_field_generator",
            "6x gtocore:topological_manipulator_unit",
            "gtocore:max_field_generator",
            "4x gtceu:double_eternity_plate")
        .inputFluids("gtceu:infinity 576", "gtceu:super_mutated_living_solder 1000", "gtceu:liquid_cosmic_mesh 1000", "gtceu:spatialfluid 2000")
        .itemOutputs("gtocore:dimension_creation_casing")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:dimension_connection_casing"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(8192))

    gtr.assembly_line("gtocore:door_of_create")
        .itemInputs("16x gtceu:infinity_frame",
            "16x gtocore:eye_of_harmony",
            "16x gtocore:dimension_creation_casing",
            "16x gtocore:dimension_connection_casing",
            "8x gtocore:suprachronal_mainframe_complex",
            "8x gtocore:cosmic_singularity",
            "8x gtocore:chaotic_core",
            "64x gtocore:void_matter",
            "16x gtocore:quantum_anomaly",
            "16x gtocore:max_robot_arm",
            "gtocore:mega_max_battery",
            "64x gtceu:double_cosmic_plate")
        .inputFluids("gtceu:super_mutated_living_solder 288000", "gtceu:infinity 100000", "gtceu:liquid_cosmic_mesh 100000", "gtceu:spacetime 100000")
        .itemOutputs("gtocore:door_of_create")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(2400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:dimension_creation_casing"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(16384))

    gtr.assembly_line("gtocore:chaotic_energy_core")
        .itemInputs("gtocore:draconic_energy_core",
            "64x gtceu:uhv_ultimate_battery",
            "16x gtocore:chaotic_core",
            "32x #gtceu:circuits/max",
            "16x gtceu:white_dwarf_mtter_nanites",
            "16x gtceu:black_dwarf_mtter_nanites",
            "64x gtocore:smd_capacitor_supracausal",
            "64x gtocore:smd_diode_supracausal",
            "64x gtocore:smd_resistor_supracausal",
            "64x gtocore:smd_transistor_supracausal",
            "64x gtocore:smd_inductor_supracausal",
            "64x gtceu:chaos_block",
            "64x gtceu:magneto_hydro_dynamically_con_strained_star_matter_rod",
            "64x gtceu:magneto_hydro_dynamically_con_strained_star_matter_plate",
            "64x gtceu:shirabon_plate",
            "32x gtceu:double_cosmic_plate")
        .inputFluids("gtceu:super_mutated_living_solder 28800", "gtceu:chaos 28800", "gtceu:spacetime 10000", "gtceu:primordialmatter 10000")
        .itemOutputs("gtocore:chaotic_energy_core")
        .EUt(64 * GTValues.VA[GTValues.MAX])
        .duration(2560)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:create_ultimate_battery"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(16384))

    gtr.assembly_line("gtocore:hollow_casing")
        .itemInputs("gtocore:molecular_casing",
            "16x gtceu:magnalium_screw",
            "4x gtceu:europium_plate",
            "4x gtceu:apatite_rod",
            "2x gtceu:double_uranium_plate",
            "16x gtceu:molybdenum_screw",
            "4x gtceu:double_duranium_plate",)
        .inputFluids("gtceu:stainless_steel 1296", "gtceu:indium_gallium_phosphide 1296", "gtceu:wrought_iron 1296", "gtceu:indium_tin_barium_titanium_cuprate 1296")
        .itemOutputs("2x gtocore:hollow_casing")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:molecular_casing"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(128))

    gtr.assembly_line("gtocore:spacetime_assembly_line_unit")
        .itemInputs("gtceu:adamantium_frame",
            "gtocore:advanced_assembly_line_unit",
            "gtocore:machine_casing_circuit_assembly_line",
            "gtocore:precision_circuit_assembly_robot_mk2",
            "gtceu:osmium_nanites",
            "6x gtocore:optical_processing_core",
            "2x #gtceu:circuits/uev",
            "4x gtceu:blue_steel_gear",
            "4x gtceu:red_steel_gear",
            "4x gtceu:zpm_robot_arm",
            "6x gtceu:double_pikyonium_plate")
        .inputFluids("gtceu:liquidcrystalkevlar 5760", "gtceu:enderite 1296", "gtceu:high_durability_compound_steel 1296", "gtceu:pikyonium 1296")
        .itemOutputs("gtocore:spacetime_assembly_line_unit")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:advanced_assembly_line_unit"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(256))

    gtr.assembly_line("gtocore:molecular_coil")
        .itemInputs("gtocore:hollow_casing",
            "2x gtceu:naquadah_coil_block",
            "2x gtceu:fusion_coil",
            "64x gtceu:fine_europium_wire",
            "32x gtceu:enriched_naquadah_trinium_europium_duranide_foil")
        .inputFluids("gtceu:borosilicate_glass 2304", "gtceu:silicone_rubber 5760", "gtceu:uranium_triplatinum 1296", "gtceu:stellite_100 1296")
        .itemOutputs("2x gtocore:molecular_coil")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:molybdenum_disilicide_coil_block"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(128))

    gtr.assembly_line("gtocore:containment_field_generator")
        .itemInputs("gtocore:hollow_casing",
            "4x gtceu:luv_field_generator",
            "6x gtceu:indium_tin_barium_titanium_cuprate_quadruple_wire",
            "4x #gtceu:circuits/uv",
            "gtceu:uv_transformer_16a",
            "6x gtceu:double_vanadium_gallium_plate",
            "4x gtceu:double_enriched_naquadah_trinium_europium_duranide_plate")
        .inputFluids("gtceu:lanthanum 2304", "gtceu:cobalt_brass 5760", "gtceu:battery_alloy 5760", "gtceu:molybdenum_disilicide 1296")
        .itemOutputs("gtocore:containment_field_generator")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(500)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:force_field_glass"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(128))

    gtr.assembly_line("gtocore:crystal_builder")
        .itemInputs("4x gtceu:uev_autoclave",
            "16x gtceu:uhv_emitter",
            "16x gtceu:uhv_electric_pump",
            "8x gtceu:adamantium_rotor",
            "4x gtceu:neutronium_nanites",
            "32x #gtceu:circuits/uev",
            "16x gtceu:titansteel_octal_cable",
            "16x gtceu:double_indium_tin_barium_titanium_cuprate_plate",
            "32x gtceu:double_tritanium_plate")
        .inputFluids("gtceu:lanthanum 2304", "gtceu:cobalt_brass 5760", "gtceu:battery_alloy 5760", "gtceu:molybdenum_disilicide 1296")
        .itemOutputs("gtocore:crystal_builder")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:large_autoclave"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtocore:star_ultimate_material_forge_factory")
        .itemInputs("4x gtocore:stellar_forge",
            "4x gtceu:uiv_electric_furnace",
            "4x gtceu:uiv_arc_furnace",
            "4x gtceu:uiv_alloy_smelter",
            "16x gtceu:uiv_electric_pump",
            "gtocore:transcendent_max_battery",
            "4x gtceu:uxv_sensor",
            "16x #gtceu:circuits/uxv",
            "8x gtocore:containment_field_generator",
            "8x gtocore:hyper_core",
            "64x gtceu:vibranium_plate",
            "32x gtceu:double_vibramantium_plate")
        .inputFluids("gtceu:incoloy_ma_956 5760", "gtceu:germanium_tungsten_nitride 5760", "gtceu:abyssalalloy 5760", "gtceu:titanium_carbide 5760")
        .itemOutputs("gtocore:star_ultimate_material_forge_factory")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:ultimate_stellar_containment_casing"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(1024))

    gtr.assembly_line("gtocore:suprachronal_assembly_line")
        .itemInputs("gtocore:infinite_cell_component",
            "16x gtocore:advanced_assembly_line",
            "16x gtocore:circuit_assembly_line",
            "4x gtocore:spacetime_assembly_line_casing",
            "4x gtocore:spacetime_assembly_line_unit",
            "32x gtocore:molecular_coil",
            "16x gtceu:uev_emitter",
            "16x gtceu:uev_sensor",
            "16x gtocore:precision_circuit_assembly_robot_mk3",
            "16x #gtceu:circuits/uiv",
            "gtceu:max_battery",
            "32x gtceu:double_dalisenite_plate")
        .inputFluids("gtceu:borosilicate_glass 3204", "gtceu:silicone_rubber 5760", "gtceu:uranium_triplatinum 1296", "gtceu:stellite_100 1296")
        .itemOutputs("gtocore:suprachronal_assembly_line")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:assembler_module"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtocore:holy_separator")
        .itemInputs("4x gtceu:uhv_macerator",
            "4x gtceu:uhv_cutter",
            "4x gtceu:uhv_lathe",
            "4x gtceu:uhv_centrifuge",
            "16x gtceu:uev_robot_arm",
            "8x #gtceu:circuits/uiv",
            "8x gtceu:neutronium_gear",
            "64x gtceu:small_rhodium_plated_palladium_gear",
            "32x gtceu:long_orichalcum_rod",
            "16x gtceu:osmiridium_huge_restrictive_item_pipe",
            "16x gtceu:naquadria_plate")
        .inputFluids("gtceu:mutated_living_solder 1440", "gtceu:dysprosium 2880", "gtceu:rhodium 2880", "gtceu:moscovium 2880")
        .itemOutputs("gtocore:holy_separator")
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:large_cutter"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtocore:dyson_deployment_core")
        .itemInputs("4x gtceu:uiv_machine_hull",
            "32x gtceu:uiv_conveyor_module",
            "32x gtceu:uiv_robot_arm",
            "32x gtceu:uiv_electric_piston",
            "64x minecraft:dispenser",
            "64x minecraft:dispenser",
            "64x minecraft:dispenser",
            "64x minecraft:dispenser")
        .inputFluids("gtceu:lubricant 48000", "gtceu:mutated_living_solder 12800", "gtocore:gelid_cryotheum 128000", "gtceu:copernicium 256000")
        .itemOutputs("gtocore:dyson_deployment_core")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:power_core"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(512))

    gtr.assembly_line("gtocore:dyson_sphere_receiving_station")
        .itemInputs("4x gtceu:uiv_diode",
            "16x gtocore:pm_wafer",
            "16x gtceu:uiv_sensor",
            "4x gtocore:dyson_control_toroid",
            "64x gtceu:superconducting_coil",
            "16x #gtceu:circuits/uxv",
            "32x gtceu:echoite_hex_wire",
            "4x gtocore:uxv_voltage_coil",
            "16x gtceu:double_vibranium_plate")
        .inputFluids("gtceu:mutated_living_solder 12000", "gtocore:gelid_cryotheum 12800", "gtceu:scandium 576000", "gtceu:mercury_barium_calcium_cuprate 576000")
        .itemOutputs("gtocore:dyson_sphere_receiving_station")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:dyson_receiver_casing"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(512))

    gtr.assembly_line("gtocore:dyson_deployment_casing")
        .itemInputs("gtceu:uiv_diode",
            "4x gtceu:uiv_sensor",
            "2x gtceu:uiv_electric_pump",
            "gtceu:uhv_quantum_tank",
            "gtceu:uiv_conveyor_module",
            "4x gtceu:double_darmstadtium_plate")
        .inputFluids("gtceu:mutated_living_solder 1000", "gtocore:gelid_cryotheum 1000", "gtceu:lubricant 2000", "gtceu:copernicium 1296")
        .itemOutputs("gtocore:dyson_deployment_casing")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:module_connector"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(512))

    gtr.assembly_line("gtocore:dyson_control_toroid")
        .itemInputs("gtceu:black_titanium_frame",
            "4x gtceu:uiv_emitter",
            "2x gtceu:uiv_electric_pump",
            "2x #gtceu:circuits/uiv",
            "gtocore:exotic_processing_core",
            "8x gtceu:infuscolium_bolt",
            "24x gtceu:neutronium_foil")
        .inputFluids("gtceu:mutated_living_solder 2000", "gtocore:gelid_cryotheum 1000", "gtceu:zylon 1296", "gtceu:kevlar 1296")
        .itemOutputs("gtocore:dyson_control_toroid")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:spacetime_assembly_line_unit"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(512))

    gtr.assembly_line("gtocore:restraint_device")
        .itemInputs("2x gtocore:hollow_casing",
            "2x gtocore:force_field_glass",
            "6x gtocore:laser_cooling_unit",
            "8x gtceu:double_titansteel_plate",
            "24x gtceu:double_plutonium_241_plate",
            "16x gtceu:double_quantanium_plate",)
        .inputFluids("gtceu:soldering_alloy 2304", "gtceu:lubricant 2000", "gtceu:mutated_living_solder 1000", "gtceu:high_durability_compound_steel 576")
        .itemOutputs("gtocore:restraint_device")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:containment_field_generator"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(512))

    gtr.assembly_line("gtocore:atomic_energy_excitation_plant")
        .itemInputs("8x gtceu:uev_mixer",
            "8x gtceu:uev_centrifuge",
            "16x gtceu:uev_chemical_reactor",
            "8x #gtceu:circuits/uiv",
            "12x gtceu:double_adamantine_plate",
            "16x gtceu:double_high_durability_compound_steel_plate",
            "16x gtceu:double_enderite_plate",
            "4x gtocore:reinforced_echo_shard")
        .inputFluids("gtceu:lubricant 8000", "gtceu:mutated_living_solder 2000", "gtceu:echoite 1152", "gtceu:mana 32000")
        .itemOutputs("gtocore:atomic_energy_excitation_plant")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(4000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:restraint_device"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(512))

    gtr.assembly_line("gtocore:carbon_nanites")
        .itemInputs("16x #gtceu:circuits/uv", "16x gtceu:uv_robot_arm", "32x gtceu:stem_cells", "32x gtceu:naquadah_alloy_ring", "16x gtceu:naquadah_alloy_rod", "64x gtceu:carbon_dust")
        .inputFluids("gtceu:soldering_alloy 4608", "gtceu:polytetrafluoroethylene 4608", "gtceu:glowstone 4608", "gtceu:rubber 4608")
        .itemOutputs("2x gtceu:carbon_nanites")
        .EUt(122880)
        .duration(1200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:activated_carbon_dust"))
            .dataStack(Registries.getItemStack("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.ZPM])
            .CWUt(32))

    gtr.assembly_line("gtocore:nano_forge")
        .itemInputs("16x gtceu:uv_machine_hull", "16x gtceu:carbon_nanites", "16x gtceu:zpm_field_generator", "16x gtceu:uv_robot_arm", "16x gtceu:uv_conveyor_module", "32x gtceu:uv_electric_motor", "16x #gtceu:circuits/uv", "16x gtceu:naquadah_octal_wire")
        .inputFluids("gtceu:soldering_alloy 4608", "gtceu:hsss 4608", "gtceu:osmiridium 4608", "gtceu:enriched_naquadah 4608")
        .itemOutputs("gtocore:nano_forge")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:carbon_nanites"))
            .dataStack(Registries.getItemStack("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(64))

    gtr.assembly_line("gtocore:field_extruder_factory")
        .itemInputs("16x gtceu:uhv_extruder", "16x gtceu:uhv_forming_press", "8x gtceu:uev_field_generator", "4x gtceu:uev_emitter", "4x #gtceu:circuits/uiv", "4x gtceu:rhenium_nanites", "64x gtceu:stress_proof_casing", "64x gtceu:dalisenite_plate")
        .inputFluids("gtceu:mutated_living_solder 2304", "gtceu:platinum 4608", "gtceu:reinforced_epoxy_resin 4608", "gtceu:uranium_rhodium_dinaquadide 4608")
        .itemOutputs("gtocore:field_extruder_factory")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:large_extruder"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtocore:mega_wiremill")
        .itemInputs("16x gtceu:uhv_wiremill", "16x gtocore:uhv_loom", "64x gtceu:uev_electric_motor", "4x gtceu:uev_robot_arm", "4x #gtceu:circuits/uiv", "8x gtceu:abyssalalloy_hex_wire", "32x gtceu:double_germanium_plate", "16x gtceu:double_maraging_steel_300_plate")
        .inputFluids("gtceu:mutated_living_solder 2304", "gtceu:niobium 4608", "gtceu:tantalum_carbide 4608", "gtceu:ruthenium_trinium_americium_neutronate 4608")
        .itemOutputs("gtocore:mega_wiremill")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:large_wiremill"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtocore:dimensional_focus_engraving_array")
        .itemInputs("8x gtceu:uhv_laser_engraver", "16x gtceu:neutronium_nanites", "64x gtceu:normal_laser_pipe", "8x gtceu:uev_field_generator", "4x gtceu:uev_emitter", "16x #gtceu:circuits/uiv", "16x gtceu:quantanium_rod", "32x gtceu:double_dubnium_plate")
        .inputFluids("gtceu:mutated_living_solder 28800", "gtceu:polyetheretherketone 28800", "gtceu:pikyonium 4608", "gtceu:abyssalalloy 4608")
        .itemOutputs("gtocore:dimensional_focus_engraving_array")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:engraving_laser_plant"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtocore:phase_change_cube")
        .itemInputs("16x gtceu:uhv_extractor", "16x gtceu:uhv_fluid_solidifier", "32x gtceu:uev_electric_piston", "8x gtceu:uev_electric_pump", "4x #gtceu:circuits/uiv", "16x gtceu:titansteel_hex_wire", "16x gtceu:double_quantum_plate", "32x gtceu:double_hastelloy_x_plate")
        .inputFluids("gtceu:mutated_living_solder 2304", "gtceu:naquadria 4608", "gtceu:plutonium 4608", "gtceu:mithril 4608")
        .itemOutputs("gtocore:phase_change_cube")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:large_extractor"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtocore:molten_core")
        .itemInputs("16x gtceu:uev_fluid_heater", "8x #gtceu:circuits/uxv", "16x gtceu:uiv_fluid_heater", "16x gtceu:uiv_fluid_regulator", "16x gtceu:titansteel_hex_wire", "16x gtceu:double_mithril_plate", "16x gtceu:double_quantum_plate")
        .inputFluids("gtceu:taranium 2304", "gtceu:vibranium 2304", "gtceu:astral_titanium_plasma 4608", "gtceu:degenerate_rhenium_plasma 4608")
        .itemOutputs("gtocore:molten_core")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:uiv_fluid_heater"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(512))

    gtr.assembly_line("gtocore:mega_canner")
        .itemInputs("16x gtceu:uev_canner", "16x gtceu:uev_robot_arm", "32x gtceu:uev_electric_piston", "16x gtceu:uev_electric_pump", "32x gtceu:double_lafium_plate", "32x gtceu:double_naquadria_plate", "4x #gtceu:circuits/uiv")
        .inputFluids("gtceu:naquadria 4608", "gtceu:orichalcum_plasma 2304", "gtceu:mithril_plasma 2304", "gtceu:darmstadtium 4608")
        .itemOutputs("gtocore:mega_canner")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:uev_canner"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(256))

    gtr.assembly_line("gtocore:element_copying")
        .itemInputs("4x gtceu:uxv_scanner", "4x gtceu:uxv_canner", "4x gtceu:uxv_packer", "4x gtceu:uxv_extractor", "16x #gtceu:circuits/uxv", "8x gtceu:uxv_fluid_regulator", "16x gtceu:heavy_quark_degenerate_matter_small_fluid_pipe", "4x gtceu:uruium_nanites", "32x gtceu:molybdenum_disilicide_rod", "32x gtceu:titanium_tungsten_carbide_rod", "32x gtceu:double_silicon_carbide_plate", "32x gtceu:double_heavy_quark_degenerate_matter_plate")
        .inputFluids("gtceu:mutated_living_solder 2304", "gtceu:periodicium 2304", "gtceu:sunnarium 4608", "gtceu:vibramantium 4608")
        .itemOutputs("gtocore:element_copying")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:star_ultimate_material_forge_factory"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(2048))

    gtr.assembly_line("gtocore:component_assembly_line_casing_luv")
        .itemInputs("gtceu:europium_frame",
            "6x gtceu:dense_rhodium_plated_palladium_plate",
            "4x gtceu:luv_field_generator",
            "6x gtceu:luv_electric_pump",
            "8x gtceu:luv_robot_arm",
            "10x gtceu:luv_sensor",
            "16x gtceu:luv_conveyor_module",
            "4x gtceu:osmiridium_gear",
            "16x gtceu:small_rhodium_plated_palladium_gear",
            "4x gtceu:indium_tin_barium_titanium_cuprate_octal_wire",
            "8x #gtceu:circuits/luv",
            "16x #gtceu:circuits/iv")
        .inputFluids("gtceu:indalloy_140 3456", "gtceu:zeron_100 1728", "gtceu:soldering_alloy 1152", "gtceu:lubricant 4000")
        .itemOutputs("gtocore:component_assembly_line_casing_luv")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:component_assembly_line_casing_iv"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.LuV])
            .CWUt(128))

    gtr.assembly_line("gtocore:component_assembly_line_casing_zpm")
        .itemInputs("gtceu:naquadah_alloy_frame",
            "6x gtceu:dense_naquadah_alloy_plate",
            "4x gtceu:zpm_field_generator",
            "6x gtceu:zpm_electric_pump",
            "8x gtceu:zpm_robot_arm",
            "10x gtceu:zpm_sensor",
            "16x gtceu:zpm_conveyor_module",
            "4x gtceu:naquadah_alloy_gear",
            "16x gtceu:small_naquadah_alloy_gear",
            "4x gtceu:indium_tin_barium_titanium_cuprate_octal_wire",
            "8x #gtceu:circuits/zpm",
            "16x #gtceu:circuits/luv")
        .inputFluids("gtceu:indalloy_140 4032", "gtceu:pikyonium 2016", "gtceu:neutronium 1008", "gtceu:lubricant 5000")
        .itemOutputs("gtocore:component_assembly_line_casing_zpm")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:component_assembly_line_casing_luv"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.ZPM])
            .CWUt(192))

    gtr.assembly_line("gtocore:component_assembly_line_casing_uv")
        .itemInputs("gtceu:tritanium_frame",
            "24x gtceu:double_tritanium_plate",
            "4x gtceu:uv_field_generator",
            "6x gtceu:uv_electric_pump",
            "8x gtceu:uv_robot_arm",
            "10x gtceu:uv_sensor",
            "16x gtceu:uv_conveyor_module",
            "4x gtceu:tritanium_gear",
            "16x gtceu:small_tritanium_gear",
            "4x gtceu:indium_tin_barium_titanium_cuprate_octal_wire",
            "8x #gtceu:circuits/uv",
            "16x #gtceu:circuits/zpm")
        .inputFluids("gtceu:indalloy_140 4608", "gtceu:artherium_tin 2304", "gtceu:abyssalalloy 1152", "gtceu:lubricant 6000")
        .itemOutputs("gtocore:component_assembly_line_casing_uv")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:component_assembly_line_casing_zpm"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(256))

    gtr.assembly_line("gtocore:component_assembly_line_casing_uhv")
        .itemInputs("gtceu:mithril_frame",
            "24x gtceu:double_mithril_plate",
            "4x gtceu:uhv_field_generator",
            "6x gtceu:uhv_electric_pump",
            "8x gtceu:uhv_robot_arm",
            "10x gtceu:uhv_sensor",
            "16x gtceu:uhv_conveyor_module",
            "4x gtceu:orichalcum_gear",
            "16x gtceu:small_orichalcum_gear",
            "4x gtceu:ruthenium_trinium_americium_neutronate_octal_wire",
            "8x #gtceu:circuits/uhv",
            "16x #gtceu:circuits/uv")
        .inputFluids("gtceu:indalloy_140 5184", "gtceu:tairitsu 2592", "gtceu:titansteel 1296", "gtceu:lubricant 7000")
        .itemOutputs("gtocore:component_assembly_line_casing_uhv")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:component_assembly_line_casing_uv"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(384))

    gtr.assembly_line("gtocore:component_assembly_line_casing_uev")
        .itemInputs("gtceu:quantanium_frame",
            "24x gtceu:double_echoite_plate",
            "4x gtceu:uev_field_generator",
            "6x gtceu:uev_electric_pump",
            "8x gtceu:uev_robot_arm",
            "10x gtceu:uev_sensor",
            "16x gtceu:uev_conveyor_module",
            "4x gtceu:infuscolium_gear",
            "16x gtceu:small_infuscolium_gear",
            "4x gtceu:enderite_octal_wire",
            "8x #gtceu:circuits/uev",
            "16x #gtceu:circuits/uhv")
        .inputFluids("gtceu:mutated_living_solder 5760", "gtceu:quantum 2880", "gtceu:adamantine 1440", "gtceu:lubricant 8000")
        .itemOutputs("gtocore:component_assembly_line_casing_uev")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:component_assembly_line_casing_uhv"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(512))

    gtr.assembly_line("gtocore:component_assembly_line_casing_uiv")
        .itemInputs("gtceu:vibranium_frame",
            "24x gtceu:double_vibranium_plate",
            "4x gtceu:uiv_field_generator",
            "6x gtceu:uiv_electric_pump",
            "8x gtceu:uiv_robot_arm",
            "10x gtceu:uiv_sensor",
            "16x gtceu:uiv_conveyor_module",
            "4x gtceu:hastelloyx_78_gear",
            "16x gtceu:small_hastelloyx_78_gear",
            "4x gtceu:echoite_octal_wire",
            "8x #gtceu:circuits/uiv",
            "16x #gtceu:circuits/uev")
        .inputFluids("gtceu:mutated_living_solder 6336", "gtceu:naquadriatictaranium 3168", "gtceu:flerovium 1584", "gtceu:lubricant 9000")
        .itemOutputs("gtocore:component_assembly_line_casing_uiv")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:component_assembly_line_casing_uev"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(1024))

    gtr.assembly_line("gtocore:component_assembly_line_casing_uxv")
        .itemInputs("gtceu:draconium_frame",
            "24x gtceu:double_awakened_draconium_plate",
            "4x gtceu:uxv_field_generator",
            "6x gtceu:uxv_electric_pump",
            "8x gtceu:uxv_robot_arm",
            "10x gtceu:uxv_sensor",
            "16x gtceu:uxv_conveyor_module",
            "4x gtceu:vibramantium_gear",
            "16x gtceu:small_vibramantium_gear",
            "4x gtceu:legendarium_octal_wire",
            "8x #gtceu:circuits/uxv",
            "16x #gtceu:circuits/uiv")
        .inputFluids("gtceu:super_mutated_living_solder 6912", "gtceu:crystal_matrix 3456", "gtceu:quantum_chromo_dynamically_confined_matter 1782", "gtceu:lubricant 10000")
        .itemOutputs("gtocore:component_assembly_line_casing_uxv")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:component_assembly_line_casing_uiv"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UXV])
            .CWUt(2048))

    gtr.assembly_line("gtocore:component_assembly_line_casing_opv")
        .itemInputs("gtceu:infinity_frame",
            "24x gtceu:double_hypogen_plate",
            "4x gtceu:opv_field_generator",
            "6x gtceu:opv_electric_pump",
            "8x gtceu:opv_robot_arm",
            "10x gtceu:opv_sensor",
            "16x gtceu:opv_conveyor_module",
            "12x gtceu:celestial_tungsten_gear",
            "24x gtceu:astral_titanium_gear",
            "4x gtceu:awakened_draconium_octal_wire",
            "8x #gtceu:circuits/opv",
            "16x #gtceu:circuits/uxv")
        .inputFluids("gtceu:super_mutated_living_solder 7488", "gtceu:white_dwarf_mtter 3744", "gtceu:chaos 1872", "gtceu:lubricant 20000")
        .itemOutputs("gtocore:component_assembly_line_casing_opv")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:component_assembly_line_casing_uxv"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.OpV])
            .CWUt(8192))

    gtr.assembly_line("gtocore:component_assembly_line_casing_max")
        .itemInputs("gtceu:eternity_frame",
            "24x gtceu:double_transcendent_metal_plate",
            "4x gtocore:max_field_generator",
            "6x gtocore:max_electric_pump",
            "8x gtocore:max_robot_arm",
            "10x gtocore:max_sensor",
            "16x gtocore:max_conveyor_module",
            "8x gtceu:transcendent_metal_gear",
            "4x gtceu:hypogen_octal_wire",
            "8x #gtceu:circuits/max",
            "16x #gtceu:circuits/opv")
        .inputFluids("gtceu:spacetime 9216", "gtceu:black_dwarf_mtter 4608", "gtceu:magneto_hydro_dynamically_con_strained_star_matter 1872", "gtceu:lubricant 30000")
        .itemOutputs("gtocore:component_assembly_line_casing_max")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(600)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:component_assembly_line_casing_opv"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.MAX])
            .CWUt(16384))

    gtr.assembly_line("gtocore:component_assembly_line")
        .itemInputs("16x gtocore:advanced_assembly_line",
            "16x gtceu:assembly_line_casing",
            "32x gtocore:advanced_assembly_line_unit",
            "16x gtceu:uv_robot_arm",
            "32x gtceu:uv_conveyor_module",
            "32x gtceu:uhv_electric_motor",
            "16x gtceu:polybenzimidazole_huge_fluid_pipe",
            "64x gtceu:double_mithril_plate",
            "16x gtceu:uhv_fluid_solidifier",
            "16x #gtceu:circuits/uev",
            "20x #gtceu:circuits/uhv",
            "24x #gtceu:circuits/uv")
        .inputFluids("gtceu:indalloy_140 1296", "gtceu:soldering_alloy 1728", "gtceu:naquadria 2304", "gtceu:lubricant 16000")
        .itemOutputs("gtocore:component_assembly_line")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(4200)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:component_assembly_line_casing_zpm"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(512))

    gtr.assembly_line("gtocore:isa_mill")
        .itemInputs("gtceu:luv_machine_hull",
            "2x gtocore:inconel_625_gearbox",
            "8x gtceu:double_inconel_625_plate",
            "8x #gtceu:circuits/luv",
            "4x gtceu:luv_conveyor_module",
            "4x gtceu:inconel_792_gear",
            "16x gtceu:small_inconel_625_gear",
            "32x gtceu:tantalloy_61_screw",
            "8x gtceu:titanium_plate",
            "4x gtceu:niobium_titanium_quadruple_cable")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:lubricant 6000", "gtceu:zeron_100 1152")
        .itemOutputs("gtocore:isa_mill")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(2400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:iv_macerator"))
            .dataStack(Registries.getItemStack("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.IV])
            .CWUt(96))

    gtr.assembly_line("gtocore:flotation_cell_regulator")
        .itemInputs("gtceu:luv_machine_hull",
            "2x gtocore:flotation_cell",
            "8x gtceu:double_hastelloy_n_75_plate",
            "8x gtceu:double_incoloy_ma_956_plate",
            "8x #gtceu:circuits/luv",
            "2x gtceu:luv_electric_pump",
            "4x gtceu:stellite_gear",
            "16x gtceu:small_hastelloy_n_75_gear",
            "32x gtceu:tungsten_steel_foil",
            "4x gtceu:vanadium_gallium_quadruple_cable")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:lubricant 6000", "gtceu:watertight_steel 1152")
        .itemOutputs("gtocore:flotation_cell_regulator")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(2400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:iv_ore_washer"))
            .dataStack(Registries.getItemStack("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.IV])
            .CWUt(96))

    gtr.assembly_line("gtocore:uhv_fusion_reactor")
        .itemInputs("gtocore:advanced_fusion_coil", "4x #gtceu:circuits/uev", "gtceu:gravi_star", "gtceu:double_orichalcum_plate", "2x gtceu:uv_field_generator", "64x gtocore:nm_chip", "32x gtceu:ruthenium_trinium_americium_neutronate_single_wire")
        .inputFluids("gtceu:soldering_alloy 1152", "gtceu:europium 1152")
        .itemOutputs("gtocore:uhv_fusion_reactor")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:uv_fusion_reactor"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(240))

    gtr.assembly_line("gtocore:uev_fusion_reactor")
        .itemInputs("gtocore:fusion_coil_mk2", "4x #gtceu:circuits/uiv", "gtocore:unstable_star", "gtceu:double_seaborgium_plate", "2x gtceu:uhv_field_generator", "64x gtocore:nm_chip", "64x gtocore:nm_chip", "32x gtceu:enderite_single_wire")
        .inputFluids("gtceu:soldering_alloy 1152", "gtceu:mithril 1152")
        .itemOutputs("gtocore:uev_fusion_reactor")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:uhv_fusion_reactor"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(600))

    gtr.assembly_line("gtocore:mega_distillery")
        .itemInputs("16x gtceu:distillation_tower", "16x gtceu:evaporation_plant", "8x gtceu:tungsten_steel_huge_fluid_pipe", "16x gtceu:uhv_electric_pump", "4x gtceu:uev_sensor", "4x #gtceu:circuits/uiv", "32x gtceu:annealed_copper_hex_wire", "32x gtceu:watertight_steel_plate")
        .inputFluids("gtceu:soldering_alloy 1152", "gtceu:indalloy_140 1152", "gtceu:stainless_steel 2304", "gtceu:polyvinyl_chloride 2880")
        .itemOutputs("gtocore:mega_distillery")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:large_distillery"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UHV])
            .CWUt(600))

    gtr.assembly_line("gtocore:nano_core")
        .itemInputs("16x gtceu:opv_buffer", "16x gtceu:cosmic_neutronium_nanites", "16x gtocore:suprachronal_assembly_line", "8x gtocore:component_assembly_line_casing_opv", "32x #gtceu:circuits/opv", "16x gtceu:cosmic_neutronium_plate")
        .inputFluids("gtceu:super_mutated_living_solder 4608", "gtceu:indalloy_140 4608", "gtceu:naquadria 4608", "gtceu:hastelloyk_243 4608")
        .itemOutputs("gtocore:nano_core")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(800)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:nano_forge"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.OpV])
            .CWUt(1200))

    gtr.assembly_line("gtocore:fuel_refining_complex")
        .itemInputs("4x gtceu:luv_mixer", "4x gtceu:luv_centrifuge", "4x gtceu:luv_distillery", "4x gtceu:luv_chemical_reactor", "8x gtceu:tungsten_carbide_nonuple_fluid_pipe", "4x gtceu:luv_emitter", "4x #gtceu:circuits/zpm", "8x gtceu:zpm_electric_pump", "16x gtceu:double_hsse_plate")
        .inputFluids("gtceu:soldering_alloy 2304", "gtceu:polytetrafluoroethylene 2304", "gtceu:watertight_steel 1152")
        .itemOutputs("gtocore:fuel_refining_complex")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(1000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtocore:large_cracker"))
            .dataStack(Registries.getItemStack("gtceu:data_stick"))
            .EUt(GTValues.VA[GTValues.ZPM])
            .CWUt(512))

    gtr.assembly_line("gtocore:mega_brewer")
        .itemInputs("4x gtceu:uhv_brewery", "16x gtceu:uhv_fermenter", "16x gtceu:uev_electric_pump", "16x gtceu:mithril_spring", "32x gtceu:vanadium_steel_quadruple_fluid_pipe", "4x #gtceu:circuits/uev", "4x gtceu:ruthenium_trinium_americium_neutronate_quadruple_wire", "32x gtceu:double_naquadah_plate")
        .inputFluids("gtceu:soldering_alloy 2304", "gtceu:mutated_living_solder 2304", "gtceu:molybdenum_disilicide 2304", "gtceu:cobalt_brass 2304")
        .itemOutputs("gtocore:mega_brewer")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1000)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:large_brewer"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UEV])
            .CWUt(512))

    gtr.assembly_line("gtocore:quark_pipe")
        .itemInputs("4x gtceu:naquadah_frame")
        .itemInputs("4x gtceu:enriched_naquadah_frame")
        .itemInputs("4x gtceu:naquadria_frame")
        .itemInputs("4x gtceu:vibranium_frame")
        .itemInputs("16x gtceu:heavy_quark_degenerate_matter_tiny_fluid_pipe")
        .itemInputs("16x gtceu:fullerene_polymer_matrix_pulp_tiny_fluid_pipe")
        .itemInputs("16x gtceu:neutronium_tiny_fluid_pipe")
        .itemInputs("16x gtceu:enderium_tiny_fluid_pipe")
        .itemInputs("2x gtceu:uiv_electric_pump")
        .itemInputs("8x #gtceu:circuits/uev")
        .itemInputs("4x #gtceu:circuits/uiv")
        .itemInputs("8x gtceu:chromatic_glass_plate")
        .itemOutputs("gtocore:quark_pipe")
        .inputFluids("gtceu:mutated_living_solder 1152")
        .inputFluids("gtceu:super_mutated_living_solder 1152")
        .inputFluids("gtceu:mithril 2304")
        .inputFluids("gtceu:uruium 2304")
        .EUt(7864320)
        .duration(400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("gtceu:heavy_quark_degenerate_matter_nonuple_fluid_pipe"))
            .dataStack(Registries.getItemStack("gtceu:data_module"))
            .EUt(GTValues.VA[GTValues.UIV])
            .CWUt(2048))
})