import React from 'react';
import table from 'react-bootstrap';

const BlogPosts = ({ posts }) => {
    return (
        <div>
            <h1 className="text-primary">Hello world</h1>
            <table className="table table-bordered">
            <tr>
                <th>title</th>
                <th>post</th>
            </tr>
            {
                posts.map(
                    (post, index) => {
                        return (
                            <tr key={index}>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        )
                    }
                )
            }
        </table>
        </div>
    )
}

export default BlogPosts;