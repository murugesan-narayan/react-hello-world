import React, { Component } from 'react'

class LifeCycleChild extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Nehru'
        }
        console.log('In LifeCycleChild constructor...')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('In LifeCycleChild getDerivedStateFromProps.......')
        return null;
    }

    componentDidMount() {
        console.log('In LifeCycleChild componentDidMount.......')
    }

    shouldComponentUpdate() {
        console.log('In LifeCycleChild shouldComponentUpdate.......')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('In LifeCycleChild getSnapshotBeforeUpdate.......')
    }

    componentDidUpdate() {
        console.log('In LifeCycleChild componentDidUpdate.......')
    }
    
    render() {
        console.log('In LifeCycleChild render.......')
        return (
            <div>
                Life Cycle Child
            </div>
        )
    }
}

export default LifeCycleChild