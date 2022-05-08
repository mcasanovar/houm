import React from 'react'
import PropTypes from 'prop-types'
import { SContainer, SContainerIcon, SQuantity, SText } from './AdditionalInformation.style'

function AdditionalInformation({ Icon, quantity, text }) {
  return (
    <SContainer>
      <SContainerIcon>
        {Icon}
        <SQuantity>
          {quantity}
        </SQuantity>
      </SContainerIcon>
      <SText>
        {text}
      </SText>
    </SContainer>
  )
}

AdditionalInformation.propTypes = {
  Icon: PropTypes.element,
  quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  text: PropTypes.string
}

export default AdditionalInformation
