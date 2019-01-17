import React, {Component} from 'react';
import axios from 'axios';
import './Summary.css';

//const api_key = "332654c71ccbb479020bcc047eaa43e8";

class Summary extends Component {

        state = {
            images: [],
            title: [],
            dates: []
        }

        componentDidMount() {
            this.getMovie();
        }
        getMovie = () => {
            axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=332654c71ccbb479020bcc047eaa43e8&language=en-US&page=1&region=pl')
                .then(res => {
                    this.setState({
                        images: res.data.results.slice(4, 8)
                    })

                })
        }

        render() {
            const {images} = this.state;
            const posters = images.map(image => {
                return ( <div className = 'poster-con' key = {image.id} >
                    <div className = 'poster-s-con'>
                    <img className = "poster responsive-img" src = {`http://image.tmdb.org/t/p/w300${image.poster_path}`} alt = 'img' />
                    <h5 className = 'movie-title'> {image.title} </h5> </div>
                    </div>            
                )
            })

             return (
             <div className = "container">
            <div className = "row" >
            <div className = "grid-example col s12"><h3>Your booking summary</h3></div>
            <h5>PERSONAL INFORMATION</h5>
            <div className = "grid-example col s12 m6" > Name <span className = "meta-data" > Jan Kowalski </span></div>
            <div className = "grid-example col s12 m6" >E-mail<span className = "meta-data" >jan355@gmail.com </span></div>
            <div className = "grid-example col s12 m6" > Phone number <span className = "meta-data"> 605-705-805</span></div>
            <div className = "additional-details" >
            <div className = "row nopadding release-details" >
            <div className = "grid-example col s12"><h5>TICKET DETAILS</h5></div>
            <div className = "grid-example col s12 m6" > Cinema <span className = "meta-data" > Wroclavia </span></div>
            <div className = "grid-example col s12 m6"> Seat<span className = "meta-data" >G 14 </span> </div>
            <div className = "grid-example col s12 m6"> On <span className = "meta-data" >Monday 14th Jan </span></div>
            <div className = "grid-example col s12 m6"> Starts<span className = "meta-data" >16:45</span></div>
            <div className = 'movie-summary' > {posters} </div>
            <a href = '/#' className = 'red hoverable btn waves-effect waves-light'> Homepage </a>
            </div> 
            </div>
            </div> 
             </div> )
        }
    };
export default Summary;