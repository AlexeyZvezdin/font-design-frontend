var phoneCheck,
  emailCheck,
  indexCheck,
  postAddressCheck,
  countryCheck,
  cityCheck,
  companyNameCheck,
  fullnameCheck;

const submitButton = document.getElementById("submitButton");

function validateFile(file) {
  log(file.dataTransfer);
}

function validateIndex(index) {
  let el = index.srcElement;
  if (el.value.length === 6 && !isNaN(el.value)) {
    el.classList.add("is-valid");
    indexCheck = true;
  } else {
    el.classList.remove("is-valid");
    indexCheck = false;
  }
  doValidate();
}

function validateFullname(fullname) {
  let el = fullname.srcElement;
  if (el.value.length >= 6 && el.value.indexOf(" ") > 2) {
    el.classList.add("is-valid");
    fullnameCheck = true;
  } else {
    el.classList.remove("is-valid");
    fullnameCheck = false;
  }
  doValidate();
}

function validateCompanyName(companyName) {
  let el = companyName.srcElement;
  if (el.value.length >= 3) {
    el.classList.add("is-valid");
    companyNameCheck = true;
  } else {
    el.classList.remove("is-valid");
    companyNameCheck = false;
  }
  doValidate();
}

function validateCountry(Country) {
  let el = Country.srcElement;
  if (el.value) {
    el.classList.add("is-valid");
    countryCheck = true;
  } else {
    el.classList.remove("is-valid");
    countryCheck = false;
  }
  doValidate();
}

function validateCity(city) {
  let el = city.srcElement;
  if (el.value.length >= 2) {
    el.classList.add("is-valid");
    cityCheck = true;
  } else {
    el.classList.remove("is-valid");
    cityCheck = false;
  }
  doValidate();
}

function validateEmail(email) {
  let el = email.srcElement;
  const emailRegex = /\S+@\S+\.\S+/;
  if (emailRegex.test(el.value) && el.value !== "") {
    el.classList.add("is-valid");
    emailCheck = true;
  } else {
    el.classList.remove("is-valid");
    emailCheck = false;
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
  } else {
    el.classList.remove("is-valid");
    phoneCheck = false;
  }
  log(phoneRegex.test(el.value));
  doValidate();
}

function doValidate() {
  if (
    phoneCheck === true &&
    emailCheck === true &&
    fullnameCheck === true &&
    countryCheck === true &&
    indexCheck === true &&
    cityCheck === true
  ) {
    log("companyNameCheck:", companyNameCheck, "cityCheck");
    submitButton.removeAttribute("disabled");
  } else {
    log("Invalid check");
    submitButton.setAttribute("disabled", "disabled");
  }
}

const email = document.getElementById("email");
const phone = document.getElementById("phone");
const index = document.getElementById("index");
const fullname = document.getElementById("fullname");
const companyName = document.getElementById("companyName");
const city = document.getElementById("city");
const country = document.getElementById("country");

email.addEventListener("input", validateEmail, false);
phone.addEventListener("input", validatePhone, false);
index.addEventListener("input", validateIndex, false);
fullname.addEventListener("input", validateFullname, false);
companyName.addEventListener("input", validateCompanyName, false);
city.addEventListener("input", validateCity, false);
country.addEventListener("input", validateCountry, false);
