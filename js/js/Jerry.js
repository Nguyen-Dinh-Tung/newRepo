class Rat {
  //atb
  name;
  weight;
  speed;

  constructor(name, weight, speed, status) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = status;
  }
  getInfo() {
    return (
      "Name : " +
      this.name +
      " Weight : " +
      this.weight +
      " Speed : " +
      this.speed +
      " Status : " +
      this.status
    );
  }
  setLife(status) {
    return (this.status = status);
  }
  say(message) {
    return (this.say = message);
  }
}
