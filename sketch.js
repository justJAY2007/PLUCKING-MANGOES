
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree, rock, ground, Launcherbject;
var Mango1, Mango2, Mango3;
var world, boy;
var launchingForce=100;

function preload()
{
	boy=loadImage("Plucking Mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(235,420,30);
	mango1 = new Mango(1100,100,30);
	mango2 = new Mango(1000,230,30);
	mango3 = new Mango(1120,50,40);
	tree = new Tree(1050,580);
	ground = new Ground(width/2, 600,width, 20);
	launcherObject = new Slingshot(stone.body,{x:235, y:420})
	var render = Render.create({
		element: document.body,
		engine: engine,
		options : {
			width: 1300,
			height: 600,
			wireframes: false 
		}
	})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  textSize(25);
  text("Press Space to get a second Chance to Play!!:)",50,50);
  Image(boy, 200,340,200,300);

  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  stone.display();
  ground.display()
  launcher.display();
  detectollision(stone, mango1);
  detectollision(stone, mango2);
  detectollision(stone, mango3);
  drawSprites(); 
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }
  }



