import React from 'react';

import {
  SearchCover,
  SearchIcon,
  SearchIconCover,
  SearchInput,
  SearchItems,
} from './search.styles';
import { search } from '../../utils/Icons';

const SearchBox = () => {
  return (
    <SearchCover>
      <SearchItems>
        <SearchIconCover>
          <SearchIcon viewBox="0 0 24 24">
            <g>
              <path d={search}></path>
            </g>
          </SearchIcon>
        </SearchIconCover>
        <SearchInput placeholder="Search twitter"></SearchInput>
      </SearchItems>
    </SearchCover>
  );
};

export default SearchBox;
