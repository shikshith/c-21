var fixedRect, movingRect;
var object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
//pass the actual values between which you need to check bounce off
// definition of bounceOff in the library file named as myOwnLibrary.js
//always link your library to your program by including it in index.html
   bounceOff (fixedRect, movingRect);
  drawSprites();
}

