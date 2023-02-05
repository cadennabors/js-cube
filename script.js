var c = document.getElementById("myCanvas");
var charspeed = 25;
var charrot = .05;
//var sinTheta = Math.sin(-.015);
//var cosTheta = Math.cos(-.015);
var sinTheta = Math.sin(-.015);
var cosTheta = Math.cos(-.015);
var playersin = Math.sin(90);
var playercos = Math.cos(90);
var wdown = false;
var adown = false;
var sdown = false;
var ddown = false;
var jdown = false;
var ldown = false;
var playercoor = [0,0,0];
var playerabs = [0,0,-500];
var renderverts = [0,0,0,0,0,0,0,0,0,0,0,0]
var renderverts1 = [0,0,0,0,0,0,0,0,0,0,0,0]
function renderrot() {
playersin = Math.sin(playercoor[2]);
playercos = Math.cos(playercoor[2]);
renderverts[2] += 500;
renderverts1[2] += 500;
renderverts[5] += 500;
renderverts1[5] += 500;
renderverts[8] += 500;
renderverts1[8] += 500;
renderverts[11] += 500;
renderverts1[11] += 500;
var x = renderverts[0];
var z = renderverts[2];

renderverts[0] = x * playercos + z * playersin;
renderverts[2] = z * playercos - x * playersin;
x = renderverts[3];
z = renderverts[5];
renderverts[3] = x * playercos + z * playersin;
renderverts[5] = z * playercos - x * playersin;
x = renderverts[6];
z = renderverts[8];
renderverts[6] = x * playercos + z * playersin;
renderverts[8] = z * playercos - x * playersin;
x = renderverts[9];
z = renderverts[11];
renderverts[9] = x * playercos + z * playersin;
renderverts[11] = z * playercos - x * playersin;
//face2
x = renderverts1[0];
z = renderverts1[2];
renderverts1[0] = x * playercos + z * playersin;
renderverts1[2] = z * playercos - x * playersin;
x = renderverts1[3];
z = renderverts1[5];
renderverts1[3] = x * playercos + z * playersin;
renderverts1[5] = z * playercos - x * playersin;
x = renderverts1[6];
z = renderverts1[8];
renderverts1[6] = x * playercos + z * playersin;
renderverts1[8] = z * playercos - x * playersin;
x = renderverts1[9];
z = renderverts1[11];
renderverts1[9] = x * playercos + z * playersin;
renderverts1[11] = z * playercos - x * playersin;
renderverts[2] -= 500;
renderverts1[2] -= 500;
renderverts[5] -= 500;
renderverts1[5] -= 500;
renderverts[8] -= 500;
renderverts1[8] -= 500;
renderverts[11] -= 500;
renderverts1[11] -= 500;
}
function render() {
  renderverts = [
  square[0],square[1],square[2],
  square[3],square[4],square[5],
  square[6],square[7],square[8],
  square[9],square[10],square[11]
  ]
  renderverts1 = [
    square1[0],square1[1],square1[2],
    square1[3],square1[4],square1[5],
    square1[6],square1[7],square1[8],
    square1[9],square1[10],square1[11]
    ]
  var playerz = playercoor[0];
  var playerx = playercoor[1];

  renderverts[2] -= playerz;
  renderverts1[2] -= playerz;
  renderverts[5] -= playerz
  renderverts1[5] -= playerz
  renderverts[8] -= playerz
  renderverts1[8] -= playerz
  renderverts[11] -= playerz
  renderverts1[11] -= playerz 
  renderverts[0] -= playerx;
  renderverts1[0] -= playerx;
  renderverts[3] -= playerx
  renderverts1[3] -= playerx
  renderverts[6] -= playerx
  renderverts1[6] -= playerx
  renderverts[9] -= playerx
  renderverts1[9] -= playerx 
  renderrot();
  var z = [
    //point1
    350 / (350 + renderverts[2]),
    //point2
    350 / (350 + renderverts[5]),
    //point3
    350 / (350 + renderverts[8]),
    //point 4
    350 / (350 + renderverts[11]),];

  var twodPoints = [
    //point1
    renderverts[0] * z[0], renderverts[1] * z[0],
    //point2
    renderverts[3] * z[1], renderverts[4] * z[1],
    //point3
    renderverts[6] * z[2], renderverts[7] * z[2],
    //point4
    renderverts[9] * z[3], renderverts[10] * z[3],
  ];
//  console.log("x1" + twodPoints[0]);
// console.log("y1" + twodPoints[1]);
// console.log("x2" + twodPoints[2]);
//  console.log("y2" + twodPoints[3]);
// console.log("x3" + twodPoints[4]);
// console.log("y3" + twodPoints[5]);
//  console.log("x4" + twodPoints[6]);
//  console.log("y4" + twodPoints[7]);
if (twodPoints[1] > 0 && twodPoints[3] > 0&&twodPoints[5]>0&&twodPoints[7]>0) {
 

ctx.fillRect(twodPoints[0], twodPoints[1], 2, 2);
ctx.fillRect(twodPoints[2], twodPoints[3], 2, 2);
ctx.fillRect(twodPoints[4], twodPoints[5], 2, 2);
ctx.fillRect(twodPoints[6], twodPoints[7], 2, 2);

drawLine(ctx, twodPoints[0], twodPoints[1], twodPoints[2], twodPoints[3], 'black', 6);
drawLine(ctx, twodPoints[2], twodPoints[3], twodPoints[4], twodPoints[5], 'black', 6);
drawLine(ctx, twodPoints[4], twodPoints[5], twodPoints[6], twodPoints[7], 'black', 6);
drawLine(ctx, twodPoints[6], twodPoints[7], twodPoints[0], twodPoints[1], 'black', 6);
}

  //thing2
  var z1 = [
    //point1
    350 / (350 + renderverts1[2]),
    //point2
    350 / (350 + renderverts1[5]),
    //point3
    350 / (350 + renderverts1[8]),
    //point 4
    350 / (350 + renderverts1[11]),];
  var twodPoints1 = [
    //point1
    renderverts1[0] * z1[0], renderverts1[1] * z1[0],
    //point2
    renderverts1[3] * z1[1], renderverts1[4] * z1[1],
    //point3
    renderverts1[6] * z1[2], renderverts1[7] * z1[2],
    //point4
    renderverts1[9] * z1[3], renderverts1[10] * z1[3],
  ];
 // console.log(twodPoints1[1])
 if (twodPoints1[1]<0&&twodPoints1[3]<0&&twodPoints1[5]<0&&twodPoints1[7]<0) {
 
 

  ctx.fillRect(twodPoints1[0], twodPoints1[1], 2, 2);
  ctx.fillRect(twodPoints1[2], twodPoints1[3], 2, 2);
  ctx.fillRect(twodPoints1[4], twodPoints1[5], 2, 2);
  ctx.fillRect(twodPoints1[6], twodPoints1[7], 2, 2);

  drawLine(ctx, twodPoints1[0], twodPoints1[1], twodPoints1[2], twodPoints1[3], 'black', 6);
  drawLine(ctx, twodPoints1[2], twodPoints1[3], twodPoints1[4], twodPoints1[5], 'black', 6);
  drawLine(ctx, twodPoints1[4], twodPoints1[5], twodPoints1[6], twodPoints1[7], 'black', 6);
  drawLine(ctx, twodPoints1[6], twodPoints1[7], twodPoints1[0], twodPoints1[1], 'black', 6);
 



  //connecting the two
  drawLine(ctx, twodPoints[0], twodPoints[1], twodPoints1[0], twodPoints1[1], 'black', 6);
  drawLine(ctx, twodPoints[2], twodPoints[3], twodPoints1[2], twodPoints1[3], 'black', 6);
  drawLine(ctx, twodPoints[4], twodPoints[5], twodPoints1[4], twodPoints1[5], 'black', 6);
  drawLine(ctx, twodPoints[6], twodPoints[7], twodPoints1[6], twodPoints1[7], 'black', 6);
}
}
document.addEventListener('keydown', function (w) {
  if (w.key === 'w') {
    //console.log('hei w')
   // playercoor[0] += charspeed;
   // console.log(playercoor[0]);
   wdown = true;
  } 
 // console.log(w.key)
  if (w.key === 's') {
    //console.log('hei w')
//    playercoor[0] -= charspeed;
    //console.log(playercoor[0]);
    sdown = true;
  }
  if (w.key === 'a') {
  //  console.log('hei a')
  //  playercoor[1] -= charspeed;
    //console.log(playercoor[1]);
    adown = true;
  }
  if (w.key === 'd') {
    //console.log('hei w')
//    playercoor[1] += charspeed;
  //  console.log(playercoor[1]);
  ddown = true;
  }
  if (w.key === 'j') {
    //  console.log('hei a')
  //  playercoor[2] -= charspeed;
   // console.log(playercoor[2]);
   //  console.log("a")
   jdown = true;
    
  }
  if (w.key === 'l') {
    //console.log('hei w')
 //   playercoor[2] += charspeed;
     // console.log(playercoor[2]);
     ldown = true;
  }
  
})
document.addEventListener('keyup', function (w) {
  if (w.key === 'w') {
    //console.log('hei w')
   // playercoor[0] += charspeed;
   // console.log(playercoor[0]);
   wdown = false;
  } 
 // console.log(w.key)
  if (w.key === 's') {
    //console.log('hei w')
//    playercoor[0] -= charspeed;
    //console.log(playercoor[0]);
    sdown = false;
  }
  if (w.key === 'a') {
  //  console.log('hei a')
  //  playercoor[1] -= charspeed;
    //console.log(playercoor[1]);
    adown = false;
  }
  if (w.key === 'd') {
    //console.log('hei w')
//    playercoor[1] += charspeed;
  //  console.log(playercoor[1]);
  ddown = false;
  }
  if (w.key === 'j') {
    //  console.log('hei a')
  //  playercoor[2] -= charspeed;
   // console.log(playercoor[2]);
   //  console.log("a")
   jdown = false;
    
  }
  if (w.key === 'l') {
    //console.log('hei w')
 //   playercoor[2] += charspeed;
     // console.log(playercoor[2]);
     ldown = false;
  }
  
})
var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
ctx.translate(c.width / 2, c.height / 2)
function clearScreen() {
  ctx.translate(c.width / -2, c.height / -2)
  c.height = window.innerHeight;
  c.width = window.innerWidth;
  ctx.clearRect(0, 0, c.width, c.height)
  // ctx.fillStyle = "#009ddf";
  //ctx.fillRect(0, 0, c.width, c.height);

  ctx.translate(c.width / 2, c.height / 2)
};

let angle = 10 * .1 * Math.PI * 2;
function drawLine(ctx, x1, y1, x2, y2, stroke = 'black', width = 3) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = stroke;
  ctx.lineWidth = width;
  ctx.stroke();
};

var renderspacecoor = [0, 0, playercoor[0] + 500]
var square = [-100, 100, -100,
  100, 100, -100,
  100, 100, 100,
-100, 100, 100]
square.push(square[0]);
square.push(square[1]);
var square1 = [-100, -100, -100,
  100, -100, -100,
  100, -100, 100,
-100, -100, 100]
square.push(square1[0]);
square.push(square1[1]);
function update() {
  if (wdown == true) {
  let direction = [    playercos,    0,    playersin  ];
  playercoor[0] += direction[0] * charspeed;
  playercoor[1] -= direction[2] * charspeed;
  }
 // console.log(w.key)
  if (sdown == true) {
    let direction = [    playercos,    0,    playersin  ];
    playercoor[0] -= direction[0] * charspeed;
    playercoor[1] += direction[2] * charspeed;
  }
  if (adown == true) {
    let direction = [    playersin,    0,    -playercos  ];
    playercoor[0] -= direction[0] * charspeed;
    playercoor[1] += direction[2] * charspeed;
  }
  if (ddown == true) {
    let direction = [    playersin,    0,    -playercos  ];
    playercoor[0] += direction[0] * charspeed;
    playercoor[1] -= direction[2] * charspeed;
  }
  if (jdown == true) {
    //  console.log('hei a')
    playercoor[2] += charrot;
   // console.log(playercoor[2]);
   //  console.log("a")
 //  jdown = true;
    
  }
  if (ldown == true) {
    //console.log('hei w')
   playercoor[2] -= charrot;
     // console.log(playercoor[2]);
  //   ldown = true;
  }
  //console.log(wdown)
  clearScreen();
  //square[0]=square[0] * Math.cos(15) - square[1] * Math.sin(15);
  //  square[1]= square[0] * Math.sin(15) + square[1] * Math.cos(15);
  //console.log(square[0] + ", " + square[1]);
  //square[0] = square[0] + 1

render();
//console.log(playercoor[2])

  var x = square[0];
  var z = square[2];

  square[0] = x * cosTheta + z * sinTheta;
  square[2] = z * cosTheta - x * sinTheta;
  x = square[3];
  z = square[5];
  square[3] = x * cosTheta + z * sinTheta;
  square[5] = z * cosTheta - x * sinTheta;
  x = square[6];
  z = square[8];
  square[6] = x * cosTheta + z * sinTheta;
  square[8] = z * cosTheta - x * sinTheta;
  x = square[9];
  z = square[11];
  square[9] = x * cosTheta + z * sinTheta;
  square[11] = z * cosTheta - x * sinTheta;
  //face2
  x = square1[0];
  z = square1[2];
  square1[0] = x * cosTheta + z * sinTheta;
  square1[2] = z * cosTheta - x * sinTheta;
  x = square1[3];
  z = square1[5];
  square1[3] = x * cosTheta + z * sinTheta;
  square1[5] = z * cosTheta - x * sinTheta;
  x = square1[6];
  z = square1[8];
  square1[6] = x * cosTheta + z * sinTheta;
  square1[8] = z * cosTheta - x * sinTheta;
  x = square1[9];
  z = square1[11];
  square1[9] = x * cosTheta + z * sinTheta;
  square1[11] = z * cosTheta - x * sinTheta;
}
setInterval(update, 10);
