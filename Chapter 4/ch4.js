// 1. Declare 3 variables in one statement using 'let'
let studentName = "Alice", studentID = "S456", grade = 92.5;

// 2. Declare 5 legal variable names
let _counter = 0;
let $totalAmount = 100;
let userName = "Sam";
let max_Attempts = 5;
let isFinished2025 = true;

// 2. List 5 illegal variable names (stored as strings since they would cause syntax errors otherwise)
const illegalNames = [
    "1stAttempt",    // Cannot start with a digit
    "my-score",      // Hyphens are not allowed (use camelCase or snake_case)
    "if",            // 'if' is a reserved keyword
    "item price",    // Spaces are not allowed
    "var!"           // Cannot contain special characters like '!'
];

// Display results in the browser console
console.log("--- 1. Variables Declared in One Statement ---");
console.log(`Student: ${studentName}, ID: ${studentID}, Grade: ${grade}`);

console.log("\n--- 2. Legal Variable Names ---");
console.log("5 Legal variable names have been declared and assigned values.");

console.log("\n--- 2. Illegal Variable Names ---");
console.log("The following names are illegal in JavaScript:", illegalNames.join(", "));