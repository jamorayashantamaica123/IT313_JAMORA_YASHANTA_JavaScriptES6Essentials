# IT313 JavaScript ES6+ Enrollment Eligibility Checker

## Problem

The Enrollment Eligibility Checker is a Node.js program that processes enrollee records and determines whether each student is PASSING or on PROBATION.

A student is PASSING if their average of prelim, midterm, and final grades is 75 or above. Otherwise, the student is on PROBATION.

## Approach

The program uses modern JavaScript ES6+ features.

- const and let for variable declarations
- Arrow functions for shorter function syntax
- Template literals for formatted output
- Destructuring to get values from enrollee records
- map() to create processed student results
- filter() to separate passing students
- reduce() to calculate the class average
- ES modules using import and export
- Promise and setTimeout() to simulate a registrar API
- async/await to handle the asynchronous operation
- try/catch to handle possible errors

## Files

- gradeUtils.js - Contains the computeAverage() and isPassing() functions.
- main.js - Contains the main program and enrollment report.
- README.md - Project documentation.

## How to Run

1. Make sure Node.js is installed.
2. Open the project folder in VS Code.
3. Open the terminal.
4. Run:

node main.js

5. The enrollment eligibility report will be displayed in the terminal.