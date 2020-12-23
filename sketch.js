var movingRect, fixedRect;


function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="black";
  movingRect.debug=true;

  fixedRect=createSprite(600, 200, 30, 30);
  fixedRect.shapeColor="purple";
  fixedRect.debug=true;

}

function draw() {
  background("teal");  
//MovingRect with mouseX and mouseY
movingRect.x=mouseX;
movingRect.y=mouseY;
 
if(fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
  movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2&&
  movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2){

  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}
else{
  movingRect.shapeColor="black";
  fixedRect.shapeColor="purple";
}

console.log(fixedRect.x-movingRect.x);
  drawSprites();
}