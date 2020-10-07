input.onButtonPressed(Button.A, function () {
    Dot.change(LedSpriteProperty.X, 0.1)
})
input.onButtonPressed(Button.B, function () {
    Dot.change(LedSpriteProperty.X, -0.1)
})
let Dot: game.LedSprite = null
Dot = game.createSprite(2, 2)
basic.forever(function () {
    if (Dot.isTouchingEdge()) {
        basic.showString("You win!")
    }
})
