import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



class NewBlog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            title: ""
        }
    }

    handleClick(content, title) {
        fetch('/api/blogs/', {
            method: 'POST',
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
                            placeholder="Enter Title Here"
                            id="text-align"
                            className="form-control"
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            onChange={(event) => this.handleTitleChange(event.target.value)} />
                    </div>

                    <div className="input-group">
                        <textarea className="form-control"
                            placeholder="Enter Your Content Here..."
                            onChange={(event) => this.handleContentChange(event.target.value)}></textarea>
                    </div>
                    <div>
                        <br />
                        <button className="btn btn-light"
                        onClick={() => {
                            this.handleClick(this.state.text, this.state.title);
                        }}
                        
                        >Submit</button>
                    </div>
                </div>
            </Fragment>
        )
    }

}



export default NewBlog;