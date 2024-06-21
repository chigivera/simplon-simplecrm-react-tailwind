import React, { Component } from 'react'
import FactureList from '../components/FactureList'
import Metrics from '../components/Metrics'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Metrics/>
        <FactureList/>
      </div>
    )
  }
}

export default Dashboard
