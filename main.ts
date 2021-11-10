let Establecer_temp = 0
let Temp_max = 0
let acu_temp = 0
let prom_temp = 0
input.onButtonPressed(Button.A, function () {
    let prom_min = 0
    for (let index = 0; index < 14; index++) {
        let Temp = 0
        Establecer_temp = randint(15, 27)
        if (Temp >= Temp_max) {
            Temp_max = Temp
        }
        if (Temp <= acu_temp) {
            acu_temp = Temp
        }
        acu_temp = acu_temp + Temp
    }
    prom_temp = acu_temp + 14
    basic.showString("prom_temp")
    basic.showNumber(prom_temp)
    basic.pause(500)
    basic.showString("Temp_max")
    basic.showNumber(Temp_max)
    basic.pause(500)
    basic.showString("temp_min")
    basic.showNumber(prom_min)
    basic.pause(500)
})
