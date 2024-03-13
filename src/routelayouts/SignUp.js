import React, { useContext, useState } from "react";
import { MyAuth } from "../context/AuthContext";
import UserCollectionField from "../components/UserCollectionField";

const SignUp = () => {
  const { SignUp, errorRes, setErrorRes } = useContext(MyAuth);

  const pageDecription = "Sign Up";
  const type = "SignUp";
  const regInfo = "Registered";
  const linkInfo = "Go to Login";
  const linkDirection = "/signin";

  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (details.email === "" || details.password === "") {
      alert("Fields Cannot be Empty");
      return;
    } else {
      SignUp(details);
    }
    setDetails({
      email: "",
      password: "",
    })
  };

  const erroText = {
    color: "white",
    backgroundColor: "red",
    padding: "10px",
  };

  window.addEventListener("click", () => {
    setErrorRes("");
  });

  return (
    <>
      <UserCollectionField
        erroText={erroText}
        handleSubmit={handleSubmit}
        handleInputs={handleInputs}
        errorRes={errorRes}
        pageDecription={pageDecription}
        type={type}
        regInfo={regInfo}
        linkInfo={linkInfo}
        linkDirection={linkDirection}
        details={details}
      />
    </>
  );
};

export default SignUp;
