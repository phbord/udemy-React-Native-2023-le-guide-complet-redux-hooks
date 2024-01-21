import {combineReducers} from 'redux';
import {tasksList} from './tasksList';

// ENSEMBLE de Reducers
export const rootReducers = combineReducers({
  tasksList,
});
