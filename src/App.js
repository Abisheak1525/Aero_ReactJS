
import React from 'react';
import CounterComponent from './Thunk/CounterComponent';
import { Provider } from 'react-redux';
import store from './Thunk/store';
import Form1 from './Components/Form1';
const App = () => {
  return (
    <div>
      <Form1/>
    </div>
  );
};

export default App;