const btnWishlist = document.getElementById("btn-wishlist");
const iconFav = document.querySelector("#btn-wishlist .bi");
let isFav = false;
btnWishlist.addEventListener("click", () => {
  iconFav.classList.remove("bi-heart");
  iconFav.classList.add("bi-heart-fill");
});
// AUTO SCROLL TO PACKAGE OPTIONS =============>>>>>>>>>>
const btnSelectOpt = document.getElementById("btn-select-options");
const btnSelectOpt2 = document.getElementById("btn-select-options2");
const compPackage = document.getElementById("package");
btnSelectOpt.addEventListener("click", () => {
  compPackage.scrollIntoView({ behavior: "smooth" });
});
btnSelectOpt2.addEventListener("click", () => {
  compPackage.scrollIntoView({ behavior: "smooth" });
});
// END AUTO SCROLL TO PACKAGE OPTIONS

// MAPPING PACKAGE OPTIONS =============>>>>>>>>>>
const containerPackage = document.getElementById("container-package");
const cardPackage = document.getElementById("card-package");
const totalCard = 5;

for (let i = 0; i < totalCard; i++) {
  let clonedCard = cardPackage.cloneNode(true);
  containerPackage.appendChild(clonedCard);
}
// END MAPPING PACKAGE OPTIONS

// SELECT PACKAGE =============>>>>>>>>>>
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
// END SELECT PACKAGE

// HANDLE QTY GUEST =============>>>>>>>>>>
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

inputAdult.addEventListener("input", (e) => {
  if (isNaN(e.target.value)) inputAdult.value = 1;
  handleCalc();
});
inputChild.addEventListener("input", () => {
  if (isNaN(e.target.value)) inputChild.value = 0;
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
// END HANDLE QTY GUEST

// MODAL DETAILS =============>>>>>>>>>>
const btnSeeDetails = document.getElementById("btn-see-details");
const btnClose = document.getElementById("btn-close");
const componentModal = document.querySelector(".comp-bg111");
const contentModal = document.querySelector(".content-modal1111");
btnSeeDetails.addEventListener("click", () => {
  componentModal.style.display = "grid";
});
contentModal.addEventListener("click", (e) => {
  e.stopPropagation();
});
componentModal.addEventListener("click", () => {
  componentModal.style.display = "none";
});
btnClose.addEventListener("click", () => {
  componentModal.style.display = "none";
});
// END MODAL DETAILS

// SCROLL OTHER DETAILS
const comp01 = document.getElementById("desc-asd1");
const comp02 = document.getElementById("desc-asd2");
const comp03 = document.getElementById("desc-asd3");
const compReview = document.getElementById("review-asd1");
const menuSide1 = document.getElementById("menu-nav1");
menuSide1.innerText = comp01.innerText;
menuSide1.addEventListener("click", () => {
  comp01.scrollIntoView({ behavior: "smooth" });
});
const menuSide2 = document.getElementById("menu-nav2");
menuSide2.innerText = comp02.innerText;
menuSide2.addEventListener("click", () => {
  comp02.scrollIntoView({ behavior: "smooth" });
});
const menuSide3 = document.getElementById("menu-nav3");
menuSide3.innerText = comp03.innerText;
menuSide3.addEventListener("click", () => {
  comp03.scrollIntoView({ behavior: "smooth" });
});
const menuSide4 = document.getElementById("menu-nav4");
menuSide4.innerText = compReview.innerText;
menuSide4.addEventListener("click", () => {
  compReview.scrollIntoView({ behavior: "smooth" });
});

function isElementInViewport(el) {
  // var rect = el.getBoundingClientRect();
  var rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight / 3 && rect.bottom >= 0;
  // return (
  //   rect.top >= 0 &&
  //   rect.left >= 0 &&
  //   rect.bottom <=
  //     (window.innerHeight || document.documentElement.clientHeight) &&
  //   rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  // );
}
function handleScroll() {
  const pointer = document.getElementById("pointer-menu111");
  if (isElementInViewport(comp01)) {
    pointer.style.marginTop = "0px";
  }
  if (isElementInViewport(comp02)) {
    pointer.style.marginTop = "50px";
  }
  if (isElementInViewport(comp03)) {
    pointer.style.marginTop = "100px";
  }
  if (isElementInViewport(compReview)) {
    pointer.style.marginTop = "150px";
  }
}
window.addEventListener("scroll", handleScroll);
// END SCROLL

// MAPPING REVIEW
const cardReview = document.getElementById("card-review1111");
const containerReview = document.getElementById("mapping-reviewcomp111");

const totalCardReview = 5;

for (let i = 0; i < totalCard; i++) {
  let clonedCard = cardReview.cloneNode(true);
  containerReview.appendChild(clonedCard);
}
// END MAPPING REVIEW
