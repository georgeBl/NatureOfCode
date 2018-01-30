// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


function setup() {
    createCanvas(1200, 1000);
    pixelDensity(1);
}

function draw() {
    loadPixels();

    //make everything red
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4;
            pixels[index + 0] = 255;
            pixels[index + 1] = 0;
            pixels[index + 2] = 0;
            pixels[index + 3] = 255;
        }
    }

    updatePixels();
}
