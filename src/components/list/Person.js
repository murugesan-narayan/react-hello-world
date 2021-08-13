import React from 'react'

function Person({person}) {
    console.log(person)
    return (
        <div>
            <h2>Name: {person.name} Age: {person.age} Role: {person.role}</h2>
        </div>
    )
}

export default Person
