const numberCategories = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${numberCategories.length}`);

const categories = document.querySelectorAll("ul#categories li.item h2");

categories.forEach((category) => {
  console.log(`Category: ${category.textContent}`);
  console.log(`Elements: ${category.nextElementSibling.children.length}`);
});