var phoneCheck,
  emailCheck,
  indexCheck,
  countryCheck,
  postAddressCheck,
  cityCheck,
  companyNameCheck,
  fullnameCheck,
  fileCheck;

const submitButton = document.getElementById("submitButton");

function validateFileLoad(file) {
  log(file.length);
  if (file.length > 0) {
    fileCheck = true;
    log(" It works");
    fileHint.setAttribute("hidden", "hidden");
  } else {
    log(" it doesnt");
    fileHint.removeAttribute("hidden");
  }
}

function validatePostAddress(postAddress) {
  let el = postAddress.srcElement;
  log(el.value.length);
  if (el.value.length > 6) {
    el.classList.add("is-valid");
    postAddressCheck = true;
    postAddressHint.setAttribute("hidden", "hidden");
  } else {
    el.classList.remove("is-valid");
    postAddressCheck = false;
    postAddressHint.removeAttribute("hidden");
  }
  doValidate();
}

function validateIndex(index) {
  let el = index.srcElement;
  if (el.value.length === 6 && !isNaN(el.value)) {
    el.classList.add("is-valid");
    indexCheck = true;
    indexHint.setAttribute("hidden", "hidden");
  } else {
    el.classList.remove("is-valid");
    indexCheck = false;
    indexHint.removeAttribute("hidden");
  }
  doValidate();
}

function validateFullname(fullname) {
  let el = fullname.srcElement;
  if (el.value.length >= 4 && el.value.indexOf(" ") >= 2) {
    el.classList.add("is-valid");
    fullnameCheck = true;
    fullnameHint.setAttribute("hidden", "hidden");
  } else {
    el.classList.remove("is-valid");
    fullnameCheck = false;
    fullnameHint.removeAttribute("hidden");
  }
  doValidate();
}

function validateCompanyName(companyName) {
  let el = companyName.srcElement;
  if (el.value.length >= 3) {
    el.classList.add("is-valid");
    companyNameCheck = true;
    companyNameHint.setAttribute("hidden", "hidden");
  } else {
    el.classList.remove("is-valid");
    companyNameCheck = false;
    companyNameHint.removeAttribute("hidden");
  }
  doValidate();
}

function validateCountry(Country) {
  let el = Country.srcElement;
  if (el.value) {
    el.classList.add("is-valid");
    countryCheck = true;
    countryHint.setAttribute("hidden", "hidden");
  } else {
    el.classList.remove("is-valid");
    countryCheck = false;
    countryHint.removeAttribute("hidden");
  }
  doValidate();
}

function validateCity(city) {
  let el = city.srcElement;
  if (el.value.length >= 2) {
    el.classList.add("is-valid");
    cityCheck = true;
    cityHint.setAttribute("hidden", "hidden");
  } else {
    el.classList.remove("is-valid");
    cityCheck = false;
    cityHint.removeAttribute("hidden");
  }
  doValidate();
}

function validateEmail(email) {
  let el = email.srcElement;
  const emailRegex = /\S+@\S+\.\S+/;
  if (emailRegex.test(el.value) && el.value !== "") {
    el.classList.add("is-valid");
    emailCheck = true;
    emailHint.setAttribute("hidden", "hidden");
  } else {
    el.classList.remove("is-valid");
    emailCheck = false;
    emailHint.removeAttribute("hidden");
  }
  log(emailRegex.test(email.value));
  doValidate();
}

function validatePhone(phone) {
  let el = phone.srcElement;
  const phoneRegex = /^((\+7|7|8)+([0-9]){10})$/;
  if (phoneRegex.test(el.value) && el.value !== "") {
    el.classList.add("is-valid");
    phoneCheck = true;
    phoneHint.setAttribute("hidden", "hidden");
  } else {
    el.classList.remove("is-valid");
    phoneCheck = false;
    phoneHint.removeAttribute("hidden");
  }
  log(phoneRegex.test(el.value));
  doValidate();
}

function doValidate() {
  if (
    fileCheck === true &&
    phoneCheck === true &&
    emailCheck === true &&
    fullnameCheck === true &&
    postAddressCheck === true &&
    countryCheck === true &&
    indexCheck === true &&
    cityCheck === true
  ) {
    log("companyNameCheck:", companyNameCheck, "cityCheck");
    submitButton.removeAttribute("disabled");
    hintField.setAttribute("hidden", "hidden");
    hintSuccess.removeAttribute("hidden");
  } else {
    log("Invalid check");
    submitButton.setAttribute("disabled", "disabled");
    hintField.removeAttribute("hidden");
    hintSuccess.setAttribute("hidden", "hidden");
  }
}

// Input elements
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const index = document.getElementById("index");
const fullname = document.getElementById("fullname");
const companyName = document.getElementById("companyName");
const city = document.getElementById("city");
const country = document.getElementById("country");
const postAddress = document.getElementById("postAddress");

email.addEventListener("input", validateEmail, false);
phone.addEventListener("input", validatePhone, false);
index.addEventListener("input", validateIndex, false);
fullname.addEventListener("input", validateFullname, false);
companyName.addEventListener("input", validateCompanyName, false);
city.addEventListener("input", validateCity, false);
country.addEventListener("input", validateCountry, false);
postAddress.addEventListener("input", validatePostAddress, false);

// Span hint elements

const emailHint = document.getElementById("emailField");
const phoneHint = document.getElementById("phoneField");
const indexHint = document.getElementById("indexField");
const fullnameHint = document.getElementById("nameField");
const companyNameHint = document.getElementById("companyField");
const cityHint = document.getElementById("cityField");
const countryHint = document.getElementById("countryField");
const fileHint = document.getElementById("fileField");
const postAddressHint = document.getElementById("postAddressField");

// hint divs
const hintField = document.getElementById("hintField");
const hintSuccess = document.getElementById("hintFieldSuccess");
