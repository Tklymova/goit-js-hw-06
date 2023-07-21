const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEL=document.createElement ("ul");
for (const ingredient of ingredients) {
  const liEL=document.createElement ("li");
  liEL.textContent=ingredient;
  liEL.className="item"
  ulEL.appendChild(liEL)
  }
document.body.appendChild(ulEL)



