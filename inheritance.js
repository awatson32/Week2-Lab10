var Vehicle = function(location) {
    this.location = location;
}

Vehicle.prototype.move = function() {
    this.location++;
}

Vehicle.prototype.damage = function() {
    
}

Vehicle.prototype.remove = function() {
    this.location = null;
}

var Car = function() {
    Vehicle.call();
}

var Tank = function() {
    Vehicle.call();
}

var 