class Star {
  // atb
  width;
  height;
  constructor(height, width, coorX, coorY) {
    this.width = width;
    this.height = height;
    this.coorX = coorX;
    this.coorY = coorY;

    this.starImg = "/js/img/star.jpg";
  }
  // method
  addStar() {
    let imgStar = `<img src="${this.starImg}" id="imgStar" alt="" style="left: ${this.coorX}; top:  ${this.coorY} ; width: ${this.width} ;width: ${this.height}  ;position:relative;" />`;
    return imgStar;
  }
  addStarAgain() {
    let xRandom = Math.floor(Math.random() * 1700);
    let yRandom = Math.floor(Math.random() * 750);
    this.coorX = xRandom + "px";
    console.log(this.coorX);
    this.coorY = yRandom + "px";
    return this.addStar();
  }
  deleteStar() {
    starThree.innerHTML = "";
  }
}
class Checkpoint {
  constructor(a) {
    this.flag == 0;
    this.point = 0;
  }
  checkPoint() {
    let car_x = Number(car.coorX.slice(0, -2));
    let star_x = Number(star.coorX.slice(0, -2));
    let star_width = Number(star.width.slice(0, -2));
    let star_height = Number(star.height.slice(0, -2));
    let car_height = Number(car.height);
    let car_width = Number(car.width);
    let car_y = Number(car.coorY.slice(0, -2));
    let star_y = Number(star.coorY.slice(0, -2));
    if (
      car_x + car_height >= star_x &&
      car_x <= star_x + star_width &&
      car_y + star_width >= star_y &&
      car_y <= star_y + star_height
    ) {
      console.log("check Point" + car_x);
      this.point += 5;
      point.innerHTML = this.point;
      star.deleteStar();
      starThree.innerHTML += star.addStarAgain();
    }
  }
  checkLose() {
    let brick_width = Number(brick.width.slice(0, -2));
    let brick_height = Number(brick.height.slice(0, -2));
    let brick_corFirstX = Number(brick.corFirstX);
    let brick_corFristY = Number(brick.corFristY);
    let brick_corNextX = Number(brick.corNextX);
    let brick_corNextY = Number(brick.corNextY);
    let brick_corLastX = Number(brick.corLastX);
    let brick_corLastY = Number(brick.corLastY);
    let car_x = Number(car.coorX.slice(0, -2));
    let car_height = Number(car.height);
    let car_width = Number(car.width);
    let car_y = Number(car.coorY.slice(0, -2));
    console.log(brick_corFristY);
    if (
      car_x + car_height >= brick_corFirstX &&
      car_x <= brick_corFirstX + brick_width &&
      car_y + brick_width >= brick_corFristY &&
      car_y <= brick_corFristY + brick_height
    ) {
      alert("you lose Tại lại web để chơi tiếp");
      document.write("Số điểm của bạn là : " + point.innerHTML);
    } else if (
      car_x + car_height >= brick_corNextX &&
      car_x <= brick_corNextX + brick_width &&
      car_y + brick_width >= brick_corNextY &&
      car_y <= brick_corNextY + brick_height
    ) {
      alert("you lose Tại lại web để chơi tiếp");
      document.write("Số điểm của bạn là : " + point.innerHTML);
    } else if (
      car_x + car_height >= brick_corLastX &&
      car_x <= brick_corLastX + brick_width &&
      car_y + brick_width >= brick_corLastY &&
      car_y <= brick_corLastY + brick_height
    ) {
      alert("you lose Tại lại web để chơi tiếp");
      document.write("Số điểm của bạn là : " + point.innerHTML);
    }
  }
}
