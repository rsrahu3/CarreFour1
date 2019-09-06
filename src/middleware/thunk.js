const thunk =  ({url,type})=> {
  return dispatch => {
     fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response
      })
      .then(response => response.json())
      .then(items =>{
        dispatch({ type, payload: { data: items } })
      }
     
      )
      .catch(() => {
        throw Error('Error')
      })
  }
}

export default thunk;