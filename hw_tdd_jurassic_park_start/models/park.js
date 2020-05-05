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

Park.prototype.numberOfDinosaurs = function(){
    return this.dinosaurs.length;
}

module.exports = Park;
