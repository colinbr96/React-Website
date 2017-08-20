import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {SCREENS} from './js/defines';

// Screens
import HomeScreen from './js/screens/home';

// Router
ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={HomeScreen} />
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
