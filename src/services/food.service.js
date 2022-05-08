import { OK_PROMISE_RETURN, ERROR_PROMISE_RETURN } from '../constants'
// import { getRequest } from '../utils/axios'

const dataFake = [
  {
    vegetarian: false,
    vegan: false,
    glutenFree: true,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    weightWatcherSmartPoints: 15,
    gaps: 'no',
    lowFodmap: false,
    aggregateLikes: 26,
    spoonacularScore: 33.0,
    healthScore: 2.0,
    creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
    license: 'CC BY 3.0',
    sourceName: 'Foodista',
    pricePerServing: 66.8,
    extendedIngredients: [
      {
        id: 10019903,
        aisle: 'Baking',
        image: 'chocolate-chips.jpg',
        consistency: 'solid',
        name: 'semi sweet chocolate chips',
        nameClean: 'semisweet chocolate chips',
        original: '2 c. (12 oz. pkg.) semi-sweet chocolate chips',
        originalName: '(12 oz. pkg.) semi-sweet chocolate chips',
        amount: 2.0,
        unit: 'c',
        meta: ['(12 oz. pkg.)'],
        measures: {
          us: {
            amount: 2.0,
            unitShort: 'cups',
            unitLong: 'cups'
          },
          metric: {
            amount: 473.176,
            unitShort: 'ml',
            unitLong: 'milliliters'
          }
        }
      },
      {
        id: 1095,
        aisle: 'Baking',
        image: 'evaporated-milk.png',
        consistency: 'solid',
        name: 'sweetened condensed milk',
        nameClean: 'sweetened condensed milk',
        original: '14 oz. can sweetened condensed milk',
        originalName: 'sweetened condensed milk',
        amount: 14.0,
        unit: 'oz',
        meta: ['sweetened', 'canned'],
        measures: {
          us: {
            amount: 14.0,
            unitShort: 'oz',
            unitLong: 'ounces'
          },
          metric: {
            amount: 396.893,
            unitShort: 'g',
            unitLong: 'grams'
          }
        }
      },
      {
        id: 2050,
        aisle: 'Baking',
        image: 'vanilla-extract.jpg',
        consistency: 'liquid',
        name: 'vanilla extract',
        nameClean: 'vanilla extract',
        original: '1 t. vanilla extract',
        originalName: 'vanilla extract',
        amount: 1.0,
        unit: 't',
        meta: [],
        measures: {
          us: {
            amount: 1.0,
            unitShort: 'tsp',
            unitLong: 'teaspoon'
          },
          metric: {
            amount: 1.0,
            unitShort: 'tsp',
            unitLong: 'teaspoon'
          }
        }
      },
      {
        id: 2047,
        aisle: 'Spices and Seasonings',
        image: 'salt.jpg',
        consistency: 'solid',
        name: 'salt',
        nameClean: 'table salt',
        original: '1/8 t. salt',
        originalName: 'salt',
        amount: 0.125,
        unit: 't',
        meta: [],
        measures: {
          us: {
            amount: 0.125,
            unitShort: 'tsps',
            unitLong: 'teaspoons'
          },
          metric: {
            amount: 0.125,
            unitShort: 'tsps',
            unitLong: 'teaspoons'
          }
        }
      },
      {
        id: 10119116,
        aisle: 'Baking',
        image: 'marshmallows-mini.png',
        consistency: 'solid',
        name: 'mini marshmallows',
        nameClean: 'mini marshmallows',
        original: '3 c. mini-marshmallows',
        originalName: 'mini-marshmallows',
        amount: 3.0,
        unit: 'c',
        meta: [],
        measures: {
          us: {
            amount: 3.0,
            unitShort: 'cups',
            unitLong: 'cups'
          },
          metric: {
            amount: 709.764,
            unitShort: 'ml',
            unitLong: 'milliliters'
          }
        }
      },
      {
        id: 12155,
        aisle: 'Nuts;Baking',
        image: 'walnuts.jpg',
        consistency: 'solid',
        name: 'walnuts',
        nameClean: 'walnuts',
        original: '1 1/2 c. toasted, chopped walnuts',
        originalName: 'toasted, chopped walnuts',
        amount: 1.5,
        unit: 'c',
        meta: ['toasted', 'chopped'],
        measures: {
          us: {
            amount: 1.5,
            unitShort: 'cups',
            unitLong: 'cups'
          },
          metric: {
            amount: 354.882,
            unitShort: 'ml',
            unitLong: 'milliliters'
          }
        }
      }
    ],
    id: 631882,
    title: '5-Minute Rocky Road Fudge',
    readyInMinutes: 45,
    servings: 15,
    sourceUrl:
      'https://www.foodista.com/recipe/HYGDSRK2/5-minute-rocky-road-fudge',
    image: 'https://spoonacular.com/recipeImages/631882-556x370.jpg',
    imageType: 'jpg',
    summary:
      'Forget going out to eat or ordering takeout every time you crave Cajun food. Try making 5-Minute Rocky Road Fudge at home. One serving contains <b>333 calories</b>, <b>6g of protein</b>, and <b>19g of fat</b>. This gluten free recipe serves 15 and costs <b>67 cents per serving</b>. It is brought to you by Foodista. 26 people were impressed by this recipe. If you have walnuts, condensed milk, mini-marshmallows, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately <b>approximately 45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 30%</b>, which is rather bad. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/10-minute-rocky-road-fudge-591197">10 Minute Rocky Road Fudge</a>, <a href="https://spoonacular.com/recipes/rocky-road-fudge-517390">Rocky Road Fudge</a>, and <a href="https://spoonacular.com/recipes/rocky-road-fudge-1060986">Rocky Road Fudge</a>.',
    cuisines: ['Creole', 'Cajun'],
    dishTypes: [],
    diets: ['gluten free'],
    occasions: [],
    instructions:
      'Line a 13x9-inch pan with foil, lightly spray with cooking spray. Set aside.\nIn a large, microwave safe bowl, add chocolate chips and condensed milk. Microwave for about 40 seconds, or until the chips are just melted when you stir them. If needed, continue to microwave in 15 second increments until melted. Do not overcook. Immediately stir in vanilla and salt. Then fold in the marshmallows and nuts.\nWorking quickly, spread and press fudge into the prepared pan. Refrigerate until completely cooled before cutting into squares.',
    analyzedInstructions: [
      {
        name: '',
        steps: [
          {
            number: 1,
            step: 'Line a 13x9-inch pan with foil, lightly spray with cooking spray. Set aside.',
            ingredients: [
              {
                id: 4679,
                name: 'cooking spray',
                localizedName: 'cooking spray',
                image: 'cooking-spray.png'
              }
            ],
            equipment: [
              {
                id: 404765,
                name: 'aluminum foil',
                localizedName: 'aluminum foil',
                image: 'aluminum-foil.png'
              },
              {
                id: 404645,
                name: 'frying pan',
                localizedName: 'frying pan',
                image: 'pan.png'
              }
            ]
          },
          {
            number: 2,
            step: 'In a large, microwave safe bowl, add chocolate chips and condensed milk. Microwave for about 40 seconds, or until the chips are just melted when you stir them. If needed, continue to microwave in 15 second increments until melted. Do not overcook. Immediately stir in vanilla and salt. Then fold in the marshmallows and nuts.',
            ingredients: [
              {
                id: 99278,
                name: 'chocolate chips',
                localizedName: 'chocolate chips',
                image: 'chocolate-chips.jpg'
              },
              {
                id: 1095,
                name: 'sweetened condensed milk',
                localizedName: 'sweetened condensed milk',
                image: 'evaporated-milk.png'
              },
              {
                id: 19116,
                name: 'marshmallows',
                localizedName: 'marshmallows',
                image: 'normal-marshmallows.jpg'
              },
              {
                id: 1052050,
                name: 'vanilla',
                localizedName: 'vanilla',
                image: 'vanilla.jpg'
              },
              {
                id: 11408,
                name: 'french fries',
                localizedName: 'french fries',
                image: 'french-fries-isolated.jpg'
              },
              {
                id: 12135,
                name: 'nuts',
                localizedName: 'nuts',
                image: 'nuts-mixed.jpg'
              },
              {
                id: 2047,
                name: 'salt',
                localizedName: 'salt',
                image: 'salt.jpg'
              }
            ],
            equipment: [
              {
                id: 404762,
                name: 'microwave',
                localizedName: 'microwave',
                image: 'microwave.jpg'
              },
              {
                id: 404783,
                name: 'bowl',
                localizedName: 'bowl',
                image: 'bowl.jpg'
              }
            ]
          },
          {
            number: 3,
            step: 'Working quickly, spread and press fudge into the prepared pan. Refrigerate until completely cooled before cutting into squares.',
            ingredients: [
              {
                id: 0,
                name: 'spread',
                localizedName: 'spread',
                image: ''
              },
              {
                id: 19100,
                name: 'fudge',
                localizedName: 'fudge',
                image: 'fudge-isolated.jpg'
              }
            ],
            equipment: [
              {
                id: 404645,
                name: 'frying pan',
                localizedName: 'frying pan',
                image: 'pan.png'
              }
            ]
          }
        ]
      }
    ],
    originalId: null,
    spoonacularSourceUrl:
      'https://spoonacular.com/5-minute-rocky-road-fudge-631882'
  }
]

const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const getRecipes = async () => {
  try {
    const response = { data: dataFake }
    await timeout(3000)
    return {
      status: OK_PROMISE_RETURN,
      data: response.data
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
