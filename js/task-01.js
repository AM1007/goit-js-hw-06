const categoriesEl = document.querySelector("#categories");
const categoriesItems = categoriesEl.children;
console.log("Number of categories:", categoriesItems.length);

const categoryElements = document.querySelectorAll(".item");

categoryElements.forEach((item) => {
  const categoryElTitle = item.querySelector("h2");
  const categoryElLength = item.querySelectorAll("li");

  console.log("Category:", categoryElTitle.textContent);
  console.log("Elements:", categoryElLength.length);
});
