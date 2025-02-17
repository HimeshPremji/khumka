document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-up");
  const fadeElementsmobile = document.querySelectorAll(".fade-up-mobile");

  function handleScroll() {
    // Check fade-up elements
    fadeElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) {
        el.classList.add("active");
      }
    });

    // Check fade-up-mobile elements
    fadeElementsmobile.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger on page load
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.style.display = "none";
});

// To display the loader during initial page loading:
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  loader.style.display = "block";
});
