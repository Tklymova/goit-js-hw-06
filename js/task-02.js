const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulel=document.createElement ("ul");
for (const ingredient of ingredients) {
  const liel=document.createElement ("li");
  liel.textContent=ingredient;
  liel.className="item"
  ulel.appendChild(liel)
  }
document.body.appendChild(ulel)



