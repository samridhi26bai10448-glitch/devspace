
/* =========================================
   DEVSPACE — INTERACTIVE FEATURES
   ========================================= */

// Find the mobile menu button and navigation links.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open and close the mobile navigation menu.
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    // Update accessibility information for screen readers.
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close the menu when a navigation link is clicked.
const navigationLinks = navLinks.querySelectorAll("a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});

// Close the mobile menu when the Escape key is pressed.
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
});

// Add a small entrance effect to the main hero content.
document.addEventListener("DOMContentLoaded", () => {
    const heroContent = document.querySelector(".hero-content");
    const heroVisual = document.querySelector(".hero-visual");

    if (heroContent) {
        heroContent.classList.add("loaded");
    }

    if (heroVisual) {
        heroVisual.classList.add("loaded");
    }
});

console.log("DevSpace is ready! Pink magic activated.");
