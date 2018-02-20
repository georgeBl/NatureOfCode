//variables declaration
var movers =[],
    liquids = [],
    m,
    gravity;

function setup() {
    //define the canvas width and height
    createCanvas(1000, 1000);
    
    //new Mover(x, y, vx, vy, ax, ay, m)
    movers[0] = new Mover(50, 150, 0.5, 1 ,0 ,0, 50);
    movers[1] = new Mover(50, 150, 0.5, 1 ,0 ,0, 15);
    
    //new Liquid(x,y,width, height, coefficient, collor);
    liquids[0] = new Liquid(150, 200, 400, 200 , 0.9, color(255, 204, 0));
    liquids[1] = new Liquid(150, 450, 400, 200 , 0.3, color(255, 4, 231));
    liquids[2] = new Liquid(150, 700, 400, 200 , 10.2, color(255, 0, 0));
    
    console.log(liquids);
    

}


//
function draw() {
    //draw the bg every time so the object doesnt leave a trail
    background(200);
    
    for(i = 0; i< liquids.length; i++){
        liquids[i].display();
    }
////    
   
//    if (liquids[].contains(movers)) {
//        console.log('inside the liquid');
//        var dragForce = liquid.drag(movers);
////        console.log(dragForce);
//        movers.applyForce(dragForce);
//    } else{
//        console.log('not inside');
//    }
    
    

//    m = 0.1 * mover.mass;
//    gravity = createVector(0, m);
//    mover.applyForce(gravity);
    for(i = 0; i < movers.lenght; i++){
        console.log('hey');
        m = 0.1 * movers[i].mass;
        gravity = createVector(0, m);
        movers[i].applyForce(gravity);
        movers[i].display();
        movers[i].update();
        movers[i].display();
        movers[i].checkEdges();
    }
   

}

function Mover(_x, _y, _vx, _vy, _ax, _ay, _m) {
    this.mass = _m;
    this.location = createVector(_x, _y);
    this.velocity = createVector(_vx, _vy);
    this.acceleration = createVector(_ax, _ay);

    //update the location and add the acceleration 
    this.update = function () {
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
    }

    //display the object on screen
    this.display = function () {
        stroke('black');
        strokeWeight(1);
        fill(127);
        ellipse(this.location.x, this.location.y, this.mass, this.mass);
    }

    this.checkEdges = function () {
        if ((this.location.x > width - this.mass / 2) || (this.location.x < 0 + this.mass / 2)) {
            this.velocity.x = this.velocity.x * -1;
            //            this.velocity.mult(0); //stop the bounce
        }
        if (this.location.y > height - this.mass / 2 || this.location.y < 0 + this.mass / 2) {
            this.velocity.y = this.velocity.y * -1;
        }
    }

    this.applyForce = function (force) {
        var f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);

    }

    this.isInside = function (l) {
        if (this.location.x > l.x && this.location.x < l.x + l.w && this.location.y > l.y && location.y < l.y + l.h) {
            console.log('i am in side');
            return true;
            
        }
        return false;
    }

    

}

function Liquid(_x, _y, _w, _h, _c, _col) {
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;
    this.coefficient = _c;
    this.color = _col;
    
    this.display = function () {
        stroke('black');
        fill(this.color);
        rect(this.x, this.y, this.w, this.h);
    }
    
    this.contains = function(w){
//        console.log(w.location.x > this.x);
        return w.location.x > this.x && w.location.y > this.y  && w.location.x < this.x + this.w && w.location.y < this.y + this.h;
    }
        
    this.drag = function (m) {
        var speed = m.velocity.mag();
        var dragMagnitude = this.coefficient * speed * speed;
//        var drag = mover.velocity.get();
        var drag = p5.Vector.mult(m.velocity, -1);
        drag.normalize();
        drag.mult(dragMagnitude);
        
//        this.applyForce(drag);
        return drag;
    }
}
