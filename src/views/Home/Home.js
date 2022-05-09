import React, { useState, useEffect } from 'react'
import {
  SContainerCardList,
  SContainerFilters,
  SFiltersTitle,
  SContainerPagination
} from './Home.style'
import { OK_PROMISE_RETURN, ITEMS_PER_PAGE } from '../../constants'
// components
import { CardList, Pagination, TopBar, Filter, Button } from '../../components'
// services
import { foodService } from '../../services'
// functions
import { mapperRecipes } from '../../functions'

function Home() {
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState(false)
  const [offset, setOffset] = useState(0)
  const [totalResults, setTotalResults] = useState(0)
  const [querySearch, setQuerySearch] = useState('')
  const [caloriesSearch, setCaloriesSearch] = useState('')
  const [cuisinesSearch, setCuisinesSearch] = useState('')

  const { PrimaryButton } = Button

  const handleGetRecipes = async () => {
    console.log('searching')
    const result = await foodService.getRecipes(
      offset,
      querySearch,
      caloriesSearch,
      cuisinesSearch
    )
    if (result.status === OK_PROMISE_RETURN) {
      const mappedRecipes = mapperRecipes(result.data)
      setOffset(result.offset)
      setTotalResults(result.totalResults)
      setRecipes(mappedRecipes)
      return
    }

    setError(true)
  }

  useEffect(() => {
    handleGetRecipes()
  }, [offset, querySearch])

  return (
    <>
      {/* Top bar */}
      <TopBar onSearch={(value) => setQuerySearch(value)} />
      {/* Groups of filters */}
      <SFiltersTitle>Filters</SFiltersTitle>
      <SContainerFilters>
        <Filter
          title="Max of Calories"
          exampleText="Ej: 100..."
          placeholder="calories..."
          onChange={(e) => setCaloriesSearch(e.target.value)}
          value={caloriesSearch}
        />
        <Filter
          title="Cuisines"
          exampleText="Ej: Indian, Italian..."
          placeholder="cuisines"
          onChange={(e) => setCuisinesSearch(e.target.value)}
          value={cuisinesSearch}
        />
        <PrimaryButton width="400px" height="50px" onClick={() => handleGetRecipes()}>
          APPLY FILTER
        </PrimaryButton>
      </SContainerFilters>
      {/* List of cards */}
      <SContainerCardList>
        {!error ? (
          <CardList data={[...recipes]} />
        ) : (
          <h1>Ops! ha ocurrido un error</h1>
        )}
      </SContainerCardList>
      {/* Paginations */}
      <SContainerPagination>
        <Pagination
          itemsPerPage={ITEMS_PER_PAGE}
          items={[...recipes]}
          offset={offset}
          totalResults={totalResults}
          itemOffset={offset}
          setItemOffset={(newOffset) => setOffset(newOffset)}
        />
      </SContainerPagination>
    </>
  )
}

export default Home
