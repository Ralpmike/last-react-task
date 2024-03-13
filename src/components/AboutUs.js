import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { MyAuth } from '../context/AuthContext'
import { NavLink, Outlet } from 'react-router-dom'

const AboutUs = () => {

  const { loaded } = useContext(MyAuth)


  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    axios.get("/record")
      .then((res) => {
        console.log(res.data)
        if (loaded) {
          setBlogs(res.data.results)
        }
        else {
          setBlogs([])
        }
        // console.log(`About ${isLoggedin}`)
      })
      .catch((e) => console.log(e))

  }, [loaded])

  // if(isLoggedin ===false){
  //   setBlogs([])
  // }
  console.log(`About ${loaded}`)
  console.log(blogs)
  return (
    <div>
      {loaded ? blogs.map((blog, index) => {
        const { title, language, description, id } = blog;
        return (
          <div key={index} className='my-card'>
            <NavLink to={`/single/${id}`}>
              <h1>{title}</h1>
              <h2>{language}</h2>
              <h2>{description}</h2>
            </NavLink>
          </div>
        )
      }) : ""}
      <Outlet />
    </div>
  )
}

export default AboutUs