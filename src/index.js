import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './style.css';
import {users} from './users';



ReactDOM.render(
    <App users={users} />,
  document.getElementById('root')
);
