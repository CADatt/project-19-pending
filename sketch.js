var starimg,star;
var rocketimg,rocket;
var spaceimg,space;
var obstacle,obstacleimg;
var PLAY=1;
var END=0;
var gamestate=PLAY;

function preload(){
  starimg=loadImage("star.png")
  rocketimg=loadImage("rocket.png");
  spaceimg=loadImage("space.jpg"); 
  obstacleimg=loadImage("meteor.png"); 

}

function setup() {
    createCanvas(600,600);

    space=createSprite(300,300,100,100);
    space.addImage("space",spaceimg);
    space.velocity.y=1;

    rocket= createSprite(400,300,1,1);
    rocket.addImage("rocket",rocketimg);
    rocket.scale=0.025;
}

function draw() {
    background(200);

    if (gamestate===PLAY) {
        if (keyDown("left_arrow")) {
            rocket.x=rocket.x-3;
        }
        if (keyDown("right_arrow")) {
            rocket.x=rocket.x+3;
        }
        if (keyDown("up_arrow")) {
            rocket.y=rocket.y-3;
        }
        if (keyDown("down_arrow")) {
            rocket.y=rocket.y+3;
        }
        if(space.y > 325){
            space.y = 300;
        }
        rocket.velocityY+=0.5;
        if (keyDown("space")) {
            rocket.velocityY=-5;
        }
        spawnobstacles();
        spawnstar();
       // if (rocket.isTouching(obstacle)) {
         //   rocket.velocityY=0;
        //}

    }

    if (gamestate===END) {
        space.destroy();
        rocket.destroy();
        obstacle.destroy();
        star.destroy();
        text("GAME OVER",300,300);
    }
 drawSprites();
}

function spawnobstacles() {
    if (frameCount%100===0){
    obstacle= createSprite(Math.round(random(150,450)),150,10,10);
    obstacle.addImage("obstacle",obstacleimg);
    obstacle.scale=0.1;
    obstacle.lifetime=600;  
    obstacle.velocityY=5;  

    }
}

function spawnstar() {
    if (frameCount%200===0) {
        star = createSprite(Math.round(random(50,450)),50,10,10);
        star.addImage("star",starimg);
        star.scale=0.1;
        star.lifetime=600;
        star.velocityY=5;
    }
}