import React, { Component } from 'react'
import ForwardRefInput from './ForwardRefInput'

class ForwardRefInputParent extends Component {
    
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }
    

    render() {
        return (
            <div>
                <ForwardRefInput ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ForwardRefInputParent
