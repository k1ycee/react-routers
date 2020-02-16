import React, { Component } from 'react';
import axios from 'axios'


class Home extends Component {
    state = {
        posts: [ ]
    } 
    componentDidMount(){
        axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=0033eec1ce834b8f93dbd041496980c9')
        .then(res => {
            console.log(res)
            this.setState({
               posts: res.data.articles.slice(0,20)
            })
        })
    }
 render(){
     const { posts } = this.state;
     const yarns = posts.length ? (
         posts.map(post => {
             return(
                 <div className="post card" key={post.length}>
                     <div className="card content center">
                         <span className="card-title center">{post.title}</span>
                         <p>{post.content}</p>
                         <a href={post.url}>Read more...</a>
                     </div>
                 </div>
             )
         }
         )
     ) : (
         <div className = "center"> No Posts are available</div>
     )
    return (
        <div className="container">
            <h4 className="center">Home</h4>
            <p className="container">{yarns}</p>
        </div>
    )
 }
}

export default Home;