/* ===============================
   Part 2: JavaScript Functions
   Demonstrating Scope, Parameters & Return Values
   =============================== */

/* Global variable example */
let defaultColor = "red";

/**
 * Changes the color and scale of the box
 * @param {string} color - new color for the box
 * @param {number} scale - scale factor for box
 * @returns {string} message describing the change
 */
function changeBoxStyle(color, scale) {
    const box = document.getElementById('box'); // local scope
    box.style.backgroundColor = color;
    box.style.transform = `scale(${scale})`;
    return `Box changed to ${color} and scaled by ${scale}`;
}

/* Function to trigger rotation animation */
function rotateBoxAnimation() {
    const box = document.getElementById('box');
    box.classList.add('rotate');
    setTimeout(() => box.classList.remove('rotate'), 2000); // remove after animation
}

/* Function to calculate sum of two numbers */
function calculateSum(a, b) {
    return a + b;
}

/* ===============================
   Part 3: Combine CSS & JS for Interactivity
   =============================== */

// Button to change box color and scale
document.getElementById('colorBtn').addEventListener('click', function() {
    const message = changeBoxStyle('blue', 1.5);
    console.log(message);
    rotateBoxAnimation();
});

// Calculator button
document.getElementById('sumBtn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = calculateSum(num1, num2);
    document.getElementById('sumResult').textContent = `Sum: ${sum}`;
});
