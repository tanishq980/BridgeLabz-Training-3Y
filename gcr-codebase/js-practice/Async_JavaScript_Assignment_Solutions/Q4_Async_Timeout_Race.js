// Q4 – DevOps Delay: Async Timeout Race
// Run: node Q4_Async_Timeout_Race.js

function deployToServer(serverName, delayInMilliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Each server has a chance of failing.
            if (Math.random() < 0.2) {
                reject(new Error(`${serverName} deployment failed.`));
            } else {
                resolve(`${serverName} responded successfully`);
            }
        }, delayInMilliseconds);
    });
}

const serverA = deployToServer("Server A", 2000);
const serverB = deployToServer("Server B", 3000);

// Promise.race() settles as soon as the first input Promise settles.
// This catch handles a failure if the first settled Promise rejects.
Promise.race([serverA, serverB])
    .then((fastestResponse) => {
        console.log("Fastest response:", fastestResponse);
    })
    .catch((error) => {
        console.error("Race failed:", error.message);
    });

// Promise.all() resolves only when both deployments resolve.
// If either rejects, Promise.all() rejects and enters catch().
Promise.all([serverA, serverB])
    .then(() => {
        console.log("Deployment completed for all servers");
    })
    .catch((error) => {
        console.error("One or more deployments failed:", error.message);
    });
