let slideIndex = 1;
let slides = document.getElementsByClassName("mySlides");
slides[0].style.display = "block";


function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].getElementsByClassName("content")[0].classList.add("activeSlide");
}   