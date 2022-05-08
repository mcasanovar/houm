import {
  OK_PROMISE_RETURN,
  ERROR_PROMISE_RETURN
} from '../constants'
// import { getRequest } from '../utils/axios'
import fake from '../functions/fakeData.json'

const getRecipes = async (offset) => {
  try {
    // const response = await getRequest(
    //   `${API_URL}recipes/complexSearch?number=${ITEMS_PER_PAGE}&offset=${offset}&addRecipeInformation=true&apiKey=${API_KEY}`
    // )
    const response = fake
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
