import axios from 'axios';
import {useDispatch} from 'react-redux';
import {addRecipes, selectedRecipe} from '../../redux/actions';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '419bef495d67e7f1b04b3a10c57404cc';
const MAX_PER_PAGE = 10;

export const useFetchRecipes = () => {
  const dispatch = useDispatch();

  // Récupérer la liste des recettes
  const getAllRecipes = async (page) => {
    try {
      const response = await axios.get(`${BASE_URL}discover/movie`, {
        params: {
          api_key: API_KEY,
          number: MAX_PER_PAGE,
          offset: page * MAX_PER_PAGE,
        },
      });
      console.log(
        response.data.results.length,
        '1/ getAllRecipes ---------> response:',
        response.data.results,
      );
      dispatch(addRecipes(response.data.results));
    } catch (e) {
      console.error('Error in getAllRecipes:', e);
    }
  };

  // Récupérer une recette par son id
  const getRecipeById = async id => {
    try {
      const response = await axios.get(`${BASE_URL}movie/${id}`, {
        params: {
          api_key: API_KEY,
        },
      });
      dispatch(selectedRecipe(response.data));
    } catch (e) {
      console.error('Error in getRecipeById:', e);
    }
  };

  return {getAllRecipes, getRecipeById};
};
