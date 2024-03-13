import React, { useContext, useState } from 'react'
import { MyAuth } from '../context/AuthContext'

const Blog = () => {

  const { BlogPost, errorRes } = useContext(MyAuth)

  const [posts, setPosts] = useState({
    title: "",
    language: "",
    description: ""
  })

  const handlePosts = (e) => {
    const { name, value } = e.target;

    setPosts((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!posts.title || !posts.language || !posts.description) {
      alert("Fields Cannot be Empty")
      return;
    }

    BlogPost(posts);
    
    // Clear input fields after submitting the form
    setPosts({
      title: "",
      language: "",
      description: ""
    })
  }

  const erroText = {
    color: "white",
    backgroundColor: "red",
    padding: "10px",
  };

  return (
    <div >
      <h1 className='page-title'>New Post</h1>
      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div className='posts-field'>
          <h2 className='post'>Add New Post </h2>

          {errorRes ? <p style={erroText}>{errorRes}</p> : ""}
          <div className="title">
            <label htmlFor="title">Title</label>
            <input
              autoFocus
              type="text"
              id='title'
              name='title'
              onChange={handlePosts}
              value={posts.title}
            />
          </div>
          {/* Password */}
          <div className="language">
            <label htmlFor="language">language</label>
            <input
              type="text"
              id='language'
              name='language'
              onChange={handlePosts}
              value={posts.language}
            />
          </div>
          <div className="language">
            <label htmlFor="description">description</label>
            <textarea
              name="description"
              id="description"
              cols="50"
              rows="10"
              placeholder='Type in......'
              onChange={handlePosts}
              value={posts.description}
            />
          </div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Blog
