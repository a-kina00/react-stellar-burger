import {
  INGREDIENTS_REQUEST, INGREDIENTS_SUCCESS, INGREDIENTS_FAILURE, SET_CURR_INGREDIENT
} from '../actions/ingredients.js'

const initialState = {
  currIngredient: [],
  ingredientsRequest: false,
  ingredientsSuccess: [],
  ingredientsFailure: null
};

const dataList = (state = initialState, action) => {
  switch (action.type) {

    case INGREDIENTS_REQUEST:
      return { ...state, ingredientsRequest: true };

    case INGREDIENTS_SUCCESS:
      return { ...state, ingredientsSuccess: action.ingredients };

    case INGREDIENTS_FAILURE:
      return { ...state, ingredientsFailure: action.message };

    case SET_CURR_INGREDIENT:
      return { ...state, currIngredient: action.ingredient };

    default:
      return state
  }
}

export {  dataList }
