class Elevator {
  constructor(){
    // floor where the elevator currently is
    this.floor      = 0;
    //top floor of building...MAX value of "this.floor"
    this.MAXFLOOR   = 10;
    //current direction that elevator is moving in "up" or "down"
    this.direction = [];
    //an array of person objects that represent people on the elevator to be dropped off
    this.passengers = [];
    // an array of person objects that represent people waiting to be picked up
    this.waitingList = [];
    // an array of numbers of the floors which the elevator must stop
    this.requests   = [];
  }

  start() {
    // begin a setInterval that calls "update()"" every second
    setInterval (() => {
      this.update();
    }, 2000);
   }
  stop() {
    // cancel the setInterval started by "start()""
    clearInterval(setInterval);

   }
  update() {
    //for now will only call "log()"
    this.log();
  }
  log() {
    //displays the current direction and current floor
    console.log ('Direction: ' + this.direction + 'Floor: ' + this.floor);

   }
  _passengersEnter() {
    this.passengers.push(0);
   }
  _passengersLeave() { }

  floorUp() {


    if (this.floor > this.destinationFloor && this.destinationFloor <= MAXFLOOR) {
        this.direction = 'up';
        this.floor ++;
    }

  }

  floorDown() {
    if (this.floor < this.destinationFloor && this.destinationFloor === 0){
      this.direction = 'down';
      this.floor --;
    }
  }
  call() {

  }

}

module.exports = Elevator;
