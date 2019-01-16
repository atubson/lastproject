import React from 'react';
import './style.css';



const Navbar= ()=>{
    return(
        <div className='my-navbar indigo darken-4 white-text'>
            <div className='my-navbar-small'>
                <div className=' nav-logo-container '>
                    <img className=" img-nav-bar " src="/logo.png" alt="logo"/>
                </div>
                <div className='nav-right-con'>
                    <div className='user-nav' >Username</div>
                    <a href='/#' className='red hoverable btn waves-effect waves-light'>Logout</a>
                </div>
            </div>            
        </div>

    )
}


export default Navbar;