# Random Walker with 9 Outcomes



In this file we create a Walker class which creates walker objects. Each time the step function is called on this object it selects a random number and based on that it produces an outcomes. We also constrain the x and y value using the built in constrain() function.

The main script contains the two main functions, setup() & draw(). The draw function calls the objects built in function

```js
var walker;

function setup() {
    createCanvas(320,640);
    background(127);
    walker = new Walker();
}

function draw() {
    walker.render();
    walker.step();
}
```

Within the Walker class 2 variables are set up (x&y) and values declared for them. We then have two functions added to each object. The render function draws a dot at the designated x and y coordinate.

```js
function Walker() {
    this.x = width/2;
    this.y = height/2;
    
    this.render = function() {
        stroke(0);
        point(this.x,this.y);
    }
```

In this example the walker moves its x and y poistion in 8 possible dirrections around him or it can stay still if the stepx and stepy are both equal to 0;  
    
```js
    this.step = function () {
        var stepx = floor(random(-1, 2));
        var stepy = floor(random(-1, 2));

        this.x = this.x + stepx;
        this.y = this.y + stepy;

        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }
}

```
[See the Code in action](http://htmlpreview.github.com/?https://github.com/montaynej/NatureOfCode/01_introduction/01_Random_Walker_with_4_outcomes/code.html) //must be fixed
