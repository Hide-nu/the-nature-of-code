/// <reference path='../TSDef/p5.global-mode.d.ts' />

"use strict;";

let ps, repeller;
function setup() {
  createCanvas(800, 600);
  ps = new ParticleSystem(createVector(width / 2, 50));
  repeller = new Repeller(width / 2, height / 2);
}

function draw() {
  background(255);
  ps.addParticle();

  const gravity = createVector(0, 0.1);
  ps.applyRepeller(repeller);
  ps.applyForce(gravity);

  repeller.display();
  ps.run();
}

class Particle {
  constructor(l) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(random(-1, 1), random(-2, 0));
    this.position = l.copy();
    this.lifespan = 255;
    this.mass = 1;
  }

  run() {
    this.update();
    this.display();
  }

  applyForce(force) {
    const f = force.copy();
    f.div(this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
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

class ParticleSystem {
  constructor(position) {
    this.origin = position.copy();
    this.particles = [];
  }

  addParticle() {
    this.particles.push(new Particle(this.origin));
  }

  applyForce(force) {
    for (const particle of this.particles) {
      particle.applyForce(force);
    }
  }

  applyRepeller(r) {
    for (const particle of this.particles) {
      const f = r.repel(particle);
      particle.applyForce(f);
    }
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}

class Repeller {
  constructor(x, y) {
    this.g = 100;
    this.r = 10;
    this.position = createVector(x, y);
  }
  display() {
    stroke(0);
    strokeWeight(2);
    fill(175);
    ellipse(this.position.x, this.position.y, 48, 48);
  }
  repel(particle) {
    const dir = p5.Vector.sub(this.position, particle.position);
    let d = dir.mag();
    dir.normalize();
    d = constrain(d, 5, 100);
    const force = (-1 * this.g) / (d * d);
    dir.mult(force);
    return dir;
  }
}
