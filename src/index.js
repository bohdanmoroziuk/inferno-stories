import { render } from 'inferno';
import { Provider } from 'inferno-redux';
import * as serviceWorker from './serviceWorker';

import store from './redux/store';

import App from './components/App';

import '@fortawesome/fontawesome-free/js/all.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import './index.css';

render(
  <Provider {...{ store }}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

module.hot && module.hot.accept();
