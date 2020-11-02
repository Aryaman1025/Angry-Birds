const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

function preload(){

 bgImage = loadImage("sprites/bg.png");

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,500,70,70);
    box2 = new Box(900,500,70,70);
    box3 = new Box(700,400,70,70);
    box4 = new Box(900,400,70,70);
    box5 = new Box(800,300,70,70);

    bird = new Bird(200,25);

    pig1 = new Pig(800,500);
    pig2 = new Pig(800,400);

    log1 = new Log(800,475,265,PI/2);
    log2 = new Log(800,375,265,PI/2);
    log3 = new Log(735,275,137.5,PI/2);
    log4 = new Log(875,275,137.5,PI/2);

    

}

function draw(){
    background(bgImage);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display(); 
    
    pig1.display();
    pig2.display();

    bird.display();
}