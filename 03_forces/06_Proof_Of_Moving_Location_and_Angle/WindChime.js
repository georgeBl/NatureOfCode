function WindChime(_xpos, _ypos, _windMag, _startAngle, _endAngle) {
    this.xpos = _xpos;
    this.ypos = _ypos;
    this.windMag = _windMag;
    this.startAngle = radians(_startAngle);
    this.endAngle = radians(_endAngle);
    this.windVector = createVector();
    this.time = 1000;


    this.display = function () {
        //ellipse with an arrow inside
        push();
        translate(this.xpos, this.ypos);
        scale(0.5, 0.5);


        //text
        fill(0);
        smooth();
        noStroke();
        textSize(20);
        textAlign(CENTER);
        text('Magnitude:' + this.windMag, 0, 75 + 30);
        text('Wind Direction:' + calcDegrees(this.windVector.heading()).toFixed(2) + ascii(176), 0, 75 + 55);

        stroke(0);
        strokeWeight(4);
        fill(255);
        ellipse(0, 0, 150, 150);
        rotate(this.windVector.heading());
        line(-65, 0, 65, 0);
        fill(0);
        triangle(40, -15, 65, 0, 40, 15);
        pop();
    }

    this.update = function () {
        this.windDir = map(noise(this.time), 0, 1, this.startAngle, this.endAngle);
        this.windVector = p5.Vector.fromAngle(this.windDir);
        this.windVector.mult(this.windMag);
        this.time += 0.01;

    }

    function calcDegrees(rad) {
        return rad * (180 / PI);
    }

    //return the strig of the ascii code
    function ascii(a) {
        return String.fromCharCode(a);
    }

}
