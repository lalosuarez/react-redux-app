import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchPosts from './Actions/Actions';
import { Link } from 'react-router';

class Posts extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        console.log(this.props.posts);
        return this.props.posts.map((post) => {
            return (
                <li className="list-group-item" key={ post.id }>
                    <span className="pull-xs-right">{ post.categories }</span>
                    <strong>{ post.title }</strong>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <Link to="/posts/new" className="btn btn-primary">
                    Add new
                </Link>
                <h3>List of Posts</h3>
                <ul className="list-group">
                    { this.renderPosts() }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.all
    };
}

export default connect(mapStateToProps, { fetchPosts })(Posts);