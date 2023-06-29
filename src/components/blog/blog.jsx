import React, { useEffect, useState } from "react";
import Post from './post'

function Blog(){
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:4000/post').then(response =>{
            response.json()
            .then(posts =>{
                console.log(posts.length)
                setPosts(posts)
            })
        })
    }, [])

    return(
        <div className = "body">
            <h1 className="blog-header">Click On a Post To Read More</h1>
            {posts.length > 0 && posts.map(post => <Post {...post} />)}
        </div>
    )
}

export default Blog;