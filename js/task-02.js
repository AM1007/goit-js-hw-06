const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElements = document.querySelector("#ingredients");

const ulArr = ingredients.map((elem) => {
  const liEl = document.createElement("li");
  liEl.textContent = elem;
  liEl.classList.add("item");
  return liEl;
});
ulElements.append(...ulArr);
