const INGREDIENTS_REQUEST = "INGREDIENTS_REQUEST"
const INGREDIENTS_SUCCESS = "INGREDIENTS_SUCCESS"
const INGREDIENTS_FAILURE = "INGREDIENTS_FAILURE"
const SET_CURR_INGREDIENT = "SET_CURR_INGREDIENT"

const ingredientRequest = () => ({ type: INGREDIENTS_REQUEST })
const ingredientSuccess = (payload) => ({ type: INGREDIENTS_SUCCESS, ingredients: payload.ingredients })
const ingredientFailure = (payload) => ({ type: INGREDIENTS_FAILURE, message: payload.message })
const setCurrentIngredient = (payload) => ({ type: SET_CURR_INGREDIENT, ingredient: payload.ingredient })

export { INGREDIENTS_REQUEST, INGREDIENTS_SUCCESS, INGREDIENTS_FAILURE, SET_CURR_INGREDIENT, ingredientRequest, ingredientSuccess, ingredientFailure, setCurrentIngredient }