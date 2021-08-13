import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             skill: 'react'
        }
    }
    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleSkillChange = (event) => {
        this.setState({
            skill: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        alert(`${this.state.username}  ${this.state.comments} ${this.state.skill}`)
    }
    render() {
        const {username, comments, skill} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User Name</label>
                    <input type='text' value={username} onChange={this.handleUserNameChange}></input>
                </div>
                <div>
                    <label>Comments</label>
                    <input type='textarea' value={comments} onChange={this.handleCommentsChange}></input>
                </div>
                <div>
                    <label>Skill</label>
                    <select value={skill} onChange={this.handleSkillChange}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form
