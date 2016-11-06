import React, { Component } from 'react'

import SearchBar from '../containers/search-bar'
import SearchResults from '../containers/search-results'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <br />
        <h1><i className="wi wi-day-sunny"></i> five forecast</h1>
        <br />
        <SearchBar />
        <br />
        <SearchResults />
        <br />
      </div>
    )
  }
}
