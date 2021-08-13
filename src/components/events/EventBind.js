import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        //this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler() {
    //     this.setState({
    //         message: 'Good Bye!'
    //     })
    // }

    clickHandler = () => {
        this.setState({
            message: 'Good Bye!'
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */} {/* in line binding */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}{/* arrow function */}
                {/* <button onClick={this.clickHandler}>Click</button> */}{/* constructor binding */}
                <button onClick={this.clickHandler}>Click</button>{/* fucntion as class variable */}
            </div>
        )
    }
}

export default EventBind
