const body = document.body;
const hambergerMenu = document.querySelector(".hamberger-menu");
const sideNav = document.querySelector(".side-nav");
const sideNavClose = document.querySelector(".side-nav-close");
const themeChanger = document.querySelector(".theme-change-header");
const themeChanger2 = document.querySelector(".theme-changer-side-nav");
const aboutBtn = document.querySelector("#about");
const aboutBtn2 = document.querySelector("#about-2");
const aboutBtn3 = document.querySelector("#about-3");
const aboutME = document.querySelector("#about-me");
const hero = document.querySelector("main");

const homeBtn = document.querySelector("#home-btn");
const serviceBtn = document.querySelector("#service-btn");
const contactBtn = document.querySelector("#contact-btn");

const aboutDeleteBtn = document.querySelector(".about-cross");

hambergerMenu.addEventListener("click", function (e) {
  sideNav.classList.add("slide");
});

sideNavClose.addEventListener("click", function (e) {
  sideNav.classList.remove("slide");
});

function updateUI() {
  const isDark = localStorage.getItem("theme") === "dark";

  if (isDark) {
    body.classList.add("dark");
    themeChanger.innerHTML = `<p>Light Mode</p><i class="fa-solid fa-sun"></i>`;
    themeChanger2.innerHTML = `<p>Light Mode</p><i class="fa-solid fa-sun"></i>`;
  } else {
    body.classList.remove("dark");
    themeChanger.innerHTML = `<p>Dark Mode</p><i class="fa-solid fa-moon"></i>`;
    themeChanger2.innerHTML = `<p>Dark Mode</p><i class="fa-solid fa-moon"></i>`;
  }
}

themeChanger.addEventListener("click", toggleTheme);
themeChanger2.addEventListener("click", toggleTheme);

function toggleTheme() {
  body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark") ? "dark" : "light"
  );
  updateUI();
}

updateUI();
function openAbout(e) {
  // console.log("akib");
  aboutME.classList.add("active");
}

function closeSideNav() {
  sideNav.classList.remove("slide");
}

homeBtn.addEventListener("click", closeSideNav);
contactBtn.addEventListener("click", closeSideNav);
serviceBtn.addEventListener("click", closeSideNav);

aboutBtn.addEventListener("click", openAbout);
aboutBtn2.addEventListener("click", openAbout);

aboutBtn3.addEventListener("click", function () {
  aboutME.classList.add("active");
  sideNav.classList.remove("slide");
});

aboutDeleteBtn.addEventListener("click", function (e) {
  aboutME.classList.remove("active");
  // console.log("akib");
});
