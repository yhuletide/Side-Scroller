var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
class Player {
  constructor(hitPoints, currentWeapon, xLocation, yLocation){
    this._hitPoints = hitPoints; // hitpoints for player
    this._currentWeapon = currentWeapon; // current weapon player has
    this._xLocation = xLocation; // x location of player
    this._ylocation = yLocation; // y location of player
  }


}


  xLocation = 100;
  yLocation = 300;

function move(e){ // makes object (player) move on screen with W A S D keys

  if (e.keyCode == 87 && yLocation >= 225 ) {//up (w)

    yLocation -= 3;
  }
  if (e.keyCode == 83 && yLocation <= c.height -10) {//down (s)

    yLocation +=3;
  }
  if (e.keyCode == 65 && xLocation >= 0) {//left(a)

    xLocation-=3;
  }
  if (e.keyCode == 68 && xLocation <= c.width -10) {//right(d)

    xLocation +=3;
  }
  var knight = new Image();
  knight.src = "walk.png";
  knight.width = 25;
  knight.height = 25;
  ctx.drawImage(knight, 30, 30, 365, 365);
}
  function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function(knight) {
      ctx = myGameArea.context;
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function(knight) {
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }

  function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
  }

  function moveup() {
    myGamePiece.speedY -= 0;
  }

  function movedown() {
    myGamePiece.speedY += 0;
  }

  function moveleft() {
    myGamePiece.speedX -= 5;
  }

  function moveright() {
    myGamePiece.speedX += 5;
  }
  </script>

  <button onclick="moveup()">UP</button>
  <button onclick="movedown()">DOWN</button>
  <button onclick="moveleft()">LEFT</button>
  <button onclick="moveright()">RIGHT</button>
}

}


document.onkeydown = move;
