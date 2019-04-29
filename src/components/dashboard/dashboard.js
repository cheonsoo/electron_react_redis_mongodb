import React, { Component } from 'react';
import './dashboard.css';

import Graph1 from '../graph/graph1.js'
import Graph2 from '../graph/graph2.js'

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            data : {}
        };
    }

    componentDidMount() {}
    
    componentDidUpdate() {}
    
    render() {
        return (
            [ <Graph1 />, <Graph2 /> ]
        );
    }
}

export default Dashboard;