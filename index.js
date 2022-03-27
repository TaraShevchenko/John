const buttonBurger = document.querySelector(".header__burger");
const buttonClose = document.querySelector(".header__close");
const menu = document.querySelector(".header__menu");
const shadow = document.querySelector(".shadow");

const menuToggle = () => {
  menu.classList.toggle("active");
  shadow.classList.toggle("active");
};

buttonBurger.addEventListener("click", menuToggle);
buttonClose.addEventListener("click", menuToggle);
shadow.addEventListener("click", menuToggle);
