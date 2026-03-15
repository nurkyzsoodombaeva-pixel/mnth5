import React, { useEffect, useState } from "react";
import ListGet from "../ListGet/ListGet";
import axios from 'axios'

const EveryGet = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    axios.get('https://dummyjson.com/posts')
    .then((response)=>{
        const data = response.data.posts 
        const postStatus = data.map((item, index)=>({
            ...item,
            status : index < data.length /2
        }))

        setPosts(postStatus)
        setLoading(false)
    })
    
},[])

 const deletePost = (id) => {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  };
    if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
  <ListGet  posts = {posts} deletePost = {deletePost}/>
)
};

export default EveryGet;
