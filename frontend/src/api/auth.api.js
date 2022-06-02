const http = require('axios')
const myBackEndURL = "http://localhost:4000/api";

const apiSignInWithGoogle = async (code) => {
  try {
    const response = await http.post(
      myBackEndURL + "/user/signInWithGoogle", {
      code: code
    }
    )
    console.log(response.data.token)
    localStorage.setItem("token", response.data.token);
    return (response)
  } catch (error) {
    if (!error.response) return (error);
    return error.response;
  }
}

module.exports = {
  apiSignInWithGoogle,
}