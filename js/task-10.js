function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputelement=document.querySelector("input");
const createbutton=document.querySelector("[data-create]");
const destroybutton=document.querySelector("[data-destroy]");
const boxelement=document.querySelector("#boxes");


createbutton.addEventListener ("click", ClickCreate);
destroybutton.addEventListener ("click", clickDestroy);



function ClickCreate (){
  const inputVal=Number(inputelement.value);
  boxelement.innerHTML="";
  boxCreate(inputVal);
}

function clickDestroy (){

  boxelement.innerHTML="";
  inputelement.value="";
  

}



function boxCreate(amount){

  let boxWidth=30;
  let boxHeigth=30;
  const arrbox=[];
for (let i = 0; i < amount; i+=1) {

  const box = document.createElement("div");
  box.style.width=`${boxWidth}px`;
  box.style.height=`${boxHeigth}px`;
  box.style.background=getRandomHexColor();
  arrbox.push(box);
  boxWidth+=10;
  boxHeigth+=10;
}
boxelement.append(...arrbox);
}



