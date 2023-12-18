const inputField = document.getElementById("numberInput");
const values = document.getElementById("values");
const submitButton = document.getElementById("submitButton");
const timerDisplay = document.getElementById("timer");

let timer;
let countdown = 15;

// Start the timer when the page loads
document.addEventListener("DOMContentLoaded", function () {
  startTimer();
});

inputField.addEventListener("input", updateValue);

function updateValue(e) {
  const lowcase = e.target.value.toLowerCase();
  values.textContent = mapNumbers(lowcase, e);
}

const phoneNumberArray = [];

function mapNumbers(phoneNumber, e) {
  const numberMap = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    zero: "0",
  };

  if (numberMap[phoneNumber] === undefined) {
    return "Please enter a valid number";
  }
  phoneNumberArray.push(numberMap[phoneNumber]);

  if (phoneNumberArray.length === 3 || phoneNumberArray.length === 7) {
    phoneNumberArray.push("-");
  }

  if (phoneNumberArray.length === 12) {
    // needs to be 12 because of the -'s
    // block the input
    inputField.disabled = true;
    // Enable the submit button
    submitButton.disabled = false;
  }

  e.target.value = "";
  return phoneNumberArray.join("");
}

function submit() {
  if (phoneNumberArray.length < 12) {
    alert("Please enter a valid phone number");
    return;
  }
  alert("You have entered a valid phone number");
}

function startTimer() {
  // Set a timer for 15 seconds when the page loads
  timer = setInterval(function () {
    countdown--;
    timerDisplay.textContent = `Timer: ${countdown}s`;

    if (countdown <= 0) {
      // Refresh the page after 15 seconds
      clearInterval(timer);
      location.reload();
    }
  }, 1000);
}