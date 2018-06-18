import React, { Component }  from 'react';
import Layout from './Layout';

import "./NotFound.css";

class NotFound extends Component {
    render() {
        return(
            <Layout>
                <div>
                    <h1>404: Page Not Found</h1>
                    <p>Lost in space...</p>
                </div>
            </Layout>
        );
    }
};

export default NotFound;
