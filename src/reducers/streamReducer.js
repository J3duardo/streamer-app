export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_SINGLE_STREAM":
      return {...state, [action.payload.id]: action.payload}
    case "CREATE_STREAM":
      return {...state, [action.payload.id]: action.payload}
    case "EDIT_STREAM":
      return {...state, [action.payload.id]: action.payload}
    case "DELETE_STREAM":
      return {...state, ...action.payload}
    case "FETCH_STREAMS":
      let streamsObj = {};
      for(let stream of action.payload) {
        streamsObj[stream.id] = stream
      }
      return {...state, ...streamsObj}
    default:
      return state;
  }
}