import { loadHeaderFooter } from "./utils.mjs"


async function initPage() {
    await loadHeaderFooter()

    const mainNavToggle = document.querySelector(".main-nav-toggle");
    mainNavToggle.addEventListener("click", function (e) {
      e.preventDefault();
      if (mainNavToggle.classList.contains("active-menu")) {
        mainNavToggle.classList.remove("active-menu");
      } else {
        mainNavToggle.classList.add("active-menu");
      }
    });
    
    const mainnav = document.querySelector('.navigation')
    const hambutton = document.querySelector('.hamburger');
    
    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });
}


window.onload = function() {
    initPage();
  };