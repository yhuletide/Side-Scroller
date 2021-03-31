var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
class Player {
  constructor(hitPoints, currentWeapon, xLocation, yLocation){
    this._hitPoints = hitPoints; // hitpoints for player
    this._currentWeapon = currentWeapon; // current weapon player has
    this._xLocation = xLocation; // x location of player
    this._ylocation = yLocation; // y location of player
  }

 _move(e){ // makes object (player) move on screen with W A S D keys
  if (e.keyCode == 87 && this._yLocation >= 225) {//up (w)
    this._yLocation -= 3;
  }
else if (e.keyCode == 83 && this._yLocation <= c.height -10) {//down (s)

    this._yLocation +=3;
  }
else if (e.keyCode == 65 && this._xLocation >= 0) {//left(a)
    this._xLocation -=3;
  }
else if (e.keyCode == 68 && this._xLocation <= c.width -10){//right(d)
    this._xLocation +=3;
  }
  

}



}
