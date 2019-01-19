import React from 'react';
import axios from 'axios';
 
import './style.css';

const api_key = "896b160ed1c39f3b9471c1b72df80de9";

class MoviePoster extends React.Component{
    state = {
        images: [],
        title: []
    }

    handleImgClick = (id) => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
            .then(response => response.json())
            .then(json => {
                this.props.updateData(json);
            });
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`)
            .then(response => response.json())
            .then(json => {
                this.props.updateMoreData(json);
            });
        

    }

    componentDidMount(){
        this.getMovie();
    }
    getMovie = ()=>{
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=332654c71ccbb479020bcc047eaa43e8&language=en-US&page=1&region=pl')
        .then(res=>{
            this.setState({
                images: res.data.results.slice(0,4)
            })
            
        })  
    }

    render(){
        const { images } = this.state;
        const posters = images.map( image => {
                return(
                    <div onClick={() => this.handleImgClick(image.id)} className='poster-con'key={image.id}>
                        <div className='poster-s-con' >
                            <img className="poster responsive-img" src ={`http://image.tmdb.org/t/p/w300${image.poster_path}`} alt='img'/>
                            <h5 className='movie-title'>{image.title}</h5>
                        </div>
                    </div>            
                )
            })

        return(
            <div className='movie-big-con white-text'>
                <div className='movie-small-con'>
                <div className='movie-con'>{posters}</div>
                </div>
            </div>
        
    )}

};

export default MoviePoster;