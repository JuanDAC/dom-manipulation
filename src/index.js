
const $button = document.querySelector('button[type="button"]');
const $main = document.querySelector('main');

$button.addEventListener('click', async () => {
  const id = Number($button.getAttribute('data-current-id'));
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const { description, image, title } = await response.json();
  const $fragment = document.createDocumentFragment();
  const $article = document.createElement('article');
  $main.appendChild($article);

  const $image = document.createElement('img');
  $image.setAttribute('src', image);
  $image.setAttribute('width', 200);
  const $text = document.createElement('p');
  $text.textContent = description;
  const $title = document.createElement('h5');
  $title.textContent = title;
  $fragment.appendChild($image);
  $fragment.appendChild($title);
  $fragment.appendChild($text);
  $article.appendChild($fragment);

  $button.setAttribute('data-current-id', id + 1);
});



