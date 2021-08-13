import React from 'react'

const style = {
    fontSize: '75px',
    color: 'blue'
}

function InLineStyle() {
    return (
        <div>
            <h1 style={style}>In Line Style</h1>
            <h1 className='error'>In Line Error</h1>
        </div>
    )
}

export default InLineStyle
