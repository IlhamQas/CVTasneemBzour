document.addEventListener("DOMContentLoaded", function() {
    // Button hover effect
    const button = document.querySelector("button");
    button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = "#028A58";
    });
    button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "rgb(246, 136, 11)";
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            window.scrollTo({
                top: target.offsetTop - 50, // Add offset to avoid fixed navbar overlap
                behavior: "smooth"
            });
        });
    });

    // Toggle navigation menu for smaller screens
    const navToggle = document.querySelector("#nav-toggle");
    const navMenu = document.querySelector("nav ul");

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});
