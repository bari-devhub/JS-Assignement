/**
 * chap5.js: JavaScript Code with full functionality and enhanced input validation.
 * Uses getValidatedNumber() and getValidatedText() to ensure correct data types.
 */

// --- Helper Functions for Validated User Input ---

/**
 * Prompts user for a number and repeats until a valid number is entered.
 */
function getValidatedNumber(promptText, defaultValue) {
    let input;
    let value;
    let isValid = false;

    while (!isValid) {
        input = prompt(promptText + ` (Default: ${defaultValue})`);
        // If the user clicks Cancel or enters null, use the default value
        if (input === null) {
            return defaultValue;
        }
        value = parseFloat(input);

        // Check if the parsed value is a finite number and the input wasn't empty
        if (isFinite(value) && input.trim() !== "") {
            isValid = true;
        } else {
            alert("⚠️ Invalid input! Please enter a valid NUMBER.");
        }
    }
    return value;
}

/**
 * Prompts user for text and repeats until a non-empty string that is NOT a number is entered.
 */
function getValidatedText(promptText, defaultValue) {
    let input;
    let isValid = false;

    // Regular expression to check if the string contains ONLY digits
    const isOnlyNumbers = /^\d+$/;

    while (!isValid) {
        input = prompt(promptText + ` (Default: ${defaultValue})`);

        // If the user clicks Cancel or enters null, use the default value
        if (input === null) {
            return defaultValue;
        }

        // 1. Check if the input is not just whitespace
        // 2. Check if the input is NOT composed of only digits
        if (input.trim() !== "" && !isOnlyNumbers.test(input.trim())) {
            isValid = true;
        } else {
            alert("⚠️ Invalid input! Please enter a NAME or TEXT, not just a number.");
        }
    }
    return input.trim();
}


// =====================================================================
// 1. Two Number Addition Program
// =====================================================================
{
    const number1 = getValidatedNumber("🔢 Enter the first number for addition:", 15);
    const number2 = getValidatedNumber("🔢 Enter the second number for addition:", 25);

    const sumResult = number1 + number2;
    const displayElement = document.getElementById('result-display');
    if (displayElement) {
        displayElement.innerHTML = `${number1} + ${number2} = <span class="highlight">${sumResult}</span>`;
    }
}

// =====================================================================
// 2. JavaScript Arithmetic Operations & Expressions
// =====================================================================
{
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    function displayResult(htmlContent) {
        resultsDiv.innerHTML += htmlContent;
    }

    // --- Task 1: Basic Arithmetic Operations ---
    displayResult('<h2>Task 1: Basic Arithmetic Operations (User Input)</h2>');

    const numA = getValidatedNumber("🔢 Enter Number A for Arithmetic:", 30);
    const numB = getValidatedNumber("🔢 Enter Number B for Arithmetic:", 7);

    displayResult(`<div class="result-box">Using A: <span class="bold-val">${numA}</span> and B: <span class="bold-val">${numB}</span></div>`);

    const subtractionResult = numA - numB;
    displayResult(`<div class="result-box">Subtraction: ${numA} - ${numB} = <span class="bold-val">${subtractionResult}</span></div>`);

    const multiplicationResult = numA * numB;
    displayResult(`<div class="result-box">Multiplication: ${numA} * ${numB} = <span class="bold-val">${multiplicationResult}</span></div>`);

    const divisionResult = numA / numB;
    displayResult(`<div class="result-box">Division: ${numA} / ${numB} = <span class="bold-val">${divisionResult.toFixed(4)}</span> (4 decimal places)</div>`);

    const modulusResult = numA % numB;
    displayResult(`<div class="result-box">Modulus (Remainder): ${numA} % ${numB} = <span class="bold-val">${modulusResult.toFixed(2)}</span></div>`);


    // --- Task 2: Step-by-Step Variable Manipulation ---
    displayResult('<h2>Task 2: Step-by-Step Variable Manipulation (User Initial Value)</h2>');

    let mathVariable = getValidatedNumber("🔢 Enter the initial number for Step-by-Step Task:", 5);
    const ADDITION_VALUE = 7;
    const MODULUS_DIVISOR = 3;

    displayResult(`<div class="result-box">Value after variable initialization is: <span class="bold-val">${mathVariable}</span></div>`);
    displayResult(`<div class="result-box">Initial value: <span class="bold-val">${mathVariable}</span></div>`);

    mathVariable++;
    displayResult(`<div class="result-box">Value after increment is: <span class="bold-val">${mathVariable}</span></div>`);

    mathVariable += ADDITION_VALUE;
    displayResult(`<div class="result-box">Value after addition of ${ADDITION_VALUE} is: <span class="bold-val">${mathVariable}</span></div>`);

    mathVariable--;
    displayResult(`<div class="result-box">Value after decrement is: <span class="bold-val">${mathVariable}</span></div>`);

    const remainder = mathVariable % MODULUS_DIVISOR;
    displayResult(`<div class="result-box">The remainder after dividing <span class="bold-val">${mathVariable}</span> by ${MODULUS_DIVISOR} is: <span class="bold-val">${remainder}</span></div>`);
}

// =====================================================================
// 3. Movie Ticket Cost Calculator
// =====================================================================
{
    const ticketPrice = getValidatedNumber("💰 Enter the price of one movie ticket (PKR):", 600);
    const numberOfTickets = getValidatedNumber("🔢 Enter the number of tickets to buy:", 5);

    const totalCost = ticketPrice * numberOfTickets;

    const outputMessage = "Total cost to buy " +
                          numberOfTickets +
                          " tickets to a movie is " +
                          "<span class='highlight'>" +
                          totalCost +
                          " PKR" +
                          "</span>";

    document.getElementById('output-box').innerHTML = outputMessage;
}

// =====================================================================
// 4. Generating Table (Multiplication Table Example)
// =====================================================================
{
    const numberToMultiply = getValidatedNumber("🔢 Enter the number for the Multiplication Table:", 4);
    const limit = getValidatedNumber("🔢 Enter the table limit (e.g., 10):", 10);

    const container = document.getElementById('table-container');

    container.innerHTML = `<div class="table-heading">Multiplication Table of ${numberToMultiply}</div>`;

    for (let i = 1; i <= limit; i++) {
        const result = numberToMultiply * i;
        const rowHTML = `
                <div class="table-row">
                    ${numberToMultiply} x ${i} =
                    <span class="result-highlight">${result}</span>
                </div>
            `;
        container.innerHTML += rowHTML;
    }
}

// =====================================================================
// 5. The Temperature Converter
// =====================================================================
{
    // Part 1: Celsius to Fahrenheit
    const celsiusTemp = getValidatedNumber("🌡️ Enter a temperature in Celsius (C):", 25);
    const fahrenheitTemp = (celsiusTemp * 9/5) + 32;
    const fahrenheitOutput = fahrenheitTemp.toFixed(2);

    const cToF_Message =
            `<span class="temp-val">${celsiusTemp}°C</span> is <span class="temp-val">${fahrenheitOutput}°F</span>`;

    document.getElementById('celsius-to-fahrenheit').innerHTML =
            `Celsius to Fahrenheit: <br>${cToF_Message}`;

    // Part 2: Fahrenheit to Celsius
    const fahrenheitTemp2 = getValidatedNumber("🌡️ Enter a temperature in Fahrenheit (F):", 77);
    const celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;
    const celsiusOutput = celsiusTemp2.toFixed(2);

    const fToC_Message =
            `<span class="temp-val">${fahrenheitTemp2}°F</span> is <span class="temp-val">${celsiusOutput}°C</span>`;

    document.getElementById('fahrenheit-to-celsius').innerHTML =
            `Fahrenheit to Celsius: <br>${fToC_Message}`;
}

// =====================================================================
// 6. E-commerce Shopping Cart Checkout
// =====================================================================
{
    const priceItem1 = getValidatedNumber("💰 Enter price for Item 1 (PKR):", 550);
    const quantityItem1 = getValidatedNumber("🔢 Enter quantity for Item 1:", 3);
    const priceItem2 = getValidatedNumber("💰 Enter price for Item 2 (PKR):", 300);
    const quantityItem2 = getValidatedNumber("🔢 Enter quantity for Item 2:", 4);
    const shippingCharges = getValidatedNumber("🚚 Enter shipping charges (PKR):", 150);

    const costItem1 = priceItem1 * quantityItem1;
    const costItem2 = priceItem2 * quantityItem2;
    const subTotal = costItem1 + costItem2;
    const finalAmountDue = subTotal + shippingCharges;

    const receiptDiv = document.getElementById('receipt');
    let receiptHTML = '<h2>Order Receipt</h2>';

    receiptHTML += `<div class="item-row">
                            <span class="label">Item 1 Price: </span><span>${priceItem1} PKR</span>
                        </div>
                        <div class="item-row">
                            <span class="label">Item 1 Quantity: </span><span>${quantityItem1}</span>
                        </div>
                        <div class="item-row">
                            <span class="label">Item 2 Price: </span><span>${priceItem2} PKR</span>
                        </div>
                        <div class="item-row">
                            <span class="label">Item 2 Quantity: </span><span>${quantityItem2}</span>
                        </div>`;

    receiptHTML += `<div class="summary-row">
                            <span class="label">Cost of Item 1 (${quantityItem1} units):</span><span class="highlight">${costItem1} PKR</span>
                        </div>
                        <div class="summary-row">
                            <span class="label">Cost of Item 2 (${quantityItem2} units):</span><span class="highlight">${costItem2} PKR</span>
                        </div>
                        <div class="summary-row">
                            <span class="label">Shipping Charges:</span><span class="highlight">${shippingCharges} PKR</span>
                        </div>`;

    receiptHTML += `<div class="summary-row total-row">
                            <span class="label">Total Cost:</span><span>${finalAmountDue} PKR</span>
                        </div>`;

    receiptDiv.innerHTML = receiptHTML;
}

// =====================================================================
// 7. Student Percentage Calculator
// =====================================================================
{
    const totalMarks = getValidatedNumber("💯 Enter the Total Maximum Marks:", 980);
    const marksObtained = getValidatedNumber("📝 Enter the Marks Obtained:", 804);

    const percentage = (marksObtained / totalMarks) * 100;
    const percentageOutput = percentage.toFixed(2);

    const resultBox = document.getElementById('result-box');
    const outputHTML = `
            <p class="data-point">Total Marks: <span class="bold-val">${totalMarks}</span></p>
            <p class="data-point">Marks Obtained: <span class="bold-val">${marksObtained}</span></p>
            <p class="percentage">${percentageOutput}%</p>
            <p>Percentage computed successfully.</p>
        `;

    resultBox.innerHTML = outputHTML;
}

// =====================================================================
// 8. Currency Converter (Simplified example from original code)
// =====================================================================
{
    const item1_price = 104.80;
    const item2_price = 28;
    const item1_qty = getValidatedNumber("🔢 Enter quantity for the first item (Rate: 104.80):", 10);
    const item2_qty = getValidatedNumber("🔢 Enter quantity for the second item (Rate: 28):", 25);

    const total_conversion = (item1_qty * item1_price) + (item2_qty * item2_price);

    document.getElementById("output").innerText =
        `Converted Amount: ${item1_qty} units @ ${item1_price} + ${item2_qty} units @ ${item2_price} = ${total_conversion.toFixed(2)} PKR`;
}

// =====================================================================
// 9. Programming Tasks in JavaScript
// =====================================================================

// 9.1 Arithmetic Operations in a Single Expression
{
    const initialNumber = getValidatedNumber("🔢 Enter the initial number for the expression task:", 8);

    const finalResult = (initialNumber + 5) * 10 / 2;

    document.getElementById('initial-num').textContent = initialNumber;
    document.getElementById('final-res').textContent = finalResult;
}

// 9.2 The Age Calculator
{
    const currentYear = getValidatedNumber("📅 Enter the Current Year:", 2025);
    const birthYear = getValidatedNumber("🎂 Enter the Birth Year:", 1990);

    const ageOption2 = currentYear - birthYear;
    const ageOption1 = ageOption2 - 1;

    document.getElementById('current-year').textContent = currentYear;
    document.getElementById('birth-year').textContent = birthYear;

    document.getElementById('age-output').textContent =
            `They are either ${ageOption1} or ${ageOption2} years old.`;
}

// =====================================================================
// 10. The Geometrizer (Circle Area and Circumference)
// =====================================================================
{
    const radius = getValidatedNumber("📏 Enter the circle's radius (r):", 5);
    // Note: Using a fixed value for PI as was done in your original snippet
    const PI = 3.142;

    const circumference = 2 * PI * radius;
    const area = PI * Math.pow(radius, 2);

    document.getElementById('radius-output').textContent = radius;

    document.getElementById('circumference-output').textContent =
            `The circumference is ${circumference.toFixed(2)}`;

    document.getElementById('area-output').textContent =
            `The area is ${area.toFixed(2)}`;
}

// =====================================================================
// 11. The Lifetime Snack Supply Calculator
// =====================================================================
{
    const favoriteSnack = getValidatedText("🍕 Enter your favorite snack name:", "Chocolate Chip Cookies");
    const currentAge = getValidatedNumber("🎂 Enter your current age:", 35);
    const maxAge = getValidatedNumber("👵 Enter your maximum projected age:", 85);
    const amountPerDay = getValidatedNumber("🔢 Enter estimated daily consumption (units/day):", 3);

    const yearsRemaining = maxAge - currentAge;
    const daysRemaining = yearsRemaining * 365.25;
    const totalSnacksNeeded = daysRemaining * amountPerDay;
    const roundedTotal = Math.ceil(totalSnacksNeeded);

    document.getElementById('snack-name').textContent = favoriteSnack;
    document.getElementById('current-age').textContent = currentAge;
    document.getElementById('max-age').textContent = maxAge;
    document.getElementById('amount-per-day').textContent = amountPerDay;

    document.getElementById('result-output').textContent =
            `You will need ${roundedTotal.toLocaleString()} ${favoriteSnack} to last you until the ripe old age of ${maxAge}.`;
}