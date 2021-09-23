import React from "react";
import styled from "styled-components";
import { MontserratBoldWhite16px } from "../../style-mixins";


function ButtonMain3(props) {
  const { overlapGroup, createI134649891 } = props;

  return (
    <ButtonMain>
      <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
        <CreateI134649891>{createI134649891}</CreateI134649891>
      </OverlapGroup>
    </ButtonMain>
  );
}

const ButtonMain = styled.div`
  margin-left: 276px;
  display: flex;
  align-items: flex-start;
  min-width: 85px;
  border-radius: 4px;
`;

const OverlapGroup = styled.div`
  height: 40px;
  display: flex;
  padding: 0 26px;
  align-items: center;
  min-width: 107px;
  background-size: 100% 100%;
`;

const CreateI134649891 = styled.div`
  ${MontserratBoldWhite16px}
  min-height: 20px;
  min-width: 35px;
  letter-spacing: 0;
`;

export default ButtonMain3;
