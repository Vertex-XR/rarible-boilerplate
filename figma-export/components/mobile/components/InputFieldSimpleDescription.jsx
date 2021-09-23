import React from "react";
import styled from "styled-components";
import { Border1pxButtonSecondary, MontserratSemiBoldWhite16px, MontserratMediumMonsoon16px } from "../../styledMixins";


function InputFieldSimpleDescription(props) {
  const { text13, text12 } = props;

  return (
    <InputFieldSimpleDescription1>
      <Text22>{text13}</Text22>
      <OverlapGroup>
        <Text21>{text12}</Text21>
      </OverlapGroup>
    </InputFieldSimpleDescription1>
  );
}

const InputFieldSimpleDescription1 = styled.div`
  width: 1104px;
  align-self: center;
  margin-top: 40px;
  margin-left: 7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 146px;
`;

const Text22 = styled.div`
  ${MontserratMediumMonsoon16px}
  min-height: 20px;
  margin-left: -0.5px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  ${Border1pxButtonSecondary}
  height: 110px;
  margin-top: 16px;
  margin-left: -1px;
  display: flex;
  padding: 14px 17px;
  align-items: flex-start;
  min-width: 1105px;
  border-radius: 4px;
`;

const Text21 = styled.p`
  ${MontserratSemiBoldWhite16px}
  width: 1040px;
  min-height: 80px;
  letter-spacing: 0;
  line-height: 26px;
`;

export default InputFieldSimpleDescription;
