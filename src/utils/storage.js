import { mapPropsToCharacter } from './mapper';

const characterKey = 'characters';
const initialData = { characters: [] };

// Async
export const saveCharacter = (rowCharacter) => {
  return new Promise((resolve, reject) => {
    const charactersData = getCharacters();
    const cleanCharacterData = mapPropsToCharacter(rowCharacter);
    charactersData.characters.push(cleanCharacterData);
    _setCharacters(JSON.stringify(charactersData));
    resolve(charactersData);
  })
}

export const initStorage = _ => _setCharacters(JSON.stringify(initialData));

export const isStorageInitialized = _ => getCharacters() !== null;

export const getCharacters = _ => JSON.parse(window.localStorage.getItem(characterKey));

const _setCharacters = chars => window.localStorage.setItem(characterKey, chars);
