import React from "react";
import styled from "styled-components";
import {
  Border1pxButtonSecondary,
  MontserratMediumMonsoon14px,
  MontserratSemiBoldMonsoon16px,
  MontserratSemiBoldWhite16px,
  MontserratMediumMonsoon16px,
} from "../../styledMixins";


function MobileInputFieldSimpleRoyalties(props) {
  const { royalties, number, text5, text6 } = props;

  return (
    <MobileInputFieldSimpleRoyalties1>
      <Royalties>{royalties}</Royalties>
      <OverlapGroup>
        <Number>{number}</Number>
        <Text5>{text5}</Text5>
      </OverlapGroup>
      <Text6>{text6}</Text6>
    </MobileInputFieldSimpleRoyalties1>
  );
}

const MobileInputFieldSimpleRoyalties1 = styled.div`
  width: 305px;
  margin-top: 34px;
  margin-right: 55px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 138px;
`;

const Royalties = styled.div`
  ${MontserratMediumMonsoon16px}
  min-height: 20px;
  margin-left: -0.28px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  ${Border1pxButtonSecondary}
  height: 54px;
  margin-top: 12px;
  margin-left: -0.57px;
  display: flex;
  padding: 14px 12.1px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 306px;
  border-radius: 4px;
`;

const Number = styled.div`
  ${MontserratSemiBoldWhite16px}
  min-height: 20px;
  min-width: 23px;
  letter-spacing: 0;
`;

const Text5 = styled.div`
  ${MontserratSemiBoldMonsoon16px}
  min-height: 20px;
  margin-left: 242px;
  letter-spacing: 0;
`;

const Text6 = styled.p`
  ${MontserratMediumMonsoon14px}
  min-height: 34px;
  margin-top: 12px;
  margin-left: -0.28px;
  letter-spacing: 0;
`;

export default MobileInputFieldSimpleRoyalties;
