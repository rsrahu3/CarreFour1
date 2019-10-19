import React, { lazy, Suspense } from 'react';
import { Router, Route } from 'react-router-dom';
import ErrorBoundry from './components/ErrorHandling/ErrorBoundary';
import history from './components/common/history';
import { Provider } from 'react-redux';
import store from './store';
import './configureStore';

const LoginComponent = lazy(() => import('./components/LoginComponent'));
const HomeComponent = lazy(() =>
  import('./components/NavComponents/HomeComponent')
);
const AboutComponent = lazy(() =>
  import('./components/NavComponents/AboutComponent')
);
const ContactComponent = lazy(() =>
  import('./components/NavComponents/ContactComponent')
);
const TodoComponent = lazy(() =>
  import('./components/NavComponents/TodoComponent')
);

function App() {
  let props = { name: 'ABC' };
  return (
    <Provider store={store}>
      <Router history={history}>
        <Suspense fallback={<div>Loading ...</div>}>
          <div id="mainDiv">
            <Route exact path="/" component={LoginComponent} />
            <Route
              path="/home"
              render={props => (
                <ErrorBoundry>
                  <HomeComponent {...props} />
                </ErrorBoundry>
              )}

              //component={HomeComponent}
            />
            <Route path="/about" component={AboutComponent} />
            <Route path="/todo" component={TodoComponent} />
            <Route path="/contact" component={ContactComponent} />
          </div>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
