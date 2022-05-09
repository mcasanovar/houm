import React from 'react'
import PropTypes from 'prop-types'
import { SStandardButton, SPrimaryButton } from './Button.style'

const StandardButton = ({ children, width, height, onClick }) => {
  return <SStandardButton width={width} height={height} onClick={onClick}>{children}</SStandardButton>
}

const PrimaryButton = ({ children, width, height, onClick }) => {
  return <SPrimaryButton width={width} height={height} onClick={onClick}>{children}</SPrimaryButton>
}

StandardButton.propTypes = {
  children: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func
}

PrimaryButton.propTypes = {
  children: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func
}

export default {
  StandardButton,
  PrimaryButton
}
