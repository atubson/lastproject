import React, {Component} from "react";
import {NavLink} from 'react-router-dom';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            notes: []
        };
    }

    async componentDidMount() {
        if (!this.props.isAuthenticated) {
            return;
        }

        try {
            const notes = await this.notes();
            this.setState({
                notes
            });
        } catch (e) {
            alert(e);
        }

        this.setState({
            isLoading: false
        });
    }   

    renderLander() {
        return ( 
        <div className = "lander" >
            <h1> Cinema Ticket app</h1>
             <p>A simple cinema ticket app</p>
              <div>
                <NavLink to= '/login' className = 'red hoverable btn waves-effect waves-light' > Login </NavLink>
                <NavLink to= '/register' className = 'red hoverable btn waves-effect waves-light'> Register </NavLink>
             </div>
         </div>
        );
    }


    render() {
        return ( <div className = "Home" > {
                this.props.isAuthenticated ? this.renderNotes() : this.renderLander()
            } </div>
        );
    }
}
