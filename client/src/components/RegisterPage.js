import React from 'react';

class RegisterPage extends React.Component {

   state = {email: '', username: '', password: '', passwordConfirm: ''};


    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        
        return(
        <div className="white-text">
            <div className="container">
            <div className="row"></div>
                <div className="row">
                <div className="col s12 l4 offset-l4">
                    <img className="responsive-img" src="/logo.png" alt="logo"/>
                </div>
                </div>
                <div className="row">
                    <div className="col s12 l4 offset-l4">
                        <div className="card">
                            <div className="card-action white black-text">
                                <h3> Register </h3>
                            </div>
                            <form onSubmit={this.onFormSubmit}>
                            <div className="card-content">
                            <div className="form-field">
                                    <label htmlFor="email"><h6>E-mail</h6></label>
                                    <input placeholder="email" type="email" id="email" className="validate" onChange={(e) => {this.setState({email: e.target.value})}}></input>
                            </div>
                            <div className="form-field">
                                    <label htmlFor="username"><h6>Username</h6></label>
                                    <input placeholder="username" type="text" id="username" onChange={(e) => this.setState({username: e.target.value})}></input>
                            </div>
                            <div className="form-field">
                                    <label htmlFor="password"><h6>Password</h6></label>
                                    <input placeholder="password" type="password" id="password" className="validate" onChange={(e) => this.setState({password: e.target.value})}></input>
                            </div>
                            <div className="form-field">
                                    <label htmlFor="password-confirm"><h6>Confirm Password</h6></label>
                                    <input placeholder="password confirm" type="password" id="password-confirm" className="validate" onChange={(e) => this.setState({passwordConfirm: e.target.value})}></input>
                            </div>
                            <div className="form-field">
                                    <button className="red hoverable btn waves-effect waves-light" type="submit" name="action" ><h6>Submit<i className="material-icons right">send</i></h6></button>
                            </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default RegisterPage;