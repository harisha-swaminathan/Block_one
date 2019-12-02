import React from 'react';
import ReactDOM from 'react-dom';
import GetBlockDetails from './components/GetBlockDetails'
import './styles/styles.sass'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<GetBlockDetails />, document.getElementById('root'));
serviceWorker.unregister();
