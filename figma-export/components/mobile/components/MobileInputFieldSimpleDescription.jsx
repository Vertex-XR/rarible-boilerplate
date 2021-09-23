import React from "react";
import styled from "styled-components";
import { Border1pxButtonSecondary, MontserratSemiBoldWhite16px, MontserratMediumMonsoon16px } from "../../styledMixins";


function MobileInputFieldSimpleDescription(props) {
  const { text3, text2 } = props;

  return (
    <MobileInputFieldSimpleDescription1>
      <Text3>{text3}</Text3>
      <OverlapGroup>
        <Text2>{text2}</Text2>
      </OverlapGroup>
    </MobileInputFieldSimpleDescription1>
  );
}

const MobileInputFieldSimpleDescription1 = styled.div`
  width: 305px;
  margin-top: 41px;
  margin-right: 55px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 208px;
`;

const Text3 = styled.div`
  ${MontserratMediumMonsoon16px}
  min-height: 20px;
  margin-left: -0.14px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  ${Border1pxButtonSecondary}
  height: 176px;
  margin-top: 12px;
  display: flex;
  padding: 11px 5px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 305px;
  border-radius: 4px;
`;

const Text2 = styled.p`
  ${MontserratSemiBoldWhite16px}
  width: 288px;
  min-height: 152px;
  letter-spacing: 0;
  line-height: 26px;
`;

export default MobileInputFieldSimpleDescription;
