import React, { Component } from 'react';
import './App.css';
import RegisterPage from './components/RegisterPage';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import MoviePoster from './components/MoviePoster';
import Summary from './components/Summary';
import MovieRoom from './components/MovieRoom';


class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({
        response: res.express
      }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
     const response = await fetch('/api/hello');
     const body = await response.json();
     if (response.status !== 200) throw Error(body.message);
     return body;
   };

  render() {
    return (
      
      <div className="App">

        <Login />
        <RegisterPage />
        <Navbar />
        <MoviePoster />
        <Navbar /> 
        <MovieRoom />
        
        
        <p>{this.state.response}</p>
      </div>
      
      
      
    );
  }
}

export default App;
