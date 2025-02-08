// Add function
function addition() {
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    num1 = Number(num1)
    num2 = Number(num2)
    let result = num1 + num2;
    displayResult(result);
}

// Subtract function
function subtraction() {
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    num1 = Number(num1)
    num2 = Number(num2)
    let result = num1 - num2;
    displayResult(result);
}

// Multiply function
function multiplication() {
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    num1 = Number(num1)
    num2 = Number(num2)
    let result = num1 * num2;
    displayResult(result);
}

// Divide function
function division() {
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    num1 = Number(num1)
    num2 = Number(num2)
    if (num2 === 0) {
        alert("Can't divide by zero womp womp");
        return;
    }
    let result = num1 / num2;
    displayResult(result);
}

// Power function
function power() {
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    num1 = Number(num1)
    num2 = Number(num2)
    let start = 1;
    for (let i = 0; i < num2; i++) {
        start *= num1;
    }
    displayResult(start);
}

// Clear function
function clearInputs() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").classList.remove("negative"); // Remove the red color when clearing
}

// Output function
function displayResult(result) {
    let output = document.getElementById("output");
    output.innerHTML = `Result: ${result}`;

    // Add or remove the negative class based on the result (positive or negative)
    if (result < 0) { // If negative
        output.classList.add("negative"); // Add red text
    } else {
        output.classList.remove("negative"); // Otherwise if positive, remove the negative class
    }
}