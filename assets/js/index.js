var c = document.getElementById("preloader");
var ctx = c.getContext("2d");
var ch = c.height,
    cy = ch / 2 + 35;
var cw = c.width,
    cx = cw / 2;

var t = 0;

function Draw() {
  t += .9;
  ctx.clearRect(0, 0, cw, ch);
  drawPoint(t / 20, 13);
  requestId = window.requestAnimationFrame(Draw);
}

function drawPoint(t, r) {

  for (var i=6; i>0; i--) {
    var x = 95*Math.cos(t+i*2) + cx,
        y = (95*(Math.sin(2 * (t+i*2)) / 2) + cy)*0.7,
        xPrev = 95*Math.cos(t+(i+1)*2) + cx,
        yPrev = (95*(Math.sin(2 * (t+(i+1)*2)) / 2) + cy)*0.7;
      
      ctx.beginPath();
      ctx.moveTo(xPrev, yPrev);
      ctx.lineTo(x, y);
      ctx.lineWidth = 4;
      ctx.strokeStyle = "rgba(189,195,199,.65)";
      ctx.stroke();    
    
  }
  for (var i=7; i>0; i--) {
    var x = 95*Math.cos(t+i*2) + cx,
        y = (95*(Math.sin(2 * (t+i*2)) / 2) + cy)*0.7;
         
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = "#ECC13E";
    ctx.fill();   
    
  }
}
requestId = window.requestAnimationFrame(Draw);
