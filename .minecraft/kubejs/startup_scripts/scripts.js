ItemEvents.armorTierRegistry(event => {
    event.add("magnetohydrodynamically_constrained_star_matter", tier => {
        tier.durabilityMultiplier = -1
        tier.slotProtections = [0, 0, 0, 0]
        tier.enchantmentValue = 10
        tier.equipSound = "minecraft:item.armor.equip_iron"
        tier.toughness = 0
        tier.knockbackResistance = 10
    })
    event.add("fermium", tier => {
        tier.durabilityMultiplier = -1
        tier.slotProtections = [16, 24, 22, 14]
        tier.enchantmentValue = 10
        tier.equipSound = "minecraft:item.armor.equip_iron"
        tier.toughness = 10
        tier.knockbackResistance = 1
    })
    event.add("space_fermium", tier => {
        tier.durabilityMultiplier = -1
        tier.slotProtections = [16, 24, 22, 14]
        tier.enchantmentValue = 14
        tier.equipSound = "minecraft:item.armor.equip_iron"
        tier.toughness = 10
        tier.knockbackResistance = 2
    })
})
StartupEvents.registry("item", event => {
    event.create("magnetohydrodynamically_constrained_star_matter_helmet", "helmet")
        .tier("magnetohydrodynamically_constrained_star_matter")
        .tag("gtceu:ppe_armor")
    event.create("magnetohydrodynamically_constrained_star_matter_chestplate", "chestplate")
        .tier("magnetohydrodynamically_constrained_star_matter")
        .tag("gtceu:ppe_armor")
    event.create("magnetohydrodynamically_constrained_star_matter_leggings", "leggings")
        .tier("magnetohydrodynamically_constrained_star_matter")
        .tag("gtceu:ppe_armor")
    event.create("magnetohydrodynamically_constrained_star_matter_boots", "boots")
        .tier("magnetohydrodynamically_constrained_star_matter")
        .tag("gtceu:ppe_armor")
    event.create("fermium_helmet", "helmet")
        .tier("fermium")
    event.create("fermium_chestplate", "chestplate")
        .tier("fermium")
    event.create("fermium_leggings", "leggings")
        .tier("fermium")
    event.create("fermium_boots", "boots")
        .tier("fermium")
    event.create("space_fermium_helmet", "helmet")
        .tier("space_fermium")
    event.create("space_fermium_chestplate", "chestplate")
        .tier("space_fermium")
    event.create("space_fermium_leggings", "leggings")
        .tier("space_fermium")
    event.create("space_fermium_boots", "boots")
        .tier("space_fermium")
})

ItemEvents.modification(event => {
    event.modify("gtceu:raw_coal", modification => {
        modification.setBurnTime(1600)
    })
})

WorldgenEvents.remove(event => {
    event.removeFeatureById("underground_ores", ["ad_astra:moon_desh_ore", "ad_astra:moon_iron_ore", "ad_astra:moon_ice_shard_ore",
        "ad_astra:mars_iron_ore", "ad_astra:mars_diamond_ore", "ad_astra:mars_ostrum_ore", "ad_astra:mars_ice_shard_ore",
        "ad_astra:venus_coal_ore", "ad_astra:venus_gold_ore", "ad_astra:venus_diamond_ore", "ad_astra:venus_calorite_ore",
        "ad_astra:glacio_ice_shard_ore", "ad_astra:glacio_coal_ore", "ad_astra:glacio_copper_ore", "ad_astra:glacio_iron_ore",
        "ad_astra:mercury_iron_ore", "ad_astra:glacio_deepslate_lapis_ore", "ad_astra:glacio_deepslate_iron_ore",
        "ad_astra:glacio_lapis_ore", "ad_astra:glacio_deepslate_copper_ore", "ad_astra:glacio_deepslate_coal_ore"])
})