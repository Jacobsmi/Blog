import React from "react";
import BlogHeader from './components/BlogHeader';
import BlogPost from './components/BlogPost';
import BlogSubjects from './components/BlogSubjects';
import toggleValue from './components/utils/toggleValue'

export default class Blog extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            checked: []
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
    handleClick(subject){
        this.setState({checked: toggleValue(this.state.checked, subject)}, () => {
            console.log(this.state.checked)
        })
    }
    render(){
        return (
            <div className="Blog">
                <BlogHeader />
                <BlogSubjects handleClick={this.handleClick.bind(this)}/>
                {this.state.posts.map(post=>{
                    return(<BlogPost key={post.id} title={post.title} body={post.body} subjects={post.subjects} />)
                })}
            </div>
        );
    }
}