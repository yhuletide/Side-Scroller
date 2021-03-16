class Npc {
  constructor(hitPoints, damageOut, location){
    this._hitPoints = hitPoints;//The current health of an NPC
    this._damageOut = damageOut;//the amount of damage an NPC will do
    this._locX = locX;//Xcoord
    this._locY = locY;//Y coord
  }
  function movment(direction)(){//function that will handle movment for all of the NPC it exspects a string of up,down,left, or right
    if (direction == "up"){this._locY = this._locy +1}//will make the NPC go up
    else if(direction == "down")(this._locY = this.locY -1)//Will make the npc go down
  }
}
