import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Posts from './Posts/Posts';
import NewPost from './Posts/NewPost';

export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ Posts } />
        <Route path="posts" component={ Posts } />
        <Route path="posts/new" component={ NewPost } />
    </Route>
);