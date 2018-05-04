import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class BlogEditPage extends Component {
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


    handleClick(content, title) {
        fetch('/api/blogs/' + this.props.match.params.id, {
            method: 'PUT',
            body: JSON.stringify({ content, title }),
            headers: new Headers({
                'content-type': 'application/json'
            })
        }).then((result) => {
            this.props.history.push('/');
        }).catch((err) => {
            console.log(err)
        });
    }


    
    handleTitleChange(title) {
        this.setState({ title });
    };

    handleContentChange(text) {
        this.setState({ text });
    };



    render() {
        return (
            <Fragment>
                <div className="blog-page">
                    <div className="input-group-lg">
                        <input type="text"
                            value={`${this.state.title}`}
                            id="text-align"
                            className="form-control"
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            onChange={(event) => this.handleTitleChange(event.target.value)} />
                    </div>
                    <div className="input-group">
                        <textarea className="form-control"
                            value={`${this.state.text}`}
                            onChange={(event) => this.handleContentChange(event.target.value)}></textarea>
                    </div>
                    <div>
                        <br />
                        <button className="btn btn-light"
                            onClick={() => {
                                this.handleClick(this.state.text, this.state.title);
                            }}>Submit</button>
                    </div>
                </div>
            </Fragment>
        )
    }






}

export default BlogEditPage;