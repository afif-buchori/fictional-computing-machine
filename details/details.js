const containerPackage = document.getElementById("container-package");
const cardPackage = document.getElementById("card-package");
const totalCard = 5;

for (let i = 0; i < totalCard; i++) {
  let clonedCard = cardPackage.cloneNode(true);
  containerPackage.appendChild(clonedCard);
}

const compSelect = document.querySelector(".card-side111");
const formPackage = document.getElementById("form-package");
const btnSelect = document.getElementById("btn-select-package");
btnSelect.addEventListener("click", () => {
  compSelect.style.display = "none";
  formPackage.style.display = "flex";
});

const btnCancel = document.getElementById("cancle-book");
btnCancel.addEventListener("click", () => {
  compSelect.style.display = "flex";
  formPackage.style.display = "none";
});

const btnDescAdult = document.getElementById("btn-desc-adult");
const btnAscAdult = document.getElementById("btn-asc-adult");
const inputAdult = document.getElementById("adult");
btnAscAdult.addEventListener("click", () => {
  inputAdult.value = parseInt(inputAdult.value) + 1;
  handleCalc();
});
btnDescAdult.addEventListener("click", () => {
  const value = parseInt(inputAdult.value);
  if (value === 1) return;
  inputAdult.value = value - 1;
  handleCalc();
});

const btnDescChild = document.getElementById("btn-desc-child");
const btnAscChild = document.getElementById("btn-asc-child");
const inputChild = document.getElementById("child");
btnAscChild.addEventListener("click", () => {
  inputChild.value = parseInt(inputChild.value) + 1;
  handleCalc();
});
btnDescChild.addEventListener("click", () => {
  value = parseInt(inputChild.value);
  if (value < 1) return;
  inputChild.value = value - 1;
  handleCalc();
});

let price = 1499512;
const elemenPrice = document.querySelector(".total-price111");
elemenPrice.innerHTML = "Rp.  " + price.toLocaleString("id-ID");
const handleCalc = () => {
  const valAdult = parseInt(inputAdult.value);
  const valChild = parseInt(inputChild.value);
  let totalPrice = 0;
  totalPrice = price * valAdult + price * (valChild / 2);
  elemenPrice.innerHTML = "Rp.  " + totalPrice.toLocaleString("id-ID");
};
