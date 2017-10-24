class Person {
  constructor(name, originFloor, destinationFloor){
    this.name = name;
    this.originFloor = originFloor;
    this.desitnationFloor = destinationFloor;
  }
}
let passenger1 = new Person ('Allana', 2, 8);
let passenger2 = new Person ('John', 10, 1);

module.exports = Person;
