import React from 'react'
import PropTypes from 'prop-types'
import { SStandardButton, SPrimaryButton } from './Button.style'

const StandardButton = ({ children, width, height }) => {
  return <SStandardButton width={width} height={height}>{children}</SStandardButton>
}

const PrimaryButton = ({ children, width, height }) => {
  return <SPrimaryButton width={width} height={height}>{children}</SPrimaryButton>
}

StandardButton.propTypes = {
  children: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

PrimaryButton.propTypes = {
  children: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

export default {
  StandardButton,
  PrimaryButton
}
