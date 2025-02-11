document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".enjoy-section, .watch-section, .children-section, .download-section");

    function revealSections() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Run once on page load
});
