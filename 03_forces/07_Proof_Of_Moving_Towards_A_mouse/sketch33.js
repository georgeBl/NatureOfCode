//defining vectors
var movers = [];

//define the canvas 
function setup() {
    createCanvas(640, 360);
    for (i = 0; i < 20; i++) {
        movers[i] = new Mover();
        movers[i].position = createVector(random(width), random(height));
    }

}

//draw the objects on the screen 
function draw() {

    background(55);
    for (i = 0; i < movers.length; i++) {
        //        movers[i].checkEdges();
        movers[i].update();
        movers[i].display();
    }


}
