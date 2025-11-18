let screenbg = 300;
let clearButton;
let currentMode = 1;
let img1, img2, img3;
let x = 0;
let y = 0;
let hasDrawn = false;

function preload() {
  img1 = loadImage ('catraisingeyebrow.png');
  img2 = loadImage ('cattongue.jpg');
  img3 = loadImage ('jumpingcat5.gif');
}
function setup() {
  createCanvas(700, 700);
  background(screenbg);
  colorMode(RGB);
  textSize(30);
  text ('Keep going!', 50, 50);

  clearButton = createButton('Start Again');
  clearButton.position (500, 50);
  clearButton.mousePressed(clearCanvas);
}

function clearCanvas() {
  background(screenbg);
  text('All clear!', 300, 300);
}

function draw() {
  if (mouseIsPressed && !hasDrawn) {
    currentMode = 1;
    x=mouseX;
    y=mouseY;
    hasDrawn=true;
  }

  if (hasDrawn) {
    if (currentMode == 1) {
      image(img1, x, y);
    } else if (currentMode ==2) {
      image(img2, x, y);
    } else if (currentMode ==3) {
      image(img3, x, y);
    }
  }
    if (mouseIsPressed) {
      fill(random(255), random(255), random(255));
      noStroke();
      circle(mouseX, mouseY, 90);
    }
}

function keyPressed() {
  if (key=='1') {
    currentMode = 1;
    x = random (width - img1.width);
    y = random (height - img1.height);
    hasDrawn = true;
  } else if (key=='2') {
    currentMode = 2;
    x = random(width - img2.width);
    y = random(height - img2.height);
    hasDrawn = true;
  } else if (key=='3') {
    currentMode = 3;
    x = mouseX;
    y = mouseY;
    hasDrawn=true;
  }
}
