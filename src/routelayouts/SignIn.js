import React, { useContext, useState } from 'react'
import { MyAuth } from '../context/AuthContext'
import UserCollectionField from '../components/UserCollectionField';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {

  const { Login, errorRes, setErrorRes, token } = useContext(MyAuth);

  const pageDecription = "Sign In";
  const type = "Login";
  const regInfo = "Need an Account";
  const linkInfo = "Sign Up";
  const linkDirection = '/signup';
  const formType = "Login to Continue";

  const [details, setDetails] = useState({
    email: "",
    password: "",
  })

  const handleInputs = (e) => {
    const { name, value } = e.target

    setDetails((prev) => ({ ...prev, [name]: value }))

  }


  const handleSubmit = (e) => {
    e.preventDefault()

    if (details.email === "" || details.password === "") {

      alert("Fields Cannot be Empty")
      return
    }
    else {
      Login(details)
    }
    setDetails({
      email: "",
      password: "",
    })
  }

  const erroText = {
    color: "white",
    backgroundColor: 'red',
    padding: "10px"
  }

  window.addEventListener("click", () => {
    setErrorRes("")
  })

//   if(token){
//     navigate('/')
// }


  return (
    <>
      <UserCollectionField
        erroText={erroText}
        handleSubmit={handleSubmit}
        errorRes={errorRes}
        handleInputs={handleInputs}
        pageDecription={pageDecription}
        type={type}
        regInfo={regInfo}
        linkInfo={linkInfo}
        linkDirection={linkDirection}
        formType={formType}
        details={details}
      />
    </>
  )
}

export default SignIn