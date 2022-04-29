/// <reference path='../TSDef/p5.global-mode.d.ts' />

"use strict;";

let m;
function setup() {
  createCanvas(800, 600);
  m = new Mover();
}

function draw() {
  background(255);
  const g = createVector(0, 0.2);
  g.mult(m.mass);
  m.applyForce(g);
  // const wind = createVector(0.3, 0);
  // m.applyForce(wind);
  const friction = m.velocity.copy();
  friction.normalize();
  const c = -0.01;
  const speed = m.velocity.mag();
  friction.mult(c * speed * speed);
  m.applyForce(friction);

  m.update();
  m.edges();
  m.display();
}

class Mover {
  constructor() {
    this.location = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mass = 1;
  }

  update() {
    // const mouse = createVector(mouseX, mouseY);
    // mouse.sub(this.location);
    // mouse.setMag(0.5);
    // this.acceleration = mouse;
    this.velocity.add(this.acceleration);
    // this.velocity.limit(10);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.location.x, this.location.y, 48, 48);
  }

  edges() {
    if (this.location.x > width) {
      this.location.x = width;
      this.velocity.x *= -1;
    }
    if (this.location.x < 0) {
      this.location.x = 0;
      this.velocity.x *= -1;
    }
    if (this.location.y > height) {
      this.velocity.y *= -1;
      this.location.y = height;
    }
    // if (this.location.y < 0) {
    //   this.velocity *= -1;
    //   this.location.y = 0;
    // }
  }

  applyForce(force) {
    const f = force.div(this.mass);
    this.acceleration.add(f);
  }
}
