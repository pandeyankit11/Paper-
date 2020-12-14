
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3;
var ground,paperObject,dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	 

	 paperObject =new Paper(240,600,70);
	 ground =new Ground(0,650,5050,20);
	 dustbin3 =new Dustbin(1392,530,20,212);
	 dustbin2 =new Dustbin(1198,530,20,212);
	 dustbin1 =new Dustbin(1296,627,192,25);
	 
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(50);
  
  paperObject.display();
  ground.display();
  dustbin3.display();
  dustbin2.display();
  dustbin1.display();
  
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}

