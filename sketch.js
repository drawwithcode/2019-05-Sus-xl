var capture;
let ellipseColor;
var myImage;

function setup() {
	createCanvas(windowWidth, windowHeight);
	capture = createCapture(VIDEO);
	capture.size(windowWidth, windowHeight);
	capture.hide();
  background(244, 248, 252);

  button = createButton('Click here to take a picture, then press mouse to draw.');
    button.position(windowWidth/3, 19);
    button.mousePressed(changeBG);
}

function draw() {
  stroke('#3d3d3d');
  strokeWeight(10);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }


}

function changeBG() {
  clear();
  var myImage = capture.loadPixels();
	image(myImage, width/4, height/6, 640, 480);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
s
