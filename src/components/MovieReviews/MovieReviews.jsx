import React, { Component } from "react"
import { fetchMovieReviews } from "../../services/moviesApi"

class MovieReviews extends Component {
  state = {
    reviews: [],
  }

  componentDidMount() {
    const movieId = this.props.match.params.movieId
    fetchMovieReviews(movieId).then((reviews) => this.setState({ reviews }))
  }

  render() {
    const { reviews } = this.state
    return (
      <div className="MovieReviewsWrapper">
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}


export default MovieReviews
