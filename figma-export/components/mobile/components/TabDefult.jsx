import React from "react";
import styled from "styled-components";
import { MontserratSemiBoldMonsoon16px } from "../../styledMixins";


function TabDefult(props) {
  const { children } = props;

  return (
    <TabDefult1>
      <OnSale>{children}</OnSale>
    </TabDefult1>
  );
}

const TabDefult1 = styled.div`
  height: 33px;
  margin-left: 36px;
  margin-top: 1px;
  display: flex;
  padding: 0 9px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 84px;
`;

const OnSale = styled.div`
  ${MontserratSemiBoldMonsoon16px}
  min-height: 20px;
  letter-spacing: 0;
`;

export default TabDefult;
