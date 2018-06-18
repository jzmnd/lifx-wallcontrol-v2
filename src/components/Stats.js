import React, { Component }  from 'react';
import Layout from './Layout';

import "./Stats.css";

class Stats extends Component {
    render() {
        return(
            <Layout>
                <div>
                    <h1>Stats</h1>
                    <p>Stats page - weather etc.</p>
                </div>
            </Layout>
        );
    }
};

export default Stats;
