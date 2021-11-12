import axios from "axios";

const BASE_URL = "https://ecomerce-master.herokuapp.com/api/v1/";

const postItem = async (json, token) => {

  let postItemResult;
  try {
    const response = await axios.post(`${BASE_URL}item`, json, {
      headers: {
        Authorization: `JWT ${token}`
      }
    });
    postItemResult = response.data;
    console.log(postItemResult);
  }
  catch(err) {
    console.log("Error postItem ", err);
    postItemResult = null;
  }
  finally {
    return postItemResult;
  }

}

export {
  postItem
}
