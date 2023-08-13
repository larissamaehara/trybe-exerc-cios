// Pegando o botão random-dog:
const getDogButton = document.querySelector('#random-dog');
// Pegando o botão random-cat:
const getCatButton = document.querySelector('#random-cat');
// Pegando o botão surprise me:
const surpriseMeButton = document.querySelector('#surprise-me');
// Pegando o elemento de imagem que exibirá a imagem dos pets:
const petImage = document.querySelector('#random-pet-image');

getDogButton.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => res.json())
    .then((data) => {
      const petURL = data.message;

      petImage.src = petURL;
    });
});

getCatButton.addEventListener('click', () => {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then((res) => res.json())
    .then(([data]) => {
      const petURL = data.url;

      petImage.src = petURL;
    });
});

surpriseMeButton.addEventListener('click', () => {
  Promise.any([
    fetch('https://api.thecatapi.com/v1/images/search'),
    fetch('https://dog.ceo/api/breeds/image/random'),
  ])
    .then((res) => res.json())
    .then((data) => {
      const petURL = data.message || data[0].url;

      petImage.src = petURL;
    });
});
