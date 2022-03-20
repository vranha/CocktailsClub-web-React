import React from 'react';
import ReactDOM from 'react-dom';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
