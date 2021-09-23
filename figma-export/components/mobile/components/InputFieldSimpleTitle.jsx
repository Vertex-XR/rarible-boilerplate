import React from "react";
import styled from "styled-components";
import { Border1pxButtonSecondary, MontserratSemiBoldWhite16px, MontserratMediumMonsoon16px } from "../../styledMixins";


function InputFieldSimpleTitle(props) {
  const { title, text9 } = props;

  return (
    <InputFieldSimpleTitle1>
      <Title>{title}</Title>
      <OverlapGroup>
        <Text18>{text9}</Text18>
      </OverlapGroup>
    </InputFieldSimpleTitle1>
  );
}

const InputFieldSimpleTitle1 = styled.div`
  width: 1104px;
  align-self: center;
  margin-top: 37px;
  margin-left: 7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 90px;
`;

const Title = styled.div`
  ${MontserratMediumMonsoon16px}
  min-height: 20px;
  margin-left: -0.5px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  ${Border1pxButtonSecondary}
  height: 54px;
  margin-top: 16px;
  margin-left: -1px;
  display: flex;
  padding: 14px 17.5px;
  align-items: flex-start;
  min-width: 1105px;
  border-radius: 4px;
`;

const Text18 = styled.p`
  ${MontserratSemiBoldWhite16px}
  min-height: 20px;
  letter-spacing: 0;
`;

export default InputFieldSimpleTitle;
