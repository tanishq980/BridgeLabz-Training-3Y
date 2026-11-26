// Q8. Custom Dropdown Using JavaScript (no select tag)
const dropdown = document.getElementById("customDropdown");
const toggle = document.getElementById("dropdownToggle");
const options = document.getElementById("dropdownOptions");

toggle.addEventListener("click", () => {
    const opening = options.hidden;
    options.hidden = !opening;
    toggle.setAttribute("aria-expanded", String(opening));
});
options.addEventListener("click", event => {
    const option = event.target.closest("[data-value]");
    if (!option) return;
    toggle.textContent = option.textContent;
    toggle.dataset.value = option.dataset.value;
    options.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
});
// Capturing phase closes the dropdown on outside clicks.
document.addEventListener("click", event => {
    if (!dropdown.contains(event.target)) {
        options.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
    }
}, true);
