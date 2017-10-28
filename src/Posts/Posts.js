import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchPosts from './Actions/Actions';

class Posts extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <p className="App-intro">
            List of Posts
            </p>
        );
    }
}

export default connect(null, { fetchPosts })(Posts);