//"characters": "https://rickandmortyapi.com/api/character",
//"locations": "https://rickandmortyapi.com/api/location",
//"episodes": "https://rickandmortyapi.com/api/episode"
const page = 4;
const baseUrl = 'https://rickandmortyapi.com/api/';

const loadCharacter = async () => {
  const res = await fetch(`${baseUrl}/character?page=${page}`);
  const data = await res.json();
  const limit = data.results.slice(3, 9);
  return { results: limitData };
}
const loadLocation = async () => {
  const res = await fetch(`${baseUrl}/location`);
  const data = await res.json();
  const limitData = data.results.slice(0, 10);
  return { results: limitData };
}
const loadEpisode = async () => {
  const res = await fetch(`${baseUrl}/episode`);
  const data = await res.json();
  return data
};
const loadAllWithPromiseAll = async () => {
  const [character, location, episode] = await Promise.all([loadCharacter(), loadLocation(), loadEpisode()]);
}
loadAllWithPromiseAll()
showCharacter
loadAllWithPromiseAll = (character) => {
  const characterContainer = document.getElementById('character-container')
  character.map((character) => {
    const divCharacter = document.createElement('div');
    divCharacter.id = `character-${character.id}`;
    divCharacter.innerHTML = `<img id= img-character" src="${character.image}" alt="image.character">
<arcticle class="character-info">
h3>${character.name}</h3>
<spam class="${character.status}">< ${character.status} - ${character.species}/spam>
<spam class="location">Location:</spam>
<a class="character-link" href="${character.location.url}">${character.location.name}</a>
<spam class="origin">origin:</spam>
<a class=character-lnk" href="${character.origin.url}">${character.origin.name}</a>
</arcticle>`;
    divCharacter.classList.add('character-box');
    characterContainer.appendChild(divCharacter);

  });
}
