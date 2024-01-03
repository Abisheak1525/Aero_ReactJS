
import React from 'react';
import CounterComponent from './Thunk/CounterComponent';
import { Provider } from 'react-redux';
import store from './Thunk/store';
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <CounterComponent/>
      </Provider>
    </div>
  );
};

export default App;