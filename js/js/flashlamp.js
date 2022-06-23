class Flashlamp {
  status;
  battery;
  constructor(status, battery) {
    this.status = status;
    this.battery = battery;
  }
  flashlamp() {
    return "Trạng tái : " + this.status + " Dung lượng pin " + this.battery;
  }
  setBattery(battery) {
    this.battery = battery;
  }
  getBatteryInfo() {
    return this.battery;
  }
  light() {}
  turnOff() {
    this.status = false;
  }
  turnOn() {
    this.status = true;
  }
}
