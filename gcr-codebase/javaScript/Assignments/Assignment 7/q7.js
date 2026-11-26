// Q7. Detect Mouse Path & Coordinates Logger
const trackingBox = document.getElementById("trackingBox");
const coordinateDisplay = document.getElementById("coordinateDisplay");

trackingBox.addEventListener("mousemove", event => {
    coordinateDisplay.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});
trackingBox.addEventListener("mouseleave", () => {
    coordinateDisplay.textContent = "Move your mouse inside the box.";
});
trackingBox.addEventListener("dblclick", event => {
    const rect = trackingBox.getBoundingClientRect();
    const dot = document.createElement("span");
    dot.className = "click-dot";
    dot.style.left = `${event.clientX - rect.left}px`;
    dot.style.top = `${event.clientY - rect.top}px`;
    trackingBox.appendChild(dot);
});
