let currentPage = 0;
const pages = document.querySelectorAll(".page");
const dots = document.querySelectorAll(".dot");

function showPage(index) {
  pages.forEach((p, i) => {
    p.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
}

// Click anywhere to continue
document.body.addEventListener("click", nextPage);

// Touch support
let startY = 0;
document.body.addEventListener("touchstart", e => {
  startY = e.touches[0].clientY;
});

document.body.addEventListener("touchend", e => {
  const endY = e.changedTouches[0].clientY;
  if (startY - endY > 40) nextPage();
});

// Init
showPage(currentPage);
