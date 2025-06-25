// Wait for the document to load before running scripts
// document.addEventListener("DOMContentLoaded", function () {

//     // Dark Mode Toggle
//     const toggleButton = document.createElement("button");
//     toggleButton.innerText = "🌙 Dark Mode";
//     toggleButton.style.position = "fixed";
//     toggleButton.style.top = "10px";
//     toggleButton.style.right = "10px";
//     toggleButton.style.padding = "10px";
//     toggleButton.style.cursor = "pointer";
//     document.body.appendChild(toggleButton);

//     toggleButton.addEventListener("click", function () {
//         document.body.classList.toggle("dark-mode");
//         toggleButton.innerText = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
//         localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
//     });

//     // Apply dark mode if previously enabled
//     if (localStorage.getItem("darkMode") === "true") {
//         document.body.classList.add("dark-mode");
//         toggleButton.innerText = "☀️ Light Mode";
//     }

//     // Smooth Scrolling for internal links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener("click", function (e) {
//             e.preventDefault();
//             document.querySelector(this.getAttribute("href")).scrollIntoView({
//                 behavior: "smooth"
//             });
//         });
//     });

//     // Update footer year dynamically
//     const footer = document.querySelector("footer p");
//     if (footer) {
//         footer.innerHTML = `© ${new Date().getFullYear()} Your Name | <a href="contact.html">Get in Touch</a>`;
//     }
// });



// Wait for the document to load before running scripts
// 🌙 Dark Mode Toggle Functionality
function toggleDarkMode() {
    const body = document.body;
    const darkModeToggle = document.getElementById('darkModeToggle');

    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');

    // Update button text
    darkModeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';

    // Save preference to localStorage
    localStorage.setItem('darkMode', isDark);

    // Add smooth transition effect
    body.style.transition = 'all 0.3s ease';
}

// 🌗 Load saved theme preference
function loadThemePreference() {
    const savedDarkMode = localStorage.getItem('darkMode');
    const darkModeToggle = document.getElementById('darkModeToggle');

    if (savedDarkMode === 'true') {
        document.body.classList.add('dark-mode');
        if (darkModeToggle) {
            darkModeToggle.textContent = '☀️ Light Mode';
        }
    }
}

// 🧭 Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 📌 Active navigation highlighting
function highlightActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    function updateActiveNav() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;

            if (sectionTop <= 150 && sectionTop + sectionHeight > 150) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call
}

// 📬 Form validation and simulated submission
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const name = formData.get('name').trim();
            const email = formData.get('email').trim();
            const message = formData.get('message').trim();

            // Basic validation
            if (!name || !email || !message) {
                alert("Please fill in all fields before submitting.");
                return;
            }

            // Basic email format check
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Simulated success message (replace with backend logic if needed)
            alert("Thank you for your message! I'll get back to you soon.");
            contactForm.reset();
        });
    }
}

// 🚀 Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadThemePreference();
    initSmoothScrolling();
    highlightActiveNavigation();
    initContactForm();

    // Bind dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
});
// Add smooth transition effect for dark mode toggle
document.body.style.transition = 'all 0.3s ease';
// Add event listener for dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');
