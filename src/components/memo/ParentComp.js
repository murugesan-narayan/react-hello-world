import React, { Component } from 'react'
import MemoComp from './MemoComp'

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
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
