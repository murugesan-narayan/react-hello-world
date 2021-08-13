import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {

    render() {
        return <h2 onMouseOver={this.props.incrementCount}>Hovered {this.props.count} times</h2>
    }
}

export default withCounter(HoverCounter, 12)
