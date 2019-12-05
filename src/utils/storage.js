import { mapPropsToCharacter } from './mapper';

const characterKey = 'characters';
const initialData = { characters: [] };

export const saveCharacter = (rowCharacter) => {
  debugger;
  const charactersJson = getCharacters();
  const charactersData = JSON.parse(charactersJson);
  const cleanCharacterData = mapPropsToCharacter(rowCharacter);
  charactersData.characters.push(cleanCharacterData);
  setCharacters(JSON.stringify(charactersData));
}

export const initStorage = _ => setCharacters(JSON.stringify(initialData));

const getCharacters = _ => window.localStorage.getItem(characterKey);
const setCharacters = chars => window.localStorage.setItem(characterKey, chars);
