const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("ul");

const elements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const ingts = ingredients[i];

  const liEl = document.createElement("li");
  liEl.textContent = ingts;
  liEl.classList.add("item");

  elements.push(liEl);
}

ulEl.append(...elements);
