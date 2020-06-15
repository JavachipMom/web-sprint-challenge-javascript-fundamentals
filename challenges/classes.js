// 1. Copy and paste your prototype in here and refactor into class syntax.


// function CuboidMaker(attributes) {
//   this.length = attributes.length;
//   this.width = attributes.width;
//   this.height = attributes.height;
// };

class CuboidMaker2 {
    constructor(attributes) {
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }
    volume() {
        return this.length * this.width * this.height
    }
    surfaceArea() {
        return (2 * ((this.length * this.width) + (this.lenght * this.height) + (this.width * this.height)));
    }
};

const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
    constructor(cubeAttr) {
        super(cubeAttr);
        this.width = cubeAttr.width
    }
    cubeVolume() {
        return (this.width * this.width * this.width);
    }
    cubeSurfaceArea() {
        return (6 * (this.width * this.width));
    }
}

const cube = new CubeMaker(cuboid2)

console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());