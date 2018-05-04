import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BlogPage from './blogpage';

const styles = {
    width: "18rem",
};

const BlogCard = (props) => {
        return (
            <Fragment>
                <div className="card card-text-center mr-3 mb-3 bg-dark" style={styles}>
                    <div className="card-body">
                        <h4 className="card-title text-white">{`${props.text}`}</h4>
                        <Link className="btn btn-secondary btn-sm" to={`/blog/${props.id}`}>Keep Reading</Link>
                    </div>
                </div>
            </Fragment>
        );
    
    
}

export default BlogCard;