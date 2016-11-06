import _                    from 'lodash'
import React, { Component } from 'react'
import { connect }          from 'react-redux'

import Chart                from '../components/chart'
import Map                  from '../components/map'

class SearchResults extends Component {
  renderWeather(cityData) {
    const name       = cityData.city.name
    const forecast   = cityData.list[0].weather[0].main
    const icon       = cityData.list[0].weather[0].icon
    const lat        = cityData.city.coord.lat
    const lon        = cityData.city.coord.lon

    const temps      = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273)
    const pressures  = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)

    const graphics   = 80

    return (
      <div key={name}>
        <hr />
        <div className='row'>
          <div className='col-xs-3'>
            <Map
              lat      = {lat}
              lon      = {lon}
              height   = {graphics} />
            <img
              className='weather-icon'
              src={`http://openweathermap.org/img/w/${icon}.png`}/> {forecast}
          </div>
          <div className='col-xs-3'>
            <Chart
              data     = {temps}
              color    = '#FCE400'
              unit     = '°C'
              height   = {graphics} />
          </div>
          <div className='col-xs-3'>
            <Chart
              data     = {pressures}
              color    = '#F1729E'
              unit     = ' hPa'
              height   = {graphics} />
          </div>
          <div className='col-xs-3'>
            <Chart
              data     = {humidities}
              color    = '#27AE60'
              min      = {0}
              max      = {100}
              unit     = '%'
              height   = {graphics} />
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className='search-results'>
        <div className='row'>
          <div className='col-xs-3'>City       </div>
          <div className='col-xs-3'>Temperature</div>
          <div className='col-xs-3'>Pressure   </div>
          <div className='col-xs-3'>Humidity   </div>
        </div>
        <br />
        {this.props.weather.map(this.renderWeather)}
      </div>
    )
  }
}

// Non-ES6 example
// function mapStateToProps(state) {
//   return { weather: state.weather }
// }
function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(SearchResults)
