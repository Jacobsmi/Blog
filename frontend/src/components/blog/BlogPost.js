import React from "react";
import './styles/BlogPost.css';
class BlogPost extends React.Component{
    render() {
        return(
            <div className='BlogPost'>
                <h2 className='post-title'>{this.props.title}</h2>
                <div className='post-tags'>Tags: {this.props.subjects}</div>
                <div className='post-body'>{this.props.body}</div>
            </div>
        )
    }
}

export default BlogPost;