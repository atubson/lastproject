import React from 'react';
import './style.css';

class MoviePosterDescription extends React.Component{

    render(){
        return(
            <div className="col s6 l4 white-text" >
            <div className="card">
            <div className="card-content black-text">
                        <img className="poster responsive-img" src ={`http://image.tmdb.org/t/p/w300${this.props.data.poster_path}`} alt='Wczytywanie nowego plakatu filmu'/>
                        <h5 className='movie-title white-text'>{this.props.data.title}</h5>
            </div>
            </div>
            </div>
            
        );

};
}

export default MoviePosterDescription;