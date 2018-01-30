// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


//Cloudy black/white effect

var yoff = 1000.0;

function setup() {
    createCanvas(1200, 1000);
    pixelDensity(1);
}

function draw() {
    loadPixels();


    for (var y = 0; y < height; y++) {
        var xoff = 100.0;
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4;
            var brightness = map(noise(xoff, yoff), 0, 1, 0, 255);
            pixels[index + 0] = brightness; //red
            pixels[index + 1] = brightness; //green
            pixels[index + 2] = brightness; //blue
            pixels[index + 3] = 255; //alpha
            xoff += 0.02;
        }
        yoff += 0.02
    }

    updatePixels();
}
