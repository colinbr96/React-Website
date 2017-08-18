import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, IndexRoute} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {SCREENS} from './js/defines';

// Screens
import HomeScreen from './js/screens/home';

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={HomeScreen}>
            <Route exact path={SCREENS.HOME.url} component={HomeScreen} />
        </Route>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
