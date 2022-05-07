import React from 'react'
import { SContainer } from './TopBar.style'
// common
import { LogoIcon, SearchBar } from '../../../components'

function TopBar() {
  return (
    <SContainer>
      <LogoIcon />
      <SearchBar placeholder='Buscar...'/>
    </SContainer>
  )
}

export default TopBar
