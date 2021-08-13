import React, { Component } from 'react'
import LifeCycleChild from './LifeCycleChild'

class LifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Nehru'
        }
        console.log('In LifeCycle constructor...')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('In LifeCycle getDerivedStateFromProps.......')
        return null;
    }

    componentDidMount() {
        console.log('In LifeCycle componentDidMount.......')
    }
    
    render() {
        console.log('In LifeCycle render.......')
        return (
            <div>
                <LifeCycleChild />
            </div>
        )
    }
}

export default LifeCycle