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