import React, { Component } from 'react';


class Login extends Component{
    state = {
        emailLogin: '',
        passwordLogin: ''
    }

    handleChange= (e)=> {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div className="white-text">
                <div className="container">
                    <div className="row">
                        <div className="col s12 l4 offset-l4">
                            <img className="responsive-img" src="/logo.png" alt="logo"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 l4 offset-l4">
                            <div className="card">
                                <div className="card-action white black-text">
                                    <h3> Login </h3>
                                </div>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="card-content">
                                        <div className="form-field">
                                                <label htmlFor="emailLogin"><h6>E-mail</h6></label>
                                                <input placeholder="email" type="email" id="emailLogin" className="validate" onChange={this.handleChange}/>
                                        </div>  
                                        <div className="form-field">
                                                <label htmlFor="passwordLogin"><h6>Password</h6></label>
                                                <input placeholder="password" type="password" id="passwordLogin"  onChange={this.handleChange}></input>
                                        </div>
                                        <div className="form-field">
                                            <br></br>
                                            <button className="red hoverable btn waves-effect waves-light" type="submit" name="action" ><h6>Submit<i className="material-icons right">send</i></h6></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Login;