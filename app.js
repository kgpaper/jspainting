const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

// 캔버스의 크기 지정 (css와 별도)
canvas.width = 700;
canvas.height = 700;

let painting = false;
let filling = false;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

function stopPainting(event) {
  painting = false;
}

function startPainting(event) {
  painting = true;
}

function onMouseMove(event) {
  // 해당 캔버스의 좌표값인 offsetX, offsetY를 이용
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseDown(event) {
  painting = true;
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick(event) {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

if (canvas) {
  // mousemove : 마우스 움직임 감지
  canvas.addEventListener("mousemove", onMouseMove);
  // mousedown : 마우스 클릭 감지
  canvas.addEventListener("mousedown", startPainting);
  // mouseup : 마우스 클릭 후 클릭해제 감지
  canvas.addEventListener("mouseup", stopPainting);
  // mouseleave : 해당 객체에서 마우스가 벗어나는 것을 감지
  canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach((color) => color.addEventListener("click", handleColorClick));

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}
