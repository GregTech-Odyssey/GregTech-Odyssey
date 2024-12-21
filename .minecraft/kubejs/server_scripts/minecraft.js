ServerEvents.recipes((event) => {
    const gtr = event.recipes.gtceu
    event.smelting("minecraft:slime_ball", "gtceu:sticky_resin")
    event.smelting("minecraft:leather", "minecraft:rotten_flesh")

    event.shaped("minecraft:sculk_sensor", [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: "minecraft:echo_shard",
        B: "gtceu:echo_shard_dust",
        C: "minecraft:note_block",
        D: "minecraft:comparator"
    })

    event.shaped("minecraft:sculk_shrieker", [
        "ABA",
        "BDB",
        "ABA"
    ], {
        A: "gtocore:echobone",
        B: "gtceu:echo_shard_rod",
        D: "minecraft:sculk_sensor"
    })

    gtr.mixer("gtocore:rooted_dirt")
        .chancedInput("minecraft:moss_carpet", 1000, 0)
        .itemInputs("minecraft:dirt")
        .itemOutputs("minecraft:rooted_dirt")
        .duration(200)
        .EUt(16)

    gtr.mixer("gtocore:grass_block")
        .itemInputs("minecraft:dirt", "minecraft:grass")
        .itemOutputs("minecraft:grass_block")
        .duration(200)
        .EUt(16)

    gtr.autoclave("gtocore:soul_soil")
        .itemInputs("enderio:filled_soul_vial", "minecraft:rooted_dirt")
        .inputFluids("gtceu:liquid_nether_air 100")
        .itemOutputs("enderio:empty_soul_vial", "minecraft:soul_soil")
        .EUt(480)
        .duration(240)

    gtr.compressor("gtocore:netherite_block")
        .itemInputs("9x minecraft:netherite_ingot")
        .itemOutputs("minecraft:netherite_block")
        .duration(300)
        .EUt(2)

    gtr.alloy_smelter("gtocore:netherite_ingot")
        .itemInputs("minecraft:netherite_block")
        .notConsumable("gtceu:ingot_casting_mold")
        .itemOutputs("9x minecraft:netherite_ingot")
        .duration(1188)
        .EUt(7)

    gtr.arc_generator("gtocore:ghast_tear")
        .itemInputs("gtceu:tiny_lithium_dust", "gtceu:tiny_potassium_dust")
        .inputFluids("gtceu:salt_water 1000")
        .itemOutputs("minecraft:ghast_tear")
        .duration(400)
        .EUt(30)

    gtr.arc_generator("gtocore:skeleton_skull")
        .notConsumable(Item.of("enderio:filled_soul_vial", `{BlockEntityTag:{EntityStorage:{Entity:{id:"minecraft:skeleton"}}}}`).weakNBT())
        .itemInputs("9x minecraft:bone")
        .itemOutputs("minecraft:skeleton_skull")
        .duration(100)
        .EUt(120)

    gtr.arc_generator("gtocore:zombie_head")
        .notConsumable(Item.of("enderio:filled_soul_vial", `{BlockEntityTag:{EntityStorage:{Entity:{id:"minecraft:zombie"}}}}`).weakNBT())
        .itemInputs("9x minecraft:rotten_flesh")
        .itemOutputs("minecraft:zombie_head")
        .duration(100)
        .EUt(120)

    gtr.arc_generator("gtocore:creeper_head")
        .notConsumable(Item.of("enderio:filled_soul_vial", `{BlockEntityTag:{EntityStorage:{Entity:{id:"minecraft:creeper"}}}}`).weakNBT())
        .itemInputs("9x minecraft:gunpowder")
        .itemOutputs("minecraft:creeper_head")
        .duration(100)
        .EUt(120)

    gtr.arc_generator("gtocore:piglin_head")
        .notConsumable(Item.of("enderio:filled_soul_vial", `{BlockEntityTag:{EntityStorage:{Entity:{id:"minecraft:piglin"}}}}`).weakNBT())
        .itemInputs("9x minecraft:porkchop", "minecraft:gold_nugget")
        .itemOutputs("minecraft:piglin_head")
        .duration(200)
        .EUt(120)

    gtr.arc_generator("gtocore:enderman_head")
        .notConsumable(Item.of("enderio:filled_soul_vial", `{BlockEntityTag:{EntityStorage:{Entity:{id:"minecraft:enderman"}}}}`).weakNBT())
        .itemInputs("9x minecraft:ender_pearl")
        .itemOutputs("enderio:enderman_head")
        .duration(100)
        .EUt(480)

    gtr.arc_generator("gtocore:wither_skeleton_skull")
        .notConsumable(Item.of("enderio:filled_soul_vial", `{BlockEntityTag:{EntityStorage:{Entity:{id:"minecraft:wither_skeleton"}}}}`).weakNBT())
        .itemInputs("minecraft:skeleton_skull", "gtceu:exquisite_coal_gem")
        .itemOutputs("minecraft:wither_skeleton_skull")
        .duration(200)
        .EUt(480)

    gtr.extractor("gtocore:bones")
        .itemInputs("#minecraft:dirt")
        .chancedOutput("minecraft:bone", 25, 0)
        .duration(100)
        .EUt(16)

    gtr.compressor("gtocore:spongebob")
        .itemInputs("2x gtceu:polycaprolactam_foil")
        .itemOutputs("minecraft:sponge")
        .duration(200)
        .EUt(2)

    gtr.arc_generator("gtocore:nether_star_dust")
        .itemInputs("gtceu:diamond_dust", "gtceu:iridium_dust")
        .inputFluids("gtceu:rocket_fuel 1000", "gtceu:nether_air 8000")
        .itemOutputs("3x gtceu:nether_star_dust")
        .duration(200)
        .EUt(480)
        .addCondition(new GravityCondition(true))

    gtr.arc_generator("gtocore:nether_star")
        .itemInputs("4x minecraft:soul_sand", "3x minecraft:wither_skeleton_skull")
        .itemOutputs("minecraft:nether_star")
        .duration(800)
        .EUt(1920)
        .addCondition(new GravityCondition(true))

    gtr.arc_generator("gtocore:reinforced_deepslate")
        .itemInputs("minecraft:deepslate", "gtceu:echo_shard_block", "4x gtocore:echobone")
        .inputFluids("gtceu:echo_shard 1440")
        .itemOutputs("minecraft:reinforced_deepslate")
        .duration(200)
        .EUt(480)

    gtr.arc_generator("gtocore:echobone")
        .itemInputs("minecraft:bone")
        .inputFluids("gtceu:echo_shard 144")
        .itemOutputs("gtocore:echobone")
        .EUt(480)
        .duration(400)

    gtr.chemical_bath("gtocore:black_candle")
        .itemInputs("minecraft:string")
        .inputFluids("gtceu:oil 100")
        .itemOutputs("minecraft:black_candle")
        .EUt(120)
        .duration(200)

    gtr.sps_crafting("gtocore:sculk_catalyst")
        .itemInputs("minecraft:terracotta")
        .inputFluids("gtceu:mana 1000", "gtceu:echo_shard 100")
        .itemOutputs("minecraft:sculk_catalyst")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(20)

    gtr.compressor("gtocore:bedrock")
        .itemInputs("4x gtceu:bedrock_dust")
        .itemOutputs("minecraft:bedrock")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(4000)

    gtr.arc_generator("gtocore:glowstone_dust")
        .itemInputs("enderio:powdered_gold", "minecraft:redstone")
        .itemOutputs("2x minecraft:glowstone_dust")
        .EUt(30)
        .duration(200)

    gtr.lava_furnace("gtocore:lava_furnace")
        .itemInputs("#forge:cobblestone")
        .outputFluids("minecraft:lava 1000")
        .EUt(16)
        .duration(200)

    gtr.lava_furnace("gtocore:lava_furnace1")
        .itemInputs("#forge:stone")
        .outputFluids("minecraft:lava 1000")
        .EUt(16)
        .duration(200)

    gtr.arc_generator("gtocore:prismarine")
        .itemInputs("minecraft:cobblestone")
        .inputFluids("gtceu:salt_water 10")
        .itemOutputs("minecraft:prismarine")
        .EUt(30)
        .duration(200)

    gtr.dragon_egg_copier("gtocore:dragon_egg_copier")
        .itemInputs("minecraft:dragon_egg")
        .inputFluids("gtceu:biohmediumsterilized 100")
        .itemOutputs("minecraft:dragon_egg")
        .chancedOutput("minecraft:dragon_egg", 2000, 1000)
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)
        .cleanroom(GTOCleanroomType.LAW_CLEANROOM)

    gtr.fermenter("gtocore:poisonous_potato")
        .itemInputs("minecraft:potato")
        .itemOutputs("minecraft:poisonous_potato")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400)

    gtr.fermenter("gtocore:rotten_flesh")
        .itemInputs("gtceu:meat_dust")
        .itemOutputs("minecraft:rotten_flesh")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400)

    gtr.electric_blast_furnace("gtocore:netherite_ingot")
        .itemInputs("minecraft:netherite_scrap", "ad_astra:calorite_ingot")
        .itemOutputs("minecraft:netherite_ingot")
        .inputFluids("gtceu:neon 100")
        .EUt(1920)
        .duration(800)
        .blastFurnaceTemp(6470)

    gtr.arc_generator("gtocore:dragon_egg")
        .itemInputs("minecraft:egg", "64x gtocore:warped_ender_pearl")
        .inputFluids("gtceu:antimatter 1000", "gtceu:ender_eye 10000", "gtceu:sterilized_growth_medium 10000")
        .chancedOutput("minecraft:dragon_egg", 9000, 0)
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UV])

    gtr.arc_generator("gtocore:crying_obsidian")
        .itemInputs("minecraft:obsidian")
        .inputFluids("gtceu:antimatter 10")
        .itemOutputs("minecraft:crying_obsidian")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)

    gtr.assembler("gtocore:netherite_upgrade_smithing_template")
        .itemInputs("minecraft:netherite_upgrade_smithing_template")
        .itemInputs("7x gtceu:diamond_dust", "minecraft:netherrack")
        .itemOutputs("2x minecraft:netherite_upgrade_smithing_template")
        .EUt(480)
        .duration(200)

    gtr.macerator("gtocore:wheat_seeds")
        .itemInputs("minecraft:wheat")
        .itemOutputs("64x minecraft:wheat_seeds")
        .EUt(2)
        .duration(200)

    gtr.chemical_bath("gtocore:netherrack")
        .itemInputs("minecraft:granite")
        .inputFluids("gtceu:liquid_nether_air 1000")
        .itemOutputs("minecraft:netherrack")
        .EUt(120)
        .duration(800)

    gtr.chemical_bath("gtocore:end_stone")
        .itemInputs("minecraft:andesite")
        .inputFluids("gtceu:liquid_ender_air 1000")
        .itemOutputs("minecraft:end_stone")
        .EUt(480)
        .duration(800)

    gtr.macerator("gtocore:prismarine_shard")
        .itemInputs("minecraft:prismarine")
        .itemOutputs("minecraft:prismarine_shard")
        .EUt(2)
        .duration(200)

    gtr.forge_hammer("gtocore:prismarine_crystals")
        .itemInputs("minecraft:prismarine_shard")
        .itemOutputs("minecraft:prismarine_crystals")
        .EUt(16)
        .duration(20)

    gtr.arc_generator("gtocore:netherite_scrap")
        .itemInputs("minecraft:ancient_debris", "minecraft:prismarine_shard")
        .inputFluids("gtceu:nether_air 100")
        .itemOutputs("minecraft:netherite_scrap")
        .EUt(480)
        .duration(240)

    gtr.chemical_bath("gtocore:sculk_vein")
        .itemInputs("minecraft:vine")
        .inputFluids("gtceu:echo_shard 10")
        .itemOutputs("minecraft:sculk_vein")
        .EUt(120)
        .duration(200)
})