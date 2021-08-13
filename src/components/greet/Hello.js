// @flow 
import * as React from 'react';

export const Hello = props => {
    const {name} = props
    return (
        <div>
            <h1>Hello {name}</h1>
            {
                props.children
            }          
        </div>
    );

//    return React.createElement("div", {id: 'Hello', className: 'dummyClass'}, React.createElement('h1', null, 'Hello React Create Element'))
};