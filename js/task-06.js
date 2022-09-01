const input = document.querySelector("#validation-input");

input.addEventListener("blur", onBlur);

function onBlur(a) {
  const inp = a.currentTarget;
  const inplength = Number(inp.dataset.length);

  if (inp.value.length === inplength) {
    inp.classList.remove("invalid");
    inp.classList.add("valid");
  } else {
    inp.classList.remove("valid");
    inp.classList.add("invalid");
  }
}
