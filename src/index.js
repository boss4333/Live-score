import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App.jsx';
import All from './All.jsx';
 
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<>
     <BrowserRouter>
     <All></All>
     </BrowserRouter>
  </>,document.getElementById('root')
);

 
