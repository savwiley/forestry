/* grab doms */
const header = document.querySelector('#header');
let scrolling = 0;

/* scrolling event listener */
window.addEventListener("scroll", () => {
  scrolling = window.scrollY;
  if (scrolling >= 100) {
    header.style.background = "var(--accent1)";
  } else {
    header.style.background = "var(--accent1O)";
  }
});