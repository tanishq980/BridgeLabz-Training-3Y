// Q4. Theme Switcher Using Attribute Manipulation
const themeButtons = document.querySelectorAll("[data-theme-choice]");
themeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const theme = button.dataset.themeChoice; // light, dark, or blue
        document.body.setAttribute("data-theme", theme);
        document.body.setAttribute("data-current-theme", theme);
        document.body.classList.remove("theme-light", "theme-dark", "theme-blue");
        document.body.classList.add(`theme-${theme}`);
    });
});
document.body.setAttribute("data-theme", "light");
document.body.setAttribute("data-current-theme", "light");
document.body.classList.add("theme-light");
