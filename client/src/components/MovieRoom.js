import React from 'react';
import Seat from './Seat';
import './style.css';

class MovieRoom extends React.Component{
    state={
        seat:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
            21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],
        seatAvailable: [1,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
            21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,47,48],
        seatReserved: [2,3,28,45,46],
        seatChoosen:[]
        
    }

    onClickData(seat) {
        if(this.state.seatChoosen.indexOf(seat) > -1 ) {//jesli jest wybrany
            this.setState({
                        seatChoosen: this.state.seatChoosen.filter(res => res !== seat),//usuwamy go z wybranych
                        seatAvailable: this.state.seatAvailable.concat(seat),
        
                    })
    
        } else if(this.state.seatReserved.indexOf(seat) > -1){
                this.setState({
                    seatChoosen: this.state.seatChoosen,
                    seatAvailable: this.state.seatAvailable,
                })
        }else {
            this.setState({
                seatChoosen: this.state.seatChoosen.concat(seat),
                seatAvailable: this.state.seatAvailable.filter(res => res !== seat)                 
            })               
            }
        }
   
     onClickNext=()=>{
        if(this.state.seatChoosen.length > 0 ){
            this.setState({
                seatReserved: this.state.seatReserved.concat(this.state.seatChoosen)
                })
            }     
        }  
  
    render(){
        // console.log('Dostepne:',this.state.seatAvailable,'Zarezerwowane: ',this.state.seatReserved,'Wybrane : ',this.state.seatChoosen);
        // console.log('Po kliknieciu.Reserved: ', this.state.seatReserved)
        
        return(
            <div className='big-con white-text'>
                <div className='small-con'>
                    <div className='choose-header'>
                        <h4 className='choose-header-text'>Choose your seat</h4>
                        <div className='choose-seat'>
                            <div>
                                <div className='seat available'></div>
                                <h6 className='seat-text'>AVAILABLE</h6></div>
                            <div>
                                <div className='seat reserved'></div>
                                <h6 className='seat-text'>RESERVED</h6>
                            </div>
                            <div>
                                <div className='seat choosen'></div>
                                <h6 className='seat-text'>YOUR CHOICE</h6>
                            </div>
                            
                        </div>
                    </div>
                    <div className='seats-big-con'>
                        <h6 className='screen'>Screen</h6>
                        <div className='seats-small-con'>
                            <div className='seats-con'>
                                <Seat 
                                seat = {this.state.seat}
                                available={this.state.seatAvailable}
                                reserved = {this.state.seatReserved}
                                choosen = {this.state.seatChoosen}
                                onClickData= {this.onClickData.bind(this)}/>
                            </div>
                        </div>
                        
                    </div>
                    <div className='room-button-con'>
                    <button className='red hoverable btn waves-effect waves-light right' disabled={this.state.seatChoosen.length < 1} onClick={this.onClickNext}>NEXT</button>
                    </div>

                    
                </div>
            </div>
        )
    }
    
}
    
export default MovieRoom;