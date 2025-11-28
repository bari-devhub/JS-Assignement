 // Secret number for the Guess Game (Task 7)
        const SECRET_NUMBER = Math.floor(Math.random() * 10) + 1;

        // --- Utility function to update results ---
        function updateResult(elementId, message, isError = false) {
            const el = document.getElementById(elementId);
            el.innerHTML = message;
            
            // Clear all current background classes
            el.className = 'result-box font-medium';
            
            if (isError) {
                el.classList.add('bg-red-100', 'text-red-800', 'p-2');
            } else if (message.includes('Error')) { // Specific error check for calculator
                el.classList.add('bg-red-100', 'text-red-800', 'p-2');
            } else if (message) {
                // Determine a general background color based on the task card color
                const taskCard = el.closest('.task-card');
                let bgColor = 'bg-blue-100';
                let textColor = 'text-blue-800';

                if (taskCard) {
                    const taskID = taskCard.id;
                    if (taskID === 'task6') { bgColor = 'bg-pink-100'; textColor = 'text-pink-800'; }
                    else if (taskID === 'task7') { bgColor = 'bg-purple-100'; textColor = 'text-purple-800'; }
                    else if (taskID === 'task8') { bgColor = 'bg-teal-100'; textColor = 'text-teal-800'; }
                    else if (taskID === 'task9') { bgColor = 'bg-red-100'; textColor = 'text-red-800'; }
                    else if (taskID === 'task10') { bgColor = 'bg-orange-100'; textColor = 'text-orange-800'; }
                    else if (taskID === 'task11') { bgColor = 'bg-cyan-100'; textColor = 'text-cyan-800'; }
                }

                el.classList.add(bgColor, textColor, 'p-2');
            } else {
                 el.classList.add('bg-gray-100', 'text-gray-500');
            }
        }

        // --- 1. City Check Logic ---
        function checkCity() {
            const city = document.getElementById('cityInput').value.trim();
            let message = "Please enter a city name.";
            let isError = false;

            if (city) {
                if (city.toLowerCase() === "karachi") {
                    message = "Welcome to city of lights";
                } else {
                    message = `Welcome to ${city}.`;
                }
            } else {
                isError = true;
            }
            updateResult('cityResult', message, isError);
        }

        // --- 2. Gender Greeting Logic ---
        function greetUser() {
            const gender = document.getElementById('genderSelect').value;
            let message = "";
            let isError = false;

            if (gender === "male") {
                message = "Good Morning Sir.";
            } else if (gender === "female") {
                message = "Good Morning Ma’am.";
            } else {
                message = "Please select your gender.";
                isError = true;
            }
            updateResult('genderResult', message, isError);
        }

        // --- 3. Traffic Signal Logic ---
        function checkSignal() {
            const color = document.getElementById('signalSelect').value;
            let message = "";
            let isError = false;

            switch (color) {
                case "red":
                    message = "Must Stop";
                    break;
                case "yellow":
                    message = "Ready to move";
                    break;
                case "green":
                    message = "Move now";
                    break;
                default:
                    message = "Please select a signal color.";
                    isError = true;
            }
            updateResult('signalResult', message, isError);
        }

        // --- 4. Fuel Level Check Logic ---
        function checkFuel() {
            const fuelInput = document.getElementById('fuelInput').value;
            const fuel = parseFloat(fuelInput);
            let message = "";
            let isError = false;

            if (isNaN(fuel) || fuelInput === "") {
                message = "Please enter a valid number for fuel.";
                isError = true;
            } else if (fuel < 0.25) {
                message = "Please refill the fuel in your car";
            } else {
                message = "Fuel level is adequate for now.";
            }
            updateResult('fuelResult', message, isError);
        }

        // --- 6. Grade Calculator Logic ---
        function calculateGrade() {
            const sub1 = parseInt(document.getElementById('sub1Marks').value);
            const sub2 = parseInt(document.getElementById('sub2Marks').value);
            const sub3 = parseInt(document.getElementById('sub3Marks').value);
            const totalMax = parseInt(document.getElementById('totalMarks').value);

            // Basic validation
            if (isNaN(sub1) || isNaN(sub2) || isNaN(sub3) || isNaN(totalMax) || totalMax <= 0) {
                updateResult('gradeResult', 'Error: Please enter valid marks for all subjects and a positive total maximum.', true);
                return;
            }
            
            const totalObtained = sub1 + sub2 + sub3;
            const percentage = (totalObtained / totalMax) * 100;
            let grade = "";
            let remarks = "";

            // Check for impossible scores
            if (totalObtained > totalMax) {
                 updateResult('gradeResult', `Error: Marks obtained (${totalObtained}) cannot exceed total marks (${totalMax}).`, true);
                 return;
            }

            // Grading logic
            if (percentage >= 80) {
                grade = "A+";
                remarks = "Excellent!";
            } else if (percentage >= 70) {
                grade = "A";
                remarks = "Very Good!";
            } else if (percentage >= 60) {
                grade = "B";
                remarks = "Good job!";
            } else if (percentage >= 50) {
                grade = "C";
                remarks = "Needs Improvement.";
            } else {
                grade = "Fail";
                remarks = "Try harder next time.";
            }

            const outputHtml = `
                <table class="grade-table-output w-full text-left rounded-lg overflow-hidden bg-white text-gray-700">
                    <tr>
                        <th class="w-1/2">Total Max Marks</th>
                        <td class="font-bold">${totalMax}</td>
                    </tr>
                    <tr>
                        <th>Marks Obtained</th>
                        <td class="font-bold">${totalObtained}</td>
                    </tr>
                    <tr>
                        <th>Percentage</th>
                        <td class="font-bold text-pink-700">${percentage.toFixed(2)}%</td>
                    </tr>
                    <tr>
                        <th>Grade</th>
                        <td class="font-extrabold text-2xl text-green-700">${grade}</td>
                    </tr>
                    <tr>
                        <th>Remarks</th>
                        <td>${remarks}</td>
                    </tr>
                </table>
            `;
            updateResult('gradeResult', outputHtml, false);
        }

        // --- 7. Guess Game Logic ---
        function guessNumber() {
            const guess = parseInt(document.getElementById('guessInput').value);
            let message = "";
            let isError = false;

            if (isNaN(guess) || guess < 1 || guess > 10) {
                message = "Error: Please enter a number between 1 and 10.";
                isError = true;
            } else {
                if (guess === SECRET_NUMBER) {
                    message = "Bingo! Correct answer";
                } else if (guess === SECRET_NUMBER + 1 || guess === SECRET_NUMBER - 1) {
                    message = "Close enough to the correct answer";
                } else {
                    message = "Sorry, that is incorrect. Try again!";
                }
            }
            updateResult('guessResult', message, isError);
        }

        // --- 8. Divisible by 3 Check Logic ---
        function checkDivisibleBy3() {
            const num = parseInt(document.getElementById('divisibleInput').value);
            let message = "";
            let isError = false;

            if (isNaN(num)) {
                message = "Error: Please enter a valid whole number.";
                isError = true;
            } else {
                if (num % 3 === 0) {
                    message = `${num} is divisible by 3.`;
                } else {
                    message = `${num} is NOT divisible by 3.`;
                }
            }
            updateResult('divisibleResult', message, isError);
        }

        // --- 9. Even/Odd Check Logic ---
        function checkEvenOdd() {
            const num = parseInt(document.getElementById('parityInput').value);
            let message = "";
            let isError = false;

            if (isNaN(num)) {
                message = "Error: Please enter a valid whole number.";
                isError = true;
            } else {
                if (num % 2 === 0) {
                    message = `${num} is an Even number.`;
                } else {
                    message = `${num} is an Odd number.`;
                }
            }
            updateResult('parityResult', message, isError);
        }

        // --- 10. Temperature Checker Logic ---
        function checkTemperature() {
            const T = parseFloat(document.getElementById('tempInput').value);
            let message = "";
            let isError = false;

            if (isNaN(T)) {
                message = "Error: Please enter a valid temperature.";
                isError = true;
            } else {
                if (T > 40) {
                    message = "It is too hot outside.";
                } else if (T > 30) {
                    message = "The Weather today is Normal.";
                } else if (T > 20) {
                    message = "Today’s Weather is cool.";
                } else if (T > 10) {
                    message = "OMG! Today’s weather is so Cool.";
                } else {
                    message = "It's freezing! Stay warm!";
                }
            }
            updateResult('tempResult', message, isError);
        }

        // --- 11. Simple Calculator Logic ---
        function runCalculator() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const operation = document.getElementById('operation').value;
            let result;
            let message = "";
            let isError = false;

            if (isNaN(num1) || isNaN(num2)) {
                message = "Error: Please enter valid numbers for both inputs.";
                isError = true;
            } else {
                if (operation === '+') {
                    result = num1 + num2;
                } else if (operation === '-') {
                    result = num1 - num2;
                } else if (operation === '*') {
                    result = num1 * num2;
                } else if (operation === '/') {
                    if (num2 === 0) {
                        message = "Error: Cannot divide by zero.";
                        isError = true;
                    } else {
                        result = num1 / num2;
                    }
                } else if (operation === '%') {
                    result = num1 % num2;
                }
                
                if (!isError) {
                    message = `${num1} ${operation} ${num2} = <span class="font-extrabold text-lg">${result.toFixed(2)}</span>`;
                }
            }
            updateResult('calcResult', message, isError);
        }

        // --- 5. Script Analysis Logic (unchanged) ---
        function runScriptAnalysis() {
            const analysisResultsDiv = document.getElementById('scriptAnalysisResults');
            analysisResultsDiv.innerHTML = ''; // Clear previous results

            const scripts = [
                // a. var a = 4; if (++a === 5)
                {
                    code: 'var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }',
                    explanation: "The pre-increment operator `++a` changes the value of 'a' to 5 *before* the comparison. Therefore, `5 === 5` is **true**.",
                    result: 'alert("given condition for variable a is true") would be displayed.'
                },
                // b. var b = 82; if (b++ === 83)
                {
                    code: 'var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }',
                    explanation: "The post-increment operator `b++` uses the current value of 'b' (82) for the comparison *first*. `82 === 83` is **false**. 'b' increments to 83 *after* the condition is checked.",
                    result: 'alert() would NOT be displayed.'
                },
                // c. Nested checks
                {
                    code: `var c = 12;
if (c++ === 13){ alert("condition 1 is true"); } // c is 13 now
if (c === 13){ alert("condition 2 is true"); }
if (++c < 14){ alert("condition 3 is true"); } // c is 14 now
if(c === 14){ alert("condition 4 is true"); }`,
                    explanation: "Condition 1 (`12 === 13`) is **false**. Condition 2 (`13 === 13`) is **true**. Condition 3 (`++c` makes it 14, then `14 < 14`) is **false**. Condition 4 (`14 === 14`) is **true**.",
                    result: 'alert("condition 2 is true") and alert("condition 4 is true") would be displayed.'
                },
                // d. Total Cost
                {
                    code: 'var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }',
                    explanation: "This is a simple arithmetic check: `22000 === 2000 + 20000` is **true**.",
                    result: 'alert("The cost equals") would be displayed.'
                },
                // e. True/False literals
                {
                    code: 'if (true){ alert("True"); } if (false){ alert("False"); }',
                    explanation: "The first condition is `true`, so the alert fires. The second condition is `false`, so the alert does not fire.",
                    result: 'alert("True") would be displayed. alert("False") would NOT be displayed.'
                },
                // f. String Comparison (New)
                {
                    code: 'if("car" < "cat"){ alert("car is smaller than cat");}',
                    explanation: "String comparison checks lexicographically (alphabetical order based on character codes). Both strings start with 'ca'. Since 'r' comes before 't' in the alphabet (and has a lower character code), the condition `\"car\" < \"cat\"` is **true**.",
                    result: 'alert("car is smaller than cat") would be displayed.'
                }
            ];

            scripts.forEach((script, index) => {
                const item = document.createElement('div');
                const label = String.fromCharCode(97 + index); // a, b, c, d, e, f

                item.className = 'p-4 border border-gray-100 rounded-lg bg-gray-50';
                item.innerHTML = `
                    <h3 class="font-semibold text-lg text-gray-700 mb-2">${label}. Script:</h3>
                    <pre class="bg-gray-200 text-sm p-3 rounded-lg overflow-x-auto mb-3 text-gray-800">${script.code}</pre>
                    <p class="text-sm"><span class="font-bold text-indigo-600">Explanation:</span> ${script.explanation}</p>
                    <p class="mt-2 text-base font-semibold text-green-700 border-l-4 border-green-500 pl-3 bg-green-50 py-1 rounded">
                        <span class="font-bold">Output:</span> ${script.result}
                    </p>
                `;
                analysisResultsDiv.appendChild(item);
            });
        }

        // Run the script analysis once the page loads
        document.addEventListener('DOMContentLoaded', runScriptAnalysis);
