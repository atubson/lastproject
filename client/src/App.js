import React, { Component } from 'react';
import './App.css';
import RegisterPage from './components/RegisterPage';
import Login from './components/Login';
import Navbar from './components/Navbar';
import MoviePoster from './components/MoviePoster';


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
      {/* <RegisterPage />
      <Login /> */}
      <Navbar />
      <MoviePoster />
      <p>{this.state.response}</p>
      </div>
      
    );
  }
}

export default App;
