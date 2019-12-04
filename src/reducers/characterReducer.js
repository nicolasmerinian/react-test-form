
import initialState from './initialState';
import {
  GET_CHARACTER_CLASS,
  GET_CHARACTER_CLOTHES_COLOR,
  GET_CHARACTER_EYE_COLOR,
  GET_CHARACTER_GENDER,
  GET_CHARACTER_HAIR_COLOR,
  GET_CHARACTER_NAME,
  GET_CHARACTER_SKIN_COLOR,
  SAVE_CHARACTER_CLASS,
  SAVE_CHARACTER_CLOTHES_COLOR,
  SAVE_CHARACTER_EYE_COLOR,
  SAVE_CHARACTER_GENDER,
  SAVE_CHARACTER_HAIR_COLOR,
  SAVE_CHARACTER_NAME,
  SAVE_CHARACTER_SKIN_COLOR
} from '../actions/characterActions';

export default function characterReducer(state = initialState.character, action) {
  let newState = Object.assign({}, state);

  console.log('state', state);
  console.log('action', action);

  switch (action.type) {
    case GET_CHARACTER_CLASS:
      newState = Object.assign({}, state);
      return newState;

    case GET_CHARACTER_CLOTHES_COLOR:
      newState = Object.assign({}, state);
      return newState;

    case GET_CHARACTER_EYE_COLOR:
      newState = Object.assign({}, state);
      return newState;

    case GET_CHARACTER_GENDER:
      newState = Object.assign({}, state);
      return newState;

    case GET_CHARACTER_HAIR_COLOR:
      newState = Object.assign({}, state);
      return newState;

    case GET_CHARACTER_NAME:
      newState = Object.assign({}, state);
      return newState;

    case GET_CHARACTER_SKIN_COLOR:
      newState = Object.assign({}, state);
      return newState;

    case SAVE_CHARACTER_CLASS:
      newState = Object.assign({}, state);
      newState.class = action.payload;
      return newState;

    case SAVE_CHARACTER_CLOTHES_COLOR:
      newState = Object.assign({}, state);
      newState.clothesColor = action.payload;
      return newState;

    case SAVE_CHARACTER_EYE_COLOR:
      newState = Object.assign({}, state);
      newState.eyeColor = action.payload;
      return newState;

    case SAVE_CHARACTER_GENDER:
      newState = Object.assign({}, state);
      newState.gender = action.payload;
      return newState;

    case SAVE_CHARACTER_HAIR_COLOR:
      newState = Object.assign({}, state);
      newState.hairColor = action.payload;
      return newState;

    case SAVE_CHARACTER_NAME:
      newState = Object.assign({}, state);
      newState.name = action.payload;
      return newState;

    case SAVE_CHARACTER_SKIN_COLOR:
      newState = Object.assign({}, state);
      newState.skinColor = action.payload;
      return newState;

    default:
      return newState;
  }

}
