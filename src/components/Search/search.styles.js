import styled from '@emotion/styled';

export const SearchCover = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(37, 51, 65);
  width: 320px;
  height: 35px;
  border-radius: 50px;
`;

export const SearchItems = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchIconCover = styled.div`
  //   width: 30px;
  width: 1em;
`;

export const SearchIcon = styled.svg`
  padding: 10px;
  fill: white;
`;

export const SearchInput = styled.input`
  background-color: rgb(37, 51, 65);
  width: 280px;
  border: 0;
  margin: 10px;
  color: white;
  line-height: 1.6;

  &:focus {
    outline: none;
  }
`;
