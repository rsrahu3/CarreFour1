const homeReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case 'populate_data':
      return { ...state, data: action.payload.data.data };
    case 'show_loader':
      return { ...state, showLoader: action.payload.data };
    case 'edit_record':
      let newData = state.data.map((item, index) => {
        if (item.id === action.payload) {
          item.isEdit = true;
        }
        return item;
      });
      return { ...state, data: newData };
    case 'delete_record':
      let data = state.data.filter((item, index) => {
        return item.id !== action.payload.data;
      });
      return { ...state, data: data };
    default:
      return { ...state };
  }
};
export default homeReducer;
