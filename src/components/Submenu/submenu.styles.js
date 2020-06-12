import styled from '@emotion/styled';

export const SubMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  width: 400px;
  color: white;
`;

export const SubMenuCardContainer = styled.div`
  border: 0.09px solid #c3c3c3;
  border-radius: 20px;
  margin: auto auto;
  width: 80%;
  height: 80%;
`;

export const SubMenuTrendingTitle = styled.div`
  display: flex;
  justify-content: left;
  padding-bottom: 15px;
  padding-left: 10px;
  border-bottom: 0.09px solid #c3c3c3;
  height: 15px;
`;

export const TrendingCard = styled.div`
  display: grid;
  height: 80px;
  width: 150px;
  padding-left: 10px;
  // margin-left: 20px;
`;

export const TrendingCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.09px solid #c3c3c3;
`;

export const CardIcon = styled.div`
  padding: 10px;
`;
export const Icons = styled.svg`
  width: 1em;
  fill: rgb(255, 255, 255);
`;
