import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BlogEditPage from './blogeditpage';


class BlogPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            title: ""
        }
    }

    componentDidMount() {
        fetch("/api/blogs/" + this.props.match.params.id, {
            method: 'GET',
            headers: new Headers({
                'content-type': 'application/json'
            })
        }).then((result) => result.json())
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

  
    render() {
        return (
            <Fragment>
                <div className="blog-page">
                    <h1>{`${this.state.title}`}</h1>
                    <p className="p-blog">{`${this.state.text}`}</p>
                    <Link className="btn btn-secondary btn-sm" to={`/blog/edit/${this.props.match.params.id}`}>Edit This Blog Post</Link>
                </div>
            </Fragment>
        )
    }






}

export default BlogPage;