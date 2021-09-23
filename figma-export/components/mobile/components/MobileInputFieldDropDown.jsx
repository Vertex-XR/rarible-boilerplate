import React from "react";
import IconArrow from "../IconArrow";
import styled from "styled-components";
import {
  Border1pxButtonSecondary,
  MontserratSemiBoldWhite16px,
  MontserratSemiBoldWhite14px,
  MontserratMediumMonsoon16px,
} from "../../style-mixins";


function MobileInputFieldDropDown(props) {
  const { text1, x50Eth, place } = props;

  return (
    <MobileInputFieldDropDown1>
      <Text1>{text1}</Text1>
      <OverlapGroup>
        <X50ETH>{x50Eth}</X50ETH>
        <OverlapGroup1>
          <Place>{place}</Place>
          <IconArrow />
        </OverlapGroup1>
      </OverlapGroup>
    </MobileInputFieldDropDown1>
  );
}

const MobileInputFieldDropDown1 = styled.div`
  width: 305px;
  margin-top: 19px;
  margin-right: 55px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 90px;
`;

const Text1 = styled.p`
  ${MontserratMediumMonsoon16px}
  min-height: 20px;
  margin-top: 4px;
  margin-left: -0.23px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  ${Border1pxButtonSecondary}
  height: 54px;
  margin-top: 12px;
  margin-left: -0.46px;
  display: flex;
  padding: 10.3px 6.5px;
  justify-content: flex-end;
  align-items: center;
  min-width: 305px;
  border-radius: 4px;
`;

const X50ETH = styled.div`
  ${MontserratSemiBoldWhite16px}
  min-height: 20px;
  margin-bottom: 6px;
  min-width: 64px;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  width: 60px;
  height: 30px;
  
  align-self: flex-end;
  margin-left: 163px;
`;

const Place = styled.div`
  ${MontserratSemiBoldWhite14px}
  position: absolute;
  top: 4px;
  left: 0;
  letter-spacing: 0;
`;

export default MobileInputFieldDropDown;
