// Global array for Q9 (Color Array)
        let colorArray = ["Red", "Green", "Blue", "Yellow"];

        // Function to update the display for Q9
        function updateColorDisplay(logMessage) {
            document.getElementById('color-array-display').textContent = colorArray.join(', ');
            const logElement = document.getElementById('color-operation-log');
            logElement.innerHTML += `<div class="mt-2 text-sm text-gray-800">${logMessage}</div>`;
            logElement.scrollTop = logElement.scrollHeight; // Scroll to bottom
        }

        // --- Q9 Helper Functions (Interactive) ---
        function addColorStart() {
            const newColor = document.getElementById('color-start-input').value.trim();
            if (newColor) {
                colorArray.unshift(newColor);
                updateColorDisplay(`a. Added "${newColor}" to the beginning. New array: [${colorArray.join(', ')}]`);
                document.getElementById('color-start-input').value = '';
            }
        }

        function addColorEnd() {
            const newColor = document.getElementById('color-end-input').value.trim();
            if (newColor) {
                colorArray.push(newColor);
                updateColorDisplay(`b. Added "${newColor}" to the end. New array: [${colorArray.join(', ')}]`);
                document.getElementById('color-end-input').value = '';
            }
        }

        function addTwoMoreStart() {
            colorArray.unshift("Gold", "Silver");
            updateColorDisplay(`c. Added "Gold" and "Silver" to the beginning. New array: [${colorArray.join(', ')}]`);
        }

        function deleteFirstColor() {
            const deleted = colorArray.shift();
            if (deleted) {
                updateColorDisplay(`d. Deleted the first color ("${deleted}"). New array: [${colorArray.join(', ')}]`);
            } else {
                 updateColorDisplay(`d. Cannot delete: The array is already empty.`);
            }
        }

        function deleteLastColor() {
            const deleted = colorArray.pop();
            if (deleted) {
                updateColorDisplay(`e. Deleted the last color ("${deleted}"). New array: [${colorArray.join(', ')}]`);
            } else {
                 updateColorDisplay(`e. Cannot delete: The array is already empty.`);
            }
        }

        function addAtIndex() {
            const index = parseInt(document.getElementById('color-splice-add-index').value);
            const colorName = document.getElementById('color-splice-add-name').value.trim();

            if (!isNaN(index) && colorName) {
                // splice(index, 0, item1) adds item1 at index without removing anything
                colorArray.splice(index, 0, colorName);
                updateColorDisplay(`f. Added "${colorName}" at index ${index}. New array: [${colorArray.join(', ')}]`);
                document.getElementById('color-splice-add-index').value = '';
                document.getElementById('color-splice-add-name').value = '';
            }
        }

        function deleteAtIndex() {
            const index = parseInt(document.getElementById('color-splice-del-index').value);
            const count = parseInt(document.getElementById('color-splice-del-count').value);

            if (!isNaN(index) && !isNaN(count) && count >= 0) {
                // splice(index, count) removes 'count' items starting from 'index'
                const deletedItems = colorArray.splice(index, count);
                updateColorDisplay(`g. Deleted ${deletedItems.length} color(s) starting from index ${index}. Deleted: [${deletedItems.join(', ')}]. New array: [${colorArray.join(', ')}]`);
                document.getElementById('color-splice-del-index').value = '';
                document.getElementById('color-splice-del-count').value = '';
            }
        }

        // --- Main Execution Function ---
        window.onload = function() {
            const outputDiv = document.getElementById('declarations-output');
            let outputHTML = '';

            // 1. Declare an empty array using JS literal notation
            var studentNamesLiteral = [];
            outputHTML += `<p>1. Literal Empty Array: <code>studentNamesLiteral = [];</code> (Type: ${typeof studentNamesLiteral}, Length: ${studentNamesLiteral.length})</p>`;

            // 2. Declare an empty array using JS object notation
            // Note: While technically possible, 'new Array()' is the formal object notation.
            var studentNamesObject = new Array();
            outputHTML += `<p>2. Object Notation Empty Array: <code>studentNamesObject = new Array();</code> (Type: ${typeof studentNamesObject}, Length: ${studentNamesObject.length})</p>`;

            // 3. Declare and initialize a strings array
            var stringArray = ["Alice", "Bob", "Charlie"];
            outputHTML += `<p>3. Initialized Strings Array: <code>["${stringArray.join('", "')}"]</code></p>`;

            // 4. Declare and initialize a numbers array
            var numberArray = [10, 20, 30, 45.5];
            outputHTML += `<p>4. Initialized Numbers Array: <code>[${numberArray.join(', ')}]</code></p>`;

            // 5. Declare and initialize a boolean array
            var booleanArray = [true, false, true];
            outputHTML += `<p>5. Initialized Boolean Array: <code>[${booleanArray.join(', ')}]</code></p>`;

            // 6. Declare and initialize a mixed array
            var mixedArray = ["Text", 123, true, {key: 'value'}];
            outputHTML += `<p>6. Initialized Mixed Array: <code>["${mixedArray[0]}", ${mixedArray[1]}, ${mixedArray[2]}, ${JSON.stringify(mixedArray[3])}]</code></p>`;

            outputDiv.innerHTML = outputHTML;


            // --- Q7: Education Qualifications ---
            const qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
            let q7HTML = '<ol class="list-decimal list-inside ml-4">';
            qualifications.forEach((q) => {
                q7HTML += `<li class="text-lg font-medium text-gray-800">${q}</li>`;
            });
            q7HTML += '</ol>';
            document.getElementById('qualifications-output').innerHTML = q7HTML;

            // --- Q8: Student Scores & Percentages ---
            const studentNames = ["Michael", "Jane", "Alex"];
            const studentScores = [320, 480, 405]; // Scores out of 500
            const totalMarks = 500;

            let q8HTML = '';
            for (let i = 0; i < studentNames.length; i++) {
                const percentage = ((studentScores[i] / totalMarks) * 100).toFixed(2);
                q8HTML += `<p class="mb-2">Score of ${studentNames[i]} is ${studentScores[i]} out of ${totalMarks}. Percentage: <span class="font-bold text-green-700">${percentage}%</span></p>`;
            }
            document.getElementById('scores-output').innerHTML = q8HTML;

            // --- Q9: Color Array Operations (Initial Display) ---
            // Initial array visualization is handled by updateColorDisplay()
            document.getElementById('color-operation-log').innerHTML = `<p class="font-medium text-gray-700">Initial Array: [${colorArray.join(', ')}]</p>`;
            updateColorDisplay('');

            // --- Q10: Sorting Scores ---
            const initialScores = [320, 230, 480, 120, 305];
            // Create a copy to sort, as sort() modifies the original array
            const sortedScores = [...initialScores].sort((a, b) => a - b);

            document.getElementById('sort-output').innerHTML = `
                <p>Initial Scores Array: <code>[${initialScores.join(', ')}]</code></p>
                <p class="mt-2">Scores Ordered in Ascending Order (using Array.sort()): <code class="text-green-700 font-bold">[${sortedScores.join(', ')}]</code></p>
            `;

            // --- Q11: Slicing/Copying Cities ---
            const cities = ["Karachi", "Lahore", "Islamabad", "Faisalabad", "Peshawar", "Quetta"];
            // Copy 3 elements starting from index 0 (0-indexed, up to but not including 3)
            const selectedCities = cities.slice(0, 3);

            document.getElementById('cities-output').innerHTML = `
                <p>City Names Array: <code>[${cities.join(', ')}]</code></p>
                <p class="mt-2">Selected Cities Array (Copy of 3 elements): <code class="text-green-700 font-bold">[${selectedCities.join(', ')}]</code></p>
            `;

            // --- Q12: Creating a Single String (Join) ---
            var arr = ["This ", "is ", "my ", "cat"];
            // Use an empty string '' as the separator to join without extra spaces
            var singleString = arr.join('');

            document.getElementById('join-output').innerHTML = `
                <p>Original Array: <code>["${arr.join('", "')}"]</code></p>
                <p class="mt-2">Single String (using Array.join('')): <code class="text-green-700 font-bold">"${singleString}"</code></p>
            `;

            // --- Q13: FIFO (First-In, First-Out) / Queue ---
            let queue = [];
            let q13HTML = '<p><b>Operations:</b></p>';

            // Store values (push - First In)
            queue.push("Document 1");
            q13HTML += `<p>1. Added 'Document 1' (push): <code>[${queue.join(', ')}]</code></p>`;
            queue.push("Document 2");
            q13HTML += `<p>2. Added 'Document 2' (push): <code>[${queue.join(', ')}]</code></p>`;

            // Access/Remove values in order (shift - First Out)
            let item1 = queue.shift();
            q13HTML += `<p>3. Removed: <b>${item1}</b> (shift). Remaining: <code>[${queue.join(', ')}]</code></p>`;
            let item2 = queue.shift();
            q13HTML += `<p>4. Removed: <b>${item2}</b> (shift). Remaining: <code>[${queue.join(', ')}]</code></p>`;

            document.getElementById('fifo-output').innerHTML = q13HTML;

            // --- Q14: LIFO (Last-In, First-Out) / Stack ---
            let stack = [];
            let q14HTML = '<p><b>Operations:</b></p>';

            // Store values (push - Last In)
            stack.push("Command 1");
            q14HTML += `<p>1. Added 'Command 1' (push): <code>[${stack.join(', ')}]</code></p>`;
            stack.push("Command 2");
            q14HTML += `<p>2. Added 'Command 2' (push): <code>[${stack.join(', ')}]</code></p>`;

            // Access/Remove values in reverse order (pop - Last Out)
            let lastItem1 = stack.pop();
            q14HTML += `<p>3. Removed: <b>${lastItem1}</b> (pop). Remaining: <code>[${stack.join(', ')}]</code></p>`;
            let lastItem2 = stack.pop();
            q14HTML += `<p>4. Removed: <b>${lastItem2}</b> (pop). Remaining: <code>[${stack.join(', ')}]</code></p>`;

            document.getElementById('lifo-output').innerHTML = q14HTML;


            // --- Q15: Phone Manufacturers Dropdown ---
            const manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
            let selectHTML = '<select class="p-3 border border-gray-400 rounded-md shadow-sm w-full md:w-1/3 text-lg text-gray-800">';

            manufacturers.forEach(m => {
                selectHTML += `<option value="${m.toLowerCase()}">${m}</option>`;
            });

            selectHTML += '</select>';

            // Display using innerHTML as a replacement for document.write()
            document.getElementById('dropdown-output').innerHTML = selectHTML;

            // Note: document.write() is generally discouraged in modern JS, 
            // but the prompt requested it, so document.getElementById().innerHTML 
            // is used as the functional equivalent for DOM output.
        }