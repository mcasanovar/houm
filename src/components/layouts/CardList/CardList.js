import React from 'react'
import PropTypes from 'prop-types'
import {
  SContainerImage,
  SContainerTitle,
  STitle,
  SContainerAdditionalInformation,
  SContainerDescription,
  SSpan
  // SContainerButton
} from './CardList.style'
// components
import {
  Card,
  ImageRender,
  AdditionalInformation,
  HeartIcon,
  ClockIcon,
  DolarIcon
  // Button
} from '../../../components'
import { COLORS } from '../../../styles'

function CardList({ data }) {
  // const { PrimaryButton } = Button

  return (
    <>
      {!!data.length &&
        data.map((item) => (
          <Card key={item.id}>
            {/* Image */}
            <SContainerImage>
              <ImageRender url={item.image} alt={item.title} />
            </SContainerImage>
            {/* Title */}
            <SContainerTitle>
              <STitle>{item.title}</STitle>
            </SContainerTitle>
            {/* AdditionalInformation */}
            <SContainerAdditionalInformation>
              <AdditionalInformation
                Icon={<HeartIcon color={COLORS.darkGray} />}
                quantity={item.likes}
                text="Likes"
              />
              <AdditionalInformation
                Icon={<DolarIcon color={COLORS.darkGray} />}
                quantity={item.price}
                text="Price"
              />
              <AdditionalInformation
                Icon={<ClockIcon color={COLORS.darkGray} />}
                quantity={`${item.time} min`}
                text="Time"
              />
            </SContainerAdditionalInformation>
            {/* Description */}
            <SContainerDescription>
              <SSpan>{item.description}</SSpan>
            </SContainerDescription>
            {/* Button */}
            {/* <SContainerButton>
              <PrimaryButton width='70%'>Details</PrimaryButton>
            </SContainerButton> */}
          </Card>
        ))}
    </>
  )
}

CardList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      likes: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      time: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      image: PropTypes.string
    })
  )
}

export default CardList
