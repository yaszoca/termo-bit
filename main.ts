let definir_temperatura = 0
input.onButtonPressed(Button.A, function () {
    definir_temperatura = input.temperature()
    basic.showString("" + definir_temperatura + "c")
})
