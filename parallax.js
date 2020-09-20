document.addEventListener("mousemove", parallax);

function parallax(e) {
  const robo = this.querySelector("#movingrobot");
  let x = (window.innerWidth - e.pageX * 10) / 150;
  //   let y = (window.innerWidth - e.pageY * 10) / 150;

  robo.style.transform = `translate(${x}px,0px)`;
}
