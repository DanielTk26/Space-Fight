var player, player_pic;

var block, block2;

var comp, comp_pic;

var wall1, wall1_pic;//rect

var wall2, wall2_pic;//straight

var wall3, wall3_pic;//rect

var wall4, wall4_pic;//straight

var bullet, bullet2;



function preload () {


player_pic = loadImage("Images/player.png");

comp_pic = loadImage("Images/enemy.png");

wall1_pic = loadImage("Images/rect.png");

wall2_pic = loadImage("Images/straight.png");

wall4_pic = loadImage("Images/straight.png");

wall3_pic = loadImage("Images/rect.png");


}


function setup () {
 createCanvas(displayWidth,500);

  bullet = createSprite(200,410,13,30);
  bullet.shapeColor = "red"; 

  bullet2 = createSprite(200,410,13,30);
  

  block = createSprite(displayWidth/2, 505, displayWidth, 20);
  block.shapeColor = "blue";

  player = createSprite(displayWidth/2, 460); 
  player.addImage(player_pic);

  comp = createSprite(displayWidth/2, 40);
  comp.addImage(comp_pic);
 
  block2 = createSprite(displayWidth/2, -5, displayWidth, 20);
  block2.shapeColor = "blue";


}





function draw() {
  background("Blue");


   bullet.x = player.x;
   
   bullet2.x = comp.x;


 if (keyDown("Space")) {    
    
    bullet.velocityY = -13;
    

 }

 

  if (bullet.y < 0) {

    bullet.y = player.y - 50;
    bullet.velocityY = 0;
    bullet.y = player.y - 50;

  }


  if (keyDown(UP_ARROW)) {

   player.velocityY = -7;
   player.velocityX = 0;
   
   bullet.velocityY = -7;

  }


  if (keyDown(DOWN_ARROW)) {    
    
    player.velocityX = 0;
    player.velocityY = 7;
    bullet.velocityY = 7;

 
   }
 
   if (keyDown(LEFT_ARROW)) {

    player.velocityX = -7;
    player.velocityY = 0; 
 
    bullet.velocityX = -7;

   }
 
 
   if (keyDown(RIGHT_ARROW)) {

    player.velocityX = 7;
    player.velocityY = 0; 

    bullet.velocityX = 7;

   }
 
 
    if (player.x > displayWidth) {

      player.x = 0;

    }
    

    if (player.x < 0) {

      player.x = displayWidth;

    }


    if (bullet.x > displayWidth) {

      bullet.x = player.x;

    }
    
      bullet.x = player.x;

    if (bullet.x < 0) {


    }








   player.collide(block);
   player.collide(block2);


  createEdgeSprites();

  drawSprites();

}




