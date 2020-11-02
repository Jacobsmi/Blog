import React from "react";
import './styles/BlogPost.css';
class BlogPost extends React.Component{
    render() {
        return(
            <div className='BlogPost'>
                <h2 className='post-title'>{this.props.title}</h2>
                <p className='post-body'>{this.props.body}</p>
            </div>
        )
    }
}

export default BlogPost;