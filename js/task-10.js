function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElement=document.querySelector("input");
const createButton=document.querySelector("[data-create]");
const destroyButton=document.querySelector("[data-destroy]");
const boxElement=document.querySelector("#boxes");


createButton.addEventListener ("click", ClickCreate);
destroyButton.addEventListener ("click", clickDestroy);



function ClickCreate (){
  const inputVal=Number(inputElement.value);
  boxElement.innerHTML="";
  boxCreate(inputVal);
}

function clickDestroy (){

  boxElement.innerHTML="";
  inputElement.value="";
  

}



function boxCreate(amount){

  let boxWidth=30;
  let boxHeigth=30;
  const arrBox=[];
for (let i = 0; i < amount; i+=1) {

  const box = document.createElement("div");
  box.style.width=`${boxWidth}px`;
  box.style.height=`${boxHeigth}px`;
  box.style.background=getRandomHexColor();
  arrBox.push(box);
  boxWidth+=10;
  boxHeigth+=10;
}
boxElement.append(...arrBox);
}



