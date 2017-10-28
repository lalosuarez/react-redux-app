import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Posts from './Posts/Posts';

export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ Posts } />
    </Route>
);