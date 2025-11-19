const hambergerMenu = document.querySelector(".hamberger-menu");
const sideNav = document.querySelector(".side-nav");
const sideNavClose = document.querySelector(".side-nav-close");

hambergerMenu.addEventListener("click", function (e) {
  sideNav.classList.add("slide");
});

sideNavClose.addEventListener("click", function (e) {
  sideNav.classList.remove("slide");
});
