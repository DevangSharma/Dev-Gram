import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import HomePage from './Views/HomePage/HomePage';
import {store} from './redux/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HomePage />
      </Provider>
  
    </div>
  );
}

export default App;
