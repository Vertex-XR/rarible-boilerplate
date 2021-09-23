import React from "react";
import styled from "styled-components";
import {
  Border1pxButtonSecondary,
  MontserratMediumMonsoon14px,
  MontserratSemiBoldWhite16px,
  MontserratMediumMonsoon16px,
} from "../../style-mixins";


function MobileInputFieldSimpleNumberOfCopie(props) {
  const { royalties, x20, suggested010 } = props;

  return (
    <MobileInputFieldSimpleNumberOfCopie1>
      <Royalties>{royalties}</Royalties>
      <OverlapGroup>
        <X20>{x20}</X20>
      </OverlapGroup>
      <Suggested010>{suggested010}</Suggested010>
    </MobileInputFieldSimpleNumberOfCopie1>
  );
}

const MobileInputFieldSimpleNumberOfCopie1 = styled.div`
  width: 305px;
  margin-top: 53px;
  margin-right: 55px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 115px;
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
  padding: 14px 12.5px;
  align-items: flex-start;
  min-width: 306px;
  border-radius: 4px;
`;

const X20 = styled.div`
  ${MontserratSemiBoldWhite16px}
  min-height: 20px;
  letter-spacing: 0;
`;

const Suggested010 = styled.div`
  ${MontserratMediumMonsoon14px}
  min-height: 17px;
  margin-top: 12px;
  margin-left: -0.28px;
  letter-spacing: 0;
`;

export default MobileInputFieldSimpleNumberOfCopie;
