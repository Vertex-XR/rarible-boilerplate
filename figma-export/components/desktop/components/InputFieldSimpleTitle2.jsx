import React from "react";
import styled from "styled-components";
import { Border1pxButtonSecondary, MontserratSemiBoldWhite16px, MontserratMediumMonsoon16px } from "../../style-mixins";


function InputFieldSimpleTitle2(props) {
  const { royalties, number } = props;

  return (
    <InputFieldSimpleTitle>
      <Royalties>{royalties}</Royalties>
      <OverlapGroup>
        <Number>{number}</Number>
      </OverlapGroup>
    </InputFieldSimpleTitle>
  );
}

const InputFieldSimpleTitle = styled.div`
  width: 536px;
  margin-left: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 74px;
`;

const Royalties = styled.div`
  ${MontserratMediumMonsoon16px}
  width: 181px;
  min-height: 17px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  ${Border1pxButtonSecondary}
  height: 45px;
  margin-top: 13px;
  margin-left: -1px;
  display: flex;
  padding: 11.2px 17px;
  align-items: flex-start;
  min-width: 538px;
  border-radius: 4px;
`;

const Number = styled.div`
  ${MontserratSemiBoldWhite16px}
  width: 335px;
  min-height: 17px;
  letter-spacing: 0;
`;

export default InputFieldSimpleTitle2;
