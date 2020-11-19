
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  
//sprite for monkey
  monkey = createSprite(100,250,20,20); 
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;

//sprite for ground
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  

 
//groups
  FoodGroup = createGroup();
  ObstacleGroup = createGroup();
  
  score=0;
}


function draw() {
//background
  background(220);
  
  
//making the monkey jump
  if(keyDown("space") && monkey.y>=200){
  monkey.velocityY=-12;
  }
  
//add gravity
  monkey.velocityY=monkey.velocityY+0.8;
  
//make moving ground
   if (ground.x < 0){
      ground.x = ground.width/2;
   }
  

  
//spawn banana
  banana();
  
//spawn obstacles
  obstacles();
  
//colliding the monkey with the ground
  monkey.collide(ground);
  
//score
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+score,500,30);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime: "+survivalTime,100,50);
  
  drawSprites();
  
function banana(){
  if(frameCount%80==0){
    var banana=createSprite(250,200,20,20);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-3;
    banana.lifetime=100;
    
    FoodGroup.add(banana);
  }
  
}
  
function obstacles(){
  if(frameCount%300==0){
   var obstacles = createSprite(800,320,10,40);
  // obstacles.x=Math.round(random(1,6));
   obstacles.addImage(obstacleImage);
   obstacles.lifetime=300;
   obstacles.velocityX=-6;
   obstacles.scale=0.15;
    
  ObstacleGroup.add(obstacles);
  }
}
}
