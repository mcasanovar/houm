import React, { useState, useEffect } from 'react'
import { SContainerCardList } from './Home.style'
import { OK_PROMISE_RETURN, ITEMS_PER_PAGE } from '../../constants'
// components
import { CardList, Pagination, TopBar } from '../../components'
// services
import { foodService } from '../../services'
// functions
import { mapperRecipes } from '../../functions'

function Home() {
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState(false)
  const [offset, setOffset] = useState(0)
  const [totalResults, setTotalResults] = useState(0)
  const [querySearch, setQuerySearch] = useState(undefined)

  const handleGetRecipes = async () => {
    console.log('get')
    const result = await foodService.getRecipes(offset, querySearch)
    if (result.status === OK_PROMISE_RETURN) {
      const mappedRecipes = mapperRecipes(result.data)
      setOffset(result.offset)
      setTotalResults(result.totalResults)
      setRecipes(mappedRecipes)
      return
    }

    setError(true)
  }

  // const handleQuerySearch = (value) => {
  //   return value ? setQuerySearch(value) : setQuerySearch(undefined)
  // }

  useEffect(() => {
    handleGetRecipes()
  }, [offset, querySearch])

  return (
    <>
      <TopBar onSearch={(value) => setQuerySearch(value)} />
      <SContainerCardList>
        {!error ? (
          <CardList data={[...recipes]} />
        ) : (
          <h1>Ops! ha ocurrido un error</h1>
        )}
      </SContainerCardList>
      <Pagination
        itemsPerPage={ITEMS_PER_PAGE}
        items={[...recipes]}
        offset={offset}
        totalResults={totalResults}
        itemOffset={offset}
        setItemOffset={(newOffset) => setOffset(newOffset)}
      />
    </>
  )
}

export default Home
