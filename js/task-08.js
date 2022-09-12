const checkForm = document.querySelector(".login-form");
console.log(checkForm);

const handleSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert(`Заповніть всі поля!`);
    return;
  }

  const userData = {
    email: email.value,
    password: password.value,
  };

  console.log(userData);
};

checkForm.addEventListener("submit", handleSubmit);
