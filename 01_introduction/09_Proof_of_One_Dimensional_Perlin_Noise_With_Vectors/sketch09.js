// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var walkers;
var nrOfWalkers;

function setup() {
    createCanvas(1200, 1000);
    background(127);
    nrOfWalkers = 10;
    walkers = [];
    for (i = 0; i < nrOfWalkers; i++) {
        walkers[i] = new Walker();
    }

}

function draw() {

    fill(0, 15);
    //draw the background and add a efect on it when something in the canvas moves
    rect(0, 0, width, height);

    for (i = 0; i < nrOfWalkers; i++) {
        walkers[i].step();
        walkers[i].render();
    }

}

//walker class
function Walker() {
    this.position = createVector(width / 2, height / 2);
    this.noff = createVector(random(1000), random(1000));

    this.render = function () {
        noStroke();
        fill(255, 45, 0, 50);
        ellipse(this.position.x, this.position.y, map(noise(this.noff.x), 0, 1, 20, 200), map(noise(this.noff.y), 0, 1, 200, 200));
    }

    this.step = function () {
        this.position.x = map(noise(this.noff.x), 0, 1, 0 - 200, width + 200);
        this.position.y = map(noise(this.noff.y), 0, 1, 0 - 200, height + 200);
        this.noff.add(0.005, 0.005);
    }
}
