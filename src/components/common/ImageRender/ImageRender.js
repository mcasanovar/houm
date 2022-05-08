import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { SContainer, SImage } from './ImageRender.style'
import notFoundImage from '../../../assets/img/notFoundImage.jpg'
// hooks
import { useIntersection } from '../../../hooks'

function ImageRender({ url, alt }) {
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef()

  useIntersection(imgRef, () => {
    setIsInView(true)
  })

  return (
    <SContainer ref={imgRef}>
      {isInView && <SImage src={url} alt={alt} onError={(e) => {
        e.currentTarget.onerror = null
        e.currentTarget.src = notFoundImage
      }}/>}
    </SContainer>
  )
}

ImageRender.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string
}

export default ImageRender
