var game = true;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
  var fred = new Player(10,1,100,260)
c.addEventListener('keydown',fred._move)
function draw(){

ctx.beginPath();
ctx.rect(100, 270, 25, 25);
ctx.fill();
ctx.stroke();


}
