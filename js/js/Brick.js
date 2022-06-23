class Brick {
  width;
  height;
  constructor(
    width,
    height,
    corFirstX,
    corFristY,
    corNextX,
    corNextY,
    corLastX,
    corLastY
  ) {
    this.width = width;
    this.height = height;
    this.corFirstX = corFirstX;
    this.corFristY = corFristY;
    this.corNextX = corNextX;
    this.corNextY = corNextY;
    this.corLastX = corLastX;
    this.corLastY = corLastY;
    this.x = 15;
    this.flag = 0;
    this.time = 50;
  }
  addBrick() {
    let brickAdd = `<img src="/js/img/endGame.png" id="img_brick" style="left: ${this.corFirstX}px; top: ${this.corFristY}px;width:${this.width}; height:${this.height} ;position:relative;"/>`;
    startTwo.innerHTML = brickAdd;
  }
  addBrickTwo() {
    let brickAdd = `<img src="/js/img/endGame.png" id="img_brick_two" style="left: ${this.corNextX}px; top: ${this.corNextY}px;width:${this.width}; height:${this.height} ;position:relative;"/>`;
    startTwo.innerHTML += brickAdd;
  }
  addBrickThree() {
    let brickAdd = `<img src="/js/img/endGame.png" id="img_brick_three" style="left: ${this.corLastX}px; top: ${this.corLastY}px;width:${this.width}; height:${this.height} ;position:relative;"/>`;
    startTwo.innerHTML += brickAdd;
  }
  runAgain() {
    startTwo.innerHTML = "";
    startTwo.innerHTML = this.addBrick();
    startTwo.innerHTML += this.addBrickTwo();
    startTwo.innerHTML += this.addBrickThree();
    this.addBrick();
    this.addBrickTwo();
    this.addBrickThree();
  }
  moveBrick() {
    setInterval(() => {
      this.corFristY += this.x;
      this.corNextY -= this.x;
      this.corLastX -= this.x * 3;
      this.delayMover();
      this.randomXyBrick();
    }, this.time);
  }
  randomXyBrick() {
    setInterval(() => {
      if (this.flag > 2) {
        this.corFirstX = Math.floor(Math.random() * 1800);
        this.corNextX = Math.floor(Math.random() * 1800);
        this.corLastY = Math.floor(Math.random() * 900);
        this.addBrick();
        this.addBrickTwo();
        this.addBrickThree();
        this.flag = 0;
      }
    }, 2000);
  }
  delayMover() {
    let maxW = 1850;
    let maxH = 850;
    if (this.corFristY > maxH) {
      this.corFristY = 0;
      this.flag++;
    }
    if (this.corNextY < 0) {
      this.corNextY = maxH;
      this.flag++;
    }
    if (this.corLastX < 0) {
      this.corLastX = maxW;
      this.flag++;
    }
    this.addBrick();
    this.addBrickTwo();
    this.addBrickThree();
  }
}
// setInterval(() => {
//   if (brick.flag > 3) {
//     brick.time = "";
//     console.log("Check time");
//   }
// }, 100);
