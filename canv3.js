(function() {
  var SIZE = 400; //SIZE OF CANVAS
  var GRID_SIZE = SIZE / 50;
  var c = document.getElementById('c');
  c.height = c.width = SIZE;
  c.style.width = c.style.height = SIZE + 'px';
  var context = c.getContext('2d');

  var direction = newDirection = 1; // -2: up, 2: down, -1: left, 1: right
  var snakeLength = 5;
  var snake = [{x: SIZE / 2, y: SIZE / 2}]; //STARTING OF SNAKE IN CENTRE
  var candy = null;
  var end = false;

  function randomOffset() {
    return Math.floor(Math.random() * SIZE / GRID_SIZE) * GRID_SIZE;
  }

  function stringifyCoord(obj) {
    return [obj.x, obj.y].join(',');
  }

  function tick() {
    var newHead = {x: snake[0].x, y: snake[0].y};

    // ONLY CHANGING DIRECTION IF IT IS DIFFERENT AXIS
    if (Math.abs(direction) !== Math.abs(newDirection)) {
      direction = newDirection;
    }
    var axis = Math.abs(direction) === 1 ? 'x' : 'y'; // 1, -1 are X and 2, -2 are Y
    if (direction < 0) {
      newHead[axis] -= GRID_SIZE; //MOVING LEFT OR DOWN
    } else {
      newHead[axis] += GRID_SIZE; //MOVING RIGHT OR UP
    }

    //CHECKING IF SNAKE ATE CANDY
    if (candy && candy.x === newHead.x && candy.y === newHead.y) {
      candy = null;
      snakeLength += 5;
      var currhs = document.getElementById('currscore');
      currhs.innerHTML = snakeLength;
    }

    context.fillStyle = '#002b36';
    context.fillRect(0, 0, SIZE, SIZE); //RESET THE CANVAS
    if (end) {
      context.fillStyle = '#eee8d5';
      context.font = '40px serif';
      context.textAlign = 'center';
      context.fillText('Game Over.', SIZE / 2, SIZE / 2);
      var one = document.getElementById('one');
      one.innerHTML = "&nbsp&nbsp"+snakeLength;
    } else {
      snake.unshift(newHead); //ADDING A NEW HEAD
      snake = snake.slice(0, snakeLength); //MAKING SURE SNAKE IS SNAKE NOT MORE SNAKE
    }

    //CHECKING IF IT HIT WALL
    if (newHead.x < 0 || newHead.x >= SIZE || newHead.y < 0 || newHead.y >= SIZE) {
      end = true;
    }

    context.fillStyle = '#268bd2';
    var snakeObj = {};
    for (var i = 0; i < snake.length; i++) {
      var a = snake[i];
      context.fillRect(a.x, a.y, GRID_SIZE, GRID_SIZE); //SNAKE COLOUR
      //CHECKING COLLISION
      if (i > 0) snakeObj[stringifyCoord(a)] = true;
    }

    if (snakeObj[stringifyCoord(newHead)]) end = true; //IF SNAKE HIT TAIL

    //PUTTING CANDY
    while (!candy || snakeObj[stringifyCoord(candy)]) {
      candy = {x: randomOffset(), y: randomOffset()};
    }

    context.fillStyle = '#b58900'; //CANVAS STUFF
    context.fillRect(candy.x, candy.y, GRID_SIZE, GRID_SIZE); // Paint the candy
  }

  window.onload = function() {
    setInterval(tick, 100); //TIMER
    window.onkeydown = function(e) {
      if (e.keyCode == 81) {
            var a = confirm('Are you sure you want to quit?!?!?!?!');
            if(a) end = 1;
      }
      if (e.keyCode == 80) {
            alert('Game is paused. Press Enter to Resume');
            end = 0;
      }
      newDirection = {37: -1, 38: -2, 39: 1, 40: 2}[e.keyCode] || newDirection;
    };
  };
})();
