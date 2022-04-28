/// <reference path='../TSDef/p5.global-mode.d.ts' />

"use strict;";
let randomCounts;
function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  let xloc = randomGaussian(width / 2, 120);
  fill(0, 10);
  noStroke();
  ellipse(xloc, height / 2, 16, 16);
}
