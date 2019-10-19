import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './reducers/homeReducer';
import todoReducer from './reducers/todoReducer';
import { combineReducers } from 'redux';
const combReducer = combineReducers({ home: homeReducer, toDo: todoReducer });

const store = createStore(combReducer, applyMiddleware(thunk));
export default store;
