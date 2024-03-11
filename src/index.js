import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import './styles/stylesheet.css';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from 'react-router-dom';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import rootReducer from './redux/reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import {database} from './database/config'

const store = configureStore({ reducer: rootReducer }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    
)


reportWebVitals();


