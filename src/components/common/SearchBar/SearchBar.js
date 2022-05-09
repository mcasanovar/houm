import React, { useState } from 'react'
import PropTypes from 'prop-types'
// components
import { SearchIcon, Input } from '../../../components'
// colors
import { COLORS } from '../../../styles'

function SearchBar({ placeholder, onSearch }) {
  const [text, setText] = useState('')

  const handleEnterSearch = (e) => {
    if (e.key === 'Enter') {
      onSearch(text)
    }
  }

  return (
    <Input
      placeholder={placeholder}
      onChange={(e) => setText(e.target.value)}
      value={text}
      onEnter={handleEnterSearch}
      Icon={<SearchIcon width="45px" height="45px" color={COLORS.darkGray} />}
    />
  )
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func
}

export default SearchBar
