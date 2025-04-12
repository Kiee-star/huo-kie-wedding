const canvas = document.getElementById('flowerCanvas');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let petals = [];
const total = 40;

class Petal {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * -height;
    this.r = 5 + Math.random() * 10;
    this.speed = 1 + Math.random() * 2;
    this.angle = Math.random() * Math.PI * 2;
  }

  update() {
    this.y += this.speed;
    this.x += Math.sin(this.angle);
    this.angle += 0.01;
    if (this.y > height) this.reset();
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = '#f48fb1';
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }
}

for (let i = 0; i < total; i++) petals.push(new Petal());

function animate() {
  ctx.clearRect(0, 0, width, height);
  petals.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

animate();
window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});
