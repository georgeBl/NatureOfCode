//defining vectors
var mouse,
    center,
    vectorLine,
    magnitude;

//define the canvas 
function setup() {
    createCanvas(640, 360);


}

//draw the objects on the screen 
function draw() {
    background(51);

    mouse = createVector(mouseX, mouseY);
    center = createVector(width / 2, height / 2);
    vectorLine = mouse.sub(center);

    vectorLine.normalize();
    vectorLine.mult(50);


    translate(width / 2, height / 2);
    strokeWeight(2);
    stroke(255);
    line(0, 0, vectorLine.x, vectorLine.y);

}
