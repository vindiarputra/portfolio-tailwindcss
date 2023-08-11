// hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//navbar fixed

// cara ke 1

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// cara 2
// window.addEventListener("scroll", function () {
//   const header = document.querySelector("header");
//   const fixedNav = header.offsetTop;

//   if (window.pageYOffset > fixedNav) {
//     header.classList.add("navbar-fixed");
//   } else {
//     header.classList.remove("navbar-fixed");
//   }
// });

// Klik Anywhere to open Menu

window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Dark Theme Toggle

// const darkToggle = document.querySelector("#dark-toggle");
// const html = document.querySelector("html");

// darkToggle.addEventListener("click", function () {
//   if (darkToggle.checked) {
//     html.classList.add("dark");
//   } else {
//     html.classList.remove("dark");
//   }
// });

// Dark Theme icon button

const darkToggle = document.querySelector("#dark-toggle");
const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    sun.classList.add("hidden");
    moon.classList.remove("hidden");
    localStorage.theme = "light";
  } else {
    html.classList.add("dark");
    sun.classList.remove("hidden");
    moon.classList.add("hidden");
    localStorage.theme = "dark";
  }
});
