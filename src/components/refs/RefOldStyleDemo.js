import React, { Component } from 'react'

class RefOldStyleDemo extends Component {
    constructor(props) {
        super(props)
        //old style
        this.callBackRef = null
        this.setCallBackRef = (element) => {
            this.callBackRef = element
        }
    }
    
    componentDidMount(){
        //old style
        if (this.callBackRef) {
            this.callBackRef.focus()
        }
    }


    clickHandlerOld = () => {
        alert(this.callBackRef.value)
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.setCallBackRef}></input>
                <button onClick={this.clickHandlerOld}>Old Sytle Ref CLick</button>
            </div>
        )
    }
}

export default RefOldStyleDemo
