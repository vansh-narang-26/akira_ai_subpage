function selectTab(selectedTab) {
  let tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => tab.classList.remove("selected"));
  selectedTab.classList.add("selected");
}

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menuOverlay = document.querySelector(".menu-overlay");
  const closeButton = document.querySelector(".close-btn");

  closeButton.addEventListener("click", () => {
    menuOverlay.classList.remove("active");
  });

  hamburger.addEventListener("click", () => {
    menuOverlay.classList.toggle("active");
  });
  window.addEventListener("scroll", () => {
    if (menuOverlay.classList.contains("active")) {
      menuOverlay.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const wrappers = document.querySelectorAll(".use-case-wrapper");
  const images = document.querySelectorAll(".use-case-img");

  // Set default active wrapper and image
  wrappers[0].classList.add("selected");
  images[0].classList.add("active");

  wrappers.forEach((wrapper, index) => {
    wrapper.addEventListener("click", () => {
      // Remove 'selected' class from all wrappers
      wrappers.forEach((item) => item.classList.remove("selected"));
      // Add 'selected' class to clicked wrapper
      wrapper.classList.add("selected");

      // Hide all images
      images.forEach((img) => img.classList.remove("active"));

      // Show corresponding image
      images[index].classList.add("active");
    });
  });
});
