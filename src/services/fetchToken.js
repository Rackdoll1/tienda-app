import axios from "axios";

const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1/';

const signupUser = async (json) => {
 let signupresult;
  try {
    const response = await axios.post(`${BASE_URL}signup`, json)
    signupresult = response.data;
  }
  catch {
    signupresult = null;
  }
  finally {
    return signupresult;
  }

}

// uses token to grant authorization
const letMeIn = async (token) => {
  let letMeInResult;
  try {
    const response = await axios.get(`${BASE_URL}user/me`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    });
    letMeInResult = {...response.data.user, "token": token};
    console.log(token);
  }
  catch(err) {
    console.log("Error letMeIn: ", err);
    letMeInResult = null;
  }

  return letMeInResult;
}

// asks for auth token
const fetchUserToken = async (details) => {
  let loginResult;

  try {
    await axios.post(`${BASE_URL}login`, details)
      .then(response => {
        // use token to ask for access authorization
        loginResult = letMeIn(response.data.token);
      });
  }
  catch(err) {
    console.log("login Error: ", err);
    loginResult = null;
  }
  finally {
    return loginResult;
  }
}


export {
  fetchUserToken, signupUser
}
