class HumanObject {
  width;
  height;
  color;
  constructor(height, width, x, color) {
    this.x = x;
    this.width = width;
    this.height = height;
    this.coorX;
    this.coorY;
    this.color = color;
    this.humanTop = "/js/img/car.png";
    this.humanBottom = "/js/img/carBottom.png";
    this.humanLeft = "/js/img/carLeft.png";
    this.humanRight = "/js/img/carRight.png";
  }
  addHuman() {
    let humanImage = `<img src="${this.humanTop}" id="img_car" alt="" style="left: 0; top: 0 ;position = "relative";" />`;
    return humanImage;
  }
}
