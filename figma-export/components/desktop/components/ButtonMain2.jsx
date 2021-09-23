import React from "react";
import styled from "styled-components";
import { Border1pxButtonSecondary, MontserratSemiBoldWhite16px } from "../../style-mixins";


function ButtonMain2(props) {
  const { children, className } = props;

  return (
    <ButtonMain className={`button-main-1 ${className || ""}`}>
      <Text7 className="text-7">{children}</Text7>
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

  &.button-main-1.button-main-2 {
    border-radius: 4px;
  }

  &.button-main-1.button-main-3 {
    border-radius: 4px;
    margin-left: unset;
  }
`;

const Text7 = styled.div`
  ${MontserratSemiBoldWhite16px}
  min-height: 20px;
  min-width: 127px;
  letter-spacing: 0;
`;

export default ButtonMain2;
