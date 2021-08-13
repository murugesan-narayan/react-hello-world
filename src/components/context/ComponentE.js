import React, { Component } from 'react'

import UserContext, { UserConsumer } from './UsereContext'

class ComponentE extends Component {
    // static contextType = UserContext 

    render() {
        return (
            <UserConsumer>
                {
                    (username) => {
                        return <div>Using Context Consumer: Hello {username}
                        <br /> Using Context Type: {this.context}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

ComponentE.contextType = UserContext

export default ComponentE
