import {legacy_createStore as createStore} from 'redux';
import {rootReducers} from './reducers';

// STORE : attaché à react, accessible depuis tous les composants par le Provider
export const store = createStore(rootReducers);
