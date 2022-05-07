import React from 'react'
import PropTypes from 'prop-types'
import { SearchCircleIcon } from '@heroicons/react/solid'
// colors
import { COLORS } from '../../../styles'

function SearchIcon({ width, height, color }) {
  return <SearchCircleIcon style={{ color, width, height }} />
}

SearchIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string
}

SearchIcon.defaultProps = {
  width: '20px',
  height: '20px',
  color: COLORS.white
}

export default SearchIcon
