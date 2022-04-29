/// <reference path='../TSDef/p5.global-mode.d.ts' />

"use strict;";

let m;
function setup() {
  createCanvas(800, 600);
  m = new Mover();
}

function draw() {
  background(255);
  const g = createVector(0, 0.3);
  g.mult(m.mass);
  m.applyForce(g);

  const wind = createVector(0.2, 0);
  m.applyForce(wind);

  const friction = m.velocity.get();
  friction.normalize();
  const c = -0.01;
  friction.mult(c);
  m.applyForce(c);

  m.update();
  m.edges();
  m.display();
}

function mousePressed() {
  if (mousePressed) {
    const wind = createVector(0.2, 0);
    m.applyForce(wind);
  }
}
