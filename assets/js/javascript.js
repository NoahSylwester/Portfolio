
// *******
// begin code for splash page canvas
// *******

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
  x: undefined,
  y: undefined
}

var numberOfCircles = 200;

var maxRadius = 5;
var minRadius = 1;

var colorArray = [
  "rgba(255, 217, 0, 0.650)",
  "rgba(0, 128, 0, 0.650)",
  "rgba(172, 255, 47, 0.650)",
  "rgba(0, 0, 0, 0.650)",
  "rgba(0, 0, 0, 0.650)"
];

window.addEventListener('mousemove', function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener('resize', function(event) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
})

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }

  this.update = function() {
    if (this.x + this.radius > innerWidth - 5 || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight - 5 || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.y += this.dy;
    this.x += this.dx;

    // interactivity

    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
        mouse.y - this.y < 50 && mouse.y - this.y > -50) {
if (this.radius < maxRadius){
        this.radius += 1;
      }
    }
    else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  }
}

var circleArray = [];

function init() {

  circleArray = [];

  for (let i = 0; i < numberOfCircles; i++) {
    var radius = Math.random() * 1 + 1;
    var x = Math.random() * (innerWidth - 5 - radius * 2) + radius;
    var y = Math.random() * (innerHeight - 5 - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 0.5;
    var dy = (Math.random() - 0.5) * 0.5;
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

init();
animate();

// *******
// end code for splash page canvas
// *******

// *******
// begin code for main portfolio
// *******

// navigation events

$('#enter').on('click', function(event) {
  event.preventDefault();
  $('splashpage').attr({"class":"fadeout"});
  $('portfolio').removeClass("no-display");
  $('portfolio').attr({"class":"fadein"});
  setTimeout(function() {
    $('splashpage').addClass("no-display");
  }, 
  2000);
});

$('.navbar-brand').on('click', function(event) {
  event.preventDefault();
  $('splashpage').removeClass("no-display");
  $('portfolio').attr({"class":"fadeout"});
  $('splashpage').attr({"class":"fadein"});
  setTimeout(function() {
    $('portfolio').addClass("no-display");
  }, 
  2000);
});

$('')