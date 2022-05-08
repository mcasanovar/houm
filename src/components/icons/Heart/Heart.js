import React from 'react'
import PropTypes from 'prop-types'
import { HeartIcon } from '@heroicons/react/solid'
// colors
import { COLORS } from '../../../styles'

function Heart({ color, width, height }) {
  return <HeartIcon style={{ color, width, height }} />
}

Heart.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string
}

Heart.defaultProps = {
  width: '20px',
  height: '20px',
  color: COLORS.black
}

export default Heart
