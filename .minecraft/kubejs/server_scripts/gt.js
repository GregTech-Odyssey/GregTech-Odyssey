ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu
    // 导出的配方

    // 动力模块等级 1
    gtr.assembler_module("gtocore:optical_data_stick")
        .itemInputs("gtocore:optical_printed_circuit_board")
        .itemInputs("gtocore:optical_ram_chip")
        .itemInputs("8x gtceu:normal_optical_pipe")
        .itemInputs("2x gtceu:crystal_cpu")
        .itemInputs("8x gtceu:fine_tritanium_wire")
        .itemInputs("16x gtceu:hsss_bolt")
        .itemInputs("gtceu:exquisite_certus_quartz_gem")
        .itemInputs("2x gtceu:curved_hastelloy_c_276_plate")
        .itemOutputs("gtocore:optical_data_stick")
        .inputFluids("gtceu:sunnarium 10")
        .inputFluids("gtceu:fluxed_electrum 288")
        .EUt(524288)
        .duration(240)
})