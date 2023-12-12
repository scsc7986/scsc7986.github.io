const inputField = document.getElementById("numberInput");
const values = document.getElementById("values");

inputField.addEventListener("input", updateValue);

const phoneNumberArray = [];

function updateValue(e) {
  const inputValue = e.target.value.toLowerCase();
  const mappedNumber = mapNumber(inputValue);

  if (mappedNumber === undefined) {
    values.textContent = "Please enter a valid number";
  } else {
    phoneNumberArray.push(mappedNumber);

    if (phoneNumberArray.length === 3 || phoneNumberArray.length === 7) {
      phoneNumberArray.push("-");
    }

    values.textContent = phoneNumberArray.join("");
    e.target.value = "";
  }
}

function mapNumber(word) {
  const numberMap = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  return numberMap[word];
}
