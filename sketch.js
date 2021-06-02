var wall,car,speed,weight;


function setup() {
  createCanvas(1600,400);
  car=createSprite(10, 200, 50, 50);
  wall=createSprite(1500,200,50,100);
  speed=random(55,90);
  car.velocityX=speed;
  weight=random(400,1500);
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0;
    var d=0.5*weight*speed*speed/22500;
    if(d<100){
      car.shapeColor="green";
    }
    if(d>=100&&d<=180){
      car.shapeColor="yellow";
    }
    if(d>180){
      car.shapeColor="red";
    }
  }
  drawSprites();
}