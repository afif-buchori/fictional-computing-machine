const errFirstname = document.getElementById("err-fn");
const errLastName = document.getElementById("err-ln");
const errEmail = document.getElementById("err-email");
const errPhone = document.getElementById("err-phone");
const errCountry = document.getElementById("err-country");
const inputFirstName = document.getElementById("first-name");
const inputLastName = document.getElementById("last-name");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const inputCountry = document.getElementById("country");

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
    } else errEmail.style.display = "none";
  } else {
    errEmail.style.display = "block";
    errEmail.innerText = "*input empty";
  }
});
inputPhone.addEventListener("input", (e) => {
  if (e.target.value !== "") errPhone.style.display = "none";
  else errPhone.style.display = "block";
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
  const isValidPhone = inputPhone.value !== "";
  const isValidCountry = inputCountry.value !== "";
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
});
