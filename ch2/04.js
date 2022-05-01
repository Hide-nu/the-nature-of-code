/// <reference path='../TSDef/p5.global-mode.d.ts' />

"use strict;";

let movers = [];
function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 2; i++) {
    const m = new Mover(random(0, 1, 2), random(width), random(height));
    movers.push(m);
  }
}

function draw() {
  background(255);

  for (let i = 0; i < movers.length; i++) {
    for (let j = 0; j < movers.length; j++) {
      if (i != j) {
        const force = movers[j].attract(movers[i]);
        movers[i].applyForce(force);
      }
    }

    movers[i].update();
    // m.edges();
    movers[i].display();
  }

  // const g = createVector(0, 0.2);
  // g.mult(m.mass);
  // m.applyForce(g);
  // // const wind = createVector(0.3, 0);
  // // m.applyForce(wind);
  // const friction = m.velocity.copy();
  // friction.normalize();
  // const c = -0.01;
  // const speed = m.velocity.mag();
  // friction.mult(c * speed * speed);
  // m.applyForce(friction);
}

class Mover {
  constructor(m, x, y) {
    this.location = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mass = m;
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
    ellipse(this.location.x, this.location.y, this.mass * 24, this.mass * 24);
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

  attract(m, g) {
    const force = this.location.sub(m.location);
    const distance = force.mag();
    force.normalize();

    const strength = (g * this.mass * m.mass) / (distance * distance);
    force.mult(strength);
    return force;
  }
}
