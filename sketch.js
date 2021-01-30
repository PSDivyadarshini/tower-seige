
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box;
var r;
var hexagon;
var hexagonImg;

function preload(){
hexagonImg=loadImage("sprites/polygon.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
    world = engine.world;

    box=new Box(800,200,50,60);
    hexagon= Bodies.circle(50,200,20);
    World.add(world,hexagon);
    
    r = new SlingShot(hexagon.body,{x:100,y:200});

    Engine.run(engine);
}

function draw() {
    background("green");
     image(hexagonImg,hexagon.position.x,hexagon.position.y,40,40);
    box.display();
    
    r.display();
    
}
/*function mouseDragged(){
    Matter.Body.setPosition(r.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    r.fly();
}*/