var fixedRectangle, movingRectangle



function setup() {
  createCanvas(1200,800);
  movingRectangle=createSprite(400,200,50,50);
  fixedRectangle=createSprite(600,400,50,80);
  
  movingRectangle.shapeColor="green"
  fixedRectangle.shapeColor="green"
}

function draw() {
  background("black");

  movingRectangle.x=mouseX
  movingRectangle.y=mouseY
  
  if(isTouching(movingRectangle, fixedRectangle)){

    movingRectangle.shapeColor="red"
    fixedRectangle.shapeColor="yellow"

  }
  else{movingRectangle.shapeColor="green"
  fixedRectangle.shapeColor="green"}
  
  drawSprites();
}