// Q3 – Bug Tracker: Callback to Promise Migration
// Run: node Q3_Bug_Tracker_Promise_Migration.js

// Promise-based replacement for the original callback-based fetchBugs().
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bugs = ["UI glitch", "API timeout", "Login failure"];
            const shouldFail = Math.random() < 0.3; // Boolean random failure.

            if (shouldFail) {
                reject(new Error("Bug API request failed."));
            } else {
                resolve(bugs);
            }
        }, 1000);
    });
}

getBugs()
    .then((bugs) => {
        console.log("Bugs fetched successfully:");
        // console.table() displays the array in a neat table.
        console.table(bugs);
    })
    .catch((error) => {
        console.error("Unable to fetch bugs:", error.message);
    });
