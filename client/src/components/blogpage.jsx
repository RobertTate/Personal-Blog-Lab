import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BlogEditPage from './blogeditpage';
import * as blogService from '../services/blogservice';


class BlogPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            title: ""
        }
    }

    componentDidMount() {
        blogService.one(this.props.match.params.id)
            .then((blog) => {
                let content = blog.content;
                let title = blog.title;
                this.setState({
                    text: content,
                    title: title
                })
            }).catch((err) => {
                console.log(err);
            });
    }

    handleClick(id) {
        
        blogService.destroy(id)
        .then((result) => {
            this.props.history.push('/');
        }).catch((err) => {
            console.log(err)
        });
    }


    render() {
        return (
            <Fragment>
                <div className="blog-page">
                    <h1>{`${this.state.title}`}</h1>
                    <p className="p-blog">{`${this.state.text}`}</p>
                    <Link className="btn btn-secondary btn-sm" to={`/blog/edit/${this.props.match.params.id}`}>Edit This Blog Post</Link>
                    <a className="btn btn-secondary btn-sm mt-2"  
                    onClick={() => {
                            this.handleClick(this.props.match.params.id);
                        }}>DELETE POST</a>

                </div>
            </Fragment>
        )
    }






}

export default BlogPage;