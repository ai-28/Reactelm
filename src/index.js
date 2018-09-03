import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Elm from './Elm';
import "./css/header.css"
import "./css/menu.css"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Elm />, document.getElementById('root'));
registerServiceWorker();
