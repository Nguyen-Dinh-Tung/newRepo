class Cat {
  //atb
  name;
  weight;
  maxSpeed;

  constructor(name, weight, maxSpeed) {
    this.name = name;
    this.weight = weight;
    this.maxSpeed = maxSpeed;
  }
  getInfo() {
    return (
      "Name : " +
      this.name +
      " Weight : " +
      this.weight +
      " Maxspeed : " +
      this.maxSpeed
    );
  }
  say(message) {
    return (this.say = message);
  }
  eat(op) {
    this.weight = this.weight + op;
    jerry.setLife("die");
  }
  getWeight() {
    return this.weight;
  }
  catch(speed) {
    if (this.maxSpeed > jerry.speed) {
      alert("Đã bắt được chuột");
    } else {
      alert("Không bắt được chuột");
    }
  }
}
