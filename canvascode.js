var c = document.getElementById("gameCanvas");
var ctx = c.getContext("2d");

ctx.fillStyle = "white";
ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
ctx.strokestyle = "black";
ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);

ctx.fillStyle = 'lightgreen';
ctx.strokestyle = 'darkgreen';
ctx.fillRect(0, 0, 10, 10);
ctx.strokeRect(0, 0, 10, 10);
ctx.fillRect(100, 100, 10, 10);
ctx.strokeRect(100, 100, 10, 10);
//ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
//ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);

function drawSnakePart(snakex,snakey) {
  ctx.fillStyle = 'lightgreen';
  ctx.strokestyle = 'darkgreen';
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function drawSnake() {

}
