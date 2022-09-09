const slider = document.querySelector(`#font-size-control`);
const span = document.querySelector("#text");

span.style.fontSize = `${slider.value}px`;

slider.addEventListener("input", function (event) {
  span.style.fontSize = event.currentTarget.value + "px";
});
