const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerc;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(200, playerBase.position.y - 160, 50, 180, options);
  World.add(world,player)

 // playerArcher = new ( 340, playerBase.position.y - 112, 120, 120);
  playerc = new PlayerArcher( 300, playerBase.position.y - 112, 120, 120);
 // playerArcher =  PlayerArcher( 340, playerBase.position.y - 112, 120, 120);
 // playerArcher = new PlayerArcher( );

}

function draw() {
  background(backgroundImg);
  
  imageMode(CENTER)
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)

  Engine.update(engine);


  // playerArcher.display;
  // playerArcherdisplay();
   playerc.display();
  // display();

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
