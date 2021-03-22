var canvas=new fabric.Canvas('myCanvas');

block_width = 30 ; 
block_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";
var block_object = "" ; 

function player_update()
{
    fabric.Image.fromURL("player.png" , function(Img)
    {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    }) ;
}
function object_update(get_object_image)
{
    fabric.Image.fromURL(get_object_image , function(Img)
    {
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    }) ;
}


window.addEventListener("keydown",myKeydown);

function myKeydown(e)
 {
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey==true && keyPressed=='80'){
        console.log("Shift+P is pressed");
        block_height=block_height+10;
        block_width=block_width+10;
        document.getElementById("current_Width").innerHTML=block_width;
        document.getElementById("current_Height").innerHTML=block_height;
    }
    if(e.shiftKey==true && keyPressed=='77'){
        console.log("Shift+M is pressed");
        block_height=block_height-10;
        block_width=block_width-10;
        document.getElementById("current_Width").innerHTML=block_width;
        document.getElementById("current_Height").innerHTML=block_height;
    }    
   
   if(keyPressed=='70'){
    object_update('ironman_face.png');
   console.log("F Face ");
   canvas.remove(player_object);
   }
   if(keyPressed=='78'){
    object_update('neck.png');
   console.log("N Neck ");
   canvas.remove(player_object);
   }
   if(keyPressed=='66'){
    object_update('spiderman_body.png');
   console.log("B body");
   canvas.remove(player_object);
   }
   if(keyPressed=='76'){
    object_update('hulk_legs.png');
   console.log("L Legs");
   canvas.remove(player_object);
   }
   if(keyPressed=='72'){
   object_update('captain_america_left_hand.png');
   console.log("Left hand");
   canvas.remove(player_object);
   }
   if(keyPressed=='82'){
    object_update('hulk_right_hand.png');
   console.log("Right hand");
   canvas.remove(player_object);
   }
   if(keyPressed =='37'){
    left();
    console.log("Left key ");
   }
   if(keyPressed =='38'){
    up();
    console.log("up key ");
   }
   if(keyPressed =='39'){
    right();
    console.log("right key");
   }
   if(keyPressed =='40'){
    down();
    console.log("Down key");
    
   }
}

function up()
{
    if(player_y>=0)
    {
        player_y = player_y - block_height;
        console.log("Block height is " + block_height);
        console.log("Player x = " + player_x + " Player y = " + player_y);
        console.log("Up arrow is pressed.");
        canvas.remove(player_object);
        player_update();
    }
}
function down()
{
    if(player_y<500)
    {
        player_y = player_y + block_height;
        console.log("Block height is " + block_height);
        console.log("Player x = " + player_x + " Player y = " + player_y);
        console.log("Down arrow is pressed.");
        canvas.remove(player_object);
        player_update();
    }
}
function right()
{ 
    if(player_x<=850) {
            player_x = player_x + block_width;
            console.log("Block width = " + block_width);
            console.log("When right arrow key is pressed, x = " + player_x + "y = " +  player_y );
            canvas.remove(player_object);
            player_update();
    }
}
function left()
{ 
    if(player_x>0) {
            player_x = player_x - block_width;
            console.log("Block width = " + block_width);
            console.log("When left arrow key is pressed, x = " + player_x + "y = " +  player_y );
            canvas.remove(player_object);
            player_update();
    }
}

function view_instructions()
{
       document.getElementById("blank").innerHTML= "• Key F for face • Key R for right hand • Key H for left hand • Key L for legs • Key B for body • Key N for neck • Shift + P for increasing size • Shift + M for decreasing size • View this projct only on desktop/laptop";
       document.getElementById("myCanvas").style.display = "none"; 
       document.getElementById("view").style.display = "none"; 
       document.getElementById("blank").style.backgroundColor = "black"; 
       document.getElementById("blank").style.padding = "15px"; 
       document.getElementById("hide").style.display = "inline-block"; 
       document.getElementById("blank").style.display = "inline-block"; 


}
function hide_instructions() {
    document.getElementById("myCanvas").style.display = "inline-block"; 
    document.getElementById("blank").style.display = "none"; 
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("view").style.display = "inline-block"; 

}