var Vehicle = function() {
    
}

// Methods

Vehicle.prototype.insert = function() {
    this.div = document.createElement('div');
    this.div.className = 'vehicle';
    document.body.appendChild(this.div);
}

Vehicle.prototype.move = function() {
    var div = this.div;
    div.aniamate('slow');
}

Vehicle.prototype.damage = function() {
    
}

Vehicle.prototype.remove = function() {
    this.location = null;
}

//Constructors 

function Car() {
    Vehicle.call(this); 
    // -should be a sub class of vehicle with all shared properties
    // 	-considered totaled once has 2 damage points
    // 	-only moves horizontally across the browser
    // 	-has a reverse function to reverse the direction of the car
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.move; 

function Cop() {
    Vehicle.call(this);
    // -should be a sub class of Car with all shared properties
    // 	-considered totaled once has 3 damage points
    // 	-only moves vertically across the browser
    // 	-has a siren function which allows vehicle to blink at a set interval
}
Cop.prototype = Object.create(Vehicle.prototype);
Cop.prototype.constructor = Cop;

function Motorcycle() {
    Vehicle.call(this);
    // -should be a sub class of vehicle with all shared properties
    // 	-considered totaled after hit once (one damage point)
    // 	-move diagonally
    // 	-should set the speed property so that it moves twice as fast as normal vehicles
}
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

function Tank() {
    Vehicle.call(this);
    // -should be a sub class of vehicle with all shared properties
    // 	-considered totaled once has 10 damage points
    // 	-should set the speed property so that it moves half as fast as normal vehicles
}
Tank.prototype = Object.create(Vehicle.prototype);
Tank.prototype.constructor = Tank;

function addCar() {
    var car = new Vehicle();
    this.div = document.createElement('div');
    this.div.className = 'car';
    document.body.appendChild(this.div); 
}     
    
function addCop() {
    var car = new Vehicle();
    this.div = document.createElement('div');
    this.div.className = 'cop';
    document.body.appendChild(this.div); 
}

function addMotorcycle() {
    var car = new Vehicle();
    this.div = document.createElement('div');
    this.div.className = 'motorcycle';
    document.body.appendChild(this.div);
}

function addTank() {
    var car = new Vehicle();
    this.div = document.createElement('div');
    this.div.className = 'tank';
    document.body.appendChild(this.div);
}