window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    drawRoad();
    drawCar();
  }

  function drawRoad() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.style.backgroundImage = "url('./images/road.png')";
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundSize = "cover";
  }
  function drawCar() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const car = new Image();
    car.src = "./images/car.png";
    car.onload = function () {
      ctx.drawImage(car, 215, 560, 70, 140);
    };
  }
};
