import React from "react";
import styled from "styled-components";


function IconArrow(props) {
  const { src } = props;

  return (
    <IconArrow1>
      <OpComponent2 src={src} />
    </IconArrow1>
  );
}

const IconArrow1 = styled.div`
  height: 30px;
  align-self: flex-start;
  margin-left: 2px;
  display: flex;
  padding: 0 7.4px;
  align-items: center;
  min-width: 30px;
  transform: rotate(90deg);
`;

const OpComponent2 = styled.img`
  width: 14px;
  height: 7px;
  transform: rotate(-90deg);
`;

export default IconArrow;
