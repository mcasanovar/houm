import { OK_PROMISE_RETURN, ERROR_PROMISE_RETURN } from '../constants'
// import { getRequest } from '../utils/axios'
import fake from '../functions/fakeData.json'

const getRecipes = async () => {
  try {
    // const response = await getRequest(`${apiUrl}recipes/complexSearch?number=10&addRecipeInformation=true&apiKey=${apiKey}`)
    const response = fake
    console.log(response)
    return {
      status: OK_PROMISE_RETURN,
      data: response.results,
      offset: response.offset,
      totalResults: response.totalResults
    }
    // return {
    //   status: OK_PROMISE_RETURN,
    //   data: response.data.results,
    //   offset: response.data.offset,
    //   totalResults: response.data.totalResults
    // }
  } catch (error) {
    console.log(error)
    return {
      status: ERROR_PROMISE_RETURN,
      error
    }
  }
}

export const foodService = {
  getRecipes
}
