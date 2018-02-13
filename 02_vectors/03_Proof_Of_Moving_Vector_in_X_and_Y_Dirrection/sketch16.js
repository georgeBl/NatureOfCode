//defining the vector variables
var x = 320,
    y = 180,
    xspeed = 2.5,
    yspeed = 2;


//define the canvas 
function setup() {
    createCanvas(1080, 720);
}

//draw the objects on the screen 
function draw() {
    background(51);

    //add the current speed to the position

    x = x + xspeed;
    y = y + yspeed;
    if ((x > width) || (x < 0)) {
        xspeed = xspeed * -1;
    }

    if ((y > height) || (y < 0)) {
        yspeed = yspeed * -1;
    }

    //Display the circle at x position
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(x, y, 48, 48);
}
