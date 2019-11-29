export const SAVE_CHARACTER_CLASS = 'SAVE_CHARACTER_CLASS';
export const GET_CHARACTER_CLASS = 'GET_CHARACTER_CLASS';
export const SAVE_CHARACTER_GENDER = 'SAVE_CHARACTER_GENDER';
export const GET_CHARACTER_GENDER = 'GET_CHARACTER_GENDER';

export function saveCharacterClass(payload) {
  return {
    type: SAVE_CHARACTER_CLASS,
    payload
  }
}

export function getCharacterClass() {
  return {
    type: GET_CHARACTER_CLASS
  }
}

export function saveCharacterGender(payload) {
  return {
    type: SAVE_CHARACTER_GENDER,
    payload
  }
}

export function getCharacterGender() {
  return {
    type: GET_CHARACTER_GENDER
  }
}
