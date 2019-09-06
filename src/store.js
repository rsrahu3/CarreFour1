import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import homeReducer from './reducers/homeReducer'

const store = createStore(homeReducer, applyMiddleware(thunk))
export default store
