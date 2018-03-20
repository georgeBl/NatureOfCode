//Example of Moving towards an angle


var angle = 0,
    aVelocity = 0,
    aAcceleration = 0.002;

function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(220);
    stroke(0);
    fill(127);

    push();
    translate(width / 2, height / 2);
    rotate(angle);
    line(-60, 0, 60, 0);
    ellipse(60, 0, 16, 16);
    ellipse(-60, 0, 16, 16);
    pop();


    angle += aVelocity;

    aVelocity = constrain(aVelocity, -5, 5);
    if (keyCode === UP_ARROW) {
        if (keyIsPressed === true)
            aVelocity += aAcceleration;
    } else if (keyCode === DOWN_ARROW) {
        if (keyIsPressed === true)
            aVelocity -= aAcceleration;
    }

}
