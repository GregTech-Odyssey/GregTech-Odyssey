ServerEvents.recipes((event) => {
    const gtr = event.recipes.gtceu
    event.shapeless("gtocore:item_infinity_cell", ["ae2:item_cell_housing", "gtocore:infinite_cell_component"])
    event.shapeless("gtocore:fluid_infinity_cell", ["ae2:fluid_cell_housing", "gtocore:infinite_cell_component"])
    event.shapeless("gtocore:pattern_modifier", "expatternprovider:pattern_modifier")

    event.shaped("ae2:creative_energy_cell", [
        "AAA",
        "ADA",
        "AAA"
    ], {
        A: "ae2:dense_energy_cell",
        D: "gtceu:hv_field_generator"
    })

    event.shaped("ae2:crafting_unit", [
        "PCP",
        "KMK",
        "PLP"
    ], {
        P: "gtceu:aluminium_plate",
        C: "ae2:calculation_processor",
        K: "ae2:fluix_glass_cable",
        M: "#gtceu:circuits/mv",
        L: "ae2:logic_processor",
    })

    event.shaped("2x ae2:advanced_card", [
        "WP ",
        "ACP",
        "SP "
    ], {
        W: "gtceu:fine_red_alloy_wire",
        P: "gtceu:stainless_steel_plate",
        A: "ae2:engineering_processor",
        C: "#gtceu:circuits/hv",
        S: "gtceu:fine_silver_wire"
    })

    event.shaped("2x ae2:basic_card", [
        "WP ",
        "ACP",
        "SP "
    ], {
        W: "gtceu:fine_red_alloy_wire",
        P: "gtceu:aluminium_plate",
        A: "ae2:engineering_processor",
        C: "#gtceu:circuits/mv",
        S: "gtceu:fine_gold_wire"
    })

    event.shaped("ae2:annihilation_core", [
        "CPB"
    ], {
        C: "#gtceu:circuits/ulv",
        P: "ae2:logic_processor",
        B: "gtceu:nether_quartz_dust",
    })

    event.shaped("ae2:formation_core", [
        "CPB"
    ], {
        C: "#gtceu:circuits/ulv",
        P: "ae2:logic_processor",
        B: "ae2:certus_quartz_dust",
    })

    event.shaped("ae2:wireless_receiver", [
        "CPC",
        "RSR",
        "   "
    ], {
        C: "#gtceu:circuits/ev",
        P: "ae2:fluix_pearl",
        R: "gtceu:curved_titanium_plate",
        S: "gtceu:hv_sensor",
    })

    event.shaped("ae2:import_bus", [
        "IPC"
    ], {
        I: "ae2:annihilation_core",
        P: "gtceu:lv_robot_arm",
        C: "ae2:fluix_glass_cable",
    })

    event.shaped("ae2:export_bus", ["IPC"], {
        I: "ae2:formation_core",
        P: "gtceu:lv_robot_arm",
        C: "ae2:fluix_glass_cable",
    })

    gtr.forming_press("gtocore:logic_processor")
        .notConsumable("ae2:silicon_press")
        .notConsumable("ae2:logic_processor_press")
        .itemInputs("gtceu:gold_plate", "ae2:silicon","gtceu:redstone_plate")
        .itemOutputs("ae2:logic_processor")
        .duration(200)
        .EUt(30)

    gtr.forming_press("gtocore:logic_processor1")
        .notConsumable("ae2:silicon_press")
        .notConsumable("ae2:logic_processor_press")
        .itemInputs("enderio:powdered_gold", "gtceu:silicon_dust", "minecraft:redstone")
        .itemOutputs("ae2:logic_processor")
        .duration(20)
        .EUt(480)

    gtr.forming_press("gtocore:calculation_processor")
        .notConsumable("ae2:silicon_press")
        .notConsumable("ae2:calculation_processor_press")
        .itemInputs("gtceu:certus_quartz_plate", "ae2:silicon","gtceu:redstone_plate")
        .itemOutputs("ae2:calculation_processor")
        .duration(200)
        .EUt(30)

    gtr.forming_press("gtocore:calculation_processor1")
        .notConsumable("ae2:silicon_press")
        .notConsumable("ae2:calculation_processor_press")
        .itemInputs("ae2:certus_quartz_dust", "gtceu:silicon_dust", "minecraft:redstone")
        .itemOutputs("ae2:calculation_processor")
        .duration(20)
        .EUt(480)

    gtr.forming_press("gtocore:engineering_processor1")
        .notConsumable("ae2:silicon_press")
        .notConsumable("ae2:engineering_processor_press")
        .itemInputs("gtceu:diamond_plate", "ae2:silicon", "gtceu:redstone_plate")
        .itemOutputs("ae2:engineering_processor")
        .duration(200)
        .EUt(30)

    gtr.forming_press("gtocore:engineering_processor")
        .notConsumable("ae2:silicon_press")
        .notConsumable("ae2:engineering_processor_press")
        .itemInputs("gtceu:diamond_dust", "gtceu:silicon_dust", "minecraft:redstone")
        .itemOutputs("ae2:engineering_processor")
        .duration(20)
        .EUt(480)

    gtr.mixer("gtocore:fluix_dust")
        .itemInputs("gtceu:nether_quartz_dust","ae2:certus_quartz_dust","minecraft:redstone")
        .itemOutputs("3x ae2:fluix_dust")
        .duration(200)
        .EUt(16)

    gtr.macerator("gtocore:silicon_dust")
        .itemInputs("ae2:silicon")
        .itemOutputs("gtceu:silicon_dust")
        .EUt(16)
        .duration(200)

    gtr.assembler("gtocore:glass_fluix_cable")
        .itemInputs("ae2:quartz_fiber", "gtceu:fluix_plate")
        .itemOutputs("4x ae2:fluix_glass_cable")
        .duration(40)
        .EUt(30)

    gtr.assembler("gtocore:fluix_covered_cable")
        .itemInputs("ae2:fluix_glass_cable")
        .inputFluids("gtceu:rubber 4")
        .itemOutputs("ae2:fluix_covered_cable")
        .EUt(30)
        .duration(20)

    gtr.assembler("gtocore:fluix_covered_cable1")
        .itemInputs("ae2:fluix_glass_cable")
        .inputFluids("gtceu:silicone_rubber 2")
        .itemOutputs("ae2:fluix_covered_cable")
        .EUt(30)
        .duration(20)

    gtr.assembler("gtocore:fluix_covered_cable2")
        .itemInputs("ae2:fluix_glass_cable")
        .inputFluids("gtceu:styrene_butadiene_rubber 1")
        .itemOutputs("ae2:fluix_covered_cable")
        .EUt(30)
        .duration(20)

    gtr.assembler("gtocore:blank_pattern")
        .itemInputs(
            "3x ad_astra:steel_plate",
            "2x gtceu:polyethylene_plate",
            "4x gtceu:red_alloy_plate",
            "#gtceu:circuits/hv")
        .itemOutputs("ae2:blank_pattern")
        .inputFluids("gtceu:glass 144")
        .duration(200)
        .EUt(120)

    gtr.assembler("gtocore:blank_pattern_good")
        .itemInputs(
            "3x ad_astra:steel_plate",
            "2x gtceu:polyvinyl_chloride_plate",
            "4x gtceu:red_alloy_plate",
            "#gtceu:circuits/ev")
        .itemOutputs("4x ae2:blank_pattern")
        .inputFluids("gtceu:glass 288")
        .duration(200)
        .EUt(120)

    gtr.assembler("gtocore:blank_pattern_better")
        .itemInputs(
            "3x ad_astra:steel_plate",
            "2x gtceu:polytetrafluoroethylene_plate",
            "4x gtceu:red_alloy_plate",
            "#gtceu:circuits/iv")
        .itemOutputs("16x ae2:blank_pattern")
        .inputFluids("gtceu:glass 576")
        .duration(200)
        .EUt(480)

    gtr.assembler("gtocore:blank_pattern_best")
        .itemInputs(
            "3x ad_astra:steel_plate",
            "2x gtceu:polybenzimidazole_plate",
            "4x gtceu:red_alloy_plate",
            "#gtceu:circuits/luv")
        .itemOutputs("64x ae2:blank_pattern")
        .inputFluids("gtceu:glass 1152")
        .duration(200)
        .EUt(480)

    gtr.macerator("gtocore:sky_dust")
        .itemInputs("ae2:sky_stone_block")
        .itemOutputs("ae2:sky_dust")
        .EUt(2)
        .duration(200)

    gtr.chemical_bath("gtocore:flawless_budding_quartz")
        .itemInputs("ae2:flawed_budding_quartz")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("ae2:flawless_budding_quartz")
        .EUt(30)
        .duration(400)

    function getCellComponent(index) {
        return index > 4 ? `gtocore:cell_component_${4 ** (index - 5)}m` : `ae2:cell_component_${4 ** index}k`
    }

    for (let index = 0; index < 5; index++) {
        event.shapeless(`gtocore:${4 ** index}m_storage`, ["ae2:crafting_unit", getCellComponent(index + 5)])
        event.shapeless(`gtocore:item_storage_cell_${4 ** index}m`, ["ae2:item_cell_housing", getCellComponent(index + 5)])
        event.shapeless(`gtocore:fluid_storage_cell_${4 ** index}m`, ["ae2:fluid_cell_housing", getCellComponent(index + 5)])
        event.shaped(`gtocore:item_storage_cell_${4 ** index}m`, [
            "ABA",
            "BDB",
            "CCC"
        ], {
            A: "ae2:quartz_glass",
            B: "minecraft:redstone",
            C: "minecraft:iron_ingot",
            D: getCellComponent(index + 5)
        })
        event.shaped(`gtocore:fluid_storage_cell_${4 ** index}m`, [
            "ABA",
            "BDB",
            "CCC"
        ], {
            A: "ae2:quartz_glass",
            B: "minecraft:redstone",
            C: "minecraft:copper_ingot",
            D: getCellComponent(index + 5)
        })
    }

    for (let index = 1; index < 10; index++) {
        gtr.assembler(getCellComponent(index))
            .itemInputs(getCellComponent(index - 1), "2x #gtceu:circuits/" + tiers[index - 1][0], "ae2:logic_processor", index > 4 ? "ae2:engineering_processor" : "gtceu:redstone_plate", "ae2:calculation_processor", "gtceu:quartzite_plate")
            .inputFluids("gtceu:soldering_alloy 72")
            .itemOutputs(getCellComponent(index))
            .EUt(GTValues.VA[index - 1] / 4)
            .duration(200)
    }

    gtr.assembly_line("gtocore:max_storage")
        .itemInputs("ae2:crafting_unit", "16x gtocore:cell_component_256m", "gtceu:data_bank", "16x gtceu:data_orb", "4x #gtceu:circuits/uhv", "4x gtceu:double_red_steel_plate")
        .inputFluids("gtceu:soldering_alloy 576", "gtceu:pcb_coolant 2000")
        .itemOutputs("gtocore:max_storage")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Registries.getItemStack("gtocore:256m_storage")).dataStack(Registries.getItemStack("gtceu:data_stick")).EUt(GTValues.VA[GTValues.LuV]).duration(1200))

    gtr.assembly_line("gtocore:infinite_cell_component")
        .itemInputs("16x gtocore:max_storage", "gtceu:data_bank", "16x gtceu:data_module", "64x ae2:creative_energy_cell", "64x #gtceu:circuits/uev", "64x gtceu:ruthenium_trinium_americium_neutronate_hex_wire", "4x gtceu:double_neutronium_plate")
        .inputFluids("gtceu:mutated_living_solder 20000", "gtceu:tairitsu 20000", "gtceu:pcb_coolant 100000")
        .itemOutputs("gtocore:infinite_cell_component")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(2400)
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Registries.getItemStack("gtocore:cell_component_256m")).dataStack(Registries.getItemStack("gtceu:data_orb")).EUt(GTValues.VA[GTValues.UV]).duration(2400))

    gtr.forming_press("gtocore:fishbig_fabric")
        .itemInputs("64x gtceu:magneto_hydro_dynamically_con_strained_star_matter_foil", "64x gtceu:shirabon_foil", "64x gtocore:two_way_foil", "64x gtceu:cosmic_foil", "64x gtceu:cosmic_neutronium_foil", "64x gtceu:eternity_foil")
        .itemOutputs("gtocore:fishbig_fabric")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MAX] * 65536)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.assembler("gtocore:fishbig_frame")
        .circuit(6)
        .itemInputs("64x gtceu:cosmic_plate", "64x gtceu:eternity_nanites", "64x gtceu:long_cosmic_rod", "64x gtceu:infinity_frame", "64x gtceu:long_transcendent_metal_rod",
            "64x gtceu:long_cosmic_neutronium_rod", "64x gtceu:magneto_hydro_dynamically_con_strained_star_matter_frame", "64x gtceu:long_magmatter_rod",)
        .inputFluids("gtceu:shirabon 18432")
        .itemOutputs("gtocore:fishbig_frame")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MAX] * 65536)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.assembler("gtocore:fishbig_body")
        .itemInputs("64x gtocore:fishbig_fabric", "64x gtocore:fishbig_frame", "64x gtocore:fishbig_fabric",
            "64x gtocore:fishbig_fabric", "64x gtocore:create_aggregation", "64x gtocore:fishbig_fabric",
            "64x gtocore:fishbig_fabric", "64x gtocore:fishbig_frame", "64x gtocore:fishbig_fabric")
        .inputFluids("gtceu:eternity 18432")
        .itemOutputs("gtocore:fishbig_body")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MAX] * 65536)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.assembler("gtocore:fishbig_hade")
        .itemInputs("64x gtceu:double_cosmic_plate", "64x gtceu:double_cosmic_plate", "64x gtceu:double_cosmic_plate",
            "64x gtocore:max_sensor", "64x gtocore:create_computation", "64x gtocore:max_sensor",
            "64x gtceu:double_cosmic_plate", "64x gtocore:fishbig_frame", "64x gtceu:double_cosmic_plate")
        .inputFluids("gtceu:transcendent_metal 18432")
        .itemOutputs("gtocore:fishbig_hade")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MAX] * 65536)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.assembler("gtocore:fishbig_hair")
        .itemInputs("64x gtocore:fishbig_fabric", "64x gtocore:fishbig_fabric", "64x gtocore:fishbig_fabric",
            "64x gtocore:fishbig_fabric", "64x gtocore:fishbig_frame", "64x gtocore:fishbig_fabric",
            "64x gtocore:fishbig_fabric", "64x gtocore:infinity_glass", "64x gtocore:fishbig_fabric")
        .inputFluids("gtceu:eternity 18432")
        .itemOutputs("gtocore:fishbig_hair")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MAX] * 65536)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.assembler("gtocore:fishbig_rleg")
        .itemInputs("64x gtocore:fishbig_frame", "64x gtocore:fishbig_fabric", "64x gtocore:fishbig_fabric",
            "64x gtocore:fishbig_fabric", "64x gtceu:max_buffer", "64x gtocore:fishbig_fabric",
            "64x gtocore:fishbig_fabric", "64x gtocore:fishbig_fabric", "64x gtocore:fishbig_fabric")
        .inputFluids("gtceu:eternity 18432")
        .itemOutputs("gtocore:fishbig_rleg")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MAX] * 65536)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.assembler("gtocore:fishbig_lleg")
        .itemInputs("64x gtocore:fishbig_fabric", "64x gtocore:fishbig_fabric", "64x gtocore:fishbig_frame",
            "64x gtocore:fishbig_fabric", "64x gtceu:max_buffer", "64x gtocore:fishbig_fabric",
            "64x gtocore:fishbig_fabric", "64x gtocore:fishbig_fabric", "64x gtocore:fishbig_fabric")
        .inputFluids("gtceu:eternity 18432")
        .itemOutputs("gtocore:fishbig_lleg")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MAX] * 65536)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.assembler("gtocore:fishbig_rhand")
        .itemInputs("64x gtocore:fishbig_frame", "64x gtocore:fishbig_fabric", "64x gtocore:fishbig_fabric",
            "64x gtocore:fishbig_fabric", "64x gtocore:component_assembly_line_casing_max", "64x gtocore:fishbig_fabric",
            "64x gtocore:fishbig_fabric", "64x gtocore:fishbig_fabric", "64x gtocore:fishbig_fabric")
        .inputFluids("gtceu:eternity 18432")
        .itemOutputs("gtocore:fishbig_rhand")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MAX] * 65536)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.assembler("gtocore:fishbig_lhand")
        .itemInputs("64x gtocore:fishbig_fabric", "64x gtocore:fishbig_fabric", "64x gtocore:fishbig_frame",
            "64x gtocore:fishbig_fabric", "64x gtocore:component_assembly_line_casing_max", "64x gtocore:fishbig_fabric",
            "64x gtocore:fishbig_fabric", "64x gtocore:fishbig_fabric", "64x gtocore:fishbig_fabric")
        .inputFluids("gtceu:eternity 18432")
        .itemOutputs("gtocore:fishbig_lhand")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MAX] * 65536)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.arc_generator("gtocore:charged_certus_quartz_crystal")
        .circuit(1)
        .itemInputs("ae2:certus_quartz_crystal")
        .itemOutputs("ae2:charged_certus_quartz_crystal")
        .EUt(30)
        .duration(60)

    gtr.arc_generator("gtocore:fluix_crystal")
        .circuit(2)
        .itemInputs("minecraft:redstone", "minecraft:quartz", "ae2:certus_quartz_crystal")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("2x ae2:fluix_crystal")
        .EUt(30)
        .duration(80)

    gtr.arc_generator("gtocore:fluix_pearl")
        .itemInputs("minecraft:ender_pearl", "gtceu:flawless_fluix_gem")
        .itemOutputs("ae2:fluix_pearl")
        .EUt(30)
        .duration(160)
})