
var hr;
var mn; 
var sec;
var hrAngle, mnAngle, secAngle;

function setup() {
  createCanvas(600,600);

 


  angleMode(DEGREES);
}

function draw() {
  background(0,255,255); 

  stroke(141, 5, 252);
  strokeWeight(1);
  textSize(20);
  text("Abhiram's Clock", 130, 400);
  

  translate (200, 200);
  rotate(-90);

  stroke(0);
  strokeWeight(15);
  point (0 , 0);

 
  

  
  hr = hour();
  mn = minute()
  sec = second();

  secAngle = map(sec, 0, 60, 0, 360);
  mnAngle = map(mn, 0 ,60, 0, 360);
  hrAngle = map (hr % 12, 0 , 12, 0, 360);

  push ();
  rotate (secAngle);
  stroke (234, 77, 77);
  strokeWeight (3);
  line (0 , 0, 100 ,0);
  pop ();

  push();
  rotate(mnAngle);
  stroke(38, 9, 226);
  strokeWeight(5);
  line(0 , 0 , 75, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke(233, 249, 2);
  strokeWeight(7);
  line( 0, 0, 50, 0);
  pop();

  noFill();
  stroke(234, 77, 77);
  strokeWeight(4)
  arc( 0, 0, 300, 300, 0, secAngle);

  stroke(38, 9, 226);
  strokeWeight(5);
  arc(0 , 0, 275 , 275, 0, mnAngle);

  stroke(233, 249, 2);
  strokeWeight(5);
  arc(0 , 0, 250, 250, 0, hrAngle);

  drawSprites();
}