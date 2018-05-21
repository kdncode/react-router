import React, { Component } from 'react';
import { Link } from 'react-router';

class Work extends Component {
    render() {
        return (
            <div>
                Hello Work
                <Link to="/Work/123">Angular</Link>
                {this.props.children}
            </div>
        );
    }
}

export default Work;