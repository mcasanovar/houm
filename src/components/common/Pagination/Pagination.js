import React, { useState, useEffect } from 'react'
import { SContainerPagination } from './Pagination.style'
import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'

function Pagination({ itemsPerPage, items, totalResults, itemOffset, setItemOffset }) {
  const [pageCount, setPageCount] = useState(0)

  useEffect(() => {
    setPageCount(Math.ceil(totalResults / itemsPerPage))
  }, [itemOffset, itemsPerPage, items])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % totalResults
    setItemOffset(newOffset)
  }

  return (
    <SContainerPagination>
      <ReactPaginate
        containerClassName="pagination"
        breakLabel="..."
        breakClassName='break-me'
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        previousClassName='previous'
        nextClassName='next'
        renderOnZeroPageCount={null}
        pageClassName='page'
        activeClassName='active'
      />
      <span>{`Total de resultados : ${totalResults}`}</span>
    </SContainerPagination>
  )
}

Pagination.propTypes = {
  itemsPerPage: PropTypes.number,
  offset: PropTypes.number,
  totalResults: PropTypes.number,
  itemOffset: PropTypes.number,
  setItemOffset: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      likes: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      time: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      image: PropTypes.string
    })
  )
}

export default Pagination
