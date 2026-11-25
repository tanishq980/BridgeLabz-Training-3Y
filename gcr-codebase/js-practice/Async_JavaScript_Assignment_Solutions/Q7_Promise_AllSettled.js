// Q7 – The Lazy Loader: Promise Combinator Practice
// Run: node Q7_Promise_AllSettled.js

function loadModule(moduleName, delayInMilliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Randomly reject a module to demonstrate allSettled().
            if (Math.random() < 0.3) {
                reject(new Error(`${moduleName} failed to load`));
            } else {
                resolve(`${moduleName} Loaded`);
            }
        }, delayInMilliseconds);
    });
}

function loadProfile() {
    return loadModule("Profile", 2000);
}

function loadPosts() {
    return loadModule("Posts", 1500);
}

function loadMessages() {
    return loadModule("Messages", 1000);
}

async function loadDashboard() {
    const startTime = Date.now();

    // allSettled waits until every Promise has either fulfilled or rejected.
    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    results.forEach((result, index) => {
        const moduleNames = ["Profile", "Posts", "Messages"];

        if (result.status === "fulfilled") {
            console.log(`${moduleNames[index]} succeeded: ${result.value}`);
        } else {
            console.error(`${moduleNames[index]} failed: ${result.reason.message}`);
        }
    });

    const totalTime = Date.now() - startTime;
    console.log(`Total time taken: ${totalTime} ms`);
}

loadDashboard();
