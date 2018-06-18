import React, { Component }  from 'react';
import Layout from './Layout';

import "./About.css";

class About extends Component {
    render() {
        return(
            <Layout>
                <div>
                    <h1>About</h1>
                    <p>Dashboard created by Jez Smith</p>
                </div>
            </Layout>
        );
    }
};

export default About;
