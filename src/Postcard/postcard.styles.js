import styled from '@emotion/styled';

export const PostContainer = styled.div`
  //   margin-left: 5px;
  //   margin-right: 5px;
  color: white;
  padding: 10px;
  border-bottom: 0.09px solid #c3c3c3;
`;

export const PostCover = styled.div`
  display: flex;
`;
export const PostImageContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
`;

export const PostImage = styled.img`
  width: 100%;
  height: auto%;
`;

export const PostCardContainer = styled.div`
  padding-left: 10px;
`;

export const PostCardName = styled.div`
  display: flex;
`;

export const PostContent = styled.div`
  font-weight: 400;
  font-size: 15px;
`;

export const PostTest = styled.div`
  margin: 10px;
`;

export const PostIcons = styled.svg`
  width: 1.25em;
  &:hover {
    fill: red;
    stroke-dashoffset: 0;
    stroke-dasharray: 700;
    stroke-width: 2;
  }
`;

export const PostCardIcon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
  padding-top: 10px;
  fill: white;
`;

export const Path = styled.path``;
