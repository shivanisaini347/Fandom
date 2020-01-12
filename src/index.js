import React from 'react';
import ReactDOM from 'react-dom';
import FirstPage from './Components/FirstPage';
import * as serviceWorker from './serviceWorker';
import  'react-bootstrap';
ReactDOM.render(<FirstPage />, document.getElementById('root'));
serviceWorker.unregister();
