const Taxi = function(manufacturer, model){
    this.manufacturer = manufacturer;
    this.model = model;
    this.passengers = [];
}

Taxi.prototype.numberOfPassengers = function(){
    return this.passengers.length;
    
};

Taxi.prototype.addPassenger = function(nameOfPassenger){
     this.passengers.push(nameOfPassenger);
}

Taxi.prototype.removePassengerByName = function(nameToBeRemoved){
    let indexToRemove = this.passengers.indexOf(nameToBeRemoved);
    this.passengers.splice(indexToRemove, 1);
}

Taxi.prototype.removeAllPassengers = function(){
    this.passengers.splice(0, this.passengers.length);
}
module.exports = Taxi;