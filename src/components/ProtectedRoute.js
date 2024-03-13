import { useContext, useEffect } from 'react'
import { MyAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  const navigate = useNavigate()
  
  const {isLoggedIn, loaded} = useContext(MyAuth)

  useEffect(() =>{
    if(isLoggedIn === false && loaded){
      navigate("/signin")
    }
  }, [isLoggedIn,loaded, navigate])
  // console.log(isLoggedIn)

  return isLoggedIn && children
 
}

export default ProtectedRoute