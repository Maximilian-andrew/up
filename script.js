var slides = document.getElementsByClassName("slide");
var currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

function startSlideshow() {
  slides[currentSlide].classList.add("active");
  setInterval(showNextSlide, 15000); // Alle 15 Sekunden wechseln
}

startSlideshow();

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    document.querySelector(".line").style.top = "80px"; // Anpassen Sie hier den Wert auf den gewünschten Abstand zur Kopfzeile
  } else {
    document.getElementById("header").style.top = "-100px";
    document.querySelector(".line").style.top = "0";
  }

  prevScrollpos = currentScrollPos;
};
