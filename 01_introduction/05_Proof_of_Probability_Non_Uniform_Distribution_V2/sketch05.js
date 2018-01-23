// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// An array to keep track of how often random numbers are picked

var walker;

function setup() {
    createCanvas(640, 360);
    background(127);
    walker = new Walker();

}

function draw() {

    walker.render();
    walker.step();

}

function Walker() {
    this.x = width / 2;
    this.y = height / 2;

    this.render = function () {

        stroke(0);
        point(this.x, this.y);

    };

    this.step = function () {

        var r = random(1);

        //40 % chanse to move to the right
        if (r < 0.4) {
            this.x++;
        } else if (r < 0.6) { //20% to the left
            this.x--;
        } else if (r < 0.8) { //20% down
            this.y++;
        } else {
            this.y--; //20% up
        }

        this.x = constrain(this.x, 0, width - 1);
        this.y = constrain(this.y, 0, height - 1);
    };
}
