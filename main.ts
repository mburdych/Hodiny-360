input.onButtonPressed(Button.A, function () {
    Rychlost += 1
    SuperBit.MotorRun(SuperBit.enMotors.M1, Rychlost)
})
input.onButtonPressed(Button.B, function () {
    Rychlost += -1
    SuperBit.MotorRun(SuperBit.enMotors.M1, Rychlost)
})
let Rychlost = 0
Rychlost = 0
basic.forever(function () {
    basic.showNumber(Rychlost)
})
