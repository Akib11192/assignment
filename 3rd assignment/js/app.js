const body = document.body;
const hambergerMenu = document.querySelector(".hamberger-menu");
const sideNav = document.querySelector(".side-nav");
const sideNavClose = document.querySelector(".side-nav-close");
const themeChanger = document.querySelector(".theme-change-header");
const themeChanger2 = document.querySelector(".theme-changer-side-nav");
const aboutBtn = document.querySelector("#about");
const aboutBtn2 = document.querySelector("#about-2");
const aboutDeleteBtn = document.querySelector(".about-cross");
const aboutME = document.querySelector("#about-me");

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
aboutBtn.addEventListener("click", openAbout);
aboutBtn2.addEventListener("click", openAbout);

aboutDeleteBtn.addEventListener("click", function (e) {
  console.log("first");
  aboutME.classList.remove("active");
});
