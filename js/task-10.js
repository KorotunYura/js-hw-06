function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  buttonCreate: document.querySelector('[data-create]'),
  buttonDestroy: document.querySelector('[data-destroy]'),
  container: document.querySelector('#boxes'),
  input: document.querySelector('input'),
};

console.log(elements.buttonCreate);
console.log(elements.buttonDestroy);
console.log(elements.container);
console.log(elements.input);

elements.buttonCreate.addEventListener('click', handlerClickCreate);

function handlerClickCreate() {
  console.log(elements.input.value);
  createBoxes(elements.input.value);
}

function createBoxes(amount) {
  let markup = '';
  for (let i = 0; i < amount; i += 1) {
    markup += `<div class='box' style='background-color: ${getRandomHexColor()}; width: ${
      30 + i * 10
    }px; height: ${30 + i * 10}px'></div>`;
  }
  elements.container.insertAdjacentHTML('beforeend', markup);
  elements.input.value = '';
}

elements.buttonDestroy.addEventListener('click', handlerClickDestroy);

function handlerClickDestroy() {
  elements.container.innerHTML = '';
}
