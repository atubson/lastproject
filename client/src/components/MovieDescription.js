import React from 'react';

class MovieDescription extends React.Component {   

    render() {
        if ( this.props.flag !== false && this.props.flag2 !== false) {
            return (
                <div className="col s6 l4">
                    <div className="card">
                        <div className="card-title">Film description</div>
                        <div className="card-content left-align">
                            {this.props.data.overview}
                        </div>
                        <div className="card-title">More information</div>
                        <div className="card-content">
                            <table >
                                <tbody>
                                    <tr>
                                        <td>Director:</td>
                                        <td>{this.props.moreData.crew.map(crew => crew.name).slice(0,1)}</td>
                                    </tr>
                                    <tr>
                                        <td>Cast:</td>
                                        <td>{this.props.moreData.cast.map(actors => actors.name + " ").slice(0,4)}</td>
                                    </tr>
                                    <tr>
                                        <td>Genre:</td>
                                        <td>{this.props.data.genres.map(genre => genre.name + " ")}</td>
                                    </tr>
                                    <tr>
                                        <td>Rating:</td>
                                        <td>{this.props.data.vote_average}</td>
                                    </tr>
                                    <tr>
                                        <td>Runtime:</td>
                                        <td>{this.props.data.runtime} min</td>
                                    </tr> 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            );
        }else  {
            return (
                <div className="col s6 l4">
                    <div className="card">
                        <div className="card-title">Film description</div>
                        <div className="card-content left-align">
                            {this.props.data.overview}
                        </div>
                        <div className="card-title">More information</div>
                        <div className="card-content">
                            <table >
                                <tbody>
                                    <tr>
                                        <td>Director:</td>
                                        <td>{}</td>
                                    </tr>
                                    <tr>
                                        <td>Cast:</td>
                                        <td>{}</td>
                                    </tr>
                                    <tr>
                                        <td>Genre:</td>
                                        <td>{}</td>
                                    </tr>
                                    <tr>
                                        <td>Rating:</td>
                                        <td>{}</td>
                                    </tr>
                                    <tr>
                                        <td>Runtime:</td>
                                        <td>{} min</td>
                                    </tr> 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            );
            
        }
    }
    
}

export default MovieDescription;