
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground, d1, d2, d3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground (400,680,800,20)
	d1 = new Dustbin (650,660,200,20)
	d2 = new Dustbin (540,620,20,100)
	d3 = new Dustbin (740,620,20,100)
	paper = new Paper (150,620,30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display()
  d1.display()
  d2.display()
  d3.display()
  paper.display()

 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{ x : 100, y : -100 })
	}
}


