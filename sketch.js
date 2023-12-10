let bgImage;
let virginiaRyeImage, virginiaClickedImage;
let bottleImage, bottleClickedImage;
let ebingeriImage, ebingeri2Image; // Variables for the ebingeri images
let whiteImage, whiteClickedImage; // Variables for the white aster images
let englandImage, englandClickedImage; // Variables for the england images
let input, submitButton, hybridizeButton;
let displayText = '';
let displayTextTimeout;

let bottleImageX = 10, bottleImageY;
let virginiaRyeImageX = 1580, virginiaRyeImageY;
let whiteImageX = 1580, whiteImageY; // Position for whiteImage
let englandImageX = 10, englandImageY; // Position for englandImage
let bottleImageSize = 215; // Size for bottleImage and virginiaRyeImage
let virginiaClickedSize = 350;
let bottleClickedSize = 280; // Display size for bottleClickedImage
let whiteImageSize = 215; // Set the size for whiteImage
let englandImageSize = 215; // Set the size for englandImage
let virginiaClicked = false;
let bottleClicked = false;
let whiteClicked = false; // Boolean to track if the white image has been clicked
let englandClicked = false; // Boolean to track if the england image has been clicked

function preload() {
  bgImage = loadImage('background.png');
  virginiaRyeImage = loadImage('virginia.png');
  bottleImage = loadImage('bottle.png');
  bottleClickedImage = loadImage('bottleClicked.png');
  virginiaClickedImage = loadImage('virginiaClicked.png');
  ebingeriImage = loadImage('ebingeri.png'); // Load the first ebingeri image
  ebingeri2Image = loadImage('ebingeri2.png'); // Load the second ebingeri image
  whiteImage = loadImage('white.png'); // Load the white aster image
  whiteClickedImage = loadImage('whiteClicked.png'); // Load the whiteClicked image
  englandImage = loadImage('england.png'); // Load the england image
  englandClickedImage = loadImage('englandClicked.png'); // Load the englandClicked image
}

function setup() {
  createCanvas(1800, 1250);
  bottleImageY = 50 
  virginiaRyeImageY = 50
  whiteImageY = 300
  englandImageY = 300; // Set the Y position for all images

  input = createInput('');
  input.position(width / 2 - input.width / 2, height - 150);

  submitButton = createButton('submit');
  submitButton.position(input.x + input.width, input.y);
  submitButton.mousePressed(submitText);

  hybridizeButton = createButton('Hybridize');
  hybridizeButton.position(width / 2 - 60, 300); // Positioned above the Venn diagram, centered
  hybridizeButton.style('background-color', '#4CAF50'); // Green background
  hybridizeButton.style('color', 'white'); // White text
  hybridizeButton.style('padding', '10px 20px'); // Padding for a larger button size
  hybridizeButton.style('font-size', '20px'); // Larger font size
  hybridizeButton.mousePressed(hybridizeAction);

  noLoop();
}

function draw() {
  background(bgImage);
  drawVennDiagram();

  // Draw the images at their starting positions
  image(bottleImage, bottleImageX, bottleImageY, bottleImageSize, bottleImageSize);
  image(virginiaRyeImage, virginiaRyeImageX, virginiaRyeImageY, bottleImageSize, bottleImageSize);
  image(whiteImage, whiteImageX, whiteImageY, whiteImageSize, whiteImageSize);
  image(englandImage, englandImageX, englandImageY, englandImageSize, englandImageSize);

  // Display the clicked images if clicked
  if (bottleClicked) {
    image(bottleClickedImage, 700 - bottleClickedSize / 2, 625 - bottleClickedSize / 2, bottleClickedSize, bottleClickedSize);
  }
  if (virginiaClicked) {
    image(virginiaClickedImage, 1100 - virginiaClickedSize / 2, 625 - virginiaClickedSize / 2, virginiaClickedSize, virginiaClickedSize);
  }
  if (whiteClicked) {
    image(whiteClickedImage, 1050 - whiteImageSize / 2, 625 - whiteImageSize / 2, whiteImageSize, whiteImageSize);
  }
  if (englandClicked) {
    image(englandClickedImage, 700 - englandImageSize / 2, 625 - englandImageSize / 2, englandImageSize, englandImageSize);
  }

  // Display the text if displayText is not an empty string
  if (displayText !== '') {
    fill(0);
    noStroke();
    textSize(32);
    textAlign(CENTER, CENTER);
    text(displayText, width / 2, input.y - 20);
  }
}

function drawVennDiagram() {
  fill(255, 200);
  stroke(0);
  strokeWeight(2);
  ellipse(750, 625, 550, 550);
  ellipse(1050, 625, 550, 550);
}

function submitText() {
  displayText = input.value();
  if (displayTextTimeout) clearTimeout(displayTextTimeout);
  displayTextTimeout = setTimeout(() => {
    displayText = '';
    redraw(); // Redraw the canvas to update the view
  }, 5000);

  redraw(); // Make sure to update the display immediately after submitting
}

function mousePressed() {
  // Check if the click is within the bounds of the bottle image
  if (mouseX > bottleImageX && mouseX < bottleImageX + bottleImageSize &&
      mouseY > bottleImageY && mouseY < bottleImageY + bottleImageSize) {
    bottleClicked = !bottleClicked; // Toggle the state of bottleClicked
  }

  // Check if the click is within the bounds of the virginia image
  if (mouseX > virginiaRyeImageX && mouseX < virginiaRyeImageX + bottleImageSize &&
      mouseY > virginiaRyeImageY && mouseY < virginiaRyeImageY + bottleImageSize) {
    virginiaClicked = !virginiaClicked; // Toggle the state of virginiaClicked
  }

  // Check if the click is within the bounds of the white image
  if (mouseX > whiteImageX && mouseX < whiteImageX + whiteImageSize &&
      mouseY > whiteImageY && mouseY < whiteImageY + whiteImageSize) {
    whiteClicked = !whiteClicked; // Toggle the state of whiteClicked
  }

  // Check if the click is within the bounds of the england image
  if (mouseX > englandImageX && mouseX < englandImageX + englandImageSize &&
      mouseY > englandImageY && mouseY < englandImageY + englandImageSize) {
    englandClicked = !englandClicked; // Toggle the state of englandClicked
  }

  redraw(); // Redraw to show the updated state of images
}

function hybridizeAction() {
  // Add the hybridization logic here if needed
}
