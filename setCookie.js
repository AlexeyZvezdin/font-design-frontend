const { log } = console;

let cookieFormData;

const form = document.getElementById("main_form");

form.onsubmit = function(eve) {
  let fullname = form.elements.fullname.value;
  let companyName = form.elements.companyName.value;
  let city = form.elements.city.value;
  let country = form.elements.country.value;
  let index = form.elements.index.value;
  let postAddress = form.elements.postAddress.value;
  let phone = form.elements.phone.value;
  let email = form.elements.email.value;

  cookieFormData = {
    fullname,
    companyName,
    city,
    country,
    index,
    postAddress,
    phone,
    email
  };
  Cookies.set("fieldset", JSON.stringify(cookieFormData), {
    expires: 7,
    path: ""
  });
  // log(eve);
  // log(Cookies.get("fieldset"));
};

// cookieFormData.fullname = document.Cookies.set("name", "value", {
//   expires: 7,
//   path: ""
// });

// var cookieValue = document.cookie.replace(
//   /(?:(?:^|.*;\s*)test2\s*\=\s*([^;]*).*$)|^.*$/,
//   "$1"
// );

// log(Cookies.get("name"));
// log(document.cookie);
