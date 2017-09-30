/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/wyjRVmAf
 *
 * This source requires Phaser 2.6.2
 */

var phaser_Width = 1000
var phaser_Height = 600;


// var game = new Phaser.Game(144, 100, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

var game = new Phaser.Game(phaser_Width, phaser_Height, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });



function preload()
{

    game.load.baseURL = 'http://examples.phaser.io/assets/';
    game.load.crossOrigin = 'anonymous';

    game.load.image('phaser', 'sprites/phaser-dude.png');

}


var cursors;
var position;


var terrain_De_Base;
var position_terrain_J1;
var position_terrain_J2;
var longueur_Du_Monde;

var angle_J1 = 0;
var angle_J2 = 0;


function create()
{

    longueur_Du_Monde = 1000;
    var img_Par_Seconde = 60;
    var seconde_Min_Finir_le_jeu = 15;

    var vitesse_De_Base = longueur_Du_Monde / (img_Par_Seconde * seconde_Min_Finir_le_jeu);


    terrain_De_Base =
    [
        50, 100, 150, 50, 300, 50, 150, 50, 50, 50
    ];



    cursors = game.input.keyboard.createCursorKeys();

    position = 100;




    position_terrain_J1 = 0;
    position_terrain_J2 = 0;





}

function update()
{



    /// tout efacer 
    game.world.removeAll()


    /// Font blanc

    var graphics = game.add.graphics(0, 0);




    graphics.beginFill(0xFFFFFF, 1);
    graphics.lineStyle(0, 0xFFFFFF, 1);

    //// draw a rectangle
    graphics.drawRect(0, 0, phaser_Width, phaser_Height);

    graphics.endFill();







    var phaser = game.add.sprite(0, 50, 'phaser');



    /// avance doucement tout seul
     position += 1;

    // droite
    if (cursors.right.isDown)
    {
        position += 5;
        position_terrain_J1 += 5;
    }

    // gauche
    if (cursors.left.isDown)
    {
        position -= 5;
        position_terrain_J2 -= 5;

    }





    if (position < 100)
    {
        position += 100;
    }


    if (position > 900)
    {
        position -= 100;
    }






    // actualise la possition x
    phaser.x = position;

    /// fait tourner
    //  angle_J1 += 1;
    //  phaser.angle = angle_J1;




    // var x1 = ((r * Math.cos(position + degre * (1.0 / nombredebouton)) - xoffset) * ecartement ) ;

    // var y1 = ((r * Math.sin(position + degre * (1.0 / nombredebouton))) / aplatisement ) ;










    var position_terrain = -1;




    position_terrain_J1 += 1;
    position_terrain_J2 -= 1;




    /*


    var graphics = game.add.graphics(0, 0);




    var position_terrain = position_terrain_J1;


    graphics.beginFill(0x800080, 0.5);

    for (var i = 0; i < terrain_De_Base.length; i++)
    {

        position_terrain = position_terrain % longueur_Du_Monde;

        if ((i % 2) == 0)
        {

            var x_01 = (position_terrain * phaser_Width) / longueur_Du_Monde;

            position_terrain += terrain_De_Base[i];

            var x_02 = (position_terrain * phaser_Width) / longueur_Du_Monde;

            var longeur_Rectangle = x_02 - x_01;

            //// draw a rectangle
            graphics.drawRect(x_01, 120, longeur_Rectangle, 50);

            console.log(position_terrain);

        }
        else
        {
            position_terrain += terrain_De_Base[i];

            console.log(position_terrain);
        }

    }

    graphics.endFill();







    var graphics = game.add.graphics(0, 0);




    position_terrain = position_terrain_J2;


    graphics.beginFill(0x000000, 0.5);

    for (var i = terrain_De_Base.length -1; i > 0; i--)
    {

        position_terrain = position_terrain % longueur_Du_Monde;

        if ((i % 2) == 0)
        {

            var x_01 = (position_terrain * phaser_Width) / longueur_Du_Monde;

            position_terrain += terrain_De_Base[i];

            var x_02 = (position_terrain * phaser_Width) / longueur_Du_Monde;

            var longeur_Rectangle = x_02 - x_01;

            //// draw a rectangle
            graphics.drawRect(x_01, 120, longeur_Rectangle, 50);

            console.log(position_terrain);

        }
        else
        {
            position_terrain += terrain_De_Base[i];

            console.log(position_terrain);
        }

    }

    graphics.endFill();


*/



    position_terrain = position_terrain_J1;




    //  And this draws a filled arc
    graphics.beginFill(0x800080, 0.5);



    for (var i = 0; i < terrain_De_Base.length; i++)
    {

        position_terrain = position_terrain % longueur_Du_Monde;


        if ((i % 2) == 0)
        {

            var x_01 = (position_terrain * 360) / longueur_Du_Monde;

            position_terrain += terrain_De_Base[i];

            var x_02 = (position_terrain * 360) / longueur_Du_Monde;

            var longeur_Rectangle = x_02 - x_01;

            //  Note the 'true' at the end, this tells it to draw anticlockwise
            graphics.arc(200, 350, 135, game.math.degToRad(x_02), game.math.degToRad(x_01), true);


            console.log(position_terrain);

        }
        else
        {
            position_terrain += terrain_De_Base[i];

            console.log(position_terrain);
        }

    }

    graphics.endFill();



    position_terrain = position_terrain_J2;




    //  This will reset the lineStyle
    graphics.lineStyle(0);

    //  And this draws a filled arc
    graphics.beginFill(0x000000, 0.5);



    for (var i = 0; i < terrain_De_Base.length; i++)
    {

        position_terrain = position_terrain % longueur_Du_Monde;


        if ((i % 2) == 0)
        {

            var x_01 = (position_terrain * 360) / longueur_Du_Monde;

            position_terrain += terrain_De_Base[i];

            var x_02 = (position_terrain * 360) / longueur_Du_Monde;

            var longeur_Rectangle = x_02 - x_01;

            //  Note the 'true' at the end, this tells it to draw anticlockwise
            graphics.arc(200, 350, 135, game.math.degToRad(x_02), game.math.degToRad(x_01), true);


            console.log(position_terrain);

        }
        else
        {
            position_terrain += terrain_De_Base[i];

            console.log(position_terrain);
        }

    }

    graphics.endFill();



/*


    var x_01 = -100;
    var x_02 = 100;
    var longeur_Rectangle = x_02 - x_01;


    graphics.beginFill(0x80FF80, 1);
    graphics.lineStyle(2, 0x80FF80, 1);

    //// draw a rectangle
    graphics.drawRect(x_01, 500, longeur_Rectangle, 50);

    graphics.endFill();


*/





    window.graphics = graphics;
    var graphics = game.add.graphics(game.world.centerX, game.world.centerY);




}

function render()
{

}
