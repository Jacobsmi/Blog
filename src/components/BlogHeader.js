import React from "react";
import './styles/BlogHeader.css';

class BlogHeader extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            subjects: new Set()
        }
    }
    render() {
        return (
            <div className="BlogHeader">
                <h1>My Blog</h1>
            </div>
        );
    }
}

export default BlogHeader;