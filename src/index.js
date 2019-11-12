import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import store from './store/index.js';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
