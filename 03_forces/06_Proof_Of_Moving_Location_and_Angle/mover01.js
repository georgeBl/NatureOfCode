var Mover = function (_x, _y, _vx, _vy, _ax, _ay, _m) {

    this.location = createVector(_x, _y);
    this.velocity = createVector(_vx, _vy);
    this.acceleration = createVector(_ax, _ay);
    this.mass = _m;
    this.angle = 0; //needs to be changed
    this.aVelocity = 0; //needs to be changed
    this.aAcceleration = 0.001; //needs to be changed

    this.update = function () {
        this.velocity.add(this.acceleration);
        this.velocity.limit(4);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
        this.aVelocity += this.aAcceleration;
        this.angle += this.aVelocity;
        this.aVelocity = constrain(this.aVelocity, -0.1, 0.1);
        if (this.velocity.x > 0) {
            this.aAcceleration = 0.001;
        } else {
            this.aAcceleration = -0.001;
        }

    }

    this.display = function () {
        //pick a brush
        noStroke();
        strokeWeight(2);
        fill(255, 0, 0, 50);

        //And draw an ellipse at the new location vector points
        push();
        translate(this.location.x, this.location.y);
        rotate(this.angle);
        rectMode(CENTER);
        rect(0, 0, 3 * this.mass, 3 * this.mass);
        pop();
        fill(255);

    }

    this.checkEdges = function () {
        //        if (this.location.x > width) {
        //            this.location.x = 0;
        //        }
        //        if (this.location.x < 0) {
        //            this.location.x = width;
        //        }
        //        if (this.location.y > height) {
        //            this.location.y = 0;
        //        }
        //        if (this.location.y < 0) {
        //            this.location.y = height;
        //        }
        if (this.location.x > width) {
            this.velocity.x *= -1;

        }
        if (this.location.x < 0) {
            this.velocity.x *= -1;

        }
        if (this.location.y > height) {
            this.velocity.y *= -1;
        }
        if (this.location.y < 0) {
            this.velocity.y *= -1;
        }


    }

    this.applyForce = function (force) {
        var f = p5.Vector.div(force, this.mass)
        this.acceleration.add(f);
    }
}
