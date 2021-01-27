scene.onOverlapTile(SpriteKind.Player, assets.tile`tile0`, function (sprite, location) {
    game.over(false)
})
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 8 8 f f f . . . . 
    . . . f f f 8 8 8 8 f f f . . . 
    . . f f f 6 6 6 6 6 6 f f f . . 
    . . f f 6 8 8 8 8 8 8 6 6 f . . 
    . . f 6 8 f f f f f f 8 6 f . . 
    . . f f f f 6 6 6 6 f f f f . . 
    . f f 6 f b f 4 4 f b f 6 f f . 
    . f 6 6 4 1 f d d f 1 4 6 6 f . 
    . . f 6 6 d d d d d d 6 6 f . . 
    . . . f 6 6 4 4 4 4 6 6 f . . . 
    . . 6 4 f 8 8 8 8 8 8 f 4 6 . . 
    . . 4 d f 8 8 8 8 8 8 f d 4 . . 
    . . 4 4 f 8 8 8 8 8 8 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`tile`)
scene.cameraFollowSprite(mySprite)
info.startCountdown(20)
