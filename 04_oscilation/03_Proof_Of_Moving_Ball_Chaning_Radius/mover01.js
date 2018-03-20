var Mover = function () {

    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = 0;
    this.topspeed = 4;
    this.angle = 0;

    this.update = function () {
        var mouse = createVector(mouseX, mouseY);
        var dir = p5.Vector.sub(mouse, this.position);
        dir.normalize();
        dir.mult(0.09);
        this.acceleration = dir;
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.position.add(this.velocity);
    };

    this.display = function () {

        push();
        this.angle = this.acceleration.heading(); //good thing
        this.angle += 0.001;
        translate(this.position.x, this.position.y);
        rotate(this.angle);
        stroke(0);
        strokeWeight(2);
        fill(floor(random(255)), floor(random(255)), floor(random(255)));
        rectMode(CENTER);
        rect(0, 0, 18, 7);
        fill(255, 0, 0);
        rect(-16, 0, 2, 9);
        pop();

    }
    this.checkEdges = function () {
        if (this.position.x > width) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = width;
        }

        if (this.position.y > height) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = height;
        }
    }
}
