// Show/Hide Back to Top Button
window.addEventListener("scroll", () => {
    const button = document.getElementById("backToTop");
    if (window.scrollY > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});

// Scroll to Top
document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
