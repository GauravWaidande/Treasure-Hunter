class Game {
  constructor() {
    this.playButton=createButton("Play");
  }

  start(){
   form = new Form();
   form.display();
  }

  play(){
    
    this.handleControl();

    drawSprites();
    
  }

  setElementsPosition(){
    this.playButton.position(260,300);
  }

  setElementsStyle(){
    this.playButton.class("customButton")
  }

  hide(){
    this.playButton.hide();
  }

  handlemousePressed(){
    this.playButton.mousePressed(()=>{
      this.playButton.hide();
      gameState=2;

      stone1=createSprite(48,325,10,10);
      stone1.addImage("s1",stoneImg);
      stone1.scale=0.25;
  
      stone2=createSprite(250,250,10,10);
      stone2.addImage("s2",stoneImg);
      stone2.scale=0.25;
  
      stone3=createSprite(420,350);
      stone3.addImage("s3",stoneImg);
      stone3.scale=0.25;
  
      stone4=createSprite(430,175);
      stone4.addImage("s4",stoneImg);
      stone4.scale=0.25;
  
      stone5=createSprite(600,275);
      stone5.addImage("s5",stoneImg);
      stone5.scale=0.25;
  
      /*stone6=createSprite(430,150);
      stone6.addImage("s6",stoneImg);
      stone6.scale=0.25;*/
  
      /*stone7=createSprite(430,150);
      stone7.addImage("s7",stoneImg);
      stone7.scale=0.25;*/
  
      player=createSprite(50,250,10,10);
      player.addImage("p",playerImg);
      player.scale=0.25;
      
      kLogo=createSprite(520,28,10,10);
      kLogo.addImage("l1",keyImg);
      kLogo.scale=0.15;
  
      k=createSprite(430,125,10,10);
      k.addImage("l1",keyImg);
      k.scale=0.15;
  
      life=createSprite(420,300,10,10);
      life.addImage("l2",lifeImg);
      life.scale=0.15;
  
      lLogo=createSprite(600,20,10,10);
      lLogo.addImage("l2",lifeImg);
      lLogo.scale=0.15;
  
    })
  }

  handleControl(){

    if(keyDown(RIGHT_ARROW)){
      player.position.x+=5;
      stone2.position.x-=5;
      stone3.position.x-=5;
      stone4.position.x-=5;
      stone5.position.x-=5;
      k.position.x-=5;
      life.position.x-=5;
    }
    if(keyDown(UP_ARROW)){
      player.position.y-=5;
    }

    //player.velocityY=3;
    console.log(player.position.y);
    console.log(player.velocityY);

  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handlemousePressed();
  }
 
}
