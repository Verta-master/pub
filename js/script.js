var link = document.querySelector(".header__book");
var link_main = document.querySelector(".header__book--main");
var popup = document.querySelector(".modal");
var paint = document.getElementsByClassName("paint");
var pseudo = document.getElementsByClassName("menu__link::after");
var hand = document.querySelector(".header__book--main");
var logo = document.getElementsByClassName("logo-main");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.toggle("modal--show");
  if (popup.classList.contains("modal--show")) {
    link.innerHTML = "закрыть";
    link_main.style.color = "#fafafa";
    for (i = 0; i < paint.length; i++) {
      paint[i].style.color = "#848282";
    }
    for (i = 0; i < pseudo.length; i++) {
      pseudo[i].style.color = "#848282";
    }
    hand.style.backgroundImage = "url(img/hand-brown.png)";
    for (i = 0; i < logo.length; i++) {
      logo[i].style.color = "#795f4a";
    }
  } else {
    link.innerHTML = "БРОНЬ СТОЛА";
    link_main.style.color = "#636363";
    for (i = 0; i < paint.length; i++) {
      paint[i].style.color = "#fafafa";
    }
    for (i = 0; i < pseudo.length; i++) {
      pseudo[i].style.color = "#fafafa";
    }
    hand.style.backgroundImage = "url(img/hand.png)";
    for (i = 0; i < logo.length; i++) {
      logo[i].style.color = "#ddb18b";
    }
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