class Monster extends Npc{
  constructor(playerLoc){
    super(hitPoints, damageOut, locX, locY);
    this._playerLoc = playerLoc;
  }
  _movement(playerLoc){
    if(locX != playerLoc.x -1 || locX != playerLoc.x +1){
      ,,,,
    }
  }
}
