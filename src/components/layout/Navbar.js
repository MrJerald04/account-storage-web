import React from 'react';
import { Link } from 'react-router-dom';

import util from '../../components/util';
import api from '../../api/api';

const Navbar = () => {
    const logout = (event) => {
        event.preventDefault();
        api.handleLogout();
    }
    return(
        <nav className="navbar bg-dark">
        <h1>
            <Link to="/"><i className="fas fa-code"></i> AccountStorage</Link>
        </h1>
        
            {
                
                util.isLogin() ? 
                (
                    <ul>
                        <li>
                            <Link to="/dashboard" title="Dashboard">
                                <i className="fas fa-user"></i>
                                <span className="hide-sm"> Dashboard</span>
                            </Link>
                        </li>
                        <li>    
                            <div onClick={(e) => logout(e)} style={{cursor: "pointer"}}>
                                <i className="fas fa-sign-out-alt"></i>
                                <span className="hide-sm"> Logout</span>
                            </div>
                            {/* <Link to={(e) => logout(e)}>
                                
                            </Link> */}
                            
                        </li>
                    </ul>
                ) :
                (
                    <ul>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/">Login</Link></li>
                    </ul>
                )
            }
            
        
        </nav>
    )
}
  
export default Navbar;
