/// <reference path='../TSDef/p5.global-mode.d.ts' />

"use strict;";

let a = 0.0;
let aVelocity = 0.0;
let aAcceleration = 0.001;
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  aAcceleration = map(mouseX, 0, width, -0.001, 0.001);
  a += aVelocity;
  aVelocity += aAcceleration;

  rectMode(CENTER);
  stroke(0);
  fill(127);
  translate(width / 2, height / 2);
  rotate(a);
  rect(0, 0, 64, 48);
}
