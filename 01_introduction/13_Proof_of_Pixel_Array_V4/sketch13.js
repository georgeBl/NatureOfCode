// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


function setup() {
    createCanvas(1200, 1000);
    pixelDensity(1);
}

function draw() {
    loadPixels();

    //update the pixel array with random shades of grey
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4;
            var brightness = random(255);;
            pixels[index + 0] = brightness; //red
            pixels[index + 1] = brightness; //green
            pixels[index + 2] = brightness; //blue
            pixels[index + 3] = 255; //alpha
        }
    }

    updatePixels();
}
