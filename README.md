# Unhandled Promise Rejection in Node.js

This repository demonstrates a common issue in Node.js applications: unhandled promise rejections.  Unhandled rejections can silently cause your application to crash or behave unexpectedly. This example shows how to properly handle these rejections to prevent such issues.

## Problem

The `bug.js` file contains a function that calls an external API (simulated in this case).  If the API call fails, a promise rejection occurs. Without proper handling, this rejection goes uncaught, potentially causing problems.

## Solution

The `bugSolution.js` file demonstrates the correct way to handle promise rejections using a `.catch()` block. This ensures that any errors are caught and logged, preventing unexpected behavior.

## How to Run

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `node bug.js` to see the unhandled rejection.
4. Run `node bugSolution.js` to see the proper handling of the rejection.
