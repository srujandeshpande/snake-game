genBoard()
function genBoard() {
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
  ctx.fillRect(gameCanvas.width-10, gameCanvas.height-10, 10, 10);
  ctx.strokeRect(gameCanvas.width-10, gameCanvas.height-10, 10, 10);
}
