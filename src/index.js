import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reducer,{initialState} from './Components/Constext/Reducer';
import { StateProvider } from './Components/Constext/StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>    
);
