import React, { Component } from 'react'
import LifeCycleChild from './LifeCycleChild'

class LifeCycleUpdate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Nehru'
        }
        console.log('In LifeCycleUpdate constructor...')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('In LifeCycleUpdate getDerivedStateFromProps.......')
        return null;
    }

    componentDidMount() {
        console.log('In LifeCycleUpdate componentDidMount.......')
    }

    shouldComponentUpdate() {
        console.log('In LifeCycleUpdate shouldComponentUpdate.......')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('In LifeCycleUpdate getSnapshotBeforeUpdate.......')
        return null;
    }

    componentDidUpdate() {
        console.log('In LifeCycleUpdate componentDidUpdate.......')
    }

    changeStateClickHandler = () => {
        this.setState({
            name: 'Kamarajar'
        })
    }
    
    render() {
        console.log('In LifeCycleUpdate render.......')
        return (
            <div>
                <div>
                    <LifeCycleChild />
                </div>
                <div>
                    <button onClick={this.changeStateClickHandler}>Change State</button>
                </div>
            </div>
        )
    }
}

export default LifeCycleUpdate