//defining vectors
var spaceship;

//define the canvas 
function setup() {
    createCanvas(640, 480);
    spaceship = new SpaceShip();
}

//draw the objects on the screen 
function draw() {
    background(91);
    spaceship.display();
}

function SpaceShip() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = 0;
    this.topspeed = 4;
    this.angle = 0;


    this.update = function () {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.position.add(this.velocity);
    }

    this.display = function () {

        push();
        translate(this.position.x, this.position.y);
        stroke(0);
        fill(127);
        triangle(-20, 0, 0, 40, 20, 0);
        rectMode(CENTER);
        fill(255, 0, 0);
        rect(-10, -5, 5, 5);
        rect(+10, -5, 5, 5);
        pop();
    }
}
