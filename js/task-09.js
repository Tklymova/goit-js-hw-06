function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorel = document.querySelector('.color');
const changecolorbutton=document.querySelector(".change-color");
const bodyel = document.body;

changecolorbutton.addEventListener ("click", () => {
  bodyel.style.backgroundColor = getRandomHexColor();
  colorel.textcontent = bodyel.style.backgroundColor;
});
  