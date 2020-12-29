var rec1, rec2, rec3, rec4, rec5, rec6;

function setup() {
  createCanvas(800,400);
  rec1 = createSprite(200,200,50,100);
  rec2 = createSprite(250,300,50,100);
  rec3 = createSprite(300,300,50,100);
  rec4 = createSprite(350,300,50,100);
  rec5 = createSprite(400,300,50,100);
  rec6 = createSprite(450,300,50,100);
}

function draw() {
  background(255,255,255);  

 rec1.y = mouseY;
 rec1.x = mouseX;

 rec1.shapeColor = "red";
 rec2.shapeColor = "green";

 if (isTouching(rec1, rec3)){
   rec1.shapeColor = "red";
   rec3.shapeColor = "blue";
 }
 else{
   rec1.shapeColor = "purple";
   rec3.shapeColoe = "purple";
 }

  drawSprites();
}



