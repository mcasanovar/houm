import React, { useState, useEffect } from 'react'
import {
  SContainerCardList,
  SContainerFilters,
  SFiltersTitle,
  SContainerPagination,
  SContainerNotFound,
  SContainerFilterButton,
  SContainerSearchBar
} from './Home.style'
import { OK_PROMISE_RETURN, ITEMS_PER_PAGE } from '../../constants'
// components
import {
  CardList,
  Pagination,
  TopBar,
  Filter,
  Button,
  Skeleton,
  SearchBar
} from '../../components'
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
  const [loading, setLoading] = useState(false)

  const { PrimaryButton } = Button
  const { CardSkeleton } = Skeleton

  const handleGetRecipes = async () => {
    setLoading(true)
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
      setLoading(false)
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
        <SContainerSearchBar>
          <SearchBar placeholder="search..." width='auto' focusWidth='auto' onSearch={(value) => setQuerySearch(value)}/>
        </SContainerSearchBar>
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
        <SContainerFilterButton>
          <PrimaryButton
            width="360px"
            height="50px"
            onClick={() => handleGetRecipes()}
          >
            APPLY FILTER
          </PrimaryButton>
        </SContainerFilterButton>
      </SContainerFilters>
      {/* List of cards */}
      <SContainerCardList>
        {loading && (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        )}
        {!error && !loading && <CardList data={[...recipes]} />}
      </SContainerCardList>
      {!error && !totalResults && !loading && (
        <SContainerNotFound>
          <h1>No se encontraron resultados</h1>
        </SContainerNotFound>
      )}
      {error && (
        <SContainerNotFound>
          <h1>Ops! ha ocurrido un error</h1>
        </SContainerNotFound>
      )}
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
