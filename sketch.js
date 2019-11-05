//My Variables
var x = 100;
var y = 200;
var diameter = 50;
var movement:
var movement2:
var height:
var width:
var enlarge size = 40;



function setup() {
  movement = Math.floor(Math.random() * 10+1);
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(200,152,70);
  rect(174,190,55,90);
  rect(180,280,15,90);
  rect(208,280,15,90);
  square(153,190,20);
  square(230,190,20);
  rect(233,210,15,90);
  rect(155,210,15,90);
  triangle(140,130,197,60,260,130);

  point(215,150);
  point(190,150);
  line(190,160,210,160);
  strokeWeight(5);
  textSize(20);
  text('Myself',10,30);
  text('Kyle Kredo',10,60);

  if (enlarge = 32) {
      enlarge +=5;
  }

  if(x >=400)
  {
    x+=0
  }
}
