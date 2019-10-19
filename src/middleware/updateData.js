import axios from 'axios';
//import history from './../components/common/history';

const updateData = ({ url, type, payload }) => {
  return dispatch => {
    console.log(payload);
    dispatch({ type: 'show_loader', payload: { data: true } });
    axios.delete(url).then(response => {
      dispatch({ type: 'show_loader', payload: { data: false } });
      dispatch({ type, payload: { data: payload.id } });
    });
  };
};

export default updateData;
