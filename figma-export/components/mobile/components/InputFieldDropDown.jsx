import React from "react";
import IconArrow from "../IconArrow";
import styled from "styled-components";
import {
  Border1pxButtonSecondary,
  MontserratSemiBoldWhite16px,
  MontserratSemiBoldWhite14px,
  MontserratMediumMonsoon16px,
} from "../../styledMixins";


function InputFieldDropDown(props) {
  const { text8, x50Eth, place, iconArrowProps } = props;

  return (
    <InputFieldDropDown1>
      <Text17>{text8}</Text17>
      <OverlapGroup>
        <X50ETH>{x50Eth}</X50ETH>
        <Place>{place}</Place>
        <IconArrow className={iconArrowProps.className} />
      </OverlapGroup>
    </InputFieldDropDown1>
  );
}

const InputFieldDropDown1 = styled.div`
  width: 665px;
  margin-top: 186px;
  margin-left: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 90px;
`;

const Text17 = styled.p`
  ${MontserratMediumMonsoon16px}
  min-height: 20px;
  margin-left: -0.5px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  ${Border1pxButtonSecondary}
  height: 54px;
  position: relative;
  margin-top: 16px;
  margin-left: -1px;
  display: flex;
  padding: 11px 17px;
  justify-content: flex-end;
  align-items: center;
  min-width: 666px;
  border-radius: 4px;
`;

const X50ETH = styled.div`
  ${MontserratSemiBoldWhite16px}
  min-height: 20px;
  margin-bottom: 6px;
  min-width: 64px;
  letter-spacing: 0;
`;

const Place = styled.div`
  ${MontserratSemiBoldWhite14px}
  min-height: 17px;
  margin-left: 503px;
  margin-bottom: 3px;
  min-width: 32px;
  letter-spacing: 0;
`;

export default InputFieldDropDown;
