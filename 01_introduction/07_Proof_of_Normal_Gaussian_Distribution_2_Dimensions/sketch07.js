// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function setup() {
    createCanvas(640, 360);
    background(127);

}

function draw() {

    //get two gaussian numbers
    var xloc = randomGaussian();
    var yloc = randomGaussian();

    //set the standar deviation
    var xsd = 100;
    var ysd = 40;

    var xMean = width / 2;
    var yMean = height / 2;


    //scalling the dev numbers by the mean and standar deviation
    xloc = (xloc * xsd) + xMean;
    yloc = (yloc * ysd) + yMean;

    var rColor = 233;
    fill(rColor, 50);
    noStroke();

    console.log(xloc, yloc);
    ellipse(xloc, yloc, 16, 16);
}
