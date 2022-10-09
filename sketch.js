
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var left_side,right_side,ground;
var basket1,basket2;

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:80,y:-100})
	}
}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(260,100,20,ball_options)
	World.add(world,ball)
	keyPressed ();
	ground= new Ground (width/2,670,width,20)
	left_side=new Ground(10,350,20,650)
	right_side=new Ground(1490,350,20,650)
	basket1= new Ground(1000,600,20,115)
	basket2=new Ground (1300,600,20,115)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  ground.show ();
  left_side.show ();
  right_side.show ();
  basket1.show ();
  basket2.show ();
  drawSprites();
}



