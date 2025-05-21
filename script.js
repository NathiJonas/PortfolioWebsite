// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Fullscreen image view
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      img.requestFullscreen().catch(err => {
        alert(`Error attempting to enable fullscreen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  });
});
