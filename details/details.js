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
