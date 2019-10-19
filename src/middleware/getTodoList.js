import axios from 'axios';

const getTodoList = ({ url, type }) => {
  return dispatch => {
    dispatch({ type: 'show_loader', payload: { data: true } });
    axios.get(url).then(response => {
      dispatch({ type: 'show_loader', payload: { data: false } });
      dispatch({ type, payload: { data: response.data } });
    });
  };
};

export default getTodoList;
