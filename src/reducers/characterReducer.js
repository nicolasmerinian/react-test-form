
import initialState from './initialState';
import { GET_CHARACTER_GENDER, SAVE_CHARACTER_GENDER } from '../actions/characterActions';

export default function characterReducer(state = initialState.character, action) {
  let newState = Object.assign({}, state);

  console.log('state', state);
  console.log('action', action);

  switch (action.type) {
    case GET_CHARACTER_GENDER:
      newState = Object.assign({}, state);
      return newState;

    case SAVE_CHARACTER_GENDER:
      newState = Object.assign({}, state, action.payload);
      return newState;

    default:
      return newState;
  }

}
