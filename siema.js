var slide_index = 1;
displaySlides(slide_index);
function nextSlide(n) {
  displaySlides((slide_index += n));
}
function currentSlide(n) {
  displaySlides((slide_index = n));
}
function displaySlides(n) {
  var i;
  var slides = document.getElementsByClassName("showSlide");
  if (n > slides.length) {
    slide_index = 1;
  }
  if (n < 1) {
    slide_index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";
}

var slideindexa = 0;
showslidesa();

function showslidesa() {
  var j;
  var slidesa = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot");
  for (j = 0; j < slidesa.length; j++) {
    slidesa[j].style.display = "none";
  }
  slideindexa++;
  if (slideindexa > slidesa.length) {
    slideindexa = 1;
  }
  for (j = 0; j < dots.length; j++) {
    dots[j].className = dots[j].className.replace(" active", "");
  }
  slidesa[slideindexa - 1].style.display = "block";
  dots[slideindexa - 1].className += " active";
  setTimeout(showslidesa, 3000); // Change image every 2 seconds
}
