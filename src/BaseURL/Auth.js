import axios from "axios";

axios.defaults.baseURL = "https://clarkifre.pythonanywhere.com"

axios.defaults.withCredentials = false

const Auth = (token) => {
  if(token){
      axios.defaults.headers.common.Authorization = token? `Bearer ${token}`: ""
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
}

export default Auth