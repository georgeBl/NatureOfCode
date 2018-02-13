//variables declaration
var movers = [],
    numberOfMovers = 10,
    mass,
    wind,
    gravity,
    c = 1, //miu in Ff = -miu * N * v / coeficientu de frecare / coefficial friction
    normal = 1, //N - forta de reactiune / reaction force
    frictionMag = c * normal, // unity vector
    friction;

function setup() {
    //define the canvas width and height
    createCanvas(1000, 1000);
    mass = 30;
    for (i = 0; i < numberOfMovers; i++) {
        movers[i] = new Mover(random(15, 50));
    }

}


//
function draw() {
    //draw the bg every time so the object doesnt leave a trail
    background(51);

    //create the forces



    for (i = 0; i < numberOfMovers; i++) {
        wind = createVector(0.2, 0);
        gravity = createVector(0, 0.1 * movers[i].mass);
        friction = p5.Vector.mult(movers[i].velocity, -1);
        friction.normalize();
        friction.mult(frictionMag);
        movers[i].applyForce(friction);

        movers[i].applyForce(wind);
        movers[i].applyForce(gravity);
        movers[i].checkEdges();
        movers[i].update();
        movers[i].display();
    }

}

function Mover(m) {
    this.mass = m;
    this.location = createVector(50, 50);
    this.velocity = createVector(2, 0);
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
        }
        if (this.location.y > height - this.mass / 2 || this.location.y < 0 + this.mass / 2) {
            this.velocity.y = this.velocity.y * -1;
        }
    }

    this.applyForce = function (force) {
        var f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);

    }


}
