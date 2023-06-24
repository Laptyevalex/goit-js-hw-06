const input = document.querySelector("#validation-input");
const dataLength = parseInt(input.getAttribute("data-length"));

input.addEventListener("blur", validateInput);

function validateInput() {
  const enteredValue = input.value.trim();
  const isValid = enteredValue.length === dataLength;
  setValidationStyles(isValid);
}

function setValidationStyles(isValid) {
  input.classList.remove("valid", "invalid");
  input.classList.add(isValid ? "valid" : "invalid");
}
