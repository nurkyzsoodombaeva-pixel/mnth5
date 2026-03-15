import React from 'react'

const ListGet = ({posts,deletePost}) => {
  return (
    <div>
        <h1>Posts</h1>
         {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>Status: {post.status ? "true" : "false"}</p>
          <button onClick={() => deletePost(post.id)}>
            Удалить
          </button>
        </div>
      ))}
    </div>
  )
}

export default ListGet