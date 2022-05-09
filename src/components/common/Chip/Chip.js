import React from 'react'
import PropTypes from 'prop-types'
import { SContainer, SText } from './Chip.style'

function Chip({ text }) {
  return (
    <SContainer>
      <SText>{text}</SText>
    </SContainer>
  )
}

Chip.propTypes = {
  text: PropTypes.string
}

export default Chip
