let bgImage;
let virginiaRyeImage;
let bottleImage;
let input, button;
let displayText = '';
let displayTextTimeout;

function preload() {
  bgImage = loadImage('background.png'); // Make sure this path is correct
  virginiaRyeImage = loadImage('virginia.png'); // Make sure this path is correct
  bottleImage = loadImage('bottle.png'); // Make sure this path is correct
}

function setup() {
  createCanvas(1800, 1250);
  
  input = createInput('');
  input.position(width / 2 - input.width / 2, height - 150);

  button = createButton('submit');
  button.position(input.x + input.width, height - 150);
  button.mousePressed(submitText);
}

function draw() {
  background(bgImage);
  drawVennDiagram();

  // Draw the virginia.png image as a smaller button
  // The image is drawn at position (150, height - 250) with a size of 100x100 pixels
  image(bottleImage, 10, height - 1200, 215, 215);
  image(virginiaRyeImage, 1580, height - 1200, 215, 215);

  // Display the text if displayText is not an empty string
  if (displayText !== '') {
    fill(0);
    noStroke();
    textSize(32);
    textAlign(CENTER, CENTER);
    text(displayText, width / 2, height - 100);
  }
}

function drawVennDiagram() {
  fill(255, 200);
  stroke(0);
  strokeWeight(2);
  
  ellipse(700, 625, 550, 550);
  ellipse(1100, 625, 550, 550);
}

function submitText() {
  displayText = input.value();
  if(displayTextTimeout) clearTimeout(displayTextTimeout);
  displayTextTimeout = setTimeout(() => {
    displayText = '';
    redraw(); // Redraw the canvas to update the view
  }, 5000);
  
  redraw(); // Make sure to update the display immediately after submitting
}

// Check if the mouse is clicked on the area of the virginia image acting as a button
function mousePressed() {
  let imageX = 150;
  let imageY = height - 250;
  let imageSize = 100;
  
  // Check if we're within the bounds of the image
  if (mouseX > imageX && mouseX < imageX + imageSize &&
      mouseY > imageY && mouseY < imageY + imageSize) {
    // The image was clicked, you can call your button click function here
    console.log('Virginia image button was clicked');
  }
}

noLoop();
