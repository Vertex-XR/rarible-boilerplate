import React from "react";
import styled from "styled-components";
import { Border1pxButtonSecondary, MontserratMediumMonsoon14px, MontserratSemiBoldWhite16px } from "../../style-mixins";


function MobileInputFieldEnterQuantity(props) {
  const { x20, text7 } = props;

  return (
    <MobileInputFieldEnterQuantity1>
      <OverlapGroup>
        <X20>{x20}</X20>
        <Padlock1 src="/img/padlock-1@2x.svg" />
      </OverlapGroup>
      <Text7>{text7}</Text7>
    </MobileInputFieldEnterQuantity1>
  );
}

const MobileInputFieldEnterQuantity1 = styled.div`
  width: 396px;
  align-self: flex-end;
  margin-top: 49px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 83px;
`;

const OverlapGroup = styled.div`
  ${Border1pxButtonSecondary}
  height: 54px;
  margin-left: -1px;
  display: flex;
  padding: 14px 13px;
  align-items: flex-start;
  min-width: 397px;
  border-radius: 4px;
`;

const X20 = styled.div`
  ${MontserratSemiBoldWhite16px}
  min-height: 20px;
  min-width: 9px;
  letter-spacing: 0;
`;

const Padlock1 = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 334px;
`;

const Text7 = styled.div`
  ${MontserratMediumMonsoon14px}
  min-height: 17px;
  margin-top: 12px;
  margin-left: -0.29px;
  letter-spacing: 0;
`;

export default MobileInputFieldEnterQuantity;
