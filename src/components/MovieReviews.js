import React, { Component } from 'react'
import Review from './Review'

const MovieReviews = (props) => {
  let reviews = props.reviews.map((review) => <Review review={review} />)

  return(
    <ul className="review-list">
      {reviews}
    </ul>
  )
}

export default MovieReviews
