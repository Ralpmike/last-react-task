import React, { useContext, useEffect, useState, } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { MyAuth } from '../context/AuthContext' 

const BlogPageDisplay = () => {

  const {setPostId} = useContext(MyAuth)
  const {id} = useParams()
  const [blog, setBlog] = useState({})

console.log({id});
  useEffect(() => {
    axios.get(`/record/${id}`)
      .then((res) => {
        console.log(res.data)
        setBlog(res.data)
        setPostId(res.data.id)
        localStorage.setItem('blog', JSON.stringify(res.data))
      })
      .catch((e) => console.log(e))
  }, [id])

  // useEffect(()=>{
  //   const blog = JSON.parse(localStorage.getItem('blog'))
  //   if(blog) setBlog(blog)
  // }, [])



  
  return (

    <div className='page-display' key={id}>
      <h1>{blog.title}</h1>
      <h2>{blog.description}</h2>
      <h3>{blog.language}</h3>
    </div>
  )
}

export default BlogPageDisplay