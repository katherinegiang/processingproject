var screenbg = 300; 
var img;
var choice = 'c';

function preload(){
img = loadImage ('catraisingeyebrow.png');
}

function setup() {
  createCanvas(700,700);
  background(screenbg);
  colorMode(RGB);
  textSize(30);
  color(10);
  let c = color(100,100,500)
}

function draw() {
  //Drawing!
  if (mouseIsPressed==true) {
    circle(mouseX,mouseY,90);
  }else{
    //When false.
    text('Keep going!', 50, 50);
  }
}

function newkeyChoice(toolChoice) { 
  if (toolChoice == 'c' || toolChoice == 'C') { 
  image(img, random (0,150), random (0,150), 150, 150);
  }
}
