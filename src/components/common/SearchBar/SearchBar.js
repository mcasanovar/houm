import React from 'react'
import PropTypes from 'prop-types'
import { SContainer, SInput } from './SearchBar.style'
// components
import { SearchIcon } from '../../../components'
// colors
import { COLORS } from '../../../styles'

function SearchBar({ placeholder }) {
  return (
    <SContainer>
      <SearchIcon width="45px" height="45px" color={COLORS.darkGray} />
      <SInput placeholder={placeholder} />
    </SContainer>
  )
}

SearchBar.propTypes = {
  placeholder: PropTypes.string
}

export default SearchBar
