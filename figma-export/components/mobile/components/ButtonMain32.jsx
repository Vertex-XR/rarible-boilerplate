import React from "react";
import styled from "styled-components";
import { MontserratBoldWhite16px } from "../../style-mixins";


function ButtonMain32(props) {
  const { overlapGroup, createI134649891, className } = props;

  return (
    <ButtonMain className={`button-main ${className || ""}`}>
      <OverlapGroup1 className="overlap-group1-1" style={{ backgroundImage: `url(${overlapGroup})` }}>
        <CreateI162469491 className="create-i162469491">{createI134649891}</CreateI162469491>
      </OverlapGroup1>
    </ButtonMain>
  );
}

const ButtonMain = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 85px;
  border-radius: 4px;

  &.button-main.button-main-1 {
    margin-left: 276px;
  }
`;

const OverlapGroup1 = styled.div`
  height: 40px;
  display: flex;
  padding: 0 26px;
  align-items: center;
  min-width: 107px;
  background-size: 100% 100%;
`;

const CreateI162469491 = styled.div`
  ${MontserratBoldWhite16px}
  min-height: 20px;
  min-width: 35px;
  letter-spacing: 0;
`;

export default ButtonMain32;
