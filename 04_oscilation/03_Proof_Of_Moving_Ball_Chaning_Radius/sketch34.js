//defining vectors
var ball,
    r,
    theta;


//define the canvas
function setup() {
    createCanvas(640, 480);
    ball = new Ball();
}

//draw the objects on the screen
function draw() {
    // background(91);
    ball.display();
    ball.update();

}

function Ball(){

  this.position = createVector(0,height/2);
  this.velocity = createVector(0, 0);
  this.acceleration = 0;
  this.topspeed = 4;
  this.angle = 0;
  this.angleVel = 0.2;


  this.update = function () {

    this.position.y = map(sin(this.angle),-1,1,15,height-15);
    this.position.x +=2;
    this.angle += this.angleVel;


  };

  this.display = function () {
      push();
      // this.angle = this.acceleration.heading(); //good thing
      translate(this.position.x, this.position.y);
      rotate(this.angle);
      stroke(0);
      strokeWeight(2);
      // fill(floor(random(255)), floor(random(255)), floor(random(255)));
      fill(10);
      // line(0,0,50,0);
      ellipse(0, 0, 10,10);

      pop();
}
}
