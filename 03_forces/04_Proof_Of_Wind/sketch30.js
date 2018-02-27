var windChimes = [];
var movers = [];

function setup() {
    createCanvas(640, 640);

    windChimes[0] = new WindChime(60, 50, 0.5, 90, 150);
    windChimes[1] = new WindChime(580, 50, 0.2, 90, 180);
    windChimes[2] = new WindChime(60, 550, 0.5, 160, 250);
    windChimes[3] = new WindChime(580, 550, 0.1, 180, 360);

    for (var i = 0; i < 100; i++) {
        movers[i] = new Mover(random(0, 640), random(0, 640), 0, 0, 0, 0, random(0, 15));
    }

}

function draw() {
    //margins

    background(0);
    rect(0, 0, width - 1, height - 1);


    for (var j = 0; j < movers.length; j++) {
        for (var i = 0; i < windChimes.length; i++) {
            movers[j].applyForce(windChimes[i].windVector);

        }
        movers[j].checkEdges();
        movers[j].display();
        movers[j].update();

    }

    for (i = 0; i < windChimes.length; i++) {
        windChimes[i].update();
        windChimes[i].display();
    }

}
