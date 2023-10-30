const value = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

let counterValue = Number(value.textContent);
console.log(counterValue);

btnDecrement.addEventListener('click', handlerClickDecrement);
btnIncrement.addEventListener('click', handlerClickIncrement);

function handlerClickDecrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}
function handlerClickIncrement() {
  counterValue += 1;
  value.textContent = counterValue;
}
