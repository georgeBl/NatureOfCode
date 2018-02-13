//variables declaration
var figure,
    liquid,
    m,
    gravity;

function setup() {
    //define the canvas width and height
    createCanvas(1000, 1000);
    figure = new Figure(50, 50, 50);
    liquid = new Liquid(0, height / 2, width, height / 2, 0.1)

}


//
function draw() {
    //draw the bg every time so the object doesnt leave a trail
    background(200);

    liquid.display();

    if (figure.isInside(liquid)) {
        figure.drag(liquid);
    }

    m = 0.1 * figure.mass;
    gravity = createVector(0, m);
    figure.applyForce(gravity);
    figure.update();
    figure.display();
    figure.checkEdges();

}

function Figure(x, y, m) {
    this.mass = m;
    this.location = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);

    //update the location and add the acceleration 
    this.update = function () {
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
    }

    //display the object on screen
    this.display = function () {
        stroke('black');
        strokeWeight(1);
        fill(127);
        ellipse(this.location.x, this.location.y, this.mass, this.mass);
    }

    this.checkEdges = function () {
        if ((this.location.x > width - this.mass / 2) || (this.location.x < 0 + this.mass / 2)) {
            this.velocity.x = this.velocity.x * -1;
            //            this.velocity.mult(0); //stop the bounce
        }
        if (this.location.y > height - this.mass / 2 || this.location.y < 0 + this.mass / 2) {
            this.velocity.y = this.velocity.y * -1;
        }
    }

    this.applyForce = function (force) {
        var f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);

    }

    this.isInside = function (l) {
        if (this.location.x > l.x && this.location.x < l.x + l.w && this.location.y > l.y && location.y < l.y + l.h) {
            return true;
        }
        return false;
    }

    this.drag = function (l) {
        var speed = this.velocity.mag();
        var dragMagnitude = l.c * speed * speed;
        var drag = this.velocity.get();
        drag.mult(-1);
        drag.normalize();
        drag.mult(dragMagnitude);
        this.applyForce(drag);
    }

}

function Liquid(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.coefficient = c;

    this.display = function () {
        noStroke;
        fill(175);
        rect(x, y, w, h);
    }

}
