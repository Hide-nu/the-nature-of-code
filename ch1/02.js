/// <reference path='../TSDef/p5.global-mode.d.ts' />

"use strict;";
let b;
function setup() {
  createCanvas(800, 600);
  b = new Ball();
}

function draw() {
  background(255);
  b.move();
  b.bounce();
  b.display();
}

class Ball {
  constructor() {
    this.location = createVector(width / 2, height / 2);
    this.velocity = createVector(2.5, -2);
  }

  move() {
    this.location.add(this.velocity);
  }

  bounce() {
    if (this.location.x > width || this.location.x < 0) {
      this.velocity.x *= -1;
    }
    if (this.location.y > height || this.location.y < 0) {
      this.velocity.y *= -1;
    }
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.location.x, this.location.y, 48, 48);
  }
}
