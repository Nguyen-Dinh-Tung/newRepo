class Battery {
  energy;
  constructor(energy) {
    this.energy = energy;
  }
  battery() {
    return this.energy + " Dung lượng pin";
  }
  setEnergy() {
    if (this.energy < 100) {
      this.energy++;
    }
  }
  getEnergy() {
    return this.energy + " Dung lượng pin còn";
  }
  decreaseEnergy() {
    if (this.energy > 0) {
      this.energy--;
    }
  }
}
