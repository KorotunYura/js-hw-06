const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');
console.log(galleryList);

function getImages(arr) {
  const markup = arr
    .map(
      ({ url, alt }) => `<li class="js-item">
      <img src="${url}" alt="${alt}" width="300" height="300" />
    </li>`
    )
    .join('');
  console.log(markup);
  galleryList.insertAdjacentHTML('beforeend', markup);
  galleryList.style.display = 'flex';
  galleryList.style.listStyle = 'none';
  galleryList.style.gap = '10px';
}
getImages(images);
