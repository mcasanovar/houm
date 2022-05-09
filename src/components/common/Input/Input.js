import React from 'react'
import PropTypes from 'prop-types'
import { SInput, SContainer } from './Input.style'

function Input({
  placeholder,
  onChange,
  value,
  onEnter,
  Icon,
  width,
  focusWidth
}) {
  return (
    <SContainer>
      <SInput
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onKeyDown={onEnter}
        width={width}
        focusWidth={focusWidth}
      />
      {Icon}
    </SContainer>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  onEnter: PropTypes.func,
  Icon: PropTypes.element,
  focusWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Input
