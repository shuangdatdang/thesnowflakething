// Heron's Formula CS10 Review

// Variables to store HTML Elements
let calcBtn = document.getElementById("calc-btn");
let sideAInput = document.getElementById("side-a");
let sideBInput = document.getElementById("side-b");
let sideCInput = document.getElementById("side-c");
let outputSpan = document.getElementById("output");

// Add Event Listener to Calculate Button
calcBtn.addEventListener("click", calcBtnClicked);

function calcBtnClicked() {
  // Input
  let sideA = +sideAInput.value;
  let sideB = +sideBInput.value;
  let sideC = +sideCInput.value;

  // Process
  let s = (sideA + sideB + sideC) / 2;
  let area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

  // Output
  outputSpan.innerHTML = area.toFixed(2);
}
