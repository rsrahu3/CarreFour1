import axios from 'axios';
//import history from './../components/common/history';

const getData = ({ url, type }) => {
  return dispatch => {
    dispatch({ type: 'show_loader', payload: { data: true } });
    axios.get(url).then(response => {
      //history.push('/about');
      dispatch({ type: 'show_loader', payload: { data: false } });
      //console.log(response);
      dispatch({ type, payload: { data: response.data } });
    });
  };
};

export default getData;
