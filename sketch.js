var cake1, cake2, candle;

function setup() {
  createCanvas(800,400);

  cake1 = createSprite (400, 250, 150, 50);
  cake1.shapeColor="red";

  cake2 = createSprite (400, 200, 100, 50);
  cake2.shapeColor="brown";

  candle = createSprite (400, 160, 10, 30);
  candle.shapeColor="yellow";

}

function draw() {
  //create background
  background(255,255,255);


  drawSprites();
}

