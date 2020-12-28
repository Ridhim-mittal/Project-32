const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var b1, b2, b3, b4, b5, b6, b6, b7, b8;
var b9, b10, b11, b12, b13, b14, b15, b16;
var b17, b18;
var pentagon, slinsghot, ground, base1, base2;
var bg;
var score = 0;



function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;


    ground = new Ground(600,690,1200,20);
    base1 = new Ground(990,255,190,15);
    base2 = new Ground(590,455,190,15);

    b1 = new Box(930,235);
    
    b2 = new Box(960,235);
    b3 = new Box(990,235);
    b4 = new Box(1020,235);
    b5 = new Box(1050,235);


    
    b6= new Box(960,195);
    b7 = new Box(990,195);
    b8 = new Box(1020,195);

    b9 = new Box(990,155);

    b10 = new Box(530,435);
    b11 = new Box(560,435);
    b12 = new Box(590,435);
    b13 = new Box(620,435);
    b14 = new Box(650,435);

    b15 = new Box(560,395);
    b16 = new Box(590,395);
    b17 = new Box(620,395);

    b18 = new Box(590,355);



	pentagon = new Pentagon(160,265);
	slingshot = new Slingshot(pentagon.body,{x:160,y:265});

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  Background();
  
  Engine.update(engine);

  keyPressed();

  
  
fill("black");  
ground.display();


fill("yellow");
base1.display();
base2.display();
fill("pink");
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
fill("lightblue");
b6.display();
b7.display();
b8.display();
fill("orange");
b9.display();
fill("pink");
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
fill("lightblue")
b15.display();
b16.display();
b17.display();
fill("orange")
b18.display();

b1.score();
b2.score();
b3.score();
b4.score();
b5.score();
b6.score();
b7.score();
b8.score();
b9.score();
b10.score();
b11.score();
b12.score();
b13.score();
b14.score();
b15.score();
b16.score();
b17.score();
b18.score();

pentagon.display();
slingshot.display();

fill("black");
textSize(32);
text("SCORE:"+ score, 100,100);



  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(pentagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(pentagon.body);
  }
}

function mouseReleased(){
  slingshot.fly();
}


async function Background(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=18){
      background(250,0,250);
  }
  else{
      background(230,0,230);
  }

  
}
