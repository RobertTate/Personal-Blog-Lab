import React, { Component, Fragment } from 'react';
import * as userService from '../services/user';
import { Redirect } from 'react-router-dom';
import IndeterminateProgress from './utilities/indeterminateProgress';


class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            name: '',
            email: '',
            password: '',
            feedbackMessage: '',
            checkingLogin: true
        };
    }

    componentDidMount() {
        userService.checkLogin()
            .then((loggedIn) => {
                if (loggedIn) {
                    this.setState({ redirectToReferrer: true, checkingLogin: false });
                } else {
                    this.setState({ checkingLogin: false });
                }
            });
    }

    signup(e) {
        e.preventDefault();
        userService.newUser(this.state.name, this.state.email, this.state.password)
            .then(() => {
                this.setState({ redirectToReferrer: true });
            })
            .catch((err) => {
                if (err.message) {
                    this.setState({ feedbackMessage: err.message });
                }
            });
    }

    handleNameChange(value) {
        this.setState({ name: value });
    }


    handleEmailChange(value) {
        this.setState({ email: value });
    }

    handlePasswordChange(value) {
        this.setState({ password: value });
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { redirectToReferrer, checkingLogin } = this.state;

        if (checkingLogin) {
            return <IndeterminateProgress message="Checking Login Status..." />;
        }
        if (redirectToReferrer) {
            return (
                <Fragment>
                    <div className="blog-page">
                        <p><strong>You are are logged in!</strong></p>
                        <a className="btn btn-secondary" href='/'>Go Back</a>
                    </div>
                </Fragment>
            );
        }

        return (
            <Fragment>
                <div className="blog-page">
                    <p><strong>Sign Up Below</strong></p>
                    <form className="blog-page" onSubmit={(e) => this.signup(e)}>
                        <div className="form-group">
                            <input id="name" placeholder="Enter Name Here" className="form-control" type="name" onChange={(e) => this.handleNameChange(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <input id="email" placeholder="Enter Email Here" className="form-control" type="email" onChange={(e) => this.handleEmailChange(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <input id="password" placeholder="Enter Password Here" className="form-control" type="password" onChange={(e) => this.handlePasswordChange(e.target.value)} required />
                        </div>
                        {this.state.feedbackMessage ? (
                            <p>{this.state.feedbackMessage}</p>
                        ) : null}
                        <input type="submit" value="Login" className="btn btn-secondary" />
                    </form>
                </div>
            </Fragment>
        );
    }
}

export default SignupPage;