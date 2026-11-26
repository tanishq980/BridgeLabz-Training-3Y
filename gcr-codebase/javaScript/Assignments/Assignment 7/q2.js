// Q2. Live Character Counter (maximum 100 characters)
const messageBox = document.getElementById("messageBox");
const characterCounter = document.getElementById("characterCounter");
const resetButton = document.getElementById("resetButton");
const MAX_CHARACTERS = 100;

function updateCounter() {
    const remaining = MAX_CHARACTERS - messageBox.value.length;
    characterCounter.textContent = `${remaining} characters remaining`;
    characterCounter.classList.toggle("warning", remaining <= 20 && remaining > 0);
    characterCounter.classList.toggle("limit-reached", remaining === 0);
}
messageBox.maxLength = MAX_CHARACTERS;
messageBox.addEventListener("input", updateCounter);
messageBox.addEventListener("beforeinput", event => {
    if (messageBox.value.length >= MAX_CHARACTERS && event.inputType.startsWith("insert")) {
        event.preventDefault();
    }
});
resetButton.addEventListener("click", () => {
    messageBox.value = "";
    updateCounter();
});
updateCounter();
