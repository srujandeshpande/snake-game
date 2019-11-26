
var snakelen = 0;
var wpos = [200];
var hpos = [200];

var twpos = 0;
var thpos = 0;
genBoard()

function putFood(ctx) {
  var temp = 1
  var min = Math.ceil(0);
  var max = Math.floor(39);
  while(temp) {
    twpos = (Math.floor(Math.random() * (max - min + 1)) + min)*10;
    thpos = (Math.floor(Math.random() * (max - min + 1)) + min)*10;
    if(!wpos.includes(twpos) && !hpos.includes(thpos)){
      temp=0
    }
    ctx.fillStyle = "red";
    ctx.strokestyle = "black";
    ctx.fillRect(twpos, thpos, 10, 10);
    ctx.strokeRect(thwpos, thpos, 10, 10);
  }
}


function genBoard() {
  var c = document.getElementById("gameCanvas");
  var ctx = c.getContext("2d");

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
  ctx.strokestyle = "black";
  ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
  putFood(ctx);
  //ctx.fillStyle = 'lightgreen';
  //ctx.strokestyle = 'darkgreen';
  //ctx.fillRect(0, 0, 10, 10);
  //ctx.strokeRect(0, 0, 10, 10);


  //ctx.fillRect(gameCanvas.width-10, gameCanvas.height-10, 10, 10);
  //ctx.strokeRect(gameCanvas.width-10, gameCanvas.height-10, 10, 10);
}
