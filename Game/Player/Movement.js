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

  ctx.clearRect(0,0, c.width, c.height)
  ctx.beginPath();
  ctx.rect(xLocation, yLocation, 15, 15);
  ctx.stroke();


}


document.onkeydown = move;
