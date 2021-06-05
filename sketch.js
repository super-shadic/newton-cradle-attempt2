
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var roof1;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new bob(200, 400, 60);
	bob2 = new bob(300, 400, 60);
	bob3 = new bob(400, 400, 60);
	bob4 = new bob(500, 400, 60);
	bob5 = new bob(600, 400, 60);

	roof1 = new roof(400, 100, 500, 100);

	rope1 = new rope(bob1.body, roof1.body, 120, 0);
	rope2 = new rope(bob2.body, roof1.body, 120, 0);
	rope3 = new rope(bob3.body, roof1.body, 120, 0);
	rope4 = new rope(bob4.body, roof1.body, 120, 0);
	rope5 = new rope(bob5.body, roof1.body, 120, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	roof1.display();

	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();

  drawSprites();
 
}



