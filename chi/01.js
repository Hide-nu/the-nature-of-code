/// <reference path='../TSDef/p5.global-mode.d.ts' />

"use strict;";
let w;
function setup() {
  createCanvas(800, 600);
  w = new Walker();
  background(255);
}

function draw() {
  w.step();
  w.render();
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }
  render() {
    stroke(0);
    point(this.x, this.y);
  }

  step() {
    const choice = Math.floor(random(1, 5));
    if (choice == 1) {
      this.x++;
    } else if (choice == 2) {
      this.y++;
    } else if (choice == 3) {
      this.x--;
    } else {
      this.y--;
    }

    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, height - 1);
  }
}
