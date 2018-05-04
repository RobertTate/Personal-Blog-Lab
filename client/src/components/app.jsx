import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './home';
import BlogPage from './blogpage';
import NewBlog from './newblog';
import BlogEditPage from './blogeditpage';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/blog/:id" component={BlogPage} />
                        <Route exact path="/new" component={NewBlog} />
                        <Route exact path="/blog/edit/:id" component={BlogEditPage} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;