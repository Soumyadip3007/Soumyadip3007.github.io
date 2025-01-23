// Wait for the document to load before running scripts
document.addEventListener("DOMContentLoaded", function () {

    // Dark Mode Toggle
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "🌙 Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.padding = "10px";
    toggleButton.style.cursor = "pointer";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        toggleButton.innerText = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    });

    // Apply dark mode if previously enabled
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        toggleButton.innerText = "☀️ Light Mode";
    }

    // Smooth Scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Update footer year dynamically
    const footer = document.querySelector("footer p");
    if (footer) {
        footer.innerHTML = `© ${new Date().getFullYear()} Your Name | <a href="contact.html">Get in Touch</a>`;
    }
});
