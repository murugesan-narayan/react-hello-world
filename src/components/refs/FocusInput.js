import React, { Component } from 'react'
import Input from './Input'


/**
 * We can refer the class component as Ref to focus it
 * this is called class reference.
 * This will not work for functional component
 */
class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
    }

    focusInput() {
        this.inputRef.current.focus()
    }
    clickHandler = () => {
        this.componentRef.current.focusInput()
    }
    
    render() {
        return (
            <div>
                <Input ref={this.componentRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
