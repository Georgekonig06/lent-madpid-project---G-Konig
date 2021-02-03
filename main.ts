scene.onOverlapTile(SpriteKind.Player, assets.tile`tile14`, function (sprite, location) {
    music.baDing.play()
    game.showLongText("level 3 complete", DialogLayout.Bottom)
    mySprite.setImage(img`
        . . . . e e e e e e e e . . . . 
        . . . . d e e d e e d e . . . . 
        . . . . d 1 8 d d 8 1 d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d f f f f d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . d d 6 6 6 6 6 6 d d . . . 
        . . . d d 6 6 6 6 6 6 d d . . . 
        . . . d d 6 6 6 6 6 6 d d . . . 
        . . . d d 8 8 8 8 8 6 d d . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 8 . . 8 8 . . . . . 
        . . . . . 8 8 . . 8 8 . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    tiles.setTilemap(tilemap`level4`)
    tiles.placeOnRandomTile(mySprite, assets.tile`tile18`)
    scene.cameraFollowSprite(mySprite)
    info.startCountdown(20)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    music.baDing.play()
    game.showLongText("level 2 complete", DialogLayout.Center)
    tiles.setTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(mySprite, assets.tile`tile13`)
    scene.cameraFollowSprite(mySprite)
    info.startCountdown(20)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile16`, function (sprite, location) {
    music.baDing.play()
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile0`, function (sprite, location) {
    music.baDing.play()
    game.showLongText("Level one complete", DialogLayout.Center)
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleRedCrystal)
    scene.cameraFollowSprite(mySprite)
    info.startCountdown(20)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
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
