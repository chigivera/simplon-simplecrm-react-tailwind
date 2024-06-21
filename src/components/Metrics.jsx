import React, { Component } from 'react'
import Metric from './Metric'

export class Metrics extends Component {
  render() {
    return (
      <div className="flex px-3 pt-5">
        <Metric/>
        <Metric/>
        <Metric/>
        <Metric/>
        
        
      </div>
    )
  }
}

export default Metrics