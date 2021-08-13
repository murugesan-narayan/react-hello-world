import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Nehru'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Nehru'
            })
        }, 60000)
    }
    
    render() {
        console.log('...................Parent Comp............')
        return (
            <div>
                Parent Component
                <RegularComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
