/// <reference path='../TSDef/p5.global-mode.d.ts' />

"use strict;";
let mover;
function setup() {
  createCanvas(800, 600);
  mover = new Mover();
}

function draw() {
  background(255);
  mover.update();
  mover.edges();
  mover.display();
}

class Mover {
  constructor() {
    this.location = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }

  update() {
    const mouse = createVector(mouseX, mouseY);
    mouse.sub(this.location);
    mouse.setMag(0.5);
    this.acceleration = mouse;
    this.velocity.add(this.acceleration);
    this.velocity.limit(10);
    this.location.add(this.velocity);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.location.x, this.location.y, 48, 48);
  }

  edges() {
    if (this.location.x > width) this.location.x = 0;
    if (this.location.x < 0) this.location.x = width;
    if (this.location.y > height) this.location.y = 0;
    if (this.location.y < 0) this.location.y = height;
  }
}
