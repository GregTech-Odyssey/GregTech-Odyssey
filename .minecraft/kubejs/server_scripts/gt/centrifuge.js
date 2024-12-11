ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu

    gtr.centrifuge("gtocore:free_electron_gas")
        .notConsumable("gtocore:separation_electromagnet")
        .inputFluids("gtceu:uu_matter 1000")
        .outputFluids("gtceu:free_electron_gas 1000", "gtceu:free_alpha_gas 500")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.centrifuge("gtocore:quark_gluon")
        .notConsumable("gtocore:separation_electromagnet")
        .inputFluids("gtceu:quark_gluon_plasma 1000")
        .outputFluids("gtceu:heavy_quarks 200", "gtceu:light_quarks 600", "gtceu:gluons 200")
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)

    gtr.centrifuge("nuclear_waste")
        .itemInputs("gtocore:nuclear_waste")
        .itemOutputs("gtceu:tiny_plutonium_dust",
            "gtceu:tiny_polonium_dust",
            "gtceu:tiny_uranium_dust",
            "gtceu:tiny_thorium_dust",
            "gtceu:tiny_protactinium_dust",
            "gtceu:tiny_neptunium_dust")
        .EUt(2048)
        .duration(200)

    gtr.centrifuge("gtocore:iodine_dust")
        .inputFluids("gtceu:iodine_containing_slurry 1000")
        .itemOutputs("gtceu:iodine_dust", "2x gtceu:rock_salt_dust")
        .EUt(120)
        .duration(200)

    gtr.centrifuge("gtocore:clean_bedrock_solution")
        .inputFluids("gtceu:bedrock_soot_solution 2000")
        .itemOutputs("gtceu:small_naquadah_dust", "gtceu:tiny_enriched_naquadah_dust", "gtceu:tiny_naquadria_dust")
        .outputFluids("gtceu:clean_bedrock_solution 1000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.centrifuge("gtocore:inert_residues_dust")
        .notConsumable("gtocore:separation_electromagnet")
        .itemInputs("10x gtceu:metal_residue_dust")
        .inputFluids("gtceu:distilled_water 10000")
        .itemOutputs("gtceu:inert_residues_dust")
        .outputFluids("gtceu:oxidized_residual_solution 10000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.centrifuge("gtocore:superheavyradox")
        .inputFluids("gtceu:superheavyradox 1000")
        .outputFluids("gtceu:heavyradox 2000")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    gtr.centrifuge("gtocore:dragon_element")
        .inputFluids("gtceu:turbid_dragon_blood 1000")
        .outputFluids("gtceu:dragon_element 500")
        .itemOutputs("gtceu:collagen_dust")
        .EUt(7680)
        .duration(200)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.centrifuge("gtocore:titanium_50_tetrafluoride")
        .inputFluids("gtceu:titanium_tetrafluoride 1000")
        .outputFluids("gtceu:titanium_50_tetrafluoride 10", "gtceu:titanium_tetrafluoride 990")
        .EUt(480)
        .duration(200)

    gtr.centrifuge("gtocore:taranium_enriched_liquid_helium_3")
        .notConsumable("gtocore:separation_electromagnet")
        .inputFluids("gtceu:dusty_liquid_helium_iii 1000")
        .outputFluids("gtceu:taranium_enriched_liquid_helium_3 500")
        .EUt(3000)
        .duration(400)

    gtr.centrifuge("gtocore:tcetiedandelions")
        .inputFluids("gtceu:seaweedbroth 1000")
        .itemOutputs("64x gtocore:tcetiedandelions")
        .EUt(120)
        .duration(200)
        .addCondition(new GravityCondition(false))

    gtr.centrifuge("gtocore:flerovium")
        .inputFluids("gtceu:flyb_plasma 1000")
        .outputFluids("gtceu:flerovium 288", "gtceu:ytterbium_178 288")
        .EUt(1920)
        .duration(290)

    gtr.centrifuge("gtocore:fissioned_uranium_235_dust")
        .itemInputs("gtceu:fissioned_uranium_235_dust")
        .itemOutputs("enderio:powdered_tin", "gtceu:technetium_dust")
        .EUt(1920)
        .duration(400)

    gtr.centrifuge("gtocore:uranium_sulfate_waste_solution")
        .inputFluids("gtceu:uranium_sulfate_waste_solution 1000")
        .itemOutputs("gtceu:tiny_lead_dust", "gtceu:tiny_barium_dust", "gtceu:tiny_strontium_dust", "gtceu:tiny_radium_dust")
        .outputFluids("gtceu:diluted_sulfuric_acid 1000")
        .EUt(480)
        .duration(500)

    gtr.centrifuge("gtocore:rare_earth_chlorides")
        .notConsumable("gtceu:hv_item_magnet")
        .inputFluids("gtceu:rare_earth_chlorides 2000")
        .outputFluids("gtceu:la_nd_oxides_solution 250",
            "gtceu:sm_gd_oxides_solution 250",
            "gtceu:tb_ho_oxides_solution 250",
            "gtceu:er_lu_oxides_solution 250",
            "gtceu:hydrochloric_acid 1000")
        .EUt(480)
        .duration(200)

    gtr.centrifuge("gtocore:neutronium_block")
        .notConsumable("gtceu:neutronium_nanites")
        .itemInputs("avaritia:neutron")
        .itemOutputs("9x gtceu:naquadah_dust", "9x gtceu:neutronium_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(800)

    gtr.centrifuge("gtocore:actinium_radium_nitrate_solution")
        .notConsumable("gtceu:trifluoroacetic_phosphate_ester_dust")
        .inputFluids("gtceu:actinium_radium_nitrate_solution 13000")
        .itemOutputs("26x gtceu:actinium_nitrate_dust", "27x gtceu:radium_nitrate_dust")
        .chancedOutput("4x gtceu:francium_dust", 2500, 0)
        .chancedOutput("gtceu:thorium_dust", 2500, 0)
        .chancedOutput("2x gtceu:protactinium_dust", 2500, 0)
        .chancedOutput("gtceu:radium_dust", 2500, 0)
        .outputFluids("minecraft:water 13000")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(160)

    gtr.centrifuge("gtocore:heavily_fluorinated_trinium_solution")
        .inputFluids("gtceu:heavily_fluorinated_trinium_solution 8000")
        .itemOutputs("60x gtceu:trinium_tetrafluoride_dust")
        .outputFluids("gtceu:fluorine 16000", "gtceu:perfluorobenzene 2000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(350)

    gtr.rare_earth_centrifugal("gtocore:raw_adamantine")
        .itemInputs("gtceu:naquadah_contain_rare_earth_dust")
        .chancedOutput("gtceu:raw_adamantine_compounds", 5000, 1000)
        .itemOutputs("6x gtceu:enriched_naquadah_sulfate_dust", "6x gtceu:naquadria_sulfate_dust")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(200)

    gtr.rare_earth_centrifugal("gtocore:rare_earth_centrifugal")
        .itemInputs("gtceu:rare_earth_metal_dust")
        .itemOutputs("gtceu:small_lanthanum_dust",
            "gtceu:small_cerium_dust",
            "gtceu:small_neodymium_dust",
            "gtceu:small_promethium_dust",
            "gtceu:small_samarium_dust",
            "gtceu:small_europium_dust",
            "gtceu:small_praseodymium_dust",
            "gtceu:small_gadolinium_dust",
            "gtceu:small_terbium_dust",
            "gtceu:small_dysprosium_dust",
            "gtceu:small_holmium_dust",
            "gtceu:small_erbium_dust",
            "gtceu:small_thulium_dust",
            "gtceu:small_ytterbium_dust",
            "gtceu:small_scandium_dust",
            "gtceu:small_lutetium_dust",
            "gtceu:small_yttrium_dust")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
})