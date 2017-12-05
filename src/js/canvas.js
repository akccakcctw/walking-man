import * as data from '../data/index';
// configs
const color0 = '#1B1A20'; // grey
const color1 = '#26F046'; // green
const radius = 4;
const animFPS = 5;
const canvasList = document.querySelectorAll('canvas');
const ctxObj = {};

canvasList.forEach((canvas) => {
  const name = canvas.dataset.type;
  ctxObj[name] = canvas.getContext('2d');
});

let nowAnimID;
let fpsInterval;
let now;
let then;
let elapsed;

const animIDs = {
  archery: {
    frame: '',
    len: data.archery.length,
    animIndex: 0,
  },
  artistic_gymnastics: {
    frame: '',
    len: data.artistic_gymnastics.length,
    animIndex: 0,
  },
};

function drawBulb(x, y, r, color, ctx = ctxObj[nowAnimID]) {
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
}

function drawPanel({
  index = 0,
  aName = data[nowAnimID],
  dotColor = 0,
  clear = false,
  context = ctxObj[nowAnimID],
} = {}) {
  let i = 0;
  aName[index].forEach((row) => {
    let j = 0;
    i++;
    row.forEach((dot) => {
      j++;
      if (!clear) {
        dotColor = dot === 0 ? color0
          : dot === 1 ? color1
            : color0;
      }
      drawBulb((j * 10) - 5, (i * 10) - 5, radius, dotColor, context);
    });
  });
}

function clearPanel(canvas = document.querySelector(`[data-type="${nowAnimID}"]`)) {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
  drawPanel({ clear: true }); // paint default panel
}

function anim() {
  const c = animIDs[nowAnimID];
  c.frame = requestAnimationFrame(anim);

  // 計算經過的時間
  now = Date.now();
  elapsed = now - then;

  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval); // 重設計時器
    clearPanel();
    drawPanel({ index: c.animIndex % c.len });
    c.animIndex++;
  }
}

function startAnim(fps) {
  fpsInterval = 1000 / fps;
  then = Date.now();
  anim();
}

function stopAnim() {
  const c = animIDs[nowAnimID];
  cancelAnimationFrame(c.frame);
}

Object.keys(animIDs).forEach((animID) => {
  nowAnimID = animID;
  drawPanel();
});

canvasList.forEach((canvas) => {
  canvas.addEventListener('mouseenter', (e) => {
    nowAnimID = e.currentTarget.dataset.type;
    startAnim(animFPS);
  });
});

canvasList.forEach((canvas) => {
  canvas.addEventListener('mouseleave', () => {
    stopAnim(nowAnimID);
  });
});
