var runner
var path
var pathImg
function preload(){
  //pre-load images
pathImg=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createsprite(200,200);
  path.addImage(pathImg)
  path.velocityY=4;
  path.scale=1.2;
}

function draw() {
  background(0);

}
