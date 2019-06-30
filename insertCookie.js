function insertCookie() {
  let data = Cookies.get("fieldset");

  if (data) {
    const newData = JSON.parse(data);
    [
      phone,
      email,
      index,
      postAddress,
      country,
      city,
      companyName,
      fullname
    ].forEach(val => {
      // val.value = newData[val.name.toString()];
      val.defaultValue = newData[val.name.toString()];
      document.getElementById("hintField").setAttribute("hidden", "hidden");
      // log(newData[val.name.toString()], ` value of: ${val.name.toString()}`);
      // Here it would be nice to emit cascade of
      // all event listeners to
      // check values and doValidate(), but I
      // hvaent't find an optimised way to do it
      submitButton.removeAttribute("disabled");
    });
  }
}

// Cookies.remove("fieldset");
