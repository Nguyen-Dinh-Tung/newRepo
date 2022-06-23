class Car {
  // Atb
  constructor(x, y, width, height, a, b, starX, starY, max) {
    this.x = x;
    this.y = y;
    this.a = a;
    this.b = b;
    this.brickX = Math.floor(Math.random() * 850);
    this.brickY = 0;
    this.width = width;
    this.height = height;
    this.starX = starX;
    this.starY = starY;
    this.max = max;
    this.index = 0;
    this.point = +document.getElementById("point").value;
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    // method
  }
  car() {
    return (
      "X : " +
      this.x +
      " Y: " +
      this.y +
      " width: " +
      this.width +
      " height : " +
      this.height
    );
  }
  drawCar() {
    let car_img = new Image();
    car_img.src = "/js/img/car.png";
    this.deleteCanvas();
    this.ctx.drawImage(car_img, this.x, this.y, this.width, this.height);
  }
  deleteCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  drawStar() {
    let star_image = new Image();
    star_image.src = "/js/img/star.jpg";
    this.ctx.drawImage(star_image, this.starX, this.starY, this.a, this.b);
  }
  drawObstacle() {
    let Obstacle_image = new Image();
    Obstacle_image.src = "/js/img/endGame.png";
    this.ctx.drawImage(
      Obstacle_image,
      this.brickX,
      this.brickY,
      this.a,
      this.b
    );
    moveBrick();
  }
  checkPoint() {
    let flag = true;
    if (
      this.starY > this.max - this.height &&
      this.starX >= this.x &&
      this.starX <= this.width + this.x
    ) {
      flag = true;
    } else {
      flag = false;
    }
    return flag;
  }
  checkLose() {
    setInterval(() => {
      this.deleteCanvas();
      this.drawObstacle();
      if (
        this.brickY > this.max - this.height &&
        this.brickX >= this.x &&
        this.brickX <= this.width + this.x
      ) {
        this.stop();
      } else if (this.brickY > this.y) {
        this.brickX = Math.floor(Math.random() * 850);
        this.brickY = 0;
        this.drawObstacle();
        this.checkLose();
        console.log("check Lose");
      }
    }, 2000);
  }
  start() {
    this.runInterval();
  }
  nextPlay() {
    setInterval(() => {
      this.deleteCanvas();
      moveStar();
      this.drawCar();
      this.drawStar();
      this.checkPoint();
      this.drawObstacle();
    }, 500);
  }
  stop() {
    alert("Bạn đã thua , vui lòng nhấn ok để chơi lại");
    location.reload();
    this.index = 0;
  }
  runInterval() {
    setInterval(() => {
      this.deleteCanvas();
      moveStar();
      this.drawCar();
      this.drawStar();
      this.checkPoint();
      this.drawObstacle();

      console.log(this.checkPoint());
      console.log(this.point);
      console.log(this.starY);
    }, 150);
  }
  runUpPoint() {
    this.deleteCanvas();
    this.starY = 0;
    this.point += 5;
  }
  runAgain() {
    this.deleteCanvas();
    this.starY = 0;
    this.nextPlay();
    console.log("hế lô");
  }
}
