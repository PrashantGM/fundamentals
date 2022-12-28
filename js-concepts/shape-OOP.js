class Shape {
  constructor(height, type) {
    this.height = height;
    this.type = type;
  }
  identify() {
    return `I am a ${this.type} with height of ${this.height} meters.`;
  }
}

class Cuboid extends Shape {
  constructor(length, breadth, height, type) {
    super(height, type);
    this.length = length;
    this.breadth = breadth;
  }
  volume() {
    return this.length * this.breadth * this.height;
  }
}

class Cylinder extends Shape {
  //private data field declared
  #secret_value;
  constructor(radius, height, type) {
    super(height, type);
    this.radius = radius;
    this.#secret_value =
      'The three most important parts of any 3D shape are its edges, faces, and vertices.';
  }
  volume() {
    return (22 / 7) * this.radius * this.height;
  }
  tellSecret() {
    return this.#secret_value;
  }
}

const cube = new Cuboid(3, 5, 9, 'cube');
console.log(cube.volume());
const cylinder = new Cylinder(1.5, 8, 'cylinder');
console.log(cylinder.volume());

//access superclass with inheritance and override the identify function
console.log(cube.identify());
console.log(cylinder.identify());

//access private data through public method
const newCy = new Cylinder(1, 8, 'cylinder');
console.log(newCy.tellSecret());
