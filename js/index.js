const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

function startGame() {
  drawRoad();
  car.drawCar(215, 540);
}

function drawRoad() {
  const road = new Image();
  road.src = "./images/road.png";
  road.onload = function () {
    ctx.drawImage(road, 0, 0, 500, 700);
  };
}

class Car {
  constructor() {
    this.x = 215;
    this.y = 540;
  }

  drawCar(x, y) {
    const car = new Image();
    car.src = "./images/car.png";
    car.onload = function () {
      ctx.drawImage(car, x, y, 70, 140);
    };
  }

  moveLeft() {
    this.x -= 8;
  }
  moveRight() {
    this.x += 8;
  }
}

const car = new Car();

window.addEventListener("keydown", moveCar, true);

function moveCar(event) {
  switch (event.code) {
    case "ArrowLeft":
      // Handle "turn left"
      car.moveLeft();
      break;

    case "ArrowRight":
      // Handle "turn right"
      car.moveRight();
      break;
  }

  updateCanvas();
}

function updateCanvas() {
  ctx.clearRect(0, 0, 500, 700);
  car.drawCar();
}

updateCanvas();
