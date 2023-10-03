let ground;
let lander;
var lander_img;
var bg_img;
var invisibleGround;

var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.40;

  invisibleGround = createSprite(200,690,2000,10);
  invisibleGround.visible = false;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(bg_img);
  //image(bg_img,0,0);
  push()
  fill(255);
  //text("Velocidade Vertical: "+round(vy),800,75);
  pop();
  
  if(keyDown("UP_ARROW")){
    lander.y = lander.y-10
  }
  if(keyDown("DOWN_ARROW")){
   lander.y = lander.y+10
  }
  if(keyDown("RIGHT_ARROW")){
    lander.x = lander.x+10
  }
  if(keyDown("LEFT_ARROW")){
   lander.x = lander.x-10
  }

  lander.collide(invisibleGround);

  //descida
  //vy +=g;
  //lander.position.y+=vy;
  drawSprites();
}

//if(lander.collide(invisibleGround)){
  //lander.velocityX=0;
  //lander.velocityY=0;
//}


