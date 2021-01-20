var hr,mn,sc
var myhour,myminute,mysecond;



function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);

}

function draw() {
  background(0);
  translate(200,200);

  hr = hour();
  mn = minute();
  sc = second();

  strokeWeight(5);
  stroke("green");
  rotate(-90);
  mysecond = map(sc,0,60,0,360);
  arc(0, 0, 300, 300, 0, mysecond);
  myminute = map(mn,0,60,0,360);

  myhour = map(hr%12,0,12,0,360);


  push()
    rotate(mysecond);
    stroke("green");
    strokeWeight(7);
    line(0,0,110,0);
  pop()
    
  push()
    rotate(myminute);
    stroke("cyan");
    strokeWeight(7);
    line(0,0,90,0);
  pop()

  push()
    rotate(myhour);
    stroke("red");
    strokeWeight(7);
    line(0,0,60,0);

  pop()   
  //drawSprites();
}
