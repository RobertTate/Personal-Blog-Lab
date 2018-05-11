import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './home';
import BlogPage from './blogpage';
import NewBlog from './newblog';
import BlogEditPage from './blogeditpage';
import SignupPage from './signup';
import Donate from './donate';
import Contact from './contact';

import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';
// import LoggedInAs from './loggedinas';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <div className="mr-3 ml-3 mt-1 mb-0" id="navigation">
                        <Link className="btn mr-1 p-1 blue" to="/"><p className="lead mb-0 text-uppercase"><strong>Home</strong></p></Link>
                        <span>-</span>
                        <AuthButton />
                        <span>-</span>
                        <Link className="btn mr-1 p-1 blue" to="/signup"><p className="lead mb-0"><strong>Create a New Account</strong></p></Link>
                        <span>-</span>
                        <Link className="btn mr-1 p-1 blue" to="/contact"><p className="lead mb-0"><strong>Contact Us</strong></p></Link>
                        <span>-</span>
                        <Link className="btn mr-1 p-1 blue" to="/donate"><p className="lead mb-0"><strong>Donate</strong></p></Link>
                        
                    </div>
                    <div className="ml-3 mb-0 mt-0 pb-0 pt-0 hero">
                    </div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/logout" component={Logout} />
                        <Route exact path="/blog/:id" component={BlogPage} />
                        <Route exact path="/signup" component={SignupPage} />
                        <Route path="/donate" component={Donate} />
                        <Route path="/contact" component={Contact} />
                        <PrivateRoute exact path="/new" component={NewBlog} />
                        <PrivateRoute exact path="/blog/edit/:id" component={BlogEditPage} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;