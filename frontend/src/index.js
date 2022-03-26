import React from "react";
import ReactDOM from "react-dom";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
