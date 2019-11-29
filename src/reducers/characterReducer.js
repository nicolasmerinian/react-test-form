
import initialState from './initialState';
import {
  GET_CHARACTER_CLASS,
  GET_CHARACTER_GENDER,
  GET_CHARACTER_SKIN_COLOR,
  SAVE_CHARACTER_CLASS,
  SAVE_CHARACTER_GENDER,
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

    case GET_CHARACTER_GENDER:
      newState = Object.assign({}, state);
      return newState;

    case GET_CHARACTER_SKIN_COLOR:
      newState = Object.assign({}, state);
      return newState;

    case SAVE_CHARACTER_CLASS:
      newState = Object.assign({}, state);
      newState.class = action.payload;
      return newState;

    case SAVE_CHARACTER_GENDER:
      newState = Object.assign({}, state);
      newState.gender = action.payload;
      return newState;

    case SAVE_CHARACTER_SKIN_COLOR:
      newState = Object.assign({}, state);
      newState.skinColor = action.payload;
      return newState;

    default:
      return newState;
  }

}
