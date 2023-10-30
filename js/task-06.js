const elements = {
  input: document.querySelector('#validation-input'),
};

elements.input.addEventListener('blur', handlerValues);

function handlerValues(evt) {
  console.dir(evt.currentTarget.value);
  const { length } = evt.currentTarget.dataset;

  if (evt.currentTarget.value.length === Number(length)) {
    evt.currentTarget.classList.remove('invalid');
    evt.currentTarget.classList.add('valid');
    return;
  }

  if (evt.currentTarget.value.length === 0) {
    evt.currentTarget.classList.remove('invalid');
    evt.currentTarget.classList.remove('valid');
    return;
  }

  evt.currentTarget.classList.remove('valid');
  evt.currentTarget.classList.add('invalid');
}
