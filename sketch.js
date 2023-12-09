=let bgImage;
let input, button;
let displayText = '';
let displayTextTimeout;

function preload() {
  bgImage = loadImage('background.png'); // Make sure this path is correct
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
  // Redraw the background and the Venn diagram to "clear" the canvas
  background(bgImage);
  drawVennDiagram();

  // Display the text if displayText is not an empty string
  if (displayText !== '') {
    fill(0);
    noStroke();
    textSize(32);
    textAlign(CENTER, CENTER);
    text(displayText, width / 2, height - 100); // Adjust Y position as needed
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
  displayText = input.value(); // Get the value from the input
  // Display the text and then clear it after 5 seconds
  if(displayTextTimeout) clearTimeout(displayTextTimeout); // Clear the previous timeout if it exists
  displayTextTimeout = setTimeout(() => {
    displayText = ''; // Clear the text
    redraw(); // Redraw the canvas to update the view
  }, 5000);
  
  redraw(); // Make sure to update the display immediately after submitting
}

// If you are not constantly redrawing your canvas, you might need to call redraw() to see changes
noLoop();
