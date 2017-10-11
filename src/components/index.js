import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class App extends Component {
  static propTypes ={
    children: PropTypes.node
  }
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}