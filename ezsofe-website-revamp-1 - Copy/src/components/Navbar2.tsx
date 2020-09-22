import React from 'react'
import './Navbar2.css';
import logo from '../images/icon.png'
function Navbar2() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light sticky-top'>
            <div className='navbar-logo pt-2 pl-5'>
                <img src={logo} alt='logo' className='logo'></img><a href='/' className='logo-link'>ezsofe</a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ml-auto pt-2 pr-5">
                <a className='nav-link px-5 text-dark' href="/" >abouts </a>
                <a className='nav-link px-5 text-dark' href="/" >services</a>
                <a className='nav-link px-5 text-dark' href="/" >works</a>
                <a className='nav-link px-5 text-dark' href="/" >contact</a>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar2
