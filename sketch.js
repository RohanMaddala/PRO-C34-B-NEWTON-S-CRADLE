
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(width/2,30,width/2,30);

	ball1 = new Ball(width/2,500);
	ball2 = new Ball(width/2+150,500)
	ball3 = new Ball(width/2-150,500);
	ball4 = new Ball(width/2+300,500)
	ball5 = new Ball(width/2-300,500);

	/*rope1 = new Rope(ball1.body,roof.body,width/2,0)
	rope2 = new Rope(ball2.body,roof.body,width/2+150,0);
	rope3 = new Rope(ball3.body,roof.body,width/2-150,0);
	rope4 = new Rope(ball4.body,roof.body,width/2+300,0);
	rope5 = new Rope(ball5.body,roof.body,width/2-300,0);*/

	//{x:400,y:20}

	rope1 = new Rope(ball1.body,{x:width/2,y:20})
	rope2 = new Rope(ball2.body,{x:width/2+130,y:20});
	rope3 = new Rope(ball3.body,{x:width/2-130,y:20});
	rope4 = new Rope(ball4.body,{x:width/2+280,y:20});
	rope5 = new Rope(ball5.body,{x:width/2-280,y:20});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  roof.display();
  

  ball1.display()
  ball2.display();
  ball3.display()
  ball4.display();
  ball5.display()
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

/*function keyPressed(){
	if (keyCode === LEFT_ARROW) {
		Matter.Body.applyForce(ball5.body,ball5.postion,{x:-500,y:-400});
	}
}*/

function mouseDragged(){
    Matter.Body.setPosition(ball5.body, {x: mouseX , y: mouseY})
}