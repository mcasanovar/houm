import React from 'react'
import PropTypes from 'prop-types'
import { SContainer } from './TopBar.style'

function TopBar({ children }) {
  return (
    <SContainer>
      {children}
    </SContainer>
  )
}

TopBar.propTypes = {
  children: PropTypes.node
}

export default TopBar