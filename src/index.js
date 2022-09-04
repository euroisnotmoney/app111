import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './screens/Timer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Timer 
  defaultBreakLength='5' 
  defaultSessionLength='25' />, 
  document.getElementById('root')
);

registerServiceWorker();
