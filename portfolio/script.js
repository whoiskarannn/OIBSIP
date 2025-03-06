document.addEventListener("DOMContentLoaded", function () {
    const projectSection = document.getElementById("projects");

    function revealOnScroll() {
        const sectionPos = projectSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            projectSection.classList.add("visible");
            window.removeEventListener("scroll", revealOnScroll); // Run only once
        }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Check on page load in case it's already visible
});
