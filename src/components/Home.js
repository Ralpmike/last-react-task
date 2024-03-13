import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='landing-page'>
      <div className="content">
        <h1>Beautiful People With Intuitive Minds</h1>
        <Link>Start A Conversation</Link>
      </div>
      <img src="https://images.unsplash.com/photo-1708710301724-6121560b6de0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
  )
}

export default Home