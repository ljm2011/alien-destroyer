controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        .........................2......................
        ............................2...................
        ...........................2.2..................
        ...................222222222222.................
        ...................222222222222.................
        ...........................2.2..................
        ............................2...................
        .........................2......................
        ................................................
        ................................................
        ................................................
        `, mySprite, 50, 0)
})
let enemySprite: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(15)
mySprite = sprites.create(img`
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ....................fffffff.....................
    ..................ff1111111ff...................
    ................ff1111fff1111ff.................
    ...............f1111ff777ff1111f................
    ..............f1111f7777777f1111f...............
    ..............f111f777777777f111f...............
    .............f1111f7ff777ff7f1111f..............
    .............f1111f7fff7fff7f1111f..............
    ............f111111f7ff7ff7f111111f.............
    ............f11ff11f7777777f11ff11f.............
    ............f1f77f11f77f77f11f77f1f.............
    .........fffffffffffffffffffffffffffff..........
    ........faaaaaaaaaaaaaaaaaaaaaaaaaaaaaf.........
    .......fffffffffffffffffffffffffffffffff........
    ......f111111111111111111111111111111111f.......
    .....f22111113311111441111199111177111155f......
    .....2222111333311144441119999117777115555......
    .....2222111333311144441119999117777115555......
    .....f22111113311111441111199111177111155f......
    ......f111111111111111111111111111111111f.......
    .......ffffffffffffffffffffffffffffffffff.......
    ........faaaafaaaafaaaafaaaafaaaafaaaaaf........
    .........ffaaafaaaafaaafaaafaaaafaaaaff.........
    ...........ffaafaaafaaafaaafaaafaafff...........
    .............ffffaaafaafaafaaaffff..............
    ................fffafaafaafafff.................
    ................fffffffffffffff.................
    ................555555555555555.................
    ................fffffffffffffff.................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
game.onUpdateInterval(10000, function () {
    enemySprite = sprites.create(img`
        ................................
        ................................
        ................................
        ............ccbccccccc..........
        ............cdcbcccbcb..........
        ........ccccccccbccbcccbcc......
        .......ccdcccccccdccccdbccc.....
        .......cccccccccbcccdcccccc.....
        .......ccccccccccccbbcbbccc.....
        .....cccccccccccbccccccccccc....
        .....dccccccccccbccccccccccc....
        .....cccccccccccbbbcbbbccccc....
        .....bcdcccccccbcdcccccbccccc...
        .....cbcccccccbdccccccdcbcccc...
        ....cccbccbcbcccccccccccccdccc..
        ...cccccccccccccccccccccbccbbc..
        ...dcccdccccccbccccccccdbcbbcc..
        ...cccccbcbbccbcccccccccbcccdc..
        ...cccccccccccdcccccccccccccc...
        ....cccdcccbccbcccccccccbcccc...
        .....ccbcccdccccdcccccdbccccc...
        .......cbbcbcccccbccbcbccccc....
        ........ccccccccccccccccccc.....
        ........cccbbcbccccccccccc......
        ..........ccdcccccccbcccc.......
        ..........cbcccbccccccdc........
        ............cccbdcc.............
        ................cc..............
        ................................
        ................................
        ................................
        ................................
        `, SpriteKind.Player)
    enemySprite.setPosition(randint(0, 160), randint(0, 120))
})
