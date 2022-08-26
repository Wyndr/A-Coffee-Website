const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (event) => {
  cursor.setAttribute(
    "style",
    "top:" + (event.pageY - 2) + "px;left:" + (event.pageX - 3) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.style.borderColor = "gray";
  cursor.style.opacity = "0.8";
});

setInterval(() => {
  const cup = document.getElementById("cup");
  const intro = document.querySelector(".intro");
  intro.setAttribute('style','animation:intro-anim 4s forwards');
}, 4000)


// const splashtext = document.getElementById('splashtext');
// splashtext.addEventListener('click', () => {
//     splashtext.setAttribute('style', 'opacity:0;');
//     const intro = document.querySelector('.intro');
//     intro.setAttribute('style','animation:intro-anim 4s forwards');
//     const body = document.querySelector('body');
//     body.style.cursor="none";
// });