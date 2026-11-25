// Q5 – Frontend Rush: Avoiding Callback Hell
// Run: node Q5_Callback_Hell_and_Async_Await.js

// A helper that runs a stage after one second.
function runStage(stageName, callback) {
    setTimeout(() => {
        console.log(stageName);
        callback();
    }, 1000);
}

// PART A: Nested callbacks (callback hell).
// Each stage is placed inside the previous stage's callback.
function runWithNestedCallbacks() {
    console.log("\\nCallback version started:");

    runStage("Design completed", () => {
        runStage("Build completed", () => {
            runStage("Test completed", () => {
                runStage("Deploy completed", () => {
                    runStage("Celebrate!", () => {
                        console.log("Callback pipeline finished.");
                        runWithAsyncAwait();
                    });
                });
            });
        });
    });
}

// Promise version of one pipeline stage.
function runStageAsPromise(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(stageName);
            resolve();
        }, 1000);
    });
}

// PART B: Same pipeline using async/await.
async function runWithAsyncAwait() {
    console.log("\\nAsync/await version started:");

    await runStageAsPromise("Design completed");
    await runStageAsPromise("Build completed");
    await runStageAsPromise("Test completed");
    await runStageAsPromise("Deploy completed");
    await runStageAsPromise("Celebrate!");

    console.log("Async/await pipeline finished.");
}

// Start the callback version. The async/await version starts after it.
runWithNestedCallbacks();

// Why async/await is easier to read:
// - It looks similar to ordinary step-by-step code.
// - await pauses this async function until the Promise settles;
//   it does not block the JavaScript thread.
// - It avoids deeply nested callback indentation.
// - try/catch can be used for straightforward error handling.
