import {ADD_TASK, DELETE_TASK, TOGGLE_TASK} from '../actions/actionsType';

// STATE initial
const initialState = [{id: 1, title: 'Init task', isCompleted: false}];

// REDUCERS : fonctions retournant un nouveau state
export const tasksList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: new Date().getTime(),
          title: action.payload.title,
          isCompleted: false,
        },
      ];
    case TOGGLE_TASK:
      let newState = [];

      state.forEach(task => {
        if (task.id === action.payload.id) {
          newState.push({
            ...task,
            isCompleted: !task.isCompleted,
          });
          return;
        }
        newState.push(task);
      });
      return newState;
    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload.id);
    default:
      return state;
  }
};
