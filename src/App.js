import React from 'react';
import store from './app/store';
import Grid from './components/Grid';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <div>
      {/*--------------------------*/}
      <Provider store={store}>
        <Grid />
      </Provider>
      {/*--------------------------*/}
    </div>
  );
};

export default App;
