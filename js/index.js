window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    let canvas = document.getElementById("canvas");
    canvas.style.backgroundImage = "url('/images/road.png')";
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundSize = "cover";

    let imgTag = document.createElement("img");
    console.log(imgTag);
    imgTag.setAttribute("src", "./images/car.png");
    imgTag.setAttribute("alt", "car image");
    imgTag.setAttribute("height", "200px");
    imgTag.setAttribute("width", "100px");

    let parent = document.getElementById("game-board");
    parent.appendChild(imgTag);
  }
};
