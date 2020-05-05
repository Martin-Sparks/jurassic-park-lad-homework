const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function(dinosaur3){
    this.dinosaurs.push(dinosaur3);
}

Park.prototype.numberOfDinosaurs = function(){
    return this.dinosaurs.length;
}

Park.prototype.removeDinosaur = function(dinosaur) {
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaur, 1);
  }

Park.prototype.mostVisitors = function(){
    let mostVisited = 0;
    if mostVisited > this.guestsAttractedPerDay
}

module.exports = Park;
