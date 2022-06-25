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
  eat(weight, object) {
    if (object.status == "life") {
      this.weight += weight;
    }
    object.setLife("die");
  }
  getWeight() {
    return this.weight;
  }
  catch(object) {
    if (this.maxSpeed > object) {
      alert("Đã bắt được chuột");
    } else {
      alert("Không bắt được chuột");
    }
  }
}
