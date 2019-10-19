const todoReducer = (state = { todoList: [] }, action) => {
  switch (action.type) {
    case 'get_todo_list':
      return { ...state, todoList: action.payload.data };
    default:
      return { ...state };
  }
};

export default todoReducer;
