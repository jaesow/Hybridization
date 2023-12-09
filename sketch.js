let bgImage; // Declare a variable to hold the image
let input; // Declare a variable for the text input

function preload() {
  // Load the image and store it in the variable
  bgImage = loadImage('background.png'); // Make sure this path is correct
}

function setup() {
  createCanvas(1800, 1250); // Set the size of the canvas
  background(bgImage); // Set the image as the background
  
  // Create the text input and position it below the Venn diagram
  input = createInput('');
  input.position(width / 2 - input.width / 2, height - 100); // Adjust as necessary for your layout

  // Draw the Venn diagram
  drawVennDiagram();
}

function drawVennDiagram() {
  // Draw two overlapping circles for the Venn diagram
  fill(255, 200); // Set the fill color to white with some transparency
  stroke(0); // Set the stroke color to black
  strokeWeight(2); // Set the stroke weight
  
  // Draw the left circle
  ellipse(700, 625, 550, 550);

  // Draw the right circle
  ellipse(1100, 625, 550, 550);
}

function draw() {
  // No need to redraw the background or the Venn diagram if they are static
  // The draw function can be left empty if there is no animation required
}
