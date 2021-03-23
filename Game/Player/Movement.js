var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

class player {
  constructor(hitPoints, currentWeapon, xLocation, yLocation){
    this._hitPoints = hitpoints; // hitpoints for player
    this._currentWeapon = currentWeapon; // current weapon player has
    this._xLocation = xLocation; // x location of player
    this._ylocation = yLocation; // y location of player
  }
}
var xLocation = 100;
var yLocation = 290;

 function move(e){ // makes object (player) move on screen with W A S D keys

  if (e.keyCode == 87) {
    yLocation -=2.75;
  }
else if (e.keyCode == 83) {
  console.log("s");
    yLocation +=2.75;
  }
else if (e.keyCode == 65) {
    xLocation -=2.75;
  }
else if (e.keyCode == 68){
    xLocation +=2.75;
  }
  ctx.clearRect(0,0, c.width, c.height);
  ctx.beginPath();
  ctx.rect(xLocation, yLocation, 10, 10);
  ctx.stroke();
}

document.onkeydown = move;
