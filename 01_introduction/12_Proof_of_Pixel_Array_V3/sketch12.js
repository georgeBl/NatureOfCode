// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


function setup() {
    createCanvas(1200, 1000);
    pixelDensity(1);
}

function draw() {
    loadPixels();

    //combination between shades of red from x and blue from y
    //every time y increeses blue shade increeses too
    //every time x increeses red shade increases too
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4;
            pixels[index + 0] = x; //red
            pixels[index + 1] = 0; //green
            pixels[index + 2] = y; //blue
            pixels[index + 3] = 255; //alpha
        }
    }

    updatePixels();
}
