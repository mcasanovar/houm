import React from 'react'
import PropTypes from 'prop-types'
import { SInput } from './Input.style'

function Input({ placeholder, onChange, value, onEnter }) {
  return (
    <SInput
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      onKeyDown={onEnter}
    />
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  onEnter: PropTypes.func
}

export default Input
