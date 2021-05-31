   var fish, fI, shark, shA;
   var bg1, bg2, bg3, bg4;
   var ob1, ob2, ob3, ob4, ob5, ob6;
   var ob7, ob8, ob9, ob10, ob11, ob12;
   var chest, chI, heart, hI, ray, rI, coin, cI;
   var shield, shI, tI, tryAgain, sI;
   var INV1, INV2, INV3, INV4;
   var obstaclesGroup, heartGroup, chestGroup, shieldGroup;
   var scene1, scene2, scene3, scene4, scene5, scene6, scene7, scene8;
   var coins = 0;
   var life = 3;
   var startGame;
   var storySound, extraLife, lossHeart, obstacleHit, fail, laser;
   var sound, music, player;

   var STORY = 0;
   var START = 1;
   var PLAY = 2;
   var END = 3;
   
   var gameState = STORY;

   var vibrate = true;

   var scrollSpeed = 10;
   var scrollSpeed2 = 10;
   var scrollSpeed3 = 2.5;
   var scrollSpeed4 = 0;

   var x1 = 0;
   var x2;

   var x3 = 0;
   var x4;

   var x5 = 0;
   var x6;

   var x7 = 0;
   var x8;

   var x9 = 0;
   var x10 = 0;
   var x11 = 0;
   var x12 = 0;
   var x13 = 0;
   var x14 = 0;
   var x15 = 0;
   var x16 = 0;
  

 function preload(){
     bg1 = loadImage("background/background1.png");
     bg2 = loadImage("background/background2.png");
     bg3 = loadImage("background/background3.png");
     bg4 = loadImage("background/background4.png");

     fI = loadAnimation("fish/fish1.png", "fish/fish2.png", "fish/fish3.png", "fish/fish4.png",
                       "fish/fish7.png", "fish/fish8.png", "fish/fish9.png", "fish/fish10.png");

     shA = loadAnimation("shark/shark1.png", "shark/shark2.png", "shark/shark3.png",
                         "shark/shark4.png", "shark/shark5.png", "shark/shark6.png",
                         "shark/shark7.png", "shark/shark8.png");

     ob1 = loadImage("obstacles/Anchor.png");
     ob2 = loadImage("obstacles/Barrel_1.png");
     ob3 = loadImage("obstacles/plastic bag.png");
     ob4 = loadImage("obstacles/bottle.png");
     ob5 = loadImage("obstacles/Stone_4.png");
     ob6 = loadImage("obstacles/Net.png");

     ob7 = loadImage("obstacles/Barrel_2.png");
     ob8 = loadImage("obstacles/Mast.png");
     ob9 = loadImage("obstacles/Seaweed_1.png");
     ob10 = loadImage("obstacles/Steering-wheel.png");
     ob11 = loadImage("obstacles/Stone_1.png");
     ob12 = loadImage("obstacles/Stone_5.png");

     chI = loadImage("chest.png");
     hI = loadImage("Heart.png");
     shI = loadImage("Shield.png");
     rI = loadImage("shieldFish.png")
     cI = loadImage("Coin.png");

     tI = loadImage("tryAgain.jpg");
     sI = loadImage("start.png");

     scene1 = loadImage("Scenes/scene 1.png");
     scene2 = loadImage("Scenes/scene 2.png");
     scene3 = loadImage("Scenes/scene 3.png");
     scene4 = loadImage("Scenes/scene 4.png");
     scene5 = loadImage("Scenes/scene 5.png");
     scene6 = loadImage("Scenes/scene 7.png");
     scene7 = loadImage("Scenes/scene 6.png");
     scene8 = loadImage("Scenes/scene 8.png");

     extraLife = loadSound("Sound/gaininglife.wav");
     fail = loadSound("Sound/fail.wav");
     obstacleHit = loadSound("Sound/obstacle-hit.mp3");
     laser = loadSound("Sound/laser.wav");
}


 function setup(){
     createCanvas(windowWidth, windowHeight);

     fish = createSprite(425, height - 75, 20, 20);
     fish.addAnimation("swim", fI);
     fish.scale = 0.2;

     shark = createSprite(175, height - 100, 20, 20);
     shark.addAnimation("eat", shA);
     shark.scale = 0.4;

     INV1 = createSprite(100, height - 15, 500, 10);
     INV1.visible = false;   
     
     INV2 = createSprite(500, height - 25, 100, 10);
     INV2.visible = false;

     INV3 = createSprite(100, -5, 500, 10);
     INV3.visible = false;

     INV4 = createSprite(500, 25, 100, 10);
     INV4.visible = false;

     tryAgain = createSprite(windowWidth/2, windowHeight/2, 20, 20);
     tryAgain.addImage(tI);
     tryAgain.visible = false;

     ray = createSprite(width + 250, height, 20, 20);
     ray.addImage(rI);
     ray.scale = 0.25;
     ray.setCollider("rectangle", 0, 0, 150, 450);

     startGame = createSprite(width/2, height/2 + 100, 20, 20);
     startGame.addImage(sI);
     startGame.scale = 0.35;
     startGame.visible = false;

     obstaclesGroup = new Group();
     heartGroup = new Group();
     chestGroup = new Group();
     shieldGroup = new Group();

     x2 = width;
     x4 = width;
     x6 = width;
     x8 = width;

     x9 = height/2;
     x10 = height;
     x11 = height;
     x12 = height;
     x13 = height;
     x14 = height;
     x15 = height;
     x16 = height/2;

 }


 function draw(){
     
    background("black");

  if(gameState === STORY){

     image(scene1, 0, x9, width, height);
     image(scene2, 0, x10, width, height);
     image(scene3, 0, x11, width, height);
     image(scene4, 0, x12, width, height);
     image(scene5, 0, x13, width, height);
     image(scene6, 0, x14, width, height);
     image(scene7, 0, x15, width, height);

     textSize(30);
     fill("white")
     text("Press Space to Skip Intro", width-500,height-50);
     
     x9 -= scrollSpeed3;
     x10 -= scrollSpeed3;
     x11 -= scrollSpeed3;
     x12 -= scrollSpeed3;
     x13 -= scrollSpeed3;
     x14 -= scrollSpeed3;
     x15 -= scrollSpeed3;

  if (x9 >= -height/2  + 200){    
     x10 = height;           
}
  if(x10 >= -height/2 + 200){
     x11 = height;
}
  if (x11 >= -height/2 + 200){    
     x12 = height;           
}
  if (x12 >= -height/2 + 200){    
     x13 = height;           
}
  if(x13 >= -height/2 + 200){
     x14 = height;
}   
  if(x14 >= -height/2 + 200){      
     x15 = height;      
} 

  if(frameCount >= 1900 || mousePressed()){
     gameState = START;
}

if(keyDown("space")){
     gameState = START;
}
}

  if(gameState === START){
     
     image(scene8, 0, 0, width, height);

     startGame.visible = true;

  if(mousePressedOver(startGame)){
     gameState = PLAY;
}
     drawSprites();
}

  if(gameState === PLAY){
     startGame.visible = false;

     if(frameCount>2000 && frameCount%500 === 0){
          if(vibrate === true){
          translate(random(-6,6), random(-6,6));
        }
     }

  if(keyCode === 38){
     fish.y = fish.y - 5;
}
  
  if(keyCode === 40){
     fish.y = fish.y + 5;
}
     shark.y = fish.y;
     ray.y = fish.y;

     elements();
     spawnObstacles();
    
  if(frameCount >= 100 && frameCount <= 2000) {
     scrollBackground1();
}

  if(frameCount >= 2000 && frameCount <= 4200){
     scrollBackground2();
}    
     
  if(frameCount > 4200 && frameCount <= 5200) {
     scrollBackground3();   
}

  if(frameCount > 5200 && frameCount <= 6200){
     scrollBackground4();
}

  if(frameCount > 6200 && frameCount <= 8200){
     scrollBackground1();
}

  if(frameCount > 8200 && frameCount <= 10200){
     scrollBackground2();
}    
    
 if(frameCount > 10200 && frameCount <= 12200){
     scrollBackground3();   
}

 if(frameCount > 12200){
     scrollBackground4();
}

  if(obstaclesGroup.isTouching(fish)){
     
     obstacleHit.play();
     
     obstaclesGroup[0].destroy();
     life = life - 1;
}

  if(heartGroup.isTouching(fish)){
     extraLife.play();
     
     heartGroup[0].destroy();
     life = life + 1;
}

  if(shieldGroup.isTouching(fish)){
     shieldGroup[0].destroy();
     ray.y = fish.y;
     ray.x = fish.x + 200;
}

  if(obstaclesGroup.isTouching(ray)){
     obstaclesGroup[0].destroy();
     obstacleHit.play();
     ray.y = 1000;
     ray.x = width + 250;
}

  if(chestGroup.isTouching(fish)){
     coins = coins + 50;
     chestGroup[0].destroy();
}

  if(life === 0){
    // obstaclesGroup[0].destroy();
     fail.play();
     gameState = END;
}
     drawSprites();

     fill("gold");
     textFont("magneto");
     textSize(30);
     text(": " + coins, width - 100, 50);
     image(cI, width - 165, 10, 60, 60);

     fill("red");
     textSize(30);
     text("Lives: " + life, width - 200, 100);
}
        

  if(gameState === END){

     storySound.stop();
     obstaclesGroup.setVelocityXEach(0);
     heartGroup.setVelocityXEach(0);
     shieldGroup.setVelocityXEach(0);
     chestGroup.setVelocityXEach(0);

     obstaclesGroup.setLifetimeEach(-1);
     heartGroup.setLifetimeEach(-1);
     shieldGroup.setLifetimeEach(-1);
     chestGroup.setlifetimeEach(-1);

  if(frameCount <= 1000){
     scrollSpeed = 0;
     x1 = 0;
     x2 = 0;
     scrollBackground1();
}

  if(frameCount >= 1000 && frameCount <= 2000){
     scrollSpeed2 = 0;
     x3 = 0;
     x4 = 0;
     scrollBackground2();
}

  if(frameCount >= 2000 && frameCount <= 3000){
     scrollSpeed2 = 0;
     x5 = 0;
     x6 = 0;
     scrollBackground3();
}

  if(frameCount >= 3000 && frameCount <= 4000){
     scrollSpeed2 = 0;
     x7 = 0;
     x8 = 0;
     scrollBackground4();
}
     drawSprites();

     textSize(30);
     fill("white")
     text("Game End", width/2,height/2);

     tryAgain.visible = true;

     fill("yellow");
     textFont("magneto");
     textSize(30);
     text("Coins: " + coins, width - 200, 50);
     
     textSize(30);
     text("Lives: " + life, width - 200, 100);

  if(mousePressedOver(tryAgain)){
     reset();
}
}

     shark.collide(INV1);
     shark.collide(INV3);
     fish.collide(INV2);
     fish.collide(INV4);
}


 function scrollBackground1(){
  
     image(bg1, x1, 0, width, height);
     image(bg1, x2, 0, width, height);

     x1 -= scrollSpeed;
     x2 -= scrollSpeed;
  

  if (x1 <= -width){    
     x1 = width;           
}

  if(x2 <= -width){
     x2 = width;
}
}


 function scrollBackground2(){
 
     image(bg2, x3, 0, width, height);
     image(bg2, x4, 0, width, height);

     x3 -= scrollSpeed2;
     x4 -= scrollSpeed2;
 
  if (x3 <= -width){    
     x3 = width;           
}

  if(x4 <= -width){
     x4 = width;
}
}
 

 function scrollBackground3(){

     image(bg3, x5, 0, width, height);
     image(bg3, x6, 0, width, height);

     x5 -= scrollSpeed2;
     x6 -= scrollSpeed2;

  if (x5 <= -width){    
     x5 = width;           
}

  if(x6 <= -width){
     x6 = width;
}
}
 

function scrollBackground4(){

     image(bg4, x7, 0, width, height);
     image(bg4, x8, 0, width, height);

     x7 -= scrollSpeed2;
     x8 -= scrollSpeed2;

  if (x7 <= -width){    
     x7 = width;           
}

  if(x8 <= -width){
     x8 = width;
}
}


 function spawnObstacles(){
  if(frameCount % 160 === 0){
   var obstacle1 = createSprite(windowWidth, 50, 20, 20);
     obstacle1.velocityX = -10;

   var rand = Math.round(random(1, 12));

    switch(rand){
     case 1: obstacle1.addImage(ob1);
             obstacle1.scale = 0.5;
             obstacle1.y = 60;
             break;

     case 2: obstacle1.addImage(ob2);
             obstacle1.scale = 0.4;
             obstacle1.y = 100;
             break;

     case 3: obstacle1.addImage(ob3);
             obstacle1.scale = 0.2;
             obstacle1.y = 50;
             obstacle1.velocityX = -20;
             break;

     case 4: obstacle1.addImage(ob4);
             obstacle1.scale = 0.3;
             obstacle1.y = 50;
             obstacle1.velocityX = -20;
             break;

     case 5: obstacle1.addImage(ob5);
             obstacle1.scale = 1;
             obstacle1.y = 100;
             break;

     case 6: obstacle1.addImage(ob6);
             obstacle1.scale = 0.5;
             obstacle1.y = 50;
             break;

     case 7: obstacle1.addImage(ob7);
             obstacle1.scale = 0.5;
             obstacle1.y = 500;
             break;

     case 8: obstacle1.addImage(ob8);
             obstacle1.scale = 0.6;
             obstacle1.y = 400;
             break;

     case 9: obstacle1.addImage(ob9);
             obstacle1.scale = 0.75;
             obstacle1.y = 500;
             break;

     case 10: obstacle1.addImage(ob10);
              obstacle1.scale = 0.75;
              obstacle1.y = 500;
              break;

     case 11: obstacle1.addImage(ob11);
              obstacle1.scale = 0.75;
              obstacle1.y = 450;
              break;

     case 12: obstacle1.addImage(ob12);
              obstacle1.scale = 1;
              obstacle1.y = 450;
              break;
     default: break;
}
     obstacle1.setCollider("rectangle", 0, 0, 100, 300);
     obstacle1.debug = true;
     obstacle1.lifetime = 700;
     obstaclesGroup.add(obstacle1);
}
}


 function elements(){
   if(frameCount % 400 === 0){
     chest = createSprite(windowWidth, windowHeight/2, 20, 20);
     chest.addImage(chI);
     chest.scale = 0.15;
     chest.velocityX = -10;
     chest.lifetime = 600;
     chest.setCollider("rectangle", 0, 0, chest.width, chest.height);
     chestGroup.add(chest);
}
 
  if(frameCount % 900 === 0){
     shield = createSprite(windowWidth, windowHeight/2, 20, 20);
     shield.addImage(shI);
     shield.scale = 0.5;
     shield.velocityX = -15;
     shield.lifetime = 600;
     shieldGroup.add(shield);
}
 
  if(frameCount % 1200 === 0){
     heart = createSprite(windowWidth, windowHeight/2, 20, 20);
     heart.addImage(hI);
     heart.scale = 0.5;
     heart.velocityX = -20;
     heart.lifetime = 60;
     heartGroup.add(heart);
}
}


 function reset(){
     gameState = PLAY;

     tryAgain.visible = false;

     obstaclesGroup.destroyEach();
     heartGroup.destroyEach();
     shieldGroup.destroyEach();
     chestGroup.destroyEach();

     coins = 0;
     life = 3;
}


 function mousePressed(){
  if(mousePressedOver(random(windowWidth, windowHeight))){
 
}
 }