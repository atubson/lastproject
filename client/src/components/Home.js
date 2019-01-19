import React, {Component} from "react";


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
        return ( <div className = "lander" >
            <h1> Cinema Ticket app</h1>
             <p>A simple cinema ticket app</p>
              <div>
            <button className = "red hoverable btn waves-effect waves-light" type = "submit" name = "action"><h6> Login <i className = "material-icons right" >send</i></h6></button>
            <button className = "red hoverable btn waves-effect waves-light" type = "submit" name = "action"><h6> Register <i className = "material-icons right" >send</i></h6></button>
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
