radio.onReceivedNumber(function (receivedNumber) {
    bargraph_level = 128 + radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(
    bargraph_level,
    86
    )
    playing_note = radio.receivedPacket(RadioPacketProperty.SignalStrength) + notes[current_note]
    music.ringTone(playing_note)
})
input.onButtonPressed(Button.A, function () {
    if (current_note == notes.length - 1) {
        current_note = 0
    } else {
        current_note += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (current_note == 0) {
        current_note = notes.length - 1
    } else {
        current_note = current_note - 1
    }
})
let current_note = 0
let playing_note = 0
let bargraph_level = 0
let notes: number[] = []
notes = [261, 293, 329, 349, 392, 440, 493]
basic.forever(function () {
    radio.sendNumber(1)
    radio.setTransmitPower(1)
})
