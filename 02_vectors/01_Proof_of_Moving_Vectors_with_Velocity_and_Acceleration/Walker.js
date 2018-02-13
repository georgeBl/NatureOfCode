function Walker() {

    //class properties
    //first location - random
    this.location = createVector(Math.floor(random(width)), Math.floor(random(height)));
    //goes this way each frame
    this.velocity = createVector(0.011, 0.005);
    //accelerate the walker
    //this.acceleration = createVector(0.2, 0.1);
    this.acceleration = p5.Vector.random2D();
    //give the walker a different colour
    this.color = setColour();
    noStroke();

    //draw on screen
    this.render = function () {
        fill(this.color);
        ellipse(this.location.x, this.location.y, 10, 10);
    }

    //update the walker using the aceleration and velocity
    this.update = function () {
        var mouse = createVector(mouseX, mouseY);
        this.acceleration = p5.Vector.sub(mouse, this.location);
        this.acceleration.normalize();
        this.acceleration.setMag(0.2);
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);

        this.location.add(this.velocity);
    }

    //bounce when the walker touches the edges
    this.constrainPosition = function () {
        if (this.location.x > width - 15 || this.location.x < 0 + 15) {
            this.velocity.x = this.velocity.x * -1;
        }

        if (this.location.y > height - 15 || this.location.y < 0 + 15) {
            this.velocity.y = this.velocity.y * -1;
        }



    }

    function setColour() {
        return color(Math.floor(random(255)), Math.floor(random(255)), Math.floor(random(255)), 122);
    }

}
