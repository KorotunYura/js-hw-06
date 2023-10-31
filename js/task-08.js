const elements = {
  form: document.querySelector('.login-form'),
};

console.log(elements.form);

elements.form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();

  const { password, email } = evt.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  const objForm = {
    email: email.value,
    password: password.value,
  };

  console.log(objForm);

  evt.currentTarget.reset();
}
