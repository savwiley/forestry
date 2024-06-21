/* grab doms */
const header = document.querySelector('#header');
const headerPage = document.querySelector('#header-page');
let scrolling = 0;

/* scrolling event listener */
window.addEventListener("scroll", () => {
  scrolling = window.scrollY;
  if (header) {
    if (scrolling >= 100) {
      header.style.background = "var(--accent1)";
    } else {
      header.style.background = "var(--accent1O)";
    }
  } else {
    if (scrolling >= 75) {
      headerPage.style.background = "var(--accent1)";
    } else {
      headerPage.style.background = "var(--accent1O)";
    }
  }
});