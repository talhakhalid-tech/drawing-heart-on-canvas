window.onload = function () {
  //definitions
  const canvas = document.getElementById("lab2-canvas");
  canvas.width = 900;
  canvas.height = 600;
  const context = canvas.getContext("2d");

  context.beginPath();
  context.lineWidth = 25;
  context.strokeStyle = "red";
  context.fillStyle = "pink";
  context.lineJoin = "round";
  context.lineCap = "round";
  context.moveTo(200, 150);
  context.quadraticCurveTo(250, 400, 450, 500);
  context.quadraticCurveTo(650, 400, 700, 150);
  context.bezierCurveTo(650, 0, 500, 0, 450, 150);
  context.bezierCurveTo(400, 0, 250, 0, 200, 150);
  context.stroke();
  context.fill();
};
