import React from 'react'
import PropTypes from 'prop-types'
import { SContainer } from './TopBar.style'
// common
import { LogoIcon, SearchBar } from '../../../components'

function TopBar({ onSearch }) {
  return (
    <SContainer>
      <LogoIcon />
      <SearchBar placeholder='Pasta...' onSearch={onSearch}/>
    </SContainer>
  )
}

TopBar.propTypes = {
  onSearch: PropTypes.func
}

export default TopBar
