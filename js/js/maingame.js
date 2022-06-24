// call var
var car = new HumanObject(129, 69, 40, "blue");
let arBrick = [50 + "px", 50 + "px", 900, 0, 30, 870, 1820, 170];
let ArStar = [50 + "px", 50 + "px", 400 + "px", 500 + "px"];
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
let srcOne = "/js/img/backroundNew-1.jpg";
let srcTwo = "/js/img/bgNew-2.jpg";
let srcThree = "/js/img/bgNew-3.jpg";
let srcFor = "/js/img/bgNew-4.jpg";
let xMax = 1750;
let yMax = 850;
let index = 0;
let count = 0;
let timeSrc_1 = 5000;
let timeSrc_2 = 13000;

console.log(typeof bgChange);
// set background
setInterval(() => {
  if (!index) {
    img_background.src = srcThree;
    index++;
  } else if (index) {
    img_background.src = srcOne;
    index--;
  }
}, timeSrc_1);
setInterval(() => {
  if (!count) {
    img_background.src = srcFor;
    count++;
  } else if (count) {
    img_background.src = srcTwo;
    count--;
  }
}, timeSrc_2);

// start
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
  let checkXcarMax = img_car.style.left.slice(0, -2);

  img_car.style.left = parseInt(img_car.style.left) - car.x + "px";
  img_car.src = car.humanLeft;
  img_car.style.width = car.height + "px";
  img_car.style.height = car.width + "px";
  if (checkXcarMax + car.width <= 0) {
    img_car.style.left = xMax + "px";
  }
}
console.log(img_car.style.width);
function up() {
  let CheckYmaxcar = img_car.style.top.slice(0, -2);
  img_car.style.top = parseInt(img_car.style.top) - car.x + "px";
  console.log(CheckYmaxcar);
  img_car.src = car.humanTop;
  img_car.style.width = car.width + "px";
  img_car.style.height = car.height + "px";
  console.log(car.width);
  if (CheckYmaxcar + car.width <= 0) {
    img_car.style.top = yMax + "px";
  }
}
function left() {
  img_car.style.left = parseInt(img_car.style.left) + car.x + "px";
  let checkXcarMax = img_car.style.left.slice(0, -2);
  img_car.src = car.humanRight;
  img_car.style.width = car.height + "px";
  img_car.style.height = car.width + "px";
  console.log(img_car.style.left);
  if (checkXcarMax > xMax) {
    img_car.style.left = 0 + "px";
  }
}
function down() {
  let CheckYmaxcar = img_car.style.top.slice(0, -2);

  img_car.style.top = parseInt(img_car.style.top) + car.x + "px";
  img_car.src = car.humanBottom;
  img_car.style.width = car.width + "px";
  img_car.style.height = car.height + "px";
  if (CheckYmaxcar >= yMax - 50) {
    img_car.style.top = 0;
  }
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

// handle src background

// move add Event
function onLoad() {
  window.addEventListener("keydown", moveSelection);
  img_car.style.position = "relative ";
  brick.addBrick();
  brick.addBrickTwo();
  brick.addBrickThree();
  brick.moveBrick();
}
