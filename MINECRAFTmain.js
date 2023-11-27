var canvas = new fabric.canvas('myCanvas')

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_image_object = "";

function player_update()
{
    fabric.image.fromURL("player.png", function(Img){
        player_object = image;
        player_object.scaletowidth(150);
        player_object.scaletoheight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });
}

function new_image(get_image)
{
    fabric.image.fromURL(get_image, function(Img){
        block_image_object = img;


        block_image_object.scaletowidth(block_image_width);
        block_image_object.scaletoheight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addeventlistener("keydown", my_keydown);

function my_keydown(e)
{
    keypressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftkey == true && keyPressed == '80');
{
    console.log("p and shift pressed together");
    block_image_width = block_image-width + 10;
    block_image_height = block_image_height + 10;
    document.getelementbyid("current_width").innerhtml = block_image_width;
    document.getelementbyid("current_height").innerhtml = block_image_height;
}
if(e.shiftkey && keypressed == '77')
{
    console.log("m and shift pressed together");
    block_image_width = block_image-width - 10;
    block_image_height = block_image_height - 10;
    document.getelementbyid("current_width").innerhtml = block_image_width;
    document.getelementbyid("current_height").innerhtml = block_image_height;
}

if(keypressed == '38' )
{
    up();
    console.log("up")
}
if(keypressed == '40')
{
    down();
    console.log("down")
}
if(keypressed == '37')
{
    left();
    console.log("left")
}
if(keypressed == '39')
{
    right();
    console.log();
}
if(keypressed == '87')
{
    new_image('wall.jpg')
    console.log("w")
}
if (keyPressed == '71')
{
new_image('ground.png'); console.log("g");
}
if (keyPressed == '76')
{
new_image('light_green.png'); console.log("1");
}
if (keyPressed == '84')
{
new_image('trunk.jpg'); console.log("t");
}
if (keyPressed == '82')
{
new_image('roof.jpg'); console.log("r");
}
if (keyPressed == '89')
{
new_image('yellow_wall.png'); console.log("y");
}
if (keyPressed == '68')
{
new_image('dark_green.png'); console.log("d");
}

function up()
{
    if(player_y >=0)
    {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Up arrow key is pressed, x =" + player_x + " , y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(player_y <=500)
    {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Down arrow key is pressed, x =" + player_x + " , y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_x >0)
    {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Left arrow key is pressed, x =" + player_x + " , y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x <=850)
    {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Right arrow key is pressed, x =" + player_x + " , y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}