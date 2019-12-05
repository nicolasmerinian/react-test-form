import initialState from './initialState';
import { GET_CHARACTERS, SAVE_CHARACTERS } from '../actions/characterActions';

export default function charactersReducer(state = initialState.characters, action) {
  let newState = Object.assign({}, state);

  console.log('state2', state);
  console.log('action2', action);

  switch (action.type) {

    case GET_CHARACTERS:
      newState = Object.assign({}, state);
      return newState;

    case SAVE_CHARACTERS:
      newState = Object.assign({}, state, action.payload);
      return newState;

    default:
      return newState;
  }

}
