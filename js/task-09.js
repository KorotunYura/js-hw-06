function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  button: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
  body: document.querySelector('body'),
};

elements.button.addEventListener('click', handlerClick);

function handlerClick(evt) {
  elements.span.textContent = getRandomHexColor();
  elements.body.style.backgroundColor = elements.span.textContent;
}
