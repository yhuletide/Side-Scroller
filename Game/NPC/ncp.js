class Npc {
  constructor(hitPoints, damageOut, location){
    this._hitPoints = hitPoints;//The current health of an NPC
    this._damageOut = damageOut;//the amount of damage an NPC will do
    this._locX = locX;//Xcoord
    this._locY = locY;//Y coord
  }
  function movment(direction)(){//function that will handle movment for all of the NPC it exspects a string of up,down,left, or right
    if (direction == "up"){this._locY = this._locY +1}//will make the NPC go up
    else if(direction == "down")(this._locY = this.locY -1)//Will make the npc go down
    else if (direction == "left"){this._locY = this._locX +1}//will make the NPC go left
    else if(direction == "right")(this._locY = this.locX -1)//Will make the npc go right
    else {console.log("Wrong input! Exspected left right up or down and got " + direction + "!");}//this 
  }
}
