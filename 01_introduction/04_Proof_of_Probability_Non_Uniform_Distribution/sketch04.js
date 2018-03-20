// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// This script uses a probability in order to move the walker

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
        var probArray = [];
        probArray[1] = 1;
        probArray[2] = 1;
        probArray[3] = 2;
        probArray[4] = 3;
        probArray[5] = 3;

        var index = floor(random(probArray.length));
        var r = probArray[index];

        if (r == 1) {
            //move up and to the right
            this.x++;
            this.y--;
        } else if (r == 2) {
            //move down to the right
            this.x++;
            this.y++;
        } else {
            //move down to the left
            this.x++;
            this.y--;
        }
        console.log(r);
        this.x = constrain(this.x, 0, width - 1);
        this.y = constrain(this.y, 0, height - 1);
    };
}
