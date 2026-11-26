// Q9. Form Submit Blocker with preventDefault() and Live Errors
const form = document.getElementById("detailsForm");
const fields = [
    { input: document.getElementById("name"), error: document.getElementById("nameError") },
    { input: document.getElementById("email"), error: document.getElementById("emailError") },
    { input: document.getElementById("password"), error: document.getElementById("passwordError") }
];
const successMessage = document.getElementById("successMessage");

function validate(input, errorElement) {
    const value = input.value.trim();
    let message = "";
    if (input.name === "name" && !value) message = "Name is required.";
    if (input.name === "email") {
        if (!value) message = "Email is required.";
        else if (!value.includes("@")) message = "Email must contain @.";
    }
    if (input.name === "password" && value.length < 6) {
        message = "Password must contain at least 6 characters.";
    }
    errorElement.textContent = message;
    input.setAttribute("aria-invalid", String(Boolean(message)));
    return !message;
}
fields.forEach(({ input, error }) => {
    input.addEventListener("input", () => {
        validate(input, error);
        successMessage.hidden = true;
    });
});
form.addEventListener("submit", event => {
    event.preventDefault();
    const valid = fields.map(({ input, error }) => validate(input, error)).every(Boolean);
    if (valid) {
        successMessage.textContent = "Form Submitted Successfully";
        successMessage.hidden = false;
    } else {
        successMessage.hidden = true;
    }
});
