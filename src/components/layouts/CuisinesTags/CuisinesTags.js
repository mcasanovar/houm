import React from 'react'
import PropTypes from 'prop-types'
import { SContainer, SContainerTags, STitle } from './CuisinesTags.style'
// components
import { Chip } from '../../../components'

function CuisinesTags({ tags }) {
  return <SContainer>
    <STitle>Cuisines</STitle>
    <SContainerTags>
      {tags.map((item, index) => (
        <Chip key={index} text={item}/>
      ))}
    </SContainerTags>
  </SContainer>
}

CuisinesTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string)
}

export default CuisinesTags
