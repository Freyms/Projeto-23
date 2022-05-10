
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	plane = Bodies.rectangle(100,400,400,20,plane_options);
	World.add(world,plane);
    var plane_options ={
	 isStatic:true
	}
    block1 = Bodies.rectangle(100,300,100,20);
	World.add(world,block1);
	block2 = Bodies.rectangle(100,300,100,20);
	World.add(world,block2);
	Engine.run(engine);
	var rotator_options ={
	 isStatic:true
	}
	rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator1);
	rotator2 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator2);
	rotator3 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator3);
	var particle_options ={
	restitution:0.4,
	friction:0.2
	}
	particle1 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle1);
	particle2 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle2);
	particle3 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle3);
	particle4 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle4);
	particle5 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle5);
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(51);
  Matter.Body.rotate(rotator1,angle1)
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=0.2
  angle1 = 60;
  Matter.Body.rotate(rotator2,angle2)
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=0.4
  angle2 = 60;
  Matter.Body.rotate(rotator3,angle3)
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=0.6
  angle3 = 60;
  ellipse(particle1.position.x,particle1.position.y,20);
  ellipse(particle2.position.x,particle2.position.y,20);
  ellipse(particle3.position.x,particle3.position.y,20);
  ellipse(particle4.position.x,particle4.position.y,20);
  ellipse(particle5.position.x,particle5.position.y,20);
  ellipse(rotator1.position.x,rotator1.position.y,20);
  ellipse(rotator2.position.x,rotator2.position.y,20);
  ellipse(rotator3.position.x,rotator3.position.y,20);
  ellipse(block1.position.x,block1.position.y,20);
  ellipse(block2.position.x,block1.position.y,20);
  drawSprites();
}



