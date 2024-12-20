// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) { // Show after scrolling 300px
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Smooth scroll effect
  });
});
