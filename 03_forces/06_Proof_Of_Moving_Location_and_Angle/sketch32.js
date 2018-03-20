//Example of Moving its location and angle


var angle = 0,
    aVelocity = 0,
    aAcceleration = 0.002,
    mover,
    gravity,
    wind;

function setup() {
    createCanvas(640, 480);
    //_x, _y, _vx, _vy, _ax, _ay, _m
    mover = new Mover(0, 0, 0, 0, 0, 0, 30);
}

function draw() {
    background(220);
    gravity = createVector(0, 0.1);
    wind = createVector(0.3, 0.3);
    mover.display();
    mover.update();
    mover.checkEdges();
    //    mover.applyForce(gravity);
    mover.applyForce(wind);




}

//    if (keyCode === UP_ARROW) {
//        if (keyIsPressed === true)
//            aVelocity += aAcceleration;
//    } else if (keyCode === DOWN_ARROW) {
//        if (keyIsPressed === true)
//            aVelocity -= aAcceleration;
//    }
