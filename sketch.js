const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionsheight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground();

  for(var k = 0; k <=width; k = k + 80){

    divisions.push(new Division(k, height-divisionsheight/2, 10, divisionsheight));

  }

  for(var j = 40; j <=width; j = j + 50){

    plinkos.push(new Plinko(j, 75));

  }

  for(var j = 15; j <=width-10; j = j + 50){

    plinkos.push(new Plinko(j, 175));

  }

  for(var j = 40; j <=width; j = j + 50){

    plinkos.push(new Plinko(j, 275));

  }

  for(var j = 15; j <=width-10; j = j + 50){

    plinkos.push(new Plinko(j, 375));

  }
  
  Engine.run(engine);

}

function draw() {
  background(0);  
  drawSprites();
  ground.display();

  if(frameCount%60===0){

    particles.push(new Particle (random(width/2-10, width/2+10), 10, 10));

  }

  for(var k = 0; k < divisions.length; k++){

    divisions[k].display();

  }

  for(var j = 0; j < plinkos.length; j++){

    plinkos[j].display();

  }

  for(var s = 0; s < particles.length; s++){

    particles[s].display();

  }

}