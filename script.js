document.addEventListener("DOMContentLoaded", () => {

    // Smooth fade-in animation for sections
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    sections.forEach((section) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "all 0.8s ease";
        observer.observe(section);
    });

    // Active navbar link while scrolling
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 150;

            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.style.color = "white"; // Reset all links to default color

            if (link.getAttribute("href") === `#${current}`) {
                link.style.color = "#38bdf8";
            }
        });
    });

    // Gallery image click effect
    const images = document.querySelectorAll(".gallery-card img");

    images.forEach((img) => {
        img.addEventListener("click", () => {
            window.open(img.src, "_blank");
        });
    });

    console.log("Welcome to ClickShots!");

});