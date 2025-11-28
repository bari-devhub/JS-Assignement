
        // Global utility function to display output on the page
        function displayOutput(title, result) {
            const outputElement = document.getElementById('display-output');
            outputElement.innerHTML = `
                <p class="font-bold text-lg mb-2 text-gray-800">${title}</p>
                <div class="bg-gray-50 p-3 rounded-md text-sm shadow-inner">${result}</div>
            `;
        }

        // 1. Character Type Check
        function checkCharacterType(inputChar) {
            let charCode = inputChar.charCodeAt(0);
            let result;

            // ASCII Codes: Numbers (48-57), Uppercase (65-90), Lowercase (97-122)
            if (charCode >= 48 && charCode <= 57) {
                result = `The input character '${inputChar}' (ASCII: ${charCode}) is a **Number**.`;
            } else if (charCode >= 65 && charCode <= 90) {
                result = `The input character '${inputChar}' (ASCII: ${charCode}) is an **Uppercase Letter**.`;
            } else if (charCode >= 97 && charCode <= 122) {
                result = `The input character '${inputChar}' (ASCII: ${charCode}) is a **Lowercase Letter**.`;
            } else {
                result = `The input character '${inputChar}' (ASCII: ${charCode}) is a **Special Character** or not a single character/number.`;
            }
            return result;
        }

        function runExercise1() {
            const input = 'A'; // Fixed input for this exercise
            const result = checkCharacterType(input);
            displayOutput(`Exercise 1: Character Type Check for '${input}'`, result);
        }

        // 2. Compare Two Integers
        function runExercise2() {
            const num1Str = prompt("Exercise 2: Enter the first integer:");
            const num2Str = prompt("Exercise 2: Enter the second integer:");

            // Basic input validation
            if (num1Str === null || num2Str === null || num1Str.trim() === "" || num2Str.trim() === "") {
                displayOutput("Exercise 2: Compare Two Integers", "Operation cancelled or invalid input. Please enter both integers.");
                return;
            }

            const num1 = parseInt(num1Str);
            const num2 = parseInt(num2Str);
            let result;

            if (isNaN(num1) || isNaN(num2)) {
                result = "Invalid input. Please enter valid integers.";
            } else if (num1 === num2) {
                result = `The two integers, ${num1} and ${num2}, are **equal**.`;
            } else if (num1 > num2) {
                result = `The larger integer is **${num1}**.`;
            } else { // num2 > num1
                result = `The larger integer is **${num2}**.`;
            }

            displayOutput(`Exercise 2: Compare Two Integers (Input: ${num1Str}, ${num2Str})`, result);
        }

        // 3. Positive, Negative, or Zero
        function runExercise3() {
            const numStr = prompt("Exercise 3: Enter a number:");

            if (numStr === null || numStr.trim() === "") {
                displayOutput("Exercise 3: Check Number Sign", "Operation cancelled or invalid input. Please enter a number.");
                return;
            }

            const number = parseFloat(numStr);
            let result;

            if (isNaN(number)) {
                result = "Invalid input. Please enter a valid number.";
            } else if (number > 0) {
                result = `The number **${number}** is **Positive**.`;
            } else if (number < 0) {
                result = `The number **${number}** is **Negative**.`;
            } else { // number === 0
                result = `The number **${number}** is **Zero**.`;
            }

            displayOutput(`Exercise 3: Positive, Negative, or Zero Check (Input: ${numStr})`, result);
        }

        // 4. Vowel Check
        function runExercise4() {
            const charStr = prompt("Exercise 4: Enter a single character:");

            if (charStr === null || charStr.trim() === "") {
                displayOutput("Exercise 4: Vowel Check", "Operation cancelled or invalid input. Please enter a character.");
                return;
            }

            const char = charStr.trim().toLowerCase();
            let isVowelResult;

            if (char.length !== 1) {
                isVowelResult = "False. Please enter exactly one character.";
            } else if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
                isVowelResult = "True. The character is a **Vowel**.";
            } else {
                isVowelResult = "False. The character is a **Consonant** (or non-alphabetic character).";
            }

            displayOutput(`Exercise 4: Vowel Check (Input: ${charStr})`, isVowelResult);
        }

        // 5. Password Validation
        function runExercise5() {
            const correctPassword = "Secure123";
            const userPassword = prompt("Exercise 5: Enter your password:");
            let result;

            // c.i. Check if user has entered password.
            if (userPassword === null || userPassword.trim() === "") {
                result = "Please enter your password.";
            } else {
                // c.ii. Check if both passwords are same.
                if (userPassword === correctPassword) {
                    result = "Correct! The password you entered matches the original password.";
                } else {
                    result = "Incorrect password.";
                }
            }

            displayOutput("Exercise 5: Password Validation", result);
        }

        // 6. Fix Broken if/else Statement
        function runExercise6() {
            /*
            Broken Code:
            var greeting;
            var hour = 13;
            if (hour < 18) {
            greeting = "Good day";
            else // SYNTAX ERROR: The 'else' must not be inside the 'if' block's braces '}'
            greeting = "Good evening";
            }

            Fixed Code:
            */
            let greeting;
            const hour = 13; // Given hour
            
            if (hour < 18) {
                greeting = "Good day";
            } else {
                greeting = "Good evening";
            }

            const result = `
                **Original Code Issue:** The 'else' statement was incorrectly placed inside the closing brace of the 'if' block.
                **Fix:** The closing brace of the 'if' block was moved before the 'else' keyword.
                <br><br>
                **Variable values:** hour = ${hour}
                **Result of Fixed Code:** greeting = **"${greeting}"**
            `;

            displayOutput("Exercise 6: Fixed if/else Statement", result);
        }

        // 7. 24-Hour Clock Time Check
        function runExercise7() {
            const timeStr = prompt("Exercise 7: Enter time in 24-hour clock format (e.g., 1900, 0830):");

            if (timeStr === null || timeStr.trim() === "") {
                displayOutput("Exercise 7: 24-Hour Clock Time Check", "Operation cancelled or invalid input. Please enter a time.");
                return;
            }

            const time = parseInt(timeStr);
            let result;

            if (isNaN(time) || time < 0 || time >= 2400 || time % 100 >= 60) {
                result = `Invalid time format **${timeStr}**. Please enter a valid 24-hour time (e.g., 0830 to 2359).`;
            } else if (time >= 0 && time < 1200) {
                result = `The time **${timeStr}** is in the **Morning** (e.g., 0000 to 1159).`;
            } else if (time >= 1200 && time < 1700) {
                result = `The time **${timeStr}** is in the **Afternoon** (e.g., 1200 to 1659).`;
            } else if (time >= 1700 && time < 2100) {
                result = `The time **${timeStr}** is in the **Evening** (e.g., 1700 to 2059).`;
            } else { // time >= 2100 && time < 2400
                result = `The time **${timeStr}** is in the **Night** (e.g., 2100 to 2359).`;
            }

            displayOutput(`Exercise 7: 24-Hour Clock Time Check (Input: ${timeStr})`, result);
        }

        // Set initial font family
        document.documentElement.classList.add('font-sans');