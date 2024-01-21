import {ADD_TASK, DELETE_TASK, TOGGLE_TASK} from './actionsType';

// ACTIONS : fonctions renvoyant un objet aux reducers
export const addTask = title => {
  return {
    type: ADD_TASK,
    payload: {
      title,
    },
  };
};

export const toggleTask = id => {
  return {
    type: TOGGLE_TASK,
    payload: {
      id,
    },
  };
};

export const deleteTask = id => {
  return {
    type: DELETE_TASK,
    payload: {
      id,
    },
  };
};
