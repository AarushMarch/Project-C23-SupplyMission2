var car, wall;
var speed, weight;
var deformation

function setup() {
  createCanvas(1600,400);
  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  wall = createSprite(1500, 200, 40, height/2);
  wall.shapeColor = "white";

}

function draw() {
  background(0);  
  if(wall.x -car.x <(car.width+wall.width)/2){
    car.velocityX = 0;
    deformation = (0.5*weight*speed**2)/22500;
      if(deformation < 100){
        car.shapeColor = rgb(0, 255, 0);
      }
      if(deformation > 100 && deformation < 180){
        car.shapeColor = rgb(230, 230, 0);
      }
      if(deformation > 180){
        car.shapeColor = rgb(255, 0, 0);
      }
      
  }

  drawSprites();
}