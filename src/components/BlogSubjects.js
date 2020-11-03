import React from "react";
import './styles/BlogSubjects.css';

class BlogSubjects extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            subjects: [],
        }
    }
    handleClick(subject){
        
    }
    componentDidMount() {
        var unique_subjects = new Set()
        // Get all the possible subjects so that users can view posts about a certain subject
        fetch('http://localhost:8080/allsubjects')
        .then(response => response.json())
        // Get subjects for all posts,split them up, remove spaces, and add them to a set
        .then(data => {
            data.forEach(post => {
                const parts = post.subjects.split(",")
                parts.forEach(part => {
                    part = part.replace(/\s+/g, '');
                    unique_subjects.add(part)
                })
            })
        })
        .then(()=>{
            this.setState({subjects: Array.from(unique_subjects)})
        })
    }
    render(){
        return(
            <div className='BlogSubjects'>
                <div id='SubjectsHeader'>Topics</div>
                {this.state.subjects.map(subject=>{
                    return(<div className='Subject' key={subject}>
                        <input type='checkbox' id={subject + '-input'} value={subject} onChange={this.handleChange}/>
                        <label htmlFor={subject + '-input'}>{subject}</label>
                    </div>);
                })}
            </div>
        );
    }
}

export default BlogSubjects;