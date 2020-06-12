import React from 'react';
import {
  SubMenuContainer,
  SubMenuCardContainer,
  SubMenuTrendingTitle,
  TrendingCard,
  TrendingCardContainer,
  CardIcon,
  Icons,
} from './submenu.styles';
import SearchBox from '../Search/search.components';
import { dropdown } from '../../utils/Icons';

const SubMenu = () => {
  return (
    <SubMenuContainer>
      <SearchBox />
      <SubMenuCardContainer>
        <SubMenuTrendingTitle>
          <span style={{ margin: '5px', fontWeight: '' }}>
            What's Happening
          </span>
        </SubMenuTrendingTitle>
        <TrendingCardContainer>
          <TrendingCard>
            <span style={{ fontWeight: 'lighter' }}>Gaming . Trending</span>
            <span>PlayStation</span>
            <span style={{ fontWeight: 'lighter' }}>1.04M Tweets</span>
          </TrendingCard>
          <CardIcon>
            <Icons viewBox="0 0 24 24">
              <g>
                <path d={dropdown}></path>
              </g>
            </Icons>
          </CardIcon>
        </TrendingCardContainer>
      </SubMenuCardContainer>
    </SubMenuContainer>
  );
};

export default SubMenu;
