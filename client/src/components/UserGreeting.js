import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        return this.state.isLoggedIn ? (
        <div><h4>Welcome user</h4></div> ) : ( <div><h4>Sign account</h4></div>)
    }
}

export default UserGreeting