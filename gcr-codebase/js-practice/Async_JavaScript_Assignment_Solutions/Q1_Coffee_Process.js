// Q1 – The Startup Morning: Async Coffee Maker
// Run: node Q1_Coffee_Process.js

// Returns a Promise that resolves after a random delay between 1 and 2 seconds.
function waitForStep(message) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            // Randomly fail a step to demonstrate .catch().
            const hasFailed = Math.random() < 0.2;

            if (hasFailed) {
                reject(new Error(`${message} failed.`));
            } else {
                console.log(message);
                resolve();
            }
        }, delay);
    });
}

function boilWater() {
    return waitForStep("Step 1: Water boiled.");
}

function brewCoffee() {
    return waitForStep("Step 2: Coffee brewed.");
}

function pourCoffee() {
    return waitForStep("Step 3: Coffee poured into the cup.");
}

// Promise chaining makes the steps run one after another.
boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => console.log("Coffee ready for the team!"))
    .catch((error) => {
        console.error("Coffee process failed:", error.message);
    });
