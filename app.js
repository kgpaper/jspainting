const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting(event){

}

function onMouseMove(event){
  // 해당 캔버스의 좌표값인 offsetX, offsetY를 이용
  const x = event.offsetX;
  const y = event.offsetY;

}

function onMouseDown(event){
  painting = true;

}

function onMouseUp(event){
  stopPainting();
}


if(canvas){
  // mousemove : 마우스 움직임 감지
  canvas.addEventListener("mousemove", onMouseMove);
  // mousedown : 마우스 클릭 감지
  canvas.addEventListener("mousedown", onMouseDown);
  // mouseup : 마우스 클릭 후 클릭해제 감지
  canvas.addEventListener("mouseup", onMouseUp);
  // mouseleave : 해당 객체에서 마우스가 벗어나는 것을 감지
  canvas.addEventListener("mouseleave", stopPainting);
}