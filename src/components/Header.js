import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <div>
                <p>This is the header, select a route:</p>
                <ul>
                    <li><Link to='/'>Lights</Link></li>
                    <li><Link to='/stats'>Stats</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>
        );
    }
};

export default Header;
