class Mover {
  constructor() {
    this.location = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
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
    this.acceleration.add(force);
  }
}
