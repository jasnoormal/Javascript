function setup() {
  createCanvas(windowWidth, windowHeight);
  print((3 + 5) * 4);
  frameRate(8)
}

function draw() {
  fill(random(255), random(255), random(255));
  strokeWeight(5);
  ellipse(random(width), random(height), 50);
  rect(random(width), random(height), 50);
  triangle(random(width), random(height), random(width), random(height), random(width), random(height));
  quad(random(width), random(height), random(width), random(height), random(width), random(height), random(width), random)

}

