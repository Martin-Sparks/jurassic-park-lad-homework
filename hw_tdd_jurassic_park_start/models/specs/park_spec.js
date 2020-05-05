const assert = require("assert");
const Park = require("../park.js");
const Dinosaur = require("../dinosaur.js");

describe("Park", function () {
  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaurs;

  beforeEach(function () {
    park = new Park("Triassic Meadow", 10, dinosaurs);
    dinosaur1 = new Dinosaur("t-rex", "carnivore", 50);
    dinosaur2 = new Dinosaur("stegosaurus", "herbivore", 80);
    dinosaur3 = new Dinosaur("Stevie", "herbivore", 500);
    dinosaurs = [dinosaur1, dinosaur2];
  });

  it("should have a name", function () {
    const actual = park.name;
    assert.strictEqual(actual, "Triassic Meadow");
  });

  it("should have a ticket price", function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it("should have a collection of dinosaurs", function () {
    const actual = park.dinosaurs;
    expected = [dinosaur1, dinosaur2];
    assert.deepStrictEqual(actual, expected);
  });

  it("should be able to add a dinosaur to its collection", function(){
    park.addDinosaur(dinosaur3)
    const actual = park.numberOfDinosaurs();
    assert.deepStrictEqual(actual, 3);

  });

  it("should be able to remove a dinosaur from its collection", function(){
    park.addDinosaur(dinosaur3)
    park.removeDinosaur(dinosaur3)
    const actual = park.numberOfDinosaurs()
    assert.deepStrictEqual(actual, 2)
  });

  it("should be able to find the dinosaur that attracts the most visitors", function(){
    const actual = park.mostVisitors();
    assert.strictEqual(actual, 80);

  });

  it("should be able to find all dinosaurs of a particular species");

  it("should be able to calculate the total number of visitors per day");

  it("should be able to calculate the total number of visitors per year");

  it("should be able to calculate total revenue for one year");
});
