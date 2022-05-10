import { removeCaracteres } from './removeCaracters'

export const mapperRecipes = (recipes) => {
  const aux = recipes.map((recipe) => {
    return {
      id: recipe.id,
      title: recipe.title || '',
      description: removeCaracteres(recipe.summary) || '',
      price: recipe.pricePerServing || '-- --',
      likes: recipe.aggregateLikes || '-- --',
      time: recipe.readyInMinutes || '-- --',
      image: recipe.image || '',
      cuisines: recipe.cuisines || []
    }
  })

  return aux
}
