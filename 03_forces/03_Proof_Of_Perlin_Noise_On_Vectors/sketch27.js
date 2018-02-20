var wind;
var angle;
var time=random(0,1000);
function setup(){
    
    createCanvas(600,600);
    
}

function draw(){
    background(255);
    time = time+0.01;
    angle = noise(time);
    angle = map(angle, 0, 1, 0, 360);
    wind = p5.Vector.fromAngle(radians(angle));
    wind.mult(100);
    line(width/2, height/2, wind.x,wind.y);
    //change the grid
    push();
    pop();
    
}
