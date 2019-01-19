import React, { Component } from 'react';
import './App.css';
import RegisterPage from './components/RegisterPage';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import MoviePoster from './components/MoviePoster';
import Summary from './components/Summary';
import MovieRoom from './components/MovieRoom';
import MovieDescription from './components/MovieDescription';
import MovieDates from './components/MovieDates';
import MoviePosterDescription from './components/MoviePosterDescription';


class App extends Component {
  constructor(props) {
    super(props)

    this.updateDat = this.updateData.bind(this)
  }
  state = {
    response: '',
    post: '',
    responseToPost: '',
    data: "",
    flag: false,
    flag2: false,
    moreData: ""
  };
 
  updateData = (data) => {
    this.setState({data: data})
    this.setState({flag: true})    
  }
  updateMoreData = (data) => {
    this.setState({moreData: data})
    this.setState({flag2: true})
  }
  
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
        <MoviePoster updateData = {this.updateData} updateMoreData = {this.updateMoreData} />
        <div>
          <Navbar />
            <div className="MovieDetailPage valign-wrapper" >
              <div className="row">
                <MoviePosterDescription data = {this.state.data} />
                <MovieDescription data = {this.state.data} flag = {this.state.flag} moreData = {this.state.moreData} />
                <MovieDates />
              </div>
            </div>
            </div>
        <Navbar /> 
        <MovieRoom />
        
        
        <p>{this.state.response}</p>
      </div>
      
      
      
    );
  }
}
 
export default App;