import React from 'react'
import { SContainer, SContainerTags, STitle } from './CuisinesTags.style'
// components
import { Chip } from '../../../components'

function CuisinesTags() {
  return <SContainer>
    <STitle>Cuisines</STitle>
    <SContainerTags>
      {[1, 2, 3].map(item => (
        <Chip key={item} text='Italian'/>
      ))}
    </SContainerTags>
  </SContainer>
}

export default CuisinesTags
