const btnFilter = document.getElementById("btn-filter");
const compFilter = document.getElementById("component-filter");
const btnSubmitFilter = document.getElementById("submit-filter");

btnFilter.addEventListener("click", () => {
  // console.log(btnFilter.checked);
  if (btnFilter.checked) {
    compFilter.style.display = "flex";
  } else {
    compFilter.style.display = "none";
  }
});

const handleClose = () => {
  btnFilter.checked = false;
  compFilter.style.display = "none";
};
const btnClose = document.getElementById("btn-close");
btnClose.addEventListener("click", handleClose);
compFilter.addEventListener("click", handleClose);

const containerMenu = document.querySelector(".dropcontent-filter");
containerMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

btnSubmitFilter.addEventListener("click", () => {
  console.log("SUBMIT");
  handleClose();
});

// MAPPING CARD
const totalCard = 14;
const containerCard = document.querySelector("#container-card");
const cardProduct = document.querySelector(".cardprod");

for (let i = 0; i < totalCard; i++) {
  let clonedCard = cardProduct.cloneNode(true);
  containerCard.appendChild(clonedCard);
}
// END MAPPING CARD

const containerPopularCard = document.getElementById("container-popularcard");
for (let x = 0; x < totalCard / 2; x++) {
  cardProduct.style.width = "240px";
  let cloneCard = cardProduct.cloneNode(true);
  containerPopularCard.appendChild(cloneCard);
}

const btnPrev = document.getElementById("btn-slide-prev");
const btnNext = document.getElementById("btn-slide-next");
const scrollable = document.getElementById("container-popularcard");
let valScroll = 0;
// const checkBtnSlide = () => {
//   if (valScroll === 0) {
//     btnPrev.style.display = "none";
//   }
// };
// checkBtnSlide();
btnNext.addEventListener("click", () => {
  valScroll -= 260;
  scrollable.style.transform = `translateX(${valScroll}px)`;
  // checkBtnSlide();
});
btnPrev.addEventListener("click", () => {
  // if (valScroll < 1) return;
  valScroll += 260;
  scrollable.style.transform = `translateX(${valScroll}px)`;
  // checkBtnSlide();
});
