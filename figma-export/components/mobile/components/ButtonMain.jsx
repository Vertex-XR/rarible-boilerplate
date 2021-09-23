import React from "react";
import styled from "styled-components";
import { MontserratBoldWhite16px } from "../../style-mixins";


function ButtonMain(props) {
  const { buttonPrimery, text6, className } = props;

  return (
    <ButtonPrimery className={`button-primery ${className || ""}`} style={{ backgroundImage: `url(${buttonPrimery})` }}>
      <Text15 className="text-15">{text6}</Text15>
    </ButtonPrimery>
  );
}

const ButtonPrimery = styled.div`
  height: 40px;
  display: flex;
  padding: 0 24px;
  justify-content: flex-end;
  align-items: center;
  min-width: 107px;
  border-radius: 79px;
  background-size: 100% 100%;

  &.button-primery.button-primery-1 {
    border-radius: 4px;
  }

  &.button-primery.button-main-2 {
    border-radius: 4px;
  }
`;

const Text15 = styled.div`
  ${MontserratBoldWhite16px}
  min-height: 20px;
  min-width: 57px;
  letter-spacing: 0;
`;

export default ButtonMain;
