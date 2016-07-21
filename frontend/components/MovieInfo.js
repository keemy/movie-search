import React, { PropTypes, Component } from 'react'

export default class MovieInfo extends Component {
  render() {
    return (
      <div>
        {this.props.movie.title}
      </div>
    )
  }
}
