/**
 * 电位计 数值 范围
 * 
 * 0 - 1023
 * 
 * 接收端，需要的范围
 * 
 * 0-255
 */
input.onButtonPressed(Button.A, function () {
    radio.sendValue("light", pins.map(
    light2,
    0,
    1023,
    0,
    255
    ))
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("volume", pins.map(
    volume,
    0,
    1023,
    0,
    255
    ))
})
let volume = 0
let light2 = 0
radio.setGroup(111)
basic.forever(function () {
    light2 = pins.analogReadPin(AnalogPin.P8)
    volume = pins.analogReadPin(AnalogPin.P8)
})
