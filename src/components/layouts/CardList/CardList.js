import React from 'react'
import PropTypes from 'prop-types'
import { SImage } from './CardList.style'
// components
import { Card } from '../../../components'

function CardList({ data }) {
  return (
    <>
      {!!data.length &&
        data.map((item) => <Card key={item.id}>
          <SImage src={item.image}/>
        </Card>)}
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
      ingredients: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      time: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      image: PropTypes.string
    })
  )
}

export default CardList
