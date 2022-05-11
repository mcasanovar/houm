import React from 'react'
import PropTypes from 'prop-types'
import { SContainerAnimationCard, animationSelected } from './Card.style'

function Card({ children, animationType }) {
  const animation = animationSelected(animationType)

  return <SContainerAnimationCard animationType={animation}>{children}</SContainerAnimationCard>
}

Card.propTypes = {
  children: PropTypes.node,
  animationType: PropTypes.any
}

export default Card
