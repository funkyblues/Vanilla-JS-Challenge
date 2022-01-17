const inputNumber = document.querySelector(".inputNumber");

function getInputNumber(event) {
  event.preventDefault();
  console.log(inputNumber.value);
};

inputNumber.addEventListener("click", getInputNumber);