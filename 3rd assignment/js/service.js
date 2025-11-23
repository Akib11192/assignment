const body = document.body;
const themeChanger = document.querySelector(".theme-change-header");

function updateUI() {
  const isDark = localStorage.getItem("theme") === "dark";

  if (isDark) {
    body.classList.add("dark");
    themeChanger.innerHTML = `<p class="md:block hidden">Light Mode</p><i class="fa-solid fa-sun"></i>`;
  } else {
    body.classList.remove("dark");
    themeChanger.innerHTML = `<p class="md:block hidden" >Dark Mode</p><i class="fa-solid fa-moon"></i>`;
  }
}

themeChanger.addEventListener("click", toggleTheme);

function toggleTheme() {
  body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark") ? "dark" : "light"
  );
  updateUI();
}

updateUI();
