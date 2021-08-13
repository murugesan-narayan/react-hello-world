import React from 'react'
import Person from './Person'
function PersonList() {
    const persons = [
        {
            id: 1,
            name: 'Gandhi',
            age: 75,
            role: 'Freedem Fighter'
        }, 
        {
            id: 2,
            name: 'Nehru',
            age: 78,
            role: 'Prime Minister'
        }, 
        {
            id: 3,
            name: 'Kamarajar',
            age: 75,
            role: 'Chief Minister'
        }]
    const personList = persons.map((person) => <Person key={person.id} person={person}/>)
    return (
        <div>
            {personList}
        </div>
    )
}

export default PersonList

