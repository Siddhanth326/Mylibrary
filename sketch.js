var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect =createSprite(400, 200, 50, 50);
  fixedRect=createSprite(200,300,100,23);
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}

function draw() {
  background("black");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(movingRect,fixedRect))
  {
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";
  }
  else
  {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
 
  drawSprites();
}
