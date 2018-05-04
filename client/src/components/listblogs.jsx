import React, { Component, Fragment } from 'react';
import BlogCard from './blogcard';

class ListBlogs extends Component {
    render() {
        return (
            <Fragment>
                {this.props.blogs.map((blog) => {
                    return (
                        <BlogCard key={blog.id} text={blog.title} id={blog.id} />
                    )
                })}
            </Fragment>
        )
    }

}

export default ListBlogs;