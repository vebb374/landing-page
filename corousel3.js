var slideindexb = 1;
showslideb(slideindexb);

// Next/previous controls
function plusSlidesb(n) {
  showslideb((slideindexb += n));
}

// Thumbnail image controls
function currentSlideb(n) {
  showslideb((slideindexb = n));
}

function showslideb(n) {
  var k;
  var slidesb = document.getElementsByClassName("myslidesb");
  var dotsb = document.getElementsByClassName("dot2");
  if (n > slidesb.length) {
    slideindexb = 1;
  }
  if (n < 1) {
    slideindexb = slidesb.length;
  }
  for (k = 0; k < slidesb.length; k++) {
    slidesb[k].style.display = "none";
  }
  for (k = 0; k < dotsb.length; k++) {
    dotsb[k].className = dotsb[k].className.replace(" active", "");
  }
  slidesb[slideindexb - 1].style.display = "block";
  dotsb[slideindexb - 1].className += " active";
}
