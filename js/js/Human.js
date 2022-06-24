class Human {
  // atb
  name;
  gender;
  weight;
  constructor(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
  }
  // method
  getInfo() {
    return (
      "Name : " +
      this.name +
      " Gender : " +
      this.gender +
      " Weight : " +
      this.weight
    );
  }
  setSay(message) {
    this.message = message;
  }
  say() {
    return This.name + " : " + this.message;
  }
  eatApple(amount) {
    this.weight += 1;
    if (apple.amount > 0) {
      return apple.setAmount(apple.amount--);
    }
  }
  checkApple() {
    return apple.amount;
  }
  getName() {
    return "Name: " + this.name;
  }
  setName(name) {
    this.name = name;
  }
  getWeight() {
    return "Weight : " + this.weight;
  }
  setWeight(weight) {
    this.weight = weight;
  }
}
