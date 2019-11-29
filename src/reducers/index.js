import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  character: characterReducer,
});

export default rootReducer;
