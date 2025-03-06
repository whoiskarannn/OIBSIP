document.addEventListener("DOMContentLoaded", function () {
    const projectSection = document.getElementById("projects");

    function revealOnScroll() {
        const sectionPos = projectSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            projectSection.classList.add("visible");
            window.removeEventListener("scroll", revealOnScroll); 
        }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); 
});
