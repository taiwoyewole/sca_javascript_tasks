// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:

/* function CuboidMaker(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
 }
CuboidMaker.prototype.volume = function() {
    return this.length * this.width * this.height;
 }
CuboidMaker.prototype.surfaceArea = function() {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
}
let cuboid = new CuboidMaker(4,5,5);
console.log(cuboid.volume());
  console.log(cuboid.surfaceArea());
*/

// class syntax
class CuboidMaker {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}
let cuboid = new CuboidMaker(4,5,5);

     console.log(cuboid.volume()); // 100
     console.log(cuboid.surfaceArea()); // 130