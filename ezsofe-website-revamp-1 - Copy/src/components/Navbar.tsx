import React from 'react'
import './Navbar.css';
import logo from '../images/icon.png'
function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light sticky-top'>
            <div className='navbar-logo pt-3 pl-5'>
                <img src={logo} alt='logo' className='logo'></img><a href='/' className='logo-link'>ezsofe</a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ml-auto pt-4 pr-5">
                <a className='nav-link px-5 text-dark' href="/" >about </a>
                <a className='nav-link px-5 text-dark' href="/" >services</a>
                <a className='nav-link px-5 text-dark' href="/" >works</a>
                <a className='nav-link px-5 text-dark' href="/" >contact</a>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
