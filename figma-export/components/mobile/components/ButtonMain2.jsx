import React from "react";
import styled from "styled-components";
import { Border1pxButtonSecondary, MontserratSemiBoldWhite16px } from "../../style-mixins";


function ButtonMain2(props) {
  const { children, className } = props;

  return (
    <ButtonMain className={`button-main-3 ${className || ""}`}>
      <Text16 className="text-16">{children}</Text16>
    </ButtonMain>
  );
}

const ButtonMain = styled.div`
  ${Border1pxButtonSecondary}
  height: 40px;
  margin-left: 20px;
  display: flex;
  padding: 0 24px;
  justify-content: flex-end;
  align-items: center;
  min-width: 177px;
  border-radius: 59px;

  &.button-main-3.button-main-4 {
    border-radius: 4px;
  }

  &.button-main-3.button-main-5 {
    border-radius: 4px;
    margin-left: unset;
  }
`;

const Text16 = styled.div`
  ${MontserratSemiBoldWhite16px}
  min-height: 20px;
  min-width: 127px;
  letter-spacing: 0;
`;

export default ButtonMain2;
