var game = true;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
  var fred = new Player(10,1,100,260)
c.addEventListener('keydown',fred._move)
function draw(){

ctx.clearRect(0,0, c.width, c.height);
ctx.beginPath();
ctx.rect(this._xLocation, this._yLocation, 10, 10);
ctx.stroke();

}
