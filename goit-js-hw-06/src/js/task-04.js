const counterValue = document.querySelector("#value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

let count = 0;

decrementButton.addEventListener("click", () => {
  count--;
  counterValue.textContent = count;
});

incrementButton.addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});
