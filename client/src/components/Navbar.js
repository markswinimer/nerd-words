import React from 'react';
import './Navbar.css'

class Navbar extends React.Component {
    render() {
        return(
            <div className='Navbar'>
                <div className='Navbar-logo'>N</div>
                <div className='Navbar-title'>Nerd Words</div>
                <div className='Navbar-links'>
                    Home
                </div>
            </div>
        )
    }
}

export default Navbar;