// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// An array to keep track of how often random numbers are picked


function setup() {
    createCanvas(640, 360);
    background(127);

}

function draw() {

    var xloc = randomGaussian(); //returns a number between -1 and 1 with  mean = 0 , sd = 1.0

    //    console.log(xloc);

    var sd = 60; //standar deviation (68%)
    var mean = width / 2;
    xloc = (xloc * sd) + mean; //scaling the gaussian nr by st and mean

    fill(0, 10);
    noStroke();
    ellipse(xloc, height / 2, 16, 16);
}
