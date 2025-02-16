// Typing Effect for Role
const roles = ["Web Developer", "Designer", "Programmer"];
let roleIndex = 0;
let charIndex = 0;

function typeRole() {
    if (charIndex < roles[roleIndex].length) {
        document.getElementById("role-text").innerHTML += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 100);
    } else {
        setTimeout(eraseRole, 1000);
    }
}

function eraseRole() {
    if (charIndex > 0) {
        document.getElementById("role-text").innerHTML = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 500);
    }
}

document.addEventListener("DOMContentLoaded", typeRole);

// Scroll Indicator
window.addEventListener("scroll", function() {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.getElementById("scroll-indicator").style.width = scrollPercentage + "%";
});

// Animate Skills Progress Bars
window.addEventListener("scroll", function() {
    document.querySelectorAll(".progress-bar").forEach(bar => {
        let rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            bar.style.width = bar.style.width;
        }
    });
});

// Enlarge Image on Click
document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("click", function() {
        let modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `<div class="modal-content">
            <img src="${img.src}">
            <button class="close-modal">X</button>
        </div>`;
        document.body.appendChild(modal);

        document.querySelector(".close-modal").addEventListener("click", function() {
            modal.remove();
        });
    });
});
// Dark Mode Toggle Fix
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Function to enable dark mode
function enableDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "enabled");
    darkModeToggle.textContent = "☀️ Light Mode";
}

// Function to disable dark mode
function disableDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "disabled");
    darkModeToggle.textContent = "🌙 Dark Mode";
}

// Check local storage for dark mode preference
if (localStorage.getItem("dark-mode") === "enabled") {
    enableDarkMode();
}

// Toggle Dark Mode on button click
darkModeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});