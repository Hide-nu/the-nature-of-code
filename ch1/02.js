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
    this.x = width / 2;
    this.y = height / 2;
    this.xspeed = 2.5;
    this.yspeed = -2;
  }

  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  bounce() {
    if (this.x > width || this.x < 0) {
      this.xspeed *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.yspeed *= -1;
    }
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.x, this.y, 48, 48);
  }
}
