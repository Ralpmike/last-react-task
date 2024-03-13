import { createContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../BaseURL/Auth";



export const MyAuth = createContext()


const AuthContext = ({ children }) => {

  const [errorRes, setErrorRes] = useState("")
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [token, setToken] = useState()
  const [postId, setPostId] = useState()
  const navigate = useNavigate()

  console.log("context" + isLoggedIn);
  useEffect(() => {
    const userToken = (localStorage.getItem("token"));
    setToken(userToken)
    if(userToken){
      Auth(userToken)
      setisLoggedIn(true)
    }
    setLoaded(true)
  }, [])

  const Login = async (userDetails) => {
    console.log(userDetails)
    const response = await axios.post('/auth/login', userDetails)
      .then((res) => {
        console.log(res.data)
       
          localStorage.setItem("token", res.data.token)
          Auth(res.data.token)
          setisLoggedIn(!isLoggedIn)
          // setLoaded(!loaded)
          navigate("/blog")
        

      }).catch((e) => {
        console.log(e);
      setErrorRes(e.response.data.error[0]
         || e.response.data.password[0]
         || e.message || e.response.statusText
         )
        
      })

    return response
  }

  const SignUp = async (userDetails) => {
   
    const response = await axios.post('/auth/signup', userDetails)
      .then((res) => {
        console.log(res.data)
        
          localStorage.setItem("token", JSON.stringify(res.data.token))
          Auth(res.data.token)
          setisLoggedIn(!isLoggedIn)
          navigate("/")
       

      }).catch((e) => {
        console.log(e);

        if (e.response.data.email[0]) {
          setErrorRes(e.response.data.email[0])

        }
        else {

          setErrorRes(e.response.statusText||e.response.status|| e.message  )
        }

      })
    return response

  }

  const BlogPost = async (posts) => {
    const Usertoken = JSON.parse(localStorage.getItem("token"));
    const response = await axios.post("/record/", posts, {
      headers: {
        "Authorization":`Bearer ${Usertoken}`
      }
    })
    .then((res) => res.data)
    .catch((e) => {
      console.log(e)

      setErrorRes(e.message || e.response.statusText || e.response.status)
    })

    return response
  }
  
  const Logout = () => {
    localStorage.removeItem("token")
    setToken(null)
    setisLoggedIn(false)
    navigate("/signin")
    setLoaded(false)
  }
  
  
  const value = {
    Login,
    errorRes,
    setErrorRes,
    isLoggedIn,
    SignUp,
    BlogPost,
    token,
    loaded,
    Logout,
    setPostId,
    postId

  }
  
  return (
    <MyAuth.Provider value={value}>
    {children}
  </MyAuth.Provider>
)
}


export default AuthContext