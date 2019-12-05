import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import characterReducer from './characterReducer';
import charactersReducer from './charactersReducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  inProgress: characterReducer,
  characters: charactersReducer
});

export default rootReducer;
