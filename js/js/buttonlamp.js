class Btn {
  // atb
  status;
  constructor(status) {
    this.status = status;
    this.lamp = false;
  }
  switchBtn() {
    return "Status : " + this.status + " lamp : " + this.lamp;
  }
  connectLamp() {
    this.lamp = true;
  }
  switchOff() {
    lampp.status = false;
  }
  switchOn() {
    lampp.status = true;
  }
}
