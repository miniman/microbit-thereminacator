radio.onReceivedNumber(function (receivedNumber) {
    radio.setGroup(1)
    led.plotBarGraph(
    Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength)) - 42,
    128
    )
    music.playTone(Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength)) - 42, music.beat(BeatFraction.Sixteenth))
})
basic.forever(function () {
    radio.setGroup(1)
    radio.sendNumber(0)
    radio.setTransmitPower(3)
})

