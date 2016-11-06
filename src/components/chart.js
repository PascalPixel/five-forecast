import _ from 'lodash'
import React, { Component } from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

function averageNumber(values) {
  return _.round(_.sum(values)/values.length)
}

export default (props) => {
  return (
    <div>
      <Sparklines
        height = {props.height}
        width  = {props.height * 1.8}
        min    = {props.min}
        max    = {props.max}
        data   = {props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine
          style={{
            stroke: '#959282',
            strokeDasharray: '2, 4' }}
          type='mean' />
      </Sparklines>
      <p>{averageNumber(props.data)}{props.unit}</p>
    </div>
  )
}
