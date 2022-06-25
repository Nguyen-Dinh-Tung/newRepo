// object car
alert("Ok để bắt đầu");
let car = new Car(410, 800, 80, 100, 50, 50, 425, 20);
let pointLayout = document.getElementById("result");
car.drawCar();
car.drawStar();
car.checkLose();
car.max = 900;
function moveSelection(evt) {
  switch (evt.keyCode) {
    case 37:
      car.x -= 30;
      break;
    case 39:
      car.x += 30;
      break;
  }
  car.drawCar();
  car.drawStar();
}
function moveStar() {
  car.starY += 40;
}
function moveBrick() {
  car.brickY += 30;
}
car.start();
setInterval(() => {
  if (car.checkPoint()) {
    car.starX = Math.floor(Math.random() * 850);
    car.runUpPoint();
    changePoint();
  } else if (car.starY > car.max) {
    car.starX = Math.floor(Math.random() * 850);
    car.runAgain();
    car.index++;
    console.log("Check Now");
  }
  if (car.index > 3) {
    car.stop();
  }
  console.log("Check nè " + pointLayout.value);
}, 1000);

function load() {
  window.addEventListener("keydown", moveSelection);
}
function changePoint() {
  pointLayout.innerHTML = car.point + " point";
}
