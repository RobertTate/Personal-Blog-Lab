import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './home';
import BlogPage from './blogpage';
import NewBlog from './newblog';
import BlogEditPage from './blogeditpage';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';
import SignupPage from './signup';
// import LoggedInAs from './loggedinas';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <div className="m-3 hero">
                        <Link className="btn btn-light mb-1 p-1" to="/signup"><strong>Create a New Account</strong></Link>
                        <AuthButton />
                    </div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/logout" component={Logout} />
                        <Route exact path="/blog/:id" component={BlogPage} />
                        <Route exact path="/signup" component={SignupPage} />
                        <PrivateRoute exact path="/new" component={NewBlog} />
                        <PrivateRoute exact path="/blog/edit/:id" component={BlogEditPage} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;