let offset = 100;
let grid = 7;
let margin = 10;
let s;
let palette = [];
let palette2 = [];

//https://openprocessing.org/sketch/1965888
//https://openprocessing.org/sketch/1829564

function setup() {
  var canvas = createCanvas(800, 800);
  canvas.parent("p5container");
  ellipseMode(CENTER);
  noStroke();
  angleMode(DEGREES);
  //colorMode(HSB);
  noLoop();

  reload();
}

palette = ["#E5C9F7", "#f7c488", "#a3c6f7", "#F7C4CD"];

palette2 = ["#C7DCFA", "#FBE189", "#FBAEBB", "#DDCAEA"];

function draw() {
  background("#f5f1e6");
  s = (width + margin - offset * 2) / grid - margin;

  fill(0);
  textFont("Courier New");
  textSize(18);
  textStyle(BOLD);
  text("Until one day...", 0 + 40, 0 + 70);

  text("... we return", width - 180, height - 30);

  for (let i = 0; i < grid; i++) {
    for (let j = 0; j < grid; j++) {
      fill(random(palette));
      ellipse(
        offset + i * (s + margin) + s / 2,
        offset + j * (s + margin) + s / 2,
        s
      );

      push();
      rotate(random(-1, 1));
      stroke(random(palette2));
      strokeWeight(1.5);
      noFill();
      ellipse(
        offset + i * (s + margin) + s / 2,
        offset + j * (s + margin) + s / 2,
        s - 15
      );
      pop();

      let x = offset + i * (s + margin) + s / 2;
      //console.log("x: " + x)
      let y = offset + j * (s + margin) + s / 2;
      //console.log("y: " + y)

      if (j > 2) {
        push();
        rotate(random(-1, 1));
        stroke(random(palette2));
        strokeWeight(1.5);
        noFill();
        //fill(0)
        ellipse(
          offset + i * (s + margin) + s / 2,
          offset + j * (s + margin) + s / 2,
          s - 25
        );
        pop();

        //fill(random(palette));
      }
    }}
}

/* function mousePressed() {
  saveCanvas("myCanvas", "png");
} */

function reload() {
  setInterval(draw, 1 * 7 * 1000); //refresh
  //background("#E9E9CF")
  let offset = 50;
  let grid = 7;
  let margin = 10;
  let s;

  
}
