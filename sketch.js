var bullet, wall;
var speed, weight, thickness;
var block1, block2;

function setup() {
  createCanvas(1600,400);
  
  speed = random(223, 321);
  weight = random(30, 52);
  
  bullet = createSprite(50, 200, 50, 20);
  bullet.velocityX = speed;
  bullet.shapeColor = ("silver");

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
  
  thickness = random(22, 83);

  block1 = createSprite(800, 100, 1600, 20);
  block1.shapeColor = ("ghostwhite");

  block2 = createSprite(800, 300, 1600, 20);
  block2.shapeColor = ("ghostwhite");

}

function draw() {
  background("black");  
  
  if (hasCollided(wall, bullet))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if (damage > 10)
    {
      wall.shapeColor = color(255, 0, 0);
    }

    if (damage < 10)
    {
      wall.shapeColor = color(0, 255, 0);
    }

  }

  drawSprites();
}

function hasCollided(wall, bullet)
{
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }
    return false;
}