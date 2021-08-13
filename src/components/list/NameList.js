import React from 'react'

function NameList() {
    const names = ['Gandhi', 'Nehru', 'Kamarajar']
    const nameList = names.map((name, i)=><h2 key={i}>{name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList

