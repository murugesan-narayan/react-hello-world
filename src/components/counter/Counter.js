import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState( (prevState, props) => {
            return { count: prevState.count + 1 }
        }, ()=> console.log('Count From Call Back: ',this.state.count)) 
    }

    incrementByFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Count: {this.state.count}</div>
                <button onClick={()=>this.increment()}>Increment</button>
                <button onClick={()=>this.incrementByFive()}>Increment By Five</button>
            </div>
        )
    }
}

export default Counter
