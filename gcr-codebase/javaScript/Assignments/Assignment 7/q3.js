// Q3. Multi-Step Form with Next/Back and Validation
const steps = [...document.querySelectorAll(".form-step")];
const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");
const summary = document.getElementById("summary");
let currentStep = 0;
const values = { name: "", email: "", password: "" };

function showStep(index) {
    steps.forEach((step, i) => step.hidden = i !== index);
    backButton.hidden = index === 0;
    nextButton.textContent = index === steps.length - 1 ? "Finish" : "Next";
}
function validateStep() {
    const input = steps[currentStep].querySelector("input");
    const value = input.value.trim();
    if (!value) { alert("This field is required."); input.focus(); return false; }
    if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        alert("Enter a valid email."); input.focus(); return false;
    }
    if (input.type === "password" && value.length < 6) {
        alert("Password must be at least 6 characters."); input.focus(); return false;
    }
    values[input.name] = value;
    return true;
}
nextButton.addEventListener("click", () => {
    if (!validateStep()) return;
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
    } else {
        steps.forEach(step => step.hidden = true);
        nextButton.hidden = backButton.hidden = true;
        summary.hidden = false;
        summary.textContent = `Name: ${values.name} | Email: ${values.email} | Password: ${"*".repeat(values.password.length)}`;
    }
});
backButton.addEventListener("click", () => {
    if (currentStep > 0) { currentStep--; showStep(currentStep); }
});
showStep(currentStep);
