// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Interactive Alert
document.querySelector(".header h1").addEventListener("click", () => {
    alert("Selamat datang di UKM Programming!");
});
