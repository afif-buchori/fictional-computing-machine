const errFirstname = document.getElementById("err-fn");
const errLastName = document.getElementById("err-ln");
const errEmail = document.getElementById("err-email");
const errPhone = document.getElementById("err-phone");
const errCountry = document.getElementById("err-country");
const errPayment = document.getElementById("err-payment");

const inputFirstName = document.getElementById("first-name");
const inputLastName = document.getElementById("last-name");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const inputCountry = document.getElementById("country");
const inputRequest = document.getElementById("request");
const paymentRadioBtn = document.getElementsByName("payment");

function checkValidEmail(email) {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

inputFirstName.addEventListener("input", (e) => {
  if (e.target.value !== "") errFirstname.style.display = "none";
  else errFirstname.style.display = "block";
});
inputLastName.addEventListener("input", (e) => {
  if (e.target.value !== "") errLastName.style.display = "none";
  else errLastName.style.display = "block";
});
inputEmail.addEventListener("input", (e) => {
  if (e.target.value !== "") {
    if (!checkValidEmail(e.target.value)) {
      errEmail.style.display = "block";
      errEmail.innerText = "*email is invalid";
    } else {
      errEmail.style.display = "none";
    }
  } else {
    errEmail.style.display = "block";
    errEmail.innerText = "*input empty";
  }
});
inputPhone.addEventListener("input", (e) => {
  if (e.target.value !== "") {
    errPhone.style.display = "none";
  } else {
    errPhone.style.display = "block";
    errPhone.innerText = "*input empty";
  }
  if (isNaN(e.target.value)) {
    errPhone.style.display = "block";
    errPhone.innerText = "*invalid number";
  }
});
inputCountry.addEventListener("input", (e) => {
  if (e.target.value !== "") errCountry.style.display = "none";
  else errCountry.style.display = "block";
});

const btnSubmit = document.getElementById("submit-booking");
btnSubmit.addEventListener("click", () => {
  const isValidFn = inputFirstName.value !== "";
  const isValidLn = inputLastName.value !== "";
  const isValidEmail = inputEmail.value !== "";
  const isValidPhone = inputPhone.value !== "" && !isNaN(inputPhone.value);
  const isValidCountry = inputCountry.value !== "";

  let paymentSelected;
  for (const radioBtn of paymentRadioBtn) {
    if (radioBtn.checked) {
      paymentSelected = radioBtn.value;
    }
  }

  if (!isValidFn) errFirstname.style.display = "block";
  if (!isValidLn) errLastName.style.display = "block";
  if (isValidEmail) {
    if (!checkValidEmail(inputEmail.value)) {
      errEmail.style.display = "block";
      errEmail.innerText = "*email is invalid";
    }
  } else errEmail.style.display = "block";
  if (!isValidPhone) errPhone.style.display = "block";
  if (!isValidCountry) errCountry.style.display = "block";
  if (!paymentSelected) errPayment.style.display = "block";

  if (
    isValidFn &&
    isValidLn &&
    isValidEmail &&
    isValidPhone &&
    isValidCountry &&
    paymentSelected
  ) {
    const data = {
      first_name: inputFirstName.value,
      last_name: inputLastName.value,
      email: inputEmail.value,
      phone_number: inputPhone.value,
      country: inputCountry.value,
      payment_method: paymentSelected,
      special_request: inputRequest.value,
    };
    console.log(data);
  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});
