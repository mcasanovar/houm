import React from 'react'
import PropTypes from 'prop-types'
import { ClockIcon } from '@heroicons/react/solid'
// colors
import { COLORS } from '../../../styles'

function Clock({ color, width, height }) {
  return <ClockIcon style={{ color, width, height }} />
}

Clock.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string
}

Clock.defaultProps = {
  width: '20px',
  height: '20px',
  color: COLORS.black
}

export default Clock
