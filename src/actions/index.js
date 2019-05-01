import streams from "../axiosInstance/streams";

export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: "SIGN_OUT"
  }
}

export const createStream = (formValues) => {
  const request = streams.post("/streams", formValues)
  .then(response => {
    return response.data
  });

  return {
    type: "CREATE_POSTS",
    payload: request
  }
}