import React from "react";
import styled from "styled-components";
import { Border1pxButtonSecondary, MontserratMediumMonsoon14px, MontserratSemiBoldWhite16px } from "../../styledMixins";


function MobileInputFieldEnterQuantity2(props) {
  const { x20, text8 } = props;

  return (
    <MobileInputFieldEnterQuantity>
      <OverlapGroup>
        <X20>{x20}</X20>
        <Padlock1 src="/img/padlock-1-1@2x.svg" />
      </OverlapGroup>
      <Text8>{text8}</Text8>
    </MobileInputFieldEnterQuantity>
  );
}

const MobileInputFieldEnterQuantity = styled.div`
  width: 345px;
  margin-top: 42px;
  margin-right: 21px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 83px;
`;

const OverlapGroup = styled.div`
  ${Border1pxButtonSecondary}
  height: 54px;
  margin-left: -0.87px;
  display: flex;
  padding: 13.5px 11.2px;
  align-items: flex-start;
  min-width: 346px;
  border-radius: 4px;
`;

const X20 = styled.div`
  ${MontserratSemiBoldWhite16px}
  min-height: 20px;
  margin-top: 0.5px;
  min-width: 9px;
  letter-spacing: 0;
`;

const Padlock1 = styled.img`
  width: 24px;
  height: 25px;
  margin-left: 288px;
`;

const Text8 = styled.div`
  ${MontserratMediumMonsoon14px}
  min-height: 17px;
  margin-top: 12px;
  margin-left: -0.25px;
  letter-spacing: 0;
`;

export default MobileInputFieldEnterQuantity2;
