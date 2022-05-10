import {
  OK_PROMISE_RETURN,
  ERROR_PROMISE_RETURN
  // ITEMS_PER_PAGE,
  // API_URL,
  // API_KEY
} from '../constants'
// import { getRequest } from '../utils/axios'
import fake from '../functions/fakeData.json'

const getRecipes = async (offset, value, maxCalories, cuisines) => {
  try {
    // const query = value ? `query=${value}` : 'query='
    // const calories = maxCalories ? `maxCalories=${maxCalories}` : ''
    // const typeCuisines = cuisines ? `cuisine=${cuisines}` : ''

    // const response = await getRequest(
    //   `${API_URL}recipes/complexSearch?${query}&number=${ITEMS_PER_PAGE}&offset=${offset}&${calories}&${typeCuisines}&addRecipeInformation=true&apiKey=${API_KEY}`
    // )
    const response = fake
    console.log(response)
    // return {
    //   status: OK_PROMISE_RETURN,
    //   data: response.results,
    //   offset: response.offset,
    //   totalResults: response.totalResults
    // }
    return {
      status: OK_PROMISE_RETURN,
      data: response.data.results,
      offset: response.data.offset,
      totalResults: response.data.totalResults
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
