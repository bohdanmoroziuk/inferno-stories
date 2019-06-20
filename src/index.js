import { render } from 'inferno';
import * as serviceWorker from './serviceWorker';

import App from './components/App';

import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import './index.css';

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

module.hot && module.hot.accept();
