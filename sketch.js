function setup() {
  createCanvas(1000, 500);
    background('rgb(247,214,219)');

}

function draw() {
  fill ('rgb(209,24,209)');
  stroke('black')
  if (mouseIsPressed)
    rect(mouseX,mouseY,30,50);

}
