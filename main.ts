// Measure the sound value and send it o display on the computer screen
// Start the program and run the forever loop
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    serial.writeValue("x", input.soundLevel())
})
