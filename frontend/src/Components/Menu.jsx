import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
             <Link className='navbar-brand' to='/'>Satyaki</Link>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                     <span classNmae="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarNavDropdown">
                 <ul className='navbar-nav'>
             
               
                 <li clasName="nav-item active">
                    <Link className="nav-link" to="/Checkout">Checkout </Link>
                 </li> 
                 <li clasName="nav-item active">
                    <Link className="nav-link" to="/Cart">Cart </Link>
                 </li> 
                 </ul>
             </div>
        </div>
    )
}

export default Nav
