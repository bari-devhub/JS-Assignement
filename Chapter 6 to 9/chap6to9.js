// // 1. Get user input via the prompt box
//         const userInput = prompt("Please enter a starting whole number for the operator demo:");
        
//         // Convert the input string to an integer
//         let a = parseInt(userInput);

//         // 2. Validation: Check if the input is valid.
//         if (isNaN(a)) {
//             // Alert for incorrect data (user entered text or hit Cancel)
//             alert("ALERT: Enter a correct data. Please enter a valid whole number and try again.");
            
//             // Display an error message on the page as well
//             document.write("<h1>Error:</h1>");
//             document.write("<p style='color:red;'>Invalid input. Please reload and enter a valid whole number.</p>");
//         } else {
//             // --- CORRECT DATA: Output Generation (Replicating the Image) ---
            
//             // Use an alert to confirm the correct data was accepted
//             alert("Success! Starting demo with number: " + a);
            
//             document.write("<h1>Result:</h1>");

//             // Display initial value
//             document.write("The value of a is: " + a + "<br>");
//             document.write("................................." + "<br>");
//             document.write("<br>");

//             // 1. Prefix Increment (++a)
//             document.write("The value of ++a is: " + (++a) + "<br>");
//             document.write("Now the value of a is: " + a + "<br>");
//             document.write("<br>");

//             // 2. Postfix Increment (a++)
//             document.write("The value of a++ is: " + (a++) + "<br>");
//             document.write("Now the value of a is: " + a + "<br>");
//             document.write("<br>");

//             // 3. Prefix Decrement (--a)
//             document.write("The value of --a is: " + (--a) + "<br>");
//             document.write("Now the value of a is: " + a + "<br>");
//             document.write("<br>");

//             // 4. Postfix Decrement (a--)
//             document.write("The value of a-- is: " + (a--) + "<br>");
//             document.write("Now the value of a is: " + a + "<br>");
//         }










// 1. Get initial values from the user using English prompts
        // We use parseFloat() to convert the string input to a number.
        
        var a_input = prompt("Please enter the initial value for 'a' (e.g., 2):");
        var b_input = prompt("Please enter the initial value for 'b' (e.g., 1):");

        // Convert input to number
        var a = parseFloat(a_input);
        var b = parseFloat(b_input);

        // Input validation
        if (isNaN(a) || isNaN(b)) {
            // If input is not a valid number, display an error and alert the user
            document.getElementById('output-a').textContent = "a is ERROR";
            document.getElementById('output-b').textContent = "b is ERROR";
            document.getElementById('output-result').textContent = "result is Invalid Input";
            alert("Please enter valid numerical values.");
        } else {
            // 2. Execute the required calculation: result = --a - --b + ++b + b--
            var result = --a - --b + ++b + b--;

            // 3. Update the HTML content with the final calculated values
            document.getElementById('output-a').textContent = "a is " + a;
            document.getElementById('output-b').textContent = "b is " + b;
            document.getElementById('output-result').textContent = "result is " + result;
        }












// Constant for total marks per subject
        const TOTAL_MARKS_PER_SUBJECT = 100;
        
        function generateMarksheet() {
            // --- 1. Get Subject Names from User ---
            let sub1Name = prompt("Enter the name of Subject 1 (e.g., English):", "English");
            let sub2Name = prompt("Enter the name of Subject 2 (e.g., Math):", "Math");
            let sub3Name = prompt("Enter the name of Subject 3 (e.g., Urdu):", "Urdu");

            // --- 2. Get Obtained Marks from User ---
            // Use subXName || 'Subject X' as a fallback in the prompt if the user didn't enter a name
            let marks1 = parseInt(prompt(`Enter obtained marks for ${sub1Name || 'Subject 1'} (Max: ${TOTAL_MARKS_PER_SUBJECT}):`));
            let marks2 = parseInt(prompt(`Enter obtained marks for ${sub2Name || 'Subject 2'} (Max: ${TOTAL_MARKS_PER_SUBJECT}):`));
            let marks3 = parseInt(prompt(`Enter obtained marks for ${sub3Name || 'Subject 3'} (Max: ${TOTAL_MARKS_PER_SUBJECT}):`));

            // Basic Input Cleaning: Convert invalid/cancelled input to 0
            marks1 = isNaN(marks1) || marks1 === null ? 0 : marks1;
            marks2 = isNaN(marks2) || marks2 === null ? 0 : marks2;
            marks3 = isNaN(marks3) || marks3 === null ? 0 : marks3;
            
            // --- 3. Prepare Data Structure ---
            const subjectData = [
                { name: sub1Name || 'Subject 1', obtained: marks1 },
                { name: sub2Name || 'Subject 2', obtained: marks2 },
                { name: sub3Name || 'Subject 3', obtained: marks3 }
            ];

            // --- 4. Calculate Totals and Percentages ---
            let totalObtained = 0;
            const grandTotal = subjectData.length * TOTAL_MARKS_PER_SUBJECT;

            subjectData.forEach(subject => {
                // Calculate individual percentage
                subject.percentage = (subject.obtained / TOTAL_MARKS_PER_SUBJECT) * 100;
                totalObtained += subject.obtained;
            });

            // Calculate overall percentage
            const overallPercentage = (totalObtained / grandTotal) * 100;

            // --- 5. Generate the HTML Table ---
            let tableHTML = '<table>';

            // Header Row
            tableHTML += '<tr class="header-row">';
            tableHTML += '<th style="width: 30%;">Subject</th>';
            tableHTML += '<th style="width: 20%;">Total Marks</th>';
            tableHTML += '<th style="width: 25%;">Obtained Marks</th>';
            tableHTML += '<th style="width: 25%;">Percentage</th>';
            tableHTML += '</tr>';

            // Subject Rows
            subjectData.forEach(subject => {
                tableHTML += '<tr>';
                tableHTML += `<td>${subject.name}</td>`;
                tableHTML += `<td>${TOTAL_MARKS_PER_SUBJECT}</td>`;
                tableHTML += `<td>${subject.obtained}</td>`;
                tableHTML += `<td>${subject.percentage.toFixed(0)}%</td>`;
                tableHTML += '</tr>';
            });

            // Total Row (Matching the image output structure)
            tableHTML += '<tr class="total-row">';
            tableHTML += '<td></td>'; // Empty cell for the Subject column
            tableHTML += `<td>${grandTotal}</td>`;
            tableHTML += `<td>${totalObtained}</td>`;
            tableHTML += `<td>${overallPercentage.toFixed(0)}%</td>`;
            tableHTML += '</tr>';

            tableHTML += '</table>';

            // --- 6. Inject into the DOM ---
            document.getElementById('marksheet-container').innerHTML = tableHTML;
        }