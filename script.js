// function selectTab(selectedTab) {
//   let tabs = document.querySelectorAll(".tab");
//   tabs.forEach((tab) => tab.classList.remove("selected"));
//   selectedTab.classList.add("selected");
// }

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

document.addEventListener("DOMContentLoaded", function () {
  // Get all tab elements
  const tabs = document.querySelectorAll(".tab");

  // Add click event listener to each tab
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Get the tab identifier from data-tab attribute
      const tabId = this.getAttribute("data-tab");

      // Remove active class and reset SVG color for all tabs
      tabs.forEach((t) => {
        t.classList.remove("active");
        const svgPaths = t.querySelectorAll("path");
        svgPaths.forEach((path) => path.setAttribute("stroke", "#6C7787")); // Default color
      });

      // Add active class to clicked tab
      this.classList.add("active");

      // Change SVG color for active tab
      const svgPaths = this.querySelectorAll("path");
      svgPaths.forEach((path) => path.setAttribute("stroke", "blue")); // Active color

      // Get all tab content elements
      const tabContents = document.querySelectorAll(".tab-content");

      // Hide all tab contents
      tabContents.forEach((content) => content.classList.remove("active"));

      // Show the selected tab content
      document.getElementById(tabId).classList.add("active");
    });
  });
});
