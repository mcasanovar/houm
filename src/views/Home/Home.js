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

  const handleGetRecipes = async () => {
    const result = await foodService.getRecipes()
    if (result.status === OK_PROMISE_RETURN) {
      const mappedRecipes = mapperRecipes(result.data)
      setRecipes(mappedRecipes)
    }
  }

  useEffect(() => {
    handleGetRecipes()
  }, [])

  return (
    <>
      <TopBar />
      <SContainerCardList>
        <CardList data={recipes}/>
      </SContainerCardList>
    </>
  )
}

export default Home
