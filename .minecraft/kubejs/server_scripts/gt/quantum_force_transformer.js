ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu

    gtr.quantum_force_transformer("gtocore:radox")
        .inputFluids("gtceu:radox_gas 21600", "gtceu:oxygen_plasma 75000", "gtceu:titanium_50_tetrachloride 1000")
        .itemInputs("16x gtceu:molybdenum_trioxide_dust",
            "16x gtceu:chromium_trioxide_dust",
            "14x gtceu:phosphorus_pentoxide_dust",
            "12x gtceu:cubic_zirconia_dust",
            "12x gtceu:germanium_dioxide_dust",
            "12x gtceu:silicon_dioxide_dust",
            "10x gtceu:arsenic_trioxide_dust",
            "10x gtceu:antimony_trioxide_dust",
            "10x gtceu:boron_trioxide_dust",
            "8x gtceu:zincite_dust",
            "8x gtceu:magnesia_dust",
            "8x gtceu:cobalt_oxide_dust",
            "8x gtceu:massicot_dust",
            "8x gtceu:cupric_oxide_dust",
            "6x gtceu:potash_dust",
            "6x gtceu:silver_oxide_dust",
            "6x gtceu:sodium_oxide_dust",
            "4x gtceu:rare_earth_oxide_dust")
        .outputFluids("gtceu:radox 10800")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(8000)

    gtr.quantum_force_transformer("gtocore:spacetime_single_wire")
        .notConsumable("gtceu:spacetime_nanites")
        .notConsumable("gtceu:transcendent_metal_nanites")
        .itemInputs("gtceu:infinity_single_wire")
        .inputFluids("gtceu:spacetime 100", "gtceu:rhugnor 100")
        .itemOutputs("gtceu:spacetime_single_wire")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.quantum_force_transformer("gtocore:spacetime_double_wire")
        .notConsumable("4x gtceu:spacetime_nanites")
        .notConsumable("4x gtceu:transcendent_metal_nanites")
        .itemInputs("2x gtceu:spacetime_single_wire")
        .inputFluids("gtceu:rhugnor 200")
        .itemOutputs("gtceu:spacetime_double_wire")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(800)

    gtr.quantum_force_transformer("gtocore:spacetime_quadruple_wire")
        .notConsumable("8x gtceu:spacetime_nanites")
        .notConsumable("8x gtceu:transcendent_metal_nanites")
        .itemInputs("2x gtceu:spacetime_double_wire")
        .inputFluids("gtceu:rhugnor 400")
        .itemOutputs("gtceu:spacetime_quadruple_wire")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(1600)

    gtr.quantum_force_transformer("gtocore:spacetime_octal_wire")
        .notConsumable("16x gtceu:spacetime_nanites")
        .notConsumable("16x gtceu:transcendent_metal_nanites")
        .itemInputs("2x gtceu:spacetime_quadruple_wire")
        .inputFluids("gtceu:rhugnor 800")
        .itemOutputs("gtceu:spacetime_octal_wire")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(3200)

    gtr.quantum_force_transformer("gtocore:spacetime_hex_wire")
        .notConsumable("32x gtceu:spacetime_nanites")
        .notConsumable("32x gtceu:transcendent_metal_nanites")
        .itemInputs("2x gtceu:spacetime_octal_wire")
        .inputFluids("gtceu:rhugnor 1600")
        .itemOutputs("gtceu:spacetime_hex_wire")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(6400)

    gtr.quantum_force_transformer("avaritia:eternal_singularity")
        .notConsumable("avaritia:infinity_catalyst")
        .itemInputs("64x gtceu:neutronium_block",
            "gtocore:combined_singularity_0",
            "gtocore:combined_singularity_1",
            "gtocore:combined_singularity_2",
            "gtocore:combined_singularity_3",
            "gtocore:combined_singularity_4",
            "gtocore:combined_singularity_5",
            "gtocore:combined_singularity_6",
            "gtocore:combined_singularity_7",
            "gtocore:combined_singularity_8",
            "gtocore:combined_singularity_9",
            "gtocore:combined_singularity_10",
            "gtocore:combined_singularity_11",
            "gtocore:combined_singularity_12",
            "gtocore:combined_singularity_13",
            "gtocore:combined_singularity_14",
            "gtocore:combined_singularity_15")
        .inputFluids("gtceu:awakened_draconium 1000", "gtceu:cosmic_neutronium 1000", "gtceu:dimensionallytranscendentstellarcatalyst 1000")
        .itemOutputs("avaritia:eternal_singularity")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.quantum_force_transformer("avaritia:eternal_singularity_1")
        .notConsumable("gtocore:eternity_catalyst")
        .itemInputs("64x gtceu:neutronium_block",
            "gtocore:combined_singularity_0",
            "gtocore:combined_singularity_1",
            "gtocore:combined_singularity_2",
            "gtocore:combined_singularity_3",
            "gtocore:combined_singularity_4",
            "gtocore:combined_singularity_5",
            "gtocore:combined_singularity_6",
            "gtocore:combined_singularity_7",
            "gtocore:combined_singularity_8",
            "gtocore:combined_singularity_9",
            "gtocore:combined_singularity_10",
            "gtocore:combined_singularity_11",
            "gtocore:combined_singularity_12",
            "gtocore:combined_singularity_13",
            "gtocore:combined_singularity_14",
            "gtocore:combined_singularity_15")
        .inputFluids("gtceu:cosmic_neutronium 1000", "gtceu:exciteddtec 1000", "gtceu:spatialfluid 1000")
        .itemOutputs("16x avaritia:eternal_singularity")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.quantum_force_transformer("gtocore:spatialfluid")
        .notConsumable("gtocore:hypercube")
        .notConsumable("gtocore:quantum_anomaly")
        .itemInputs("16x gtceu:cosmic_neutronium_plate")
        .inputFluids("gtceu:temporalfluid 10000", "gtceu:exciteddtsc 10000")
        .outputFluids("gtceu:spatialfluid 10000")
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(600)

    gtr.quantum_force_transformer("gtocore:quantum_anomaly")
        .chancedInput("gtceu:draconium_nanites", 100, 0)
        .itemInputs("gtocore:entangled_singularity")
        .inputFluids("gtceu:duranium 144", "gtceu:exciteddtec 100")
        .chancedOutput("gtocore:quantum_anomaly", 1000, 0)
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.quantum_force_transformer("gtocore:radox_gas")
        .notConsumable("gtocore:quantum_anomaly")
        .itemInputs("64x gtocore:variation_wood")
        .inputFluids("gtceu:xenoxene 10000", "gtceu:unknowwater 90000", "gtceu:temporalfluid 100")
        .outputFluids("gtceu:radox_gas 100000")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.quantum_force_transformer("gtocore:hyper_stable_self_healing_adhesive")
        .chancedInput("gtceu:uruium_nanites", 500, 0)
        .itemInputs("64x gtceu:activated_carbon_dust", "64x gtceu:bismuth_dust")
        .inputFluids("gtceu:oxygen 20000", "gtceu:hydrogen 20000")
        .chancedOutput("gtocore:hyper_stable_self_healing_adhesive", 2000, 0)
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(20)

    gtr.quantum_force_transformer("gtocore:black_body_naquadria_supersolid")
        .chancedInput("gtceu:uruium_nanites", 500, 0)
        .itemInputs("64x gtceu:naquadria_dust", "64x gtceu:magnesium_dust")
        .inputFluids("gtceu:phosphoric_acid 20000", "gtceu:sulfuric_acid 20000")
        .chancedOutput("gtocore:black_body_naquadria_supersolid", 2000, 0)
        .EUt(4 * GTValues.VA[GTValues.MAX])
        .duration(20)

    gtr.quantum_force_transformer("gtocore:fullerene_polymer_matrix_pulp_dust")
        .notConsumable("gtceu:starmetal_nanites")
        .itemInputs("16x gtceu:fullerene_dust", "8x gtceu:palladium_dust")
        .inputFluids("gtceu:nitrogen 15000", "gtceu:hydrogen 73000", "gtceu:oxygen 13000")
        .itemOutputs("16x gtceu:fullerene_polymer_matrix_pulp_dust")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(400)

    gtr.quantum_force_transformer("gtocore:taranium_dust")
        .notConsumable("avaritia:infinity_catalyst")
        .itemInputs("176x gtceu:bedrock_dust", "64x gtceu:carbon_dust", "640x gtceu:deepslate_dust")
        .inputFluids("gtceu:helium 37000", "gtceu:hydrogen 73000", "gtceu:xenon 3000")
        .itemOutputs("64x gtceu:taranium_dust")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(1600)

    gtr.quantum_force_transformer("gtocore:timepiece")
        .notConsumable("gtceu:white_dwarf_mtter_nanites")
        .notConsumable("gtceu:black_dwarf_mtter_nanites")
        .chancedInput("gtceu:spacetime_hex_wire", 1, 0)
        .chancedOutput("gtocore:timepiece", 2500, 0)
        .inputFluids("gtceu:cosmic_element 100")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.quantum_force_transformer("gtocore:cosmic_ingot")
        .notConsumable("gtceu:cosmic_neutronium_nanites")
        .chancedInput("gtocore:cosmic_singularity", 1000, 0)
        .itemInputs("gtocore:hypercube", "avaritia:infinity_ingot")
        .inputFluids("gtceu:white_dwarf_mtter 576", "gtceu:black_dwarf_mtter 576", "gtceu:primordialmatter 500")
        .itemOutputs("gtceu:cosmic_ingot")
        .EUt(64 * GTValues.VA[GTValues.MAX])
        .duration(200)

    gtr.quantum_force_transformer("gtocore:magmatter")
        .notConsumable("gtocore:spacetime_catalyst")
        .inputFluids("gtceu:chaos 1000", "gtceu:spatialfluid 1000", "gtceu:exciteddtsc 1000")
        .itemInputs("gtceu:attuned_tengam_block")
        .outputFluids("gtceu:magmatter 1000")
        .EUt(16 * GTValues.VA[GTValues.MAX])
        .duration(800)
})