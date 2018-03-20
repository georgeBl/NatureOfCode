# Probability - Non Uniform Distribution


In this file we use almost the same walker object used previously but we seet different rules for it to move arround the screen. 

The setup() and the draw() functions are left the same as previously. The setup will define the canvas and the draw will show the walker and make it move around the screen.

```js
var walker;

function setup() {
    createCanvas(640,340);
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

In this example the walker moves its x and y poistion in three possible dirrections. If the random numer is equal to 1 or 2, it will move up and right, if it is equal to 3, it will move down to the right and if it is 4 and 5, down to the left. 
    
```js
    this.step = function () {
        var probArray = [];
        probArray[1] = 1;
        probArray[2] = 1;
        probArray[3] = 2;
        probArray[4] = 3;
        probArray[5] = 3;

        var index = floor(random(probArray.length));
        var r = probArray[index];

        if (r == 1) {
            //move up and to the right
            this.x++;
            this.y--;
        } else if (r == 2) {
            //move down to the right
            this.x++;
            this.y++;
        } else {
            //move down to the left
            this.x++;
            this.y--;
        }
        console.log(r);
        this.x = constrain(this.x, 0, width - 1);
        this.y = constrain(this.y, 0, height - 1);
    }

```
The index contains the random number that will be generated. The number generated will only be between 0 and 5. The rules of how the walker is moving are set in the if statements.

The constraint at the bottom of the script will keep the x and y positions in the width and height of the canvas.

[See the Code in action](https://georgebl.github.io/NatureOfCode/01_introduction/04_Proof_of_Probability_Non_Uniform_Distribution/code.html) 