import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './stores';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSaga from 'redux-saga';
import RootSaga from './stores/saga';
import { getUser } from './stores/user/actions';
import { HashRouter } from 'react-router-dom';

const sagaMW = createSaga();
const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(sagaMW)),
);
sagaMW.run(RootSaga);

const loadUser = () => {
  const access_token = localStorage.getItem('access_token');
  const refresh_token = localStorage.getItem('refresh_token');
  if (access_token && refresh_token)
    store.dispatch(getUser({ access_token, refresh_token }));
};
loadUser();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
