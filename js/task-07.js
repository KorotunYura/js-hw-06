const elements = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

console.log(elements.input);
console.log(elements.span);

elements.input.addEventListener('input', handlerRange);
function handlerRange(evt) {
  elements.span.style.fontSize = `${evt.currentTarget.value}px`;
}
