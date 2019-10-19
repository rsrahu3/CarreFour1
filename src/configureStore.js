import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import homeReducer from './reducers/homeReducer';
import todoReducer from './reducers/todoReducer';
import { combineReducers } from 'redux';
import { createStore } from 'redux';
const rootReducer = combineReducers({ home: homeReducer, toDo: todoReducer });

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};
