/// <reference path='../TSDef/p5.global-mode.d.ts' />

"use strict;";
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  strokeWeight(2);
  stroke(0);
  noFill();

  translate(width / 2, height / 2);
  ellipse(0, 0, 4, 4);

  const mouse = createVector(mouseX, mouseY);
  const center = createVector(width / 2, height / 2);

  mouse.sub(center);
  mouse.mult(0.1);

  const m = mouse.mag();
  fill(255, 0, 0);
  rect(0, 0, m, 20);
}
