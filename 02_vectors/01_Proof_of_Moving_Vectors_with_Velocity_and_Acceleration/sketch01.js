//empty array that will containt the walker objects and the number of them
var walkers = [],
    nrOfWalkers = 100;

//define the canvas and populate the array with the objects
function setup() {
    createCanvas(1080, 720);
    background(127);
    for (var i = 0; i < nrOfWalkers; i++) {
        walkers[i] = new Walker();

    }
    frameRate(60); // useless
}

//draw the objects on the screen 
function draw() {
    background(1, 90);
    for (var i = 0; i < nrOfWalkers; i++) {
        walkers[i].constrainPosition();
        walkers[i].render();
        walkers[i].update();
    }
}
