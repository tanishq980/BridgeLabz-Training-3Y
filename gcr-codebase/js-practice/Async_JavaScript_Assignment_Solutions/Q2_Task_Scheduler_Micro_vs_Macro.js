// Q2 – Task Scheduler: Micro vs Macro Challenge
// Run: node Q2_Task_Scheduler_Micro_vs_Macro.js

console.log("Start");

setTimeout(() => {
    console.log("setTimeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

// Expected output:
// Start
// Synchronous log
// End
// Promise callback (microtask)
// setTimeout callback (macrotask)
//
// Explanation:
// 1. Synchronous statements run immediately on the call stack.
// 2. Promise .then() callbacks are queued as microtasks.
// 3. setTimeout callbacks are queued as macrotasks (tasks).
// 4. After the current synchronous script finishes, JavaScript drains
//    the microtask queue before starting the next macrotask.
