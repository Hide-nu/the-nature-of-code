/// <reference path='../TSDef/p5.global-mode.d.ts' />

"use strict;";
let p;
function setup() {
  createCanvas(800, 600);
  p = new Pendulum(createVector(width / 2, 0), 175);
}

function draw() {
  background(255);

  p.go();
}

function mousePressed() {
  p.clicked(mouseX, mouseY);
}

function mouseReleased() {
  p.stopDragging();
}

class Pendulum {
  constructor(origin, r) {
    this.origin = origin.copy();
    this.position = createVector();
    this.r = r;
    this.angle = PI / 4;
    this.aVel = 0.0;
    this.aAcc = 0.0;
    this.damping = 0.995;
    this.ballr = 48;
    this.dragging = false;
  }

  go() {
    this.update();
    this.drag();
    this.display();
  }

  update() {
    if (!this.dragging) {
      const gravity = 0.4;
      this.aAcc = ((-1 * gravity) / this.r) * sin(this.angle);
      this.aVel += this.aAcc;
      this.aVel *= this.damping;
      this.angle += this.aVel;
    }
  }

  display() {
    this.position.set(this.r * sin(this.angle), this.r * cos(this.angle), 0);
    this.position.add(this.origin);

    stroke(0);
    strokeWeight(2);

    line(this.origin.x, this.origin.y, this.position.x, this.position.y);
    ellipseMode(CENTER);
    fill(175);
    if (this.dragging) {
      fill(0);
    }
    ellipse(this.position.x, this.position.y, this.ballr, this.ballr);
  }

  clicked(mx, my) {
    const d = dist(mx, my, this.position.x, this.position.y);
    if (d < this.ballr) {
      this.dragging = true;
    }
  }

  stopDragging() {
    if (this.dragging) {
      this.aVel = 0;
      this.dragging = false;
    }
  }

  drag() {
    if (this.dragging) {
      const diff = this.origin.sub(createVector(mouseX, mouseY));
      this.angle = atan2(-1 * diff.y, diff.x) - radians(90);
    }
  }
}
