const elements = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};

console.log(elements.input);
console.log(elements.span);

elements.input.addEventListener('input', handlerValue);

function handlerValue(evt) {
  console.log(evt.currentTarget.value);
  if (evt.currentTarget.value !== '') {
    elements.span.textContent = evt.currentTarget.value;
  } else {
    elements.span.textContent = 'Anonymous';
  }
}
