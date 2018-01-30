// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


function setup() {
    createCanvas(1200, 1000);
    background(127);
    loadPixels();
    var index = (2 + 2 * 5) * 4;
    pixels[index + 0] = 255;
    pixels[index + 1] = 0;
    pixels[index + 2] = 0;
    pixels[index + 3] = 255;

    updatePixels();

}
