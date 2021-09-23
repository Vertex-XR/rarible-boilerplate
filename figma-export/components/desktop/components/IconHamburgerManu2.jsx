import React from "react";
import styled from "styled-components";


function IconHamburgerManu2(props) {
  const { src } = props;

  return (
    <IconHamburgerManu>
      <Vector src={src} />
    </IconHamburgerManu>
  );
}

const IconHamburgerManu = styled.div`
  height: 24px;
  margin-left: 16px;
  display: flex;
  padding: 0 4px;
  align-items: center;
  min-width: 24px;
`;

const Vector = styled.img`
  width: 16px;
  height: 16px;
`;

export default IconHamburgerManu2;
