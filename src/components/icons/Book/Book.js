import React from 'react'
import PropTypes from 'prop-types'
import { BookOpenIcon } from '@heroicons/react/outline'
// colors
import { COLORS } from '../../../styles'

function Book({ width, height, color }) {
  return <BookOpenIcon style={{ color, width, height }} />
}

Book.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string
}

Book.defaultProps = {
  width: '20px',
  height: '20px',
  color: COLORS.black
}

export default Book
