// Q10 – The Final Delivery: Async Pipeline Debugger
// Run: node Q10_Async_Delivery_Pipeline.js

// Every delivery step returns a Promise. It takes 1–2 seconds and may fail.
function runDeliveryStep(successMessage) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            const hasFailed = Math.random() < 0.2;

            if (hasFailed) {
                reject(new Error(`${successMessage} could not be completed.`));
            } else {
                resolve(successMessage);
            }
        }, delay);
    });
}

async function takeOrder() {
    return runDeliveryStep("Step 1: Order taken");
}

async function prepare() {
    return runDeliveryStep("Step 2: Food prepared");
}

async function pack() {
    return runDeliveryStep("Step 3: Package ready");
}

async function dispatch() {
    return runDeliveryStep("Step 4: Out for delivery");
}

async function deliver() {
    return runDeliveryStep("Delivery completed!");
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        // await ensures the next step starts after the current one succeeds.
        // The async function pauses here without blocking the JS event loop.
        console.log(await takeOrder());
        console.log(await prepare());
        console.log(await pack());
        console.log(await dispatch());
        console.log(await deliver());
    } catch (error) {
        // The first rejected step skips the remaining steps and reaches here.
        console.error("Pipeline failed!", error.message);
    }
}

runPipeline();

// Event-loop notes:
// - Calling an async function returns a Promise.
// - Each await pauses this function until its Promise settles.
// - While it is waiting, JavaScript can process other queued work.
// - When the awaited Promise resolves, this function resumes through
//   Promise/microtask scheduling. A rejection is handled by catch.
