const Elevator = require('./elevator.js');

const Person = require('./person.js');

//create our elevator
const myElevator = new Elevator();

// start the elevators automatic movement
myElevator.start();

//stop the elevator after 15 seconds
setTimeout(() => {
  myElevator.stop();
}, 20000);


// For iteration 2: call "floorUp()" and "floorDown()"
myElevator.floorUp();
myElevator.floorUp();
myElevator.floorUp();
myElevator.floorUp();

myElevator.floorDown();
