import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap } from 'react-google-maps'

export default (props) => {
  return (
    <div>
      <GoogleMapLoader
      containerElement={
        <div
          className='map'
          style={{ height: props.height}} />
      }
      googleMapElement={
        <GoogleMap
          ref={(map) => console.log(map)}
          defaultZoom={8}
          defaultCenter={
            {
              lat: props.lat,
              lng: props.lon
            }
          } />
      } />
    </div>
  )
}
