let temp = 0
function on_forever () {
    radio.setGroup(33)
}
input.onButtonPressed(Button.A, function () {
    music.playMelody("G E G A B A G E ", 176)
    music.playTone(294, music.beat(BeatFraction.Whole))
})
radio.onReceivedString(function (receivedString) {
    for (let index = 0; index < 4; index++) {
        music.playTone(932, music.beat(BeatFraction.Whole))
        basic.showString("HELP")
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("HELP")
})
input.onGesture(Gesture.Shake, function () {
    temp = input.temperature()
    basic.showNumber(temp)
})
