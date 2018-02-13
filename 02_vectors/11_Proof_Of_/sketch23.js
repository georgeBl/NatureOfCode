//variable declaration;
var mover;

//define the canvas 
function setup() {
    createCanvas(640, 360);
    mover = new Mover();
}

//draw the objects on the screen 
function draw() {
    background(51);

    mover.update();
    mover.checkEdges();
    mover.display();
}

var Mover = function () {

    this.location = createVector(random(width), random(height));
    this.velocity = createVector(10, 5);

    this.update = function () {
        this.location.add(this.velocity);
    }

    this.display = function () {
        stroke(150);
        strokeWeight(2);
        fill(255, 0, 0);

        //Draw an ellipse at the location of the vector
        ellipse(this.location.x, this.location.y, 40, 40);

    }

    this.checkEdges = function () {
        if (this.location.x > width || this.location.x < 0) {
            this.velocity.x = this.velocity.x * -1;
        }
        if (this.location.y > height || this.location.y < 0) {
            this.velocity.y = this.velocity.y * -1;
        }


    }

}
