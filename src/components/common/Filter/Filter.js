import React from 'react'
import PropTypes from 'prop-types'
import { SContainer, STitle, SExampleText } from './Filter.style'
// components
import { Input } from '../../../components'

function Filter({ title, exampleText, placeholder, onChange, value }) {
  return (
    <SContainer>
      <STitle>{title}</STitle>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onEnter={() => {}}
        width='360px'
        focusWidth='360px'
      />
      <SExampleText>{exampleText}</SExampleText>
    </SContainer>
  )
}

Filter.propTypes = {
  title: PropTypes.string,
  exampleText: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Filter
