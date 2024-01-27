import {ADD_RECIPES, SELECTED_RECIPE} from '../actions/actionsType';

const initialState = {
  list: [],
  selectedRecipe: {},
};

export const recipes = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case ADD_RECIPES:
      return {
        list: [...state.list, ...action.payload.data],
        selectedRecipe: state.selectedRecipe,
      };
    case SELECTED_RECIPE:
      return {
        list: state.list,
        selectedRecipe: action.payload.data,
      };
    default:
      return state;
  }
};
