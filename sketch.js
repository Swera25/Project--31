const Bodies = Matter.Bodies
const World = Matter.World
const Engine = Matter.Engine


var particles = [];
var plinkos = [];
var divisons = [];
var divisionHeight = 300;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(frameCount%60 === 0){

    particles.push(new particle(random(width/2 - 10, width/2 + 10), 10, 10)); 
  }
}

for(var k = 0; k <= width; k = k + 80) {

  divisions.push(new divisons(k, height - divisionHeight/2, 10, divisionHeight));
}