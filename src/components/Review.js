import React, { Component } from 'react'

const Review = (props) => {
  return(
    <li className="review" >
      <div>Title: {props.review.display_title}</div>
      <div>Review: {props.review.headline}</div>
    </li>
  )
}

export default Review
