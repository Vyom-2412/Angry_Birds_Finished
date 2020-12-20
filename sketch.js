const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, pig1, platform,slingshot, background_image;
var hit = 0;
var birds = [];


function preload()
{
  getBgIMG();
}

function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

    
  ground = new Ground(600,height,1200,20)
  platform = new Ground(100,300,250,200);
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig1 = new Pig(810, 350);
  log1 = new Log(810,260,300, PI/2);

  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  pig3 = new Pig(810, 220);

  log3 =  new Log(810,180,300, PI/2);

  box5 = new Box(810,160,70,70);
  log4 = new Log(760,120,150, PI/7);
  log5 = new Log(870,120,150, -PI/7);

  bird = new Bird(190,30);
  bird2 = new Bird(145,90);
  bird3 = new Bird(100,90);
  birds.push(bird3);
  birds.push(bird2);
  birds.push(bird);
  slingshot = new Slingshot(bird.body,{x:190,y:30});

}

function draw(){
    if(background_image)
    {
    background(background_image);
    }
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    platform.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    bird2.display();
    bird3.display();
    slingshot.display();

}

function mouseDragged()
{
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  slingshot.fly();
  hit = hit+1;
  if(hit == 2)
  {
    World.remove(world,birds[birds.length-1]);
    birds.pop();
  }  
}

function keyPressed()
{
  if(keyCode == 32)
  {
    if(birds.length>=0)
    {
    Matter.Body.setPosition(birds[birds.length-1].body,{x:190,y:30});
    slingshot.attach(birds[birds.length-1].body);
    }
  }
}

async function getBgIMG()
{
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var response_json = await response.json();
  var date_time = response_json.datetime;
  var hour = date_time.slice(11,13);
  if(hour>=06 && hour<= 19)
  {
    bg = "sprites/bg.png";
  }
  else
  {
    bg = "sprites/bg2.jpg";
  }
  background_image = loadImage(bg);
}