/// <reference path='../TSDef/p5.global-mode.d.ts' />

"use strict;";
let oscillators = [];
function setup() {
  createCanvas(800, 600);
  smooth();
  for (let i = 0; i < 10; i++) {
    const o = new Oscillator();
    oscillators.push(o);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < oscillators.length; i++) {
    oscillators[i].oscillate();
    oscillators[i].display();
  }
}

class Oscillator {
  constructor() {
    this.angle = createVector();
    this.velocity = createVector(random(-0.05, 0.05), random(-0.05, 0.05));
    this.amplitude = new createVector(
      random(20, width / 2),
      random(20, height / 2)
    );
  }

  oscillate() {
    this.angle.add(this.velocity);
  }

  display() {
    const x = sin(this.angle.x) * this.amplitude.x;
    const y = sin(this.angle.y) * this.amplitude.y;

    push();
    translate(width / 2, height / 2);
    stroke(255, 130, 5);
    strokeWeight(2);
    fill(255, 130, 5);
    line(0, 0, x, y);
    ellipse(x, y, 32, 32);
    pop();
  }
}
