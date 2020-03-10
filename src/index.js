import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

{/* <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,500,600" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Poppins:600" rel="stylesheet"> */}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
