var canvas,back,database;
var form,game,player,playerImg,playerCount;
var gameState=0,kScore=0,lScore=3;
var keyImg,kLogo,k,lifeImg,lLogo,life;
var stoneImg,stone1,stone2,stone3,stone4,stone5,stone6,stone7;

function preload() {
  back=loadImage("cave.jpg");
  playerImg=loadImage("hunter.png");
  keyImg=loadImage("key.png");
  lifeImg=loadImage("heart.png");
  stoneImg=loadImage("stone.png");
}

function setup() {
  canvas = createCanvas(700, 450);
  database = firebase.database();
  game = new Game();
  game.start();
}

function draw() {

  background(back);

  switch (gameState) {
    case 0:
      fill("red");
      textSize(30);
      text("Treasure Hunter",225,150);    
    break;

    case 1:
      fill("yellow");
      textSize(25);
      text("Hello " + this.form.input.value(),50,100);
      text("You have been assigned to go in the cave and collect",50,135);
      text("the treasures and the most precious Ruby. To reach there",50,170);
      text("you have to jump over the stones. Each time you fall down",50,205);
      text("1 life gets destroyed. To open the treasure box you have",50,240);
      text("to collect 2 keys. But beware it will not be that easy.",50,275);

      game.display();
    break;

    case 2:
      fill("yellow");
      textSize(25);
      text(""+kScore,550,28);
      text(""+lScore,625,28);
      
      game.play();

    break;

    case 3:

    break;

    default:
      break;
  }

  drawSprites();

  if(gameState!=0){
   fill("red");
   textSize(20);
   text("Treasure Hunter",3,18);
  }
  
}