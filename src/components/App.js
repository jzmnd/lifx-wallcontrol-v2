import React, { Component }  from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Lights from './Lights';
import Stats from './Stats';
import About from './About';
import NotFound from './NotFound';

import "./App.css";

class App extends Component {
    render() {
        return(
            <Router>
                <Route exact path='/' component={Lights} />
                <Route path='/stats' component={Stats} />
                <Route path='/about' component={About} />
                <Route path='*' component={NotFound} />
            </Router>
        );
    }
};

export default App;
