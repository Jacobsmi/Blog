import React from "react";
import BlogHeader from './BlogHeader';
import BlogPost from './BlogPost';
import BlogSubjects from './BlogSubjects';
import filterPosts from "./utils/filterPosts";
import toggleValue from './utils/toggleValue'

export default class Blog extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            allPosts: [],
            showingPosts: [],
            checked: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:8080/allposts')
        .then(resp => resp.json())
        .then(data=> {
            this.setState({allPosts: data})
            this.setState({showingPosts: data})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    handleClick(subject){
        this.setState({checked: toggleValue(this.state.checked, subject)}, () => {
            this.setState({showingPosts: filterPosts(this.state.checked, this.state.allPosts)})
        })
    }
    render(){
        return (
            <div className="Blog">
                <BlogHeader />
                <BlogSubjects handleClick={this.handleClick.bind(this)}/>
                {this.state.showingPosts.map(post=>{
                    return(<BlogPost key={post.id} title={post.title} body={post.body} subjects={post.subjects} />)
                })}
            </div>
        );
    }
}