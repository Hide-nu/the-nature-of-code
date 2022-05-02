/// <reference path='../TSDef/p5.global-mode.d.ts' />

"use strict;";
let particles = [];
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  particles.push(new Particle(createVector(width / 2, 50)));

  particles.forEach((particle, index) => {
    particle.run();
    if (particle.isDead()) {
      delete particles[index];
    }
  });
}

class Particle {
  constructor(l) {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = l.copy();
    this.lifespan = 255;
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  }

  display() {
    stroke(0, this.lifespan);
    strokeWeight(2);
    fill(127, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  }

  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}
