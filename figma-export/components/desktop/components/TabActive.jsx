import React from "react";
import styled from "styled-components";
import { MontserratSemiBoldWhite16px } from "../../styledMixins";


function TabActive(props) {
  const { onSale, rectangle125 } = props;

  return (
    <TabActive1>
      <OnSale>{onSale}</OnSale>
      <Rectangle125 src={rectangle125} />
    </TabActive1>
  );
}

const TabActive1 = styled.div`
  width: 84px;
  margin-left: 55px;
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 33px;
`;

const OnSale = styled.div`
  ${MontserratSemiBoldWhite16px}
  min-height: 20px;
  margin-left: 2px;
  min-width: 64px;
  letter-spacing: 0;
`;

const Rectangle125 = styled.img`
  width: 84px;
  height: 3px;
  margin-top: 10px;
`;

export default TabActive;
