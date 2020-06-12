import React from 'react';
import { AppContainer, MainAppContainer } from './layout.styles';
import SideBar from '../../components/Sidebar/sidebar.components';
import Main from '../../components/Main/main.container';
import SubMenu from '../../components/Submenu/submenu.components';
import { Switch, Route } from 'react-router-dom';

function Layout() {
  return (
    <AppContainer>
      <SideBar />
      <MainAppContainer>
        <Switch>
          <Route path="/home" component={Main} />
          <Route path="/explore" component={Main} />
          <Route path="/notification" component={Main} />
          <Route path="/messages" component={Main} />
          <Route path="/profile" component={Main} />
        </Switch>
        <SubMenu />
      </MainAppContainer>
    </AppContainer>
  );
}

export default Layout;
