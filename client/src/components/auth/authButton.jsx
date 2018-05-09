import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn, checkLogin } from '../../services/user';

const AuthButton = (props) => {
    if (isLoggedIn()) {
        return <Link className="btn btn-light" to="/logout"><strong>Logout</strong></Link>;
    } else {
        return <Link className="btn btn-light" to="/login"><strong>Login</strong></Link>;
    }
};

export default AuthButton;