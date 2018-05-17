import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { render } from 'react-dom';
import ListBlogs from './listblogs';
import NewBlog from './newblog';
import * as blogService from '../services/blogservice';
import AuthButton from './auth/authButton';



class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: []
        }
    }

    componentDidMount() {
        this.listBlogs();
    }

    listBlogs() {
        blogService.all()
            .then((blogs) => {
                this.setState({ result: blogs });
            });
    };

    render() {
        return (
            <Fragment>
                
                <div className="ml-3 hero">
                    <hr className="mb-2" id="jumbotron-hr" />
                    <h1 className="display-4">Blog Project</h1>
                    <div className="explanation-box"><p className="lead">A blog project illustrating the use of: <br></br><strong className="blue">React, NodeJS, ExpressJS, MySQL, Passport, Bcrypt, Stripe, Mailgun, and Bootstrap.</strong></p></div>
                    <hr className="" id="jumbotron-hr" />
                    <p className="lead">
                        <Link className="btn btn-secondary btn-md" role="button" to={`/new`}><strong>Compose A New Blog</strong></Link>
                    </p>
                    <p>Select a blog below to read more</p>
                </div>
                <div className="row m-3">
                    <ListBlogs blogs={this.state.result} />
                </div>
            </Fragment>



        );
    }
}

export default Home;