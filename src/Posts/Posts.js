import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchPosts from './Actions/Actions';
import { Link } from 'react-router';

class Posts extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <Link to="/posts/new" className="btn btn-primary">
                    Add new
                </Link>
                <p className="App-intro">List of Posts</p>
            </div>
        );
    }
}

export default connect(null, { fetchPosts })(Posts);