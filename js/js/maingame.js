// call var
var car = new HumanObject(129, 69, 40, "blue");
let arBrick = [30 + "px", 30 + "px", 900, 0, 30, 870, 1820, 170];
let ArStar = [30 + "px", 30 + "px", 400 + "px", 500 + "px"];
// New Object
var star = new Star(ArStar[0], ArStar[1], ArStar[2], ArStar[3]);
var brick = new Brick(
  arBrick[0],
  arBrick[1],
  arBrick[2],
  arBrick[3],
  arBrick[4],
  arBrick[5],
  arBrick[6],
  arBrick[7]
);
var checkPoin = new Checkpoint();
// get Element
let start = document.getElementById("start");
let startTwo = document.getElementById("start_two");
let starThree = document.getElementById("start_three");
let point = document.getElementById("result");
let img_background = document.getElementById("img_background");
let srcOne = "/js/img/background-2.jpg";
let srcTwo = "/js/img/background-1.jpg";
setInterval(() => {
  img_background.src = srcOne;
}, 15000);
setInterval(() => {
  img_background.src = srcTwo;
}, 30000);
// call start
start.innerHTML = car.addHuman();
// startTwo.innerHTML = brick.addBrick();
// startTwo.innerHTML += brick.addBrickTwo();
// startTwo.innerHTML += brick.addBrickThree();
starThree.innerHTML += star.addStarAgain();

let img_car = document.getElementById("img_car");
// call brick
// var width height img
img_car.style.width = car.width + "px";
img_car.style.height = car.height + "px";
// move
function right() {
  img_car.style.left = parseInt(img_car.style.left) - car.x + "px";
  img_car.src = car.humanLeft;
  img_car.style.width = car.height + "px";
  img_car.style.height = car.width + "px";
}
console.log(img_car.style.width);
function up() {
  img_car.style.top = parseInt(img_car.style.top) - car.x + "px";
  img_car.src = car.humanTop;
  img_car.style.width = car.width + "px";
  img_car.style.height = car.height + "px";
  console.log(car.width);
}
function left() {
  img_car.style.left = parseInt(img_car.style.left) + car.x + "px";
  img_car.src = car.humanRight;
  img_car.style.width = car.height + "px";
  img_car.style.height = car.width + "px";
}
function down() {
  img_car.style.top = parseInt(img_car.style.top) + car.x + "px";
  img_car.src = car.humanBottom;
  img_car.style.width = car.width + "px";
  img_car.style.height = car.height + "px";
}
// moveKey code
function moveSelection(evt) {
  switch (evt.keyCode) {
    case 37:
      right();
      break;
    case 38:
      up();
      break;
    case 39:
      left();
      break;
    case 40:
      down();
      break;
  }
  car.coorX = img_car.style.left;
  car.coorY = img_car.style.top;
  checkPoin.checkPoint();
  checkPoin.checkLose();
}
// move add Event
function onLoad() {
  window.addEventListener("keydown", moveSelection);
  img_car.style.position = "relative ";
  brick.addBrick();
  brick.addBrickTwo();
  brick.addBrickThree();
  brick.moveBrick();
}
