ASYNC JAVASCRIPT ASSIGNMENT 6 – COMPLETE SOLUTIONS

Contents
--------
Q1  Coffee preparation using Promise chaining and catch.
Q2  Event-loop ordering: synchronous code, Promise microtask, setTimeout task.
Q3  Callback-to-Promise migration using getBugs() and console.table().
Q4  Concurrent server deployments using Promise.all() and Promise.race().
Q5  Callback nesting compared with async/await.
Q6  Fake Store API fetch with error handling.
    Q6_Product_Dashboard.html and Q6_Product_Dashboard.js are the optional
    browser-based product-card bonus.
Q7  Promise.allSettled(), random rejection, and elapsed-time measurement.
Q8  Retry an order submission up to three times.
Q9  Predicted and actual event-loop execution order.
Q10 Sequential asynchronous food-delivery pipeline with try/catch.

How to run
----------
1. Install Node.js (https://nodejs.org/) if it is not already installed.
2. Extract this ZIP file.
3. Open a terminal in the extracted folder.
4. Run an individual question, for example:
       node Q1_Coffee_Process.js
   Replace the filename with the question you want to run.

Important notes
---------------
- Q1, Q3, Q4, Q7, Q8, and Q10 include random failures as required.
  A run may succeed or fail; run it again to observe the other outcome.
- Q6 uses the internet and the Fake Store API. Node.js 18+ is recommended
  for the built-in fetch() function.
- To see the Q6 visual bonus, keep the three Q6 files in the same folder
  and open Q6_Product_Dashboard.html in a browser.
- Q2 and Q9 demonstrate the same core event-loop rule in two forms.
- Each assignment question has its own JavaScript solution file.
