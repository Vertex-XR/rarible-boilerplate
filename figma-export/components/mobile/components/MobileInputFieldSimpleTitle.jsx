import React from "react";
import styled from "styled-components";
import { Border1pxButtonSecondary, MontserratSemiBoldWhite16px, MontserratMediumMonsoon16px } from "../../styledMixins";


function MobileInputFieldSimpleTitle(props) {
  const { title, text4 } = props;

  return (
    <MobileInputFieldSimpleTitle1>
      <Title>{title}</Title>
      <OverlapGroup>
        <Text4>{text4}</Text4>
      </OverlapGroup>
    </MobileInputFieldSimpleTitle1>
  );
}

const MobileInputFieldSimpleTitle1 = styled.div`
  width: 305px;
  margin-top: 42px;
  margin-right: 37px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 86px;
`;

const Title = styled.div`
  ${MontserratMediumMonsoon16px}
  min-height: 20px;
  margin-left: -0.14px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  ${Border1pxButtonSecondary}
  height: 54px;
  margin-top: 12px;
  margin-left: -0.28px;
  display: flex;
  padding: 14px 12.1px;
  align-items: flex-start;
  min-width: 305px;
  border-radius: 4px;
`;

const Text4 = styled.p`
  ${MontserratSemiBoldWhite16px}
  min-height: 20px;
  letter-spacing: 0;
`;

export default MobileInputFieldSimpleTitle;
