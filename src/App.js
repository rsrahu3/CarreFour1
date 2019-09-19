import React from 'react'
import { Router, Route } from 'react-router-dom'
import LoginComponent from './components/LoginComponent'
import HomeComponent from './components/NavComponents/HomeComponent'
import AboutComponent from './components/NavComponents/AboutComponent'
import ContactComponent from './components/NavComponents/ContactComponent'
import history from './components/common/history';

import { Provider } from 'react-redux'
import store from './store'

function App () {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div id="mainDiv">
          <Route exact path="/" component={LoginComponent} />
          <Route exact path="/home" component={HomeComponent} />
          <Route exact path="/about" component={AboutComponent} />
          <Route exact path="/contact" component={ContactComponent} />
        </div>
      </Router>
    </Provider>
  )
}

export default App
