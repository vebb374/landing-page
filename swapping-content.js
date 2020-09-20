const content2 = document.querySelector(".content-2");
const content3 = document.querySelector(".content-3");
const content4 = document.querySelector(".content-4");
const content5 = document.querySelector(".content-5");
function second() {
  content2.classList.add("active");
  content3.classList.remove("active");
  content4.classList.remove("active");
  content5.classList.remove("active");
}
function third() {
  content2.classList.remove("active");
  content3.classList.add("active");
  content4.classList.remove("active");
  content5.classList.remove("active");
}
function fourth() {
  content2.classList.remove("active");
  content3.classList.remove("active");
  content4.classList.add("active");
  content5.classList.remove("active");
}
function fifth() {
  content2.classList.remove("active");
  content3.classList.remove("active");
  content4.classList.remove("active");
  content5.classList.add("active");
}
