var canvas;
var music;
var b1,b2,b3,b4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    b1=createSprite(0,580,360,30);
    b1.shapeColor='pink';
    b2=createSprite(295,580,200,30);
    b2.shapeColor='green';
    b3=createSprite(515,580,200,30);
    b3.shapeColor='blue';
    b4=createSprite(714,580,220,30);
    b4.shapeColor='yellow';

    //create box sprite and give velocity
    ball=createSprite(random(20,750),100,40,40);
    ball.shapeColor='white';
    ball.velocityX=4;
    ball.velocityY=9;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSp0rite
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(b1.isTouching(ball)){
        ball.shapeColor='pink';
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
    }


    if(b2.isTouching(ball)&& ball.bounceOff(b2)){
        ball.shapeColor='green';
    }

    if(b3.isTouching(ball)&& ball.bounceOff(b3)){
        ball.shapeColor='blue';
        music.play();
    }

    if(b4.isTouching(ball)&& ball.bounceOff(b4)){
        ball.shapeColor='yellow';
    }
    drawSprites();
    //add condition to check if box touching surface and make it box
}
