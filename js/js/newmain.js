var batteryRabbit = new Battery(60);
var flashIphone = new Flashlamp(true, batteryRabbit.getEnergy());
flashIphone.turnOff();
console.log(flashIphone.flashlamp());
