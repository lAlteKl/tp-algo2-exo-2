input.onButtonPressed(Button.A, function () {
    led.unplot(Colonne, Ligne)
    Direction_X = -1
    Colonne += Direction_X
    if (Colonne <= -1) {
        Colonne = 4
    }
    led.plot(Colonne, Ligne)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(Colonne, Ligne)
    Direction_X = 1
    Colonne += Direction_X
    if (Colonne >= 5) {
        Colonne = 0
    }
    led.plot(Colonne, Ligne)
})
let Direction_X = 0
let Direction_y = 0
let Ligne = 0
let Colonne = 0
Colonne = 0
Ligne = 0
Direction_y += 1
led.plot(Colonne, Ligne)
basic.forever(function () {
    basic.pause(100)
    led.unplot(Colonne, Ligne)
    Ligne += Direction_y
    led.plot(Colonne, Ligne)
    if (Ligne == 4) {
        Direction_y = -1
    }
    if (Ligne == 0) {
        Direction_y = 1
    }
})
