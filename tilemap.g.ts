// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000010505050808080808050808080508060808080408040404040408040808080708040804080408080808080404080407020408080804080408040404080804070204080404040804080808040408080708080808040408040804080404080407080404080404080404040808080804070808040808080808080408040804040702040408040408040804080408080407020404080404040408040804040804070a08080808080804080408080408080702040804080408040804040804040807020408040404080408040408040408070804080808080808080408080404080b0804040404040804080408040408080708080808080808030803080303080309`, img`
2 2 2 2 . . . . . 2 . . . 2 . 2 
. . . 2 . 2 2 2 2 2 . 2 . . . 2 
. 2 . 2 . 2 . . . . . 2 2 . 2 2 
2 2 . . . 2 . 2 . 2 2 2 . . 2 2 
2 2 . 2 2 2 . 2 . . . 2 2 . . 2 
. . . . 2 2 . 2 . 2 . 2 2 . 2 2 
. 2 2 . 2 2 . 2 2 2 . . . . 2 2 
. . 2 . . . . . . 2 . 2 . 2 2 2 
2 2 2 . 2 2 . 2 . 2 . 2 . . 2 2 
2 2 2 . 2 2 2 2 . 2 . 2 2 . 2 2 
. . . . . . . 2 . 2 . . 2 . . 2 
2 2 . 2 . 2 . 2 . 2 2 . 2 2 . 2 
2 2 . 2 2 2 . 2 . 2 2 . 2 2 . 2 
. 2 . . . . . . . 2 . . 2 2 . . 
. 2 2 2 2 2 . 2 . 2 . 2 2 . . 2 
. . . . . . . 2 . 2 . 2 2 . 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tileGrass1,sprites.castle.tilePath9,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile":
            case "tile1":return tile1;
            case "tile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
