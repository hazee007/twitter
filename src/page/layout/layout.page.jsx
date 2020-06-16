import React from 'react';
import {
  AppContainer,
  MainAppContainer,
  SideBarContainer,
} from './layout.styles';
import SideBar from '../../components/Sidebar/sidebar.components';
import Main from '../../components/Main/main.container';
import SubMenu from '../../components/Submenu/submenu.components';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../home/home.page';

function Layout() {
  return (
    <AppContainer>
      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
      <MainAppContainer>
        <Switch>
          <Route path="/home" component={HomePage} />
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
