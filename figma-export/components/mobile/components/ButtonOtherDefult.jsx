import React from "react";
import styled from "styled-components";
import { Border1pxButtonSecondary, MontserratSemiBoldWhite16px } from "../../style-mixins";


function ButtonOtherDefult(props) {
  const { children } = props;

  return (
    <ButtonOtherDefult1>
      <ConnectWallet>{children}</ConnectWallet>
    </ButtonOtherDefult1>
  );
}

const ButtonOtherDefult1 = styled.div`
  ${Border1pxButtonSecondary}
  height: 50px;
  margin-left: 33px;
  display: flex;
  padding: 0 28px;
  justify-content: flex-end;
  align-items: center;
  min-width: 185px;
  border-radius: 4px;
`;

const ConnectWallet = styled.div`
  ${MontserratSemiBoldWhite16px}
  min-height: 20px;
  min-width: 127px;
  letter-spacing: 0;
`;

export default ButtonOtherDefult;
