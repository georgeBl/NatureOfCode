//defining vectors
var position,
    velocity;

//define the canvas 
function setup() {
    createCanvas(640, 360);

    //instantiating the vectors
    position = createVector(100, 100);
    velocity = createVector(2, 2);

}

//draw the objects on the screen 
function draw() {
    background(51);

    //add the current speed to the position

    position.x = position.x + velocity.x;
    position.y = position.y + velocity.y;

    //48 represent the width and height of the ball
    if ((position.x > width - 48 / 2) || (position.x < 0 + 48 / 2)) {
        velocity.x = velocity.x * -1;
    }

    if ((position.y > height - 48 / 2) || (position.y < 0 + 48 / 2)) {
        velocity.y = velocity.y * -1;
    }

    //Display the circle at x position
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(position.x, position.y, 48, 48);
}
