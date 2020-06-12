import React from 'react';
import { AppContainer } from './App.styles';
import Layout from './page/layout/layout.page';
import Login from './components/Login/login.components';

function App() {
  return (
    <div>
      {/* <Layout /> */}
      <AppContainer>
        <Login />
      </AppContainer>
    </div>
  );
}

export default App;
