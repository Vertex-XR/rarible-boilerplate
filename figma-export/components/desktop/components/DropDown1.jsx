import React from "react";
import styled from "styled-components";
import { MontserratMediumWhite16px, Border1pxButtonSecondary } from "../../style-mixins";


function DropDown1(props) {
  const { text2, iconArrow, className } = props;

  return (
    <DropDown2 className={`drop-down-2 ${className || ""}`}>
      <OverlapGroup className="overlap-group-1">
        <Text2 className="text-2">{text2}</Text2>
        <Bg className="bg"></Bg>
        <IconArrow className="icon-arrow" src={iconArrow} />
      </OverlapGroup>
    </DropDown2>
  );
}

const DropDown2 = styled.div`
  margin-left: 1412px;
  display: flex;
  align-items: flex-start;
  min-width: 219px;

  &.drop-down-2.drop-down-1 {
    margin-left: unset;
  }
`;

const OverlapGroup = styled.div`
  width: 219px;
  height: 60px;
  
  border-radius: 4px;
`;

const Text2 = styled.div`
  ${MontserratMediumWhite16px}
  position: absolute;
  top: 20px;
  left: 20px;
  letter-spacing: 0;
`;

const Bg = styled.div`
  ${Border1pxButtonSecondary}
  position: absolute;
  width: 219px;
  height: 60px;
  top: 0;
  left: 0;
  border-radius: 4px;
`;

const IconArrow = styled.img`
  position: absolute;
  width: 16px;
  height: 10px;
  top: 25px;
  left: 183px;
`;

export default DropDown1;
