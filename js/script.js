var link = document.querySelector(".header__book");
var popup = document.querySelector(".modal");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.toggle("modal--show");
  if (popup.classList.contains("modal--show")) {
    link.innerHTML = "закрыть"
  } else {
    link.innerHTML = "БРОНЬ СТОЛА"
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal--show")) {
      popup.classList.remove("modal--show");
      link.innerHTML = "БРОНЬ СТОЛА"
    }
  }
});

var navMain = document.querySelector(".menu");
var navToggle = document.querySelector(".menu__btn");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("menu--closed")) {
    navMain.classList.remove("menu--closed");
    navMain.classList.add("menu--opened");
  } else {
    navMain.classList.add("menu--closed");
    navMain.classList.remove("menu--opened");
  }
});