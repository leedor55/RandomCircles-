window.onload = function() {   
       var etc = new particle(30);
var load = setInterval(etc.drawBall.bind(etc), 10);
}
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var width = canvas.width;
var height = canvas.height;

function particle(r) {
   this.radius = r;
   this.x = Math.floor((Math.random() * 540 )  );
   this.y = Math.floor((Math.random() * 540 ) );
   this.color =  getRandomColor();
   this.dx = Math.random() - 0.5 *10;
   this.dy = Math.random() - 0.5 *10;  
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
    return color;
}
particle.prototype.drawBall= function () {
    this.x += this.dx;
    this.y += this.dy
   if ((this.x +this.radius)> width  || (this.x +this.dx)<this.radius) {
       this.dx = -this.dx;
       
   }
   if ((this.y +this.radius)> height  || (this.y +this.dy)<this.radius) {
       this.dy = -this.dy;
   }
   ctx.clearRect(0, 0, width, height);
   ctx.beginPath();
   ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
   ctx.fillStyle = this.color;
   ctx.fill();
   ctx.closePath();

}
        var etc = new particle(30);
        etc.drawBall();

