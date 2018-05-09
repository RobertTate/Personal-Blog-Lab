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
                <div className="m-3 hero">
                    <h1 className="display-4">Bobby Tate</h1>
                    <p className="lead">A blog project, illustrating the use of React, NodeJS, ExpressJS, and MySQL.</p>
                    <hr className="my-4" id="jumbotron-hr" />
                    <p className="lead">
                        <Link className="btn btn-light btn-md" role="button" to={`/new`}><strong>Compose A New Blog</strong></Link>
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