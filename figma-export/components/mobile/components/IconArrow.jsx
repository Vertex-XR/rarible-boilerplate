import React from "react";
import styled from "styled-components";


function IconArrow(props) {
  const { className } = props;

  return (
    <IconArrow1 className={`icon-arrow-1 ${className || ""}`}>
      <OpComponent2 className="op-component-2" src="/img/op-component-2@2x.svg" />
    </IconArrow1>
  );
}

const IconArrow1 = styled.div`
  position: absolute;
  height: 30px;
  top: 0;
  left: 30px;
  display: flex;
  padding: 0 7.9px;
  align-items: center;
  min-width: 30px;
  transform: rotate(90deg);

  &.icon-arrow-1.icon-arrow-2 {
    align-self: flex-start;
    margin-left: 2px;
    padding: 0 7.4px;
    position: unset;
    top: unset;
    left: unset;
  }
`;

const OpComponent2 = styled.img`
  width: 13px;
  height: 8px;
  transform: rotate(-90deg);
`;

const OpComponent21 = styled.img`
  .icon-arrow-1.icon-arrow-2 & {
    width: 14px;
    height: 7px;
  }
`;

export default IconArrow;
