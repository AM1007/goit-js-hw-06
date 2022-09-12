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
  const liElement = document.createElement("li");
  liElement.textContent = elem;
  liElement.classList.add("item");
  return liElement;
});
ulElements.append(...ulArr);
