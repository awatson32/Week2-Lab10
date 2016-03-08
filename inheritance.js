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
    // -should be a sub class of vehicle with all shared properties
	// 	-considered totaled once has 2 damage points
	// 	-only moves horizontally across the browser
	// 	-has a reverse function to reverse the direction of the car
}

var Cop = function () {
    Vehicle.call();
    // -should be a sub class of Car with all shared properties
	// 	-considered totaled once has 3 damage points
	// 	-only moves vertically across the browser
	// 	-has a siren function which allows vehicle to blink at a set interval
}

var Motorcycle = function() {
    Vehicle.call();
    // -should be a sub class of vehicle with all shared properties
	// 	-considered totaled after hit once (one damage point)
	// 	-move diagonally
	// 	-should set the speed property so that it moves twice as fast as normal vehicles
}
var Tank = function() {
    Vehicle.call();
    // -should be a sub class of vehicle with all shared properties
	// 	-considered totaled once has 10 damage points
	// 	-should set the speed property so that it moves half as fast as normal vehicles
}