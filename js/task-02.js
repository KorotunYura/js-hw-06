const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

function getElement(arr) {
  const markup = arr.map(element => {
    const li = document.createElement('li');
    li.textContent = element;
    li.classList.add('item');
    return li;
  });
  console.log(markup);

  ingredientsList.append(...markup);
}
getElement(ingredients);
