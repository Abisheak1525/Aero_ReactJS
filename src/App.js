import React from 'react';
import WithLoading from './components/WithLoading';
import MyComponent from './components/MyComponent';

const WrappedComponentWithLoading = WithLoading(MyComponent);

const App = () => {
  return (
    <div>
      
      <WrappedComponentWithLoading />
    </div>
  );
};

export default App;