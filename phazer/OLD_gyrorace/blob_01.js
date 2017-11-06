
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

function preload()
{

    //  37x45 is the size of each frame

    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load

    game.load.spritesheet('blob_01_walk_01', 'sprites/blob_01_walk.png', 47, 64, 5);
    game.load.spritesheet('blob_01_wait_01', 'sprites/blob_01_wait.png', 47, 64, 12);
    game.load.spritesheet('blob_01_wait', 'sprites/blob_01_wait_47_64_10.png', 47, 64, 10);
    game.load.spritesheet('blob_01_walk', 'sprites/blob_01_walk_47_64_5.png', 47, 64, 5);
    game.load.spritesheet('blob_02_wait', 'sprites/blob_02_wait_47_64_10.png', 47, 64, 10);
    game.load.spritesheet('blob_02_walk', 'sprites/blob_02_walk_47_64_5_gauche.png', 47, 64, 5);

}

function create()
{

    var blob_01_wait_01 = game.add.sprite(100, 100, 'blob_01_wait_01');

    //  Here we add a new animation called 'walk'
    //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
    var wait = blob_01_wait_01.animations.add('wait');

    //  And this starts the animation playing by using its key ("walk")
    //  30 is the frame rate (30fps)
    //  true means it will loop when it finishes
    blob_01_wait_01.animations.play('wait', 12, true);

    var blob_01_walk_01 = game.add.sprite(100, 200, 'blob_01_walk_01');

    //  Here we add a new animation called 'walk'
    //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
    var walk = blob_01_walk_01.animations.add('walk');

    //  And this starts the animation playing by using its key ("walk")
    //  30 is the frame rate (30fps)
    //  true means it will loop when it finishes
    blob_01_walk_01.animations.play('walk', 10, true);



    var blob_01_wait = game.add.sprite(200, 100, 'blob_01_wait');
    var wait = blob_01_wait.animations.add('wait');
    blob_01_wait.animations.play('wait', 12, true);

    var blob_01_walk = game.add.sprite(200, 200, 'blob_01_walk');
    var walk = blob_01_walk.animations.add('walk');
    blob_01_walk.animations.play('walk', 10, true);

    var blob_02_wait = game.add.sprite(300, 100, 'blob_02_wait');
    var wait = blob_02_wait.animations.add('wait');
    blob_02_wait.animations.play('wait', 12, true);

    var blob_02_walk = game.add.sprite(300, 200, 'blob_02_walk');
    var walk = blob_02_walk.animations.add('walk');
    blob_02_walk.animations.play('walk', 10, true);

}
