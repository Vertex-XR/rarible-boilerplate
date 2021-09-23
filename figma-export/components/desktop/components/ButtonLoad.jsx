import React from "react";
import styled from "styled-components";
import { Border1pxButtonSecondary, MontserratSemiBoldWhite16px } from "../../styledMixins";


function ButtonLoad(props) {
  const { iconRefresh, loadMoreItems } = props;

  return (
    <ButtonLoad1>
      <IconRefresh src={iconRefresh} />
      <LoadMoreItems>{loadMoreItems}</LoadMoreItems>
    </ButtonLoad1>
  );
}

const ButtonLoad1 = styled.div`
  ${Border1pxButtonSecondary}
  height: 60px;
  margin-left: 20px;
  display: flex;
  padding: 0 48px;
  justify-content: flex-end;
  align-items: center;
  min-width: 290px;
  border-radius: 4px;
`;

const IconRefresh = styled.img`
  width: 20px;
  height: 20px;
`;

const LoadMoreItems = styled.div`
  ${MontserratSemiBoldWhite16px}
  min-height: 20px;
  margin-left: 30px;
  min-width: 142px;
  letter-spacing: 0;
`;

export default ButtonLoad;
