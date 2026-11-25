// Q9 – Debugging the Event Loop
// Run: node Q9_Debugging_Event_Loop.js

// Predicted output:
// Script start
// Script end
// Promise callback
// Timeout callback

console.log("Script start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Script end");

// Explanation:
// "Script start" and "Script end" are synchronous, so they run first.
// The Promise .then() handler is a microtask.
// setTimeout(..., 0) schedules a macrotask (task); zero milliseconds
// means it becomes eligible as soon as possible, not that it runs inline.
// Once synchronous code finishes, the event loop runs queued microtasks
// before it takes the next macrotask. Therefore Promise callback appears
// before Timeout callback.
