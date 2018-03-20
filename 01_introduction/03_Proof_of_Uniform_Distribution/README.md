# Uniform Distribution



In this file we take a look at the random() function provided by p5. We can see using the representation that the numbers are not trully random and the distribution of them is uniform.

The main script has two main functions, setup() and draw().

In the setup() we set the boundries of the canvas and initiate the array that will count the random numbers to 0 on each itteration.

```js
function setup() {
  createCanvas(640,360);
  for (var i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
}
```


In the draw() function we give the background a colour and on each frame we initiate the index variable with a random integer number that will be between (0 and 20). After this the array counting the random numbers will be initiated by 1 on each index that was generated.

In order to see a clear representation we used rectangles. Each time the array gets incremented the rectangle representing the itteration will grow in height. 

```js
function draw() {
  background(127);
  var index = floor(random(total));
  randomCounts[index]++;

  // Draw a rectangle to graph results
  stroke(0);
  strokeWeight(2);
  fill(255);

  var w = width/randomCounts.length;

  for (var x = 0; x < randomCounts.length; x++) {
    rect(x*w,height-randomCounts[x],w-1,randomCounts[x]);
  }
}
```



[See the Code in action](https://georgebl.github.io/NatureOfCode/01_introduction/03_Proof_of_Uniform_Distribution/code.html) 
