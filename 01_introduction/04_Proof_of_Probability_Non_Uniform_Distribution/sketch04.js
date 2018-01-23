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
        var probArray = [];
        probArray[1] = 1;
        probArray[2] = 1;
        probArray[3] = 2;
        probArray[4] = 3;
        probArray[5] = 3;

        var index = floor(random(probArray.length));
        var r = probArray[index];

        if (r == 1) {
            //move down and to the right
            this.x++;
            this.y--;
        } else if (r == 2) {
            //stay still
            this.x++;
            this.y++;
        } else {
            //move up to the left
            this.x++;
            this.y--;
        }
        console.log(r);
        this.x = constrain(this.x, 0, width - 1);
        this.y = constrain(this.y, 0, height - 1);
    };
}
