var phoneCheck, emailCheck;
const submitButton = document.getElementById("submitButton");

function validateEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  if (emailRegex.test(email.value) && email.value !== "") {
    email.classList.add("is-valid");
    emailCheck = true;
  } else {
    email.classList.remove("is-valid");
    emailCheck = false;
  }
  log(emailRegex.test(phone.value));
  doValidate();
}

function validatePhone(phone) {
  const phoneRegex = /^((\+7|7|8)+([0-9]){10})$/;
  if (phoneRegex.test(phone.value) && phone.value !== "") {
    phone.classList.add("is-valid");
    phoneCheck = true;
  } else {
    phoneCheck = false;
    phone.classList.remove("is-valid");
  }
  log(phoneRegex.test(phone.value));
  doValidate();
}

function doValidate() {
  if (phoneCheck === true && emailCheck === true) {
    log(phoneCheck, emailCheck);
    submitButton.removeAttribute("disabled");
  } else {
    log("Invalid check");
    submitButton.setAttribute("disabled", "disabled");
  }
}

const email = document.getElementById("email");
const phone = document.getElementById("phone");

email.addEventListener("oninput", validateEmail, false);
phone.addEventListener("oninput", validatePhone, false);
