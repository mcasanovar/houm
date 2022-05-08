import React, { useState, useEffect } from 'react'
import { SContainerCardList } from './Home.style'
import { OK_PROMISE_RETURN } from '../../constants'
// components
import { TopBar, CardList } from '../../components'
// services
import { foodService } from '../../services'
// functions
import { mapperRecipes } from '../../functions'

function Home() {
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState(false)

  const handleGetRecipes = async () => {
    const result = await foodService.getRecipes()
    if (result.status === OK_PROMISE_RETURN) {
      const mappedRecipes = mapperRecipes(result.data)
      return setRecipes(mappedRecipes)
    }

    setError(true)
  }

  useEffect(() => {
    handleGetRecipes()
  }, [])

  return (
    <>
      <TopBar />
      <SContainerCardList>
        {!error ? (
          <CardList data={recipes} />
        ) : (
          <h1>Ops! ha ocurrido un error</h1>
        )}
      </SContainerCardList>
    </>
  )
}

export default Home
