
var snakelen = 0;
var wpos = [200];
var hpos = [200];

var twpos = 0;
var thpos = 0;
genBoard()


function genSnake(ctx) {
  for (var i =0;i<wpos.length;i++) {
    ctx.fillStyle = 'lightgreen';
    ctx.strokestyle = 'darkgreen';
    ctx.fillRect(wpos[i], hpos[i], 10, 10);
    ctx.strokeRect(wpos[i], hpos[i], 10, 10);
  }
}

function putFood(ctx) {
  var temp = 1
  var min = Math.ceil(0);
  var max = Math.floor(39);
  //while(temp) {
    twpos = (Math.floor(Math.random() * (max - min + 1)) + min)*10;
    thpos = (Math.floor(Math.random() * (max - min + 1)) + min)*10;
    if(!wpos.includes(twpos) && !hpos.includes(thpos)){
      temp=0;
    }
    ctx.fillStyle = "red";
    ctx.strokestyle = "black";
    ctx.fillRect(twpos, thpos, 10, 10);
    ctx.strokeRect(thwpos, thpos, 10, 10);
    return;
    //break;
  //}
}



function genBoard() {
  var c = document.getElementById("gameCanvas");
  var ctx = c.getContext("2d");

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
  ctx.strokestyle = "black";
  ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
  while(true){
    //putFood(ctx);
    genSnake(ctx);

    for(var i =0;i<wpos.length;i++) {
      //wpos[i]-=10;
      hpos[i]-=10;
    }
    setTimeout(genSnake, 3000, ctx)
    break;
  }
  //genSnake(ctx);
  //putFood(ctx);
  //ctx.fillStyle = 'lightgreen';
  //ctx.strokestyle = 'darkgreen';
  //ctx.fillRect(0, 0, 10, 10);
  //ctx.strokeRect(0, 0, 10, 10);


  //ctx.fillRect(gameCanvas.width-10, gameCanvas.height-10, 10, 10);
  //ctx.strokeRect(gameCanvas.width-10, gameCanvas.height-10, 10, 10);
}
