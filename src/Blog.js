import React from "react";
import BlogHeader from './components/BlogHeader';
import BlogPost from './components/BlogPost'

export default class Blog extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            posts: [],

        }
    }
    componentDidMount() {
        fetch('http://localhost:8080/allposts')
        .then(resp => resp.json())
        .then(data=> this.setState({posts: data}))
        .catch(error=>{
            console.log(error)
        })
    }
    render(){
        console.log("POSTS STATE", this.state.posts)
        return (
            <div className="Blog">
                <BlogHeader />
                {this.state.posts.map(post=>{
                    return(<BlogPost key={post.id} title={post.title} />)
                })}
            </div>
        );
    }
}