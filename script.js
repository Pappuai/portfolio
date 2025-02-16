// Smooth fade-in effect
document.addEventListener("DOMContentLoaded", function () {
    let fadeInElements = document.querySelectorAll(".fade-in");
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });
    fadeInElements.forEach(element => observer.observe(element));
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Contact Form Alert
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message!");
});