import streams from "../axiosInstance/streams";
import history from "../history";

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

export const createStream = (formValues, userId) => {
  const request = streams.post("/streams", {...formValues, userId})
  .then(response => {
    history.push("/");
    return response.data
  });

  return {
    type: "CREATE_POSTS",
    payload: request
  }
}

export const fetchStreams = () => {
  const request = streams.get("/streams")
  .then((response) => {
    return response.data
  });

  return {
    type: "FETCH_STREAMS",
    payload: request
  }
}

export const fetchSingleStream = (id) => {
  const request = streams.get(`/streams/${id}`)
  .then((response) => {
    return response.data
  });

  return {
    type: "FETCH_SINGLE_STREAM",
    payload: request
  }
}

export const editStream = (formValues, id) => {
  const request = streams.patch(`streams/${id}`, formValues)
  .then((response) => {
    history.push("/");
    return response.data
  });

  return {
    type: "EDIT_STREAM",
    payload: request
  }
}

export const deleteStream = (id) => {
  streams.delete(`/streams/${id}`)
  .then(() => {
    history.push("/")
  })

  return {
    type: "DELETE_STREAM",
    payload: id
  }
}