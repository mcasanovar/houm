import React from 'react'
import PropTypes from 'prop-types'
import { CurrencyDollarIcon } from '@heroicons/react/solid'
// colors
import { COLORS } from '../../../styles'

function Dolar({ width, height, color }) {
  return <CurrencyDollarIcon style={{ color, width, height }} />
}

Dolar.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string
}

Dolar.defaultProps = {
  width: '20px',
  height: '20px',
  color: COLORS.black
}

export default Dolar
