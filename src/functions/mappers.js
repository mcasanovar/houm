export const mapperRecipes = (recipes) => {
  const aux = recipes.map((recipe) => {
    return {
      id: recipe.id,
      title: recipe.title || '',
      description: recipe.summary || '',
      price: recipe.pricePerServing || '-- --',
      ingredients: recipe.extendedIngredients.length || '-- --',
      time: recipe.readyInMinutes || '-- --',
      image: recipe.image || ''
    }
  })

  return aux
}
