const assert = require("assert");
const Park = require("../park.js");
const Dinosaur = require("../dinosaur.js");

describe("Park", function () {
  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur("t-rex", "carnivore", 50);
    dinosaur2 = new Dinosaur("stegosaurus", "herbivore", 20);
    const dinosaurs = [dinosaur1, dinosaur2];
    park = new Park("Triassic Meadow", 10, []);
  });

  it("should have a name");

  it("should have a ticket price");

  it("should have a collection of dinosaurs");

  it("should be able to add a dinosaur to its collection");

  it("should be able to remove a dinosaur from its collection");

  it("should be able to find the dinosaur that attracts the most visitors");

  it("should be able to find all dinosaurs of a particular species");

  it("should be able to calculate the total number of visitors per day");

  it("should be able to calculate the total number of visitors per year");

  it("should be able to calculate total revenue for one year");
});
