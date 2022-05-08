export const mapperRecipes = (recipes) => {
  const aux = recipes.map((recipe) => {
    return {
      id: recipe.id,
      title: recipe.title || '',
      description: recipe.summary || '',
      price: recipe.pricePerServing || '-- --',
      likes: recipe.aggregateLikes || '-- --',
      time: recipe.readyInMinutes || '-- --',
      image: recipe.image || ''
    }
  })

  return aux
}
