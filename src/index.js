import React from 'react';
import { render } from 'react-dom'
import App from './App';
import GlobalState from './Components/GlobalStates/GlobalState';
import { BrowserRouter } from 'react-router-dom'
render(
    <GlobalState>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </GlobalState>
    , document.getElementById('root'));