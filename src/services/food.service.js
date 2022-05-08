import { OK_PROMISE_RETURN, ERROR_PROMISE_RETURN, apiKey } from '../constants'
import { getRequest } from '../utils/axios'

const getRecipes = async () => {
  try {
    const response = await getRequest(`https://api.spoonacular.com/recipes/random?number=50&apiKey=${apiKey}`)
    return {
      status: OK_PROMISE_RETURN,
      data: response.data.recipes
    }
  } catch (error) {
    return {
      status: ERROR_PROMISE_RETURN,
      error
    }
  }
}

export const foodService = {
  getRecipes
}
