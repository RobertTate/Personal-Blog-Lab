import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn, checkLogin } from '../../services/user';

const AuthButton = (props) => {
    if (isLoggedIn()) {
        return <Link className="btn mr-1 p-1 blue" to="/logout"><p className="lead mb-0"><strong>Logout</strong></p></Link>;
    } else {
        return <Link className="btn mr-1 p-1 blue" to="/login"><p className="lead mb-0"><strong>Login</strong></p></Link>;
    }
};

export default AuthButton;