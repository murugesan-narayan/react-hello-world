import React, { PureComponent } from 'react'

/**
 * It will not change if no changes in props or state by doing shallow comparision
 */
class PureComp extends PureComponent {
    render() {
        console.log('Peru Comp............')
        return (
            <div>
                Pure Component: {this.props.name}
            </div>
        )
    }
}

export default PureComp
