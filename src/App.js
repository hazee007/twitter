import React from 'react';
import { AppContainer, MainAppContainer } from './App.styles';
import SideBar from './Sidebar/sidebar.components';
import Main from './Main/main.container';
import SubMenu from './Submenu/submenu.components';

function App() {
  return (
    <AppContainer>
      <SideBar />
      <MainAppContainer>
        <Main />
        <SubMenu />
      </MainAppContainer>
    </AppContainer>
  );
}

export default App;
