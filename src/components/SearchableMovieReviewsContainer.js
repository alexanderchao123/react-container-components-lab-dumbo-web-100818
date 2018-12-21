import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  changeHandler = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  submitHandler = (event) => {
    event.preventDefault()
    fetch(URL + this.state.searchTerm)
    .then(res => res.json())
    .then(json => this.setState({
      reviews: json.results
    }))
  }

  render() {
    return(
      <div className="searchable-movie-reviews" >
        <h1>Search Movies</h1>
        <form onSubmit={this.submitHandler} >
          <input type="text" placeholder="Search Movies" value={this.state.searchTerm} onChange={this.changeHandler} />
          <button type="submit" >Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
