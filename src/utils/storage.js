const characterKey = 'characters';

export const saveCharacter = (character) => {
  const charactersJson = getCharacters();
  const characters = JSON.parse(charactersJson);
  characters.push(character);
  setCharacters(JSON.stringify(characters));
}

const getCharacters = _ => window.localStorage.getItem(characterKey);
const setCharacters = chars => window.localStorage.setItem(characterKey, chars);
