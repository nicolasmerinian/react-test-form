import initialState from './initialState';
import { GET_CHARACTERS, SAVE_CHARACTERS } from '../actions/characterActions';

export default function charactersReducer(state = initialState.characters, action) {
  console.log('state', state);
  console.log('action', action);

  switch (action.type) {

    case GET_CHARACTERS:
      return state.characters.slice(0);

    case SAVE_CHARACTERS:
      return [...action.payload.characters];

    default:
      return state;
  }

}
