generatingStaff()
function redulid(){
    let capacity = document.getElementById("capacity");
    generatingStaff(capacity.value);
    capacity.value=""
}

function generate(){
  let generate = document.getElementById("generate");
  duplicateCreation(generate.value);
  generate.value=""
}

function duplicateCreation(num){
  let content = document.getElementById("content");
  let html = content.innerHTML;
  for (let i =0;i<num-1;i++){
      content.innerHTML += html;
  }
}

// 生成五线谱
function generatingStaff(number=32){
// 获得五线谱容器
// 获得五线谱容器宽度
let container = document.getElementById("container");
let containerWidth = container.clientWidth;

// 每排线谱的填充个数
// 每排线谱音符的占位宽度
let num = number;
let noteWidth = Math.floor(containerWidth / num);

// 生成音符占位盒子
let box = "";
for (let i = 0; i < num * 5; i++) {
  box += `<div id="noteline" style="width:${noteWidth}px">
          <div id="notebox" style="width:${noteWidth}px;height:13px"></div>
  </div>`;
}
container.innerHTML = box;
}

// 获得音符列表div
// 创建音符列表数组
let notelist = document.getElementById("notelist");
let notelistArray = [
  "",
  0,
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  12,
  14,
  `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-music-note" viewBox="0 0 16 16">
  <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M9 3v10H8V3h1z"/>
  <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z"/>
</svg>`,
];

// 根据音符列表数组生成音符
let notelistbox = "";
for (let i = 0; i < notelistArray.length; i++) {
  notelistbox += `<div id="notelistbox">${notelistArray[i]}</div>`;
}
notelist.innerHTML = notelistbox;

// 创建一个变量保存用户想绘制的音符
let change = "1";

// 当用户点击音符列表里的音符时，记录音符到change变量里
notelist.addEventListener("click", (e) => {
  let target = e.target;
  if (target.id === "notelistbox") {
    let text = target.innerHTML;
    change = text;
  }
});

// 当用户点击五线谱的时候，在点击位置添加音符
content.addEventListener("click", (e)=>{
    let target = e.target;
    if (target.id ==="notebox"){
        let note = `<div id='note'>${change}</div>`
        target.innerHTML=note
    }
})

// 当用户按下键盘按键时，保存用户的按键到change
window.addEventListener("keypress", (e)=>{
     change=e.key
});


