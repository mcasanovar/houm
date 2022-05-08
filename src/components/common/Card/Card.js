import React from 'react'
import PropTypes from 'prop-types'
import { SContainer } from './Card.style'

function Card({ children }) {
  return <SContainer>{children}</SContainer>
}

Card.propTypes = {
  children: PropTypes.node
}

export default Card
