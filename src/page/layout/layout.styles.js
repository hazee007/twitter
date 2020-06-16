import styled from '@emotion/styled';

export const AppContainer = styled.div`
  width: 1000px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-areas: 'SideBarContainer MainAppContainer';
  grid-gap: 10px;
  padding: 10px;
`;

export const SideBarContainer = styled.div`
  grid-area: SideBarContainer;
`;

export const MainAppContainer = styled.div`
  grid-area: MainAppContainer;
  width: 920px;
  display: flex;
  justify-content: space-between;
  overflow: auto;
`;
