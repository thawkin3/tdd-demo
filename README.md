# Test Driven Development Demo

In this demo, we build a caesar cipher using TDD principles.

## Setup

This project was created using `npm init` and then following the instructions in the Jest docs for getting started: https://jestjs.io/docs/en/getting-started.html

It is set up to use Jest as the test runner and includes Babel to support newer JavaScript features and syntax.

## Caesar Cipher Project Requirements

1. Takes a string and a shift value and returns a new string
2. Shifts the A-Z characters by the correct amount
3. Does not affect non-alphabetic characters
4. Maintains case
5. Handles wrapping past the end of the alphabet
6. Handles shift values greater than 26
7. Handles shift values less than 0
8. Handles bad input
