import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import App from './components/app/app';
import './main.css';

render(<App />, document.getElementById('movie-db-app'));
